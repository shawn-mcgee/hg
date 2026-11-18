/**
 * @file Independent regression tests for dimension-owned numeric/vector/matrix operations.
 * Exercises projection, scalar splatting, explicit dispatch categories, and output reuse.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const axes = ['x', 'y', 'z', 'w'];

/**
 * Creates an isolated browser namespace, optionally disabling public type dispatch in operations.
 * @param {boolean} [block=false] - Replace core.type before operation registration.
 * @returns {hgNamespace} Fresh API.
 */
function library(block = false) {
  const context = vm.createContext({});
  if (!block) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, 'dist/hg.js'), 'utf8'), context);
    return context.hg;
  }
  for (const file of require('./scripts/files.json')) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, file), 'utf8'), context);
    if (file === 'lib/types.js') {
      /**
       * Detects accidental checked dispatch inside trusted children.
       * @returns {never} Always throws.
       */
      context.hg.__core__.type = () => { throw new Error('type detection called'); };
    }
  }
  return context.hg;
}

/**
 * Independently projects a scalar or vector into a requested dimension.
 * @param {number} n - Computation dimension.
 * @param {number|hgVector} value - Scalar or vector.
 * @returns {number[]} Splat or padded/truncated components.
 */
function project(n, value) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (typeof value === 'number') result.push(value);
    else result.push(value[axes[i]] ?? 0);
  }
  return result;
}

/**
 * Reads a trusted vector or matrix without consulting the production type detector.
 * @param {number|hgVector|hgMatrix} value - Result to serialize.
 * @returns {number[]} Column-major result components.
 */
function flatten(value) {
  if (typeof value === 'number') return [value];
  const n = Number(value.__type__.at(-3));
  if (value.__type__.startsWith('__vec')) return project(n, value);
  const result = [];
  for (let c = 0; c < n; c++) for (let r = 0; r < n; r++) result.push(value[axes[c]][axes[r]]);
  return result;
}

/**
 * Compares numeric arrays, including NaN and signed infinities.
 * @param {number[]} actual - Actual components.
 * @param {number[]} expected - Reference components.
 * @returns {void} Throws on disagreement.
 */
function near(actual, expected) {
  assert.equal(actual.length, expected.length);
  for (let i = 0; i < actual.length; i++) {
    if (Object.is(actual[i], expected[i])) continue;
    assert.ok(Math.abs(actual[i] - expected[i]) <= 1e-10 * Math.max(1, Math.abs(expected[i])),
      `${actual[i]} != ${expected[i]}`);
  }
}

/**
 * Multiplies independently using flat column-major matrix indices.
 * @param {number[]} matrix - Matrix entries.
 * @param {number[]} vector - Row or column vector.
 * @param {boolean} row - Whether the vector is the left operand.
 * @returns {number[]} Vector product.
 */
function multiplyVector(matrix, vector, row) {
  const n = vector.length, result = Array(n).fill(0);
  for (let i = 0; i < n; i++) for (let k = 0; k < n; k++) {
    if (row) result[i] += vector[k] * matrix[i * n + k];
    else result[i] += matrix[k * n + i] * vector[k];
  }
  return result;
}

/**
 * Enumerates every supported dimension-independent vector accessor name.
 * @returns {string[]} All 340 xyzw selections of length one through four.
 */
function unifiedSwizzles() {
  const names = [];
  let level = [''];
  for (let size = 1; size <= 4; size++) {
    const next = [];
    for (const prefix of level) for (const axis of axes) next.push(prefix + axis);
    names.push(...next);
    level = next;
  }
  return names;
}

/**
 * Calculates a floor-based modulo reference for ordinary finite test values.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} Modulo, positive zero for exact multiples, or NaN for invalid numeric inputs.
 */
function referenceMod(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || b === 0) return NaN;
  const result = a - Math.floor(a / b) * b;
  if (result === 0) return 0;
  return result;
}

test('cat joins strings and shallowly concatenates lists without changing inputs',
/**
 * Checks operand order, Unicode, fresh list identity, nested references, and sparse slots.
 * @returns {void} Completes when concatenation preserves the documented semantics.
 */
() => {
  const hg = library();
  assert.equal(hg.str.cat('hello', ' world'), 'hello world');
  assert.equal(hg.cat('', 'abc'), 'abc');
  assert.equal(hg.cat('abc', ''), 'abc');
  assert.equal(hg.cat('\ud83d', '\ude00'), '😀');
  assert.equal(hg.str.cat.__ss__('a', 'b'), 'ab');
  const nested = [1, 2], member = { x: 3 }, vector = hg.vec2(4, 5);
  const a = Object.freeze([nested, member]);
  const b = Object.freeze([null, undefined, false, vector]);
  for (const method of [hg.cat, hg.list.cat, hg.list.cat.__ll__]) {
    const result = method(a, b);
    assert.equal(hg.type(result), '__list__');
    assert.notEqual(result, a);
    assert.notEqual(result, b);
    assert.equal(result.length, 6);
    assert.equal(result[0], nested);
    assert.equal(result[1], member);
    assert.equal(result[2], null);
    assert.equal(result[3], undefined);
    assert.equal(result[4], false);
    assert.equal(result[5], vector);
    assert.equal(a.length, 2);
    assert.equal(b.length, 4);
    const doubled = method(a, a);
    assert.notEqual(doubled, a);
    assert.equal(doubled[0], doubled[2]);
    assert.equal(doubled[1], doubled[3]);
    assert.equal(doubled.length, 4);
    const empty = [], copy = method(empty, a);
    assert.notEqual(copy, a);
    assert.equal(copy[0], nested);
    assert.notEqual(method(empty, empty), empty);
  }
  const sparseA = Array(2), sparseB = Array(2);
  sparseA[1] = 'a'; sparseB[0] = 'b';
  const sparse = hg.cat(sparseA, sparseB);
  assert.equal(sparse.length, 4);
  assert.equal(0 in sparse, false);
  assert.equal(sparse[1], 'a');
  assert.equal(sparse[2], 'b');
  assert.equal(3 in sparse, false);
  assert.equal(hg.cat.__ss__, undefined);
  assert.equal(hg.cat.__ll__, undefined);
});

test('cat rejects mismatched operands and invalid arity without coercion',
/**
 * Verifies strict string/list categories and two-argument public signatures.
 * @returns {void} Completes when all unsupported calls throw.
 */
() => {
  const hg = library();
  const invalid = [[], ['a'], ['a', 'b', 'c'], [[], [], []], [2, 3],
    [null, null], [false, true], [{}, {}], ['a', []], [[], 'a'], [hg.vec2(), hg.vec2()]];
  for (const args of invalid) {
    for (const method of [hg.cat, hg.str.cat, hg.list.cat]) {
      assert.throws(
      /**
       * Invokes an unsupported concatenation signature.
       * @returns {*} Result of the attempted call, if unexpectedly accepted.
       */
      () => method(...args));
    }
  }
  assert.throws(
  /**
   * Exercises string concatenation with list operands.
   * @returns {*} Unexpected result if validation fails.
   */
  () => hg.str.cat([], []));
  assert.throws(
  /**
   * Exercises list concatenation with string operands.
   * @returns {*} Unexpected result if validation fails.
   */
  () => hg.list.cat('a', 'b'));
});

test('cat directly selects typed children and trusted concatenation skips detection',
/**
 * Checks dynamic dispatch and the raw ss/ll category conventions.
 * @returns {void} Completes when the top-level and trusted paths match their contracts.
 */
() => {
  const hg = library();
  for (const [namespace, key, left, right] of [['str', '__ss__', 'a', 'b'], ['list', '__ll__', [1], [2]]]) {
    const operation = hg[namespace].cat, original = operation[key];
    let calls = 0;
    /**
     * Records direct selection of the concatenation specialization.
     * @param {string|hgList} a - Left operand.
     * @param {string|hgList} b - Right operand.
     * @returns {string|hgList} Result from the original specialization.
     */
    operation[key] = function(a, b) {
      calls++;
      return original(a, b);
    };
    hg.cat(left, right);
    assert.equal(calls, 1);
    operation[key] = original;
  }
  const raw = library(true);
  assert.equal(raw.str.cat.__ss__('a', 'b'), 'ab');
  const nested = [1], result = raw.list.cat.__ll__([nested], [2]);
  assert.equal(result[0], nested);
  assert.equal(result[1], 2);
});

test('mod uses divisor-sign modulo and defines zero and non-finite behavior',
/**
 * Checks signed integer/fractional modulo and avoids quotient-overflow cancellation.
 * @returns {void} Completes when all scalar modulo assertions pass.
 */
() => {
  const hg = library();
  for (let a = -25; a <= 25; a++) for (let b = -7; b <= 7; b++) {
    assert.ok(Object.is(hg.num.mod(a, b), referenceMod(a, b)));
    assert.ok(Object.is(hg.mod(a, b), referenceMod(a, b)));
  }
  assert.equal(hg.mod(-1, 5), 4);
  assert.equal(hg.mod(1, -5), -4);
  assert.equal(hg.mod(-1, -5), -1);
  assert.equal(hg.mod(-1.5, 1), 0.5);
  assert.equal(hg.mod(1.5, -1), -0.5);
  assert.ok(Object.is(hg.mod(-6, 3), 0));
  assert.ok(Object.is(hg.mod(-0, -3), 0));
  assert.equal(hg.mod(Number.MAX_VALUE, Number.MIN_VALUE), 0);
  for (const a of [0, 1, -1, Infinity, -Infinity, NaN]) {
    assert.ok(Number.isNaN(hg.mod(a, 0)));
    assert.ok(Number.isNaN(hg.mod(a, -0)));
    for (const b of [Infinity, -Infinity, NaN]) assert.ok(Number.isNaN(hg.mod(a, b)));
  }
  assert.ok(Number.isNaN(hg.mod(Infinity, 2)));
  assert.equal(hg.mod.__nn__, undefined);
  assert.equal(typeof hg.num.mod.__nn__, 'function');
  assert.throws(() => hg.mod());
  assert.throws(() => hg.num.mod(2));
  assert.throws(() => hg.mod(1, 2, undefined, 4));
  assert.throws(() => hg.num.mod(hg.vec2(), 2));
});

test('vector mod splats, projects dimensions, and safely reuses either operand',
/**
 * Verifies n/n, n/v, v/n and v/v categories against independent modulo arithmetic.
 * @returns {void} Completes when output shapes, padding, and aliases agree.
 */
() => {
  const hg = library();
  const inputs = [5, -3, hg.vec2(-7, 8), hg.vec3(9, -10, 11), hg.vec4(-12, 13, -14, 15)];
  for (let n = 2; n <= 4; n++) for (const a of inputs) for (const b of inputs) {
    const ns = hg[`vec${n}`], av = project(n, a), bv = project(n, b), expected = [];
    for (let i = 0; i < n; i++) expected.push(referenceMod(av[i], bv[i]));
    const aBefore = project(4, a), bBefore = project(4, b);
    near(flatten(ns.mod(a, b)), expected);
    const out = ns();
    assert.equal(ns.mod(a, b, out), out);
    near(flatten(out), expected);
    near(project(4, a), aBefore); near(project(4, b), bBefore);
    for (const left of [false, true]) {
      let original = b;
      if (left) original = a;
      if (typeof original === 'number' || original.__type__ !== `__vec${n}__`) continue;
      const alias = ns.__new__(...project(n, original));
      let result;
      if (left) result = ns.mod(alias, b, alias);
      else result = ns.mod(a, alias, alias);
      assert.equal(result, alias); near(flatten(alias), expected);
    }
  }
  near(flatten(hg.mod(hg.vec2(-1, 7), 5)), [4, 2]);
  near(flatten(hg.vec4.mod(hg.vec2(-1, 7), 5)), [4, 2, 0, 0]);
  near(flatten(hg.mod(hg.vec2(-1, 7), hg.vec3(5, -5, 2))), [4, -3, 0]);
  const padded = hg.vec3.mod(hg.vec2(1, 2), hg.vec2(3, 4));
  assert.ok(Number.isNaN(padded.z));
  assert.throws(() => hg.vec2.mod(hg.vec2(), hg.mat2()));
});

test('matrix mod is component-wise and preserves reusable column identities',
/**
 * Verifies matching-size matrix/scalar categories and in-place modulo.
 * @returns {void} Completes when every entry matches its scalar reference.
 */
() => {
  const hg = library();
  for (let n = 2; n <= 4; n++) {
    const ns = hg[`mat${n}`], dividends = [], divisors = [];
    for (let i = 0; i < n * n; i++) {
      dividends.push(i * 3 - 17);
      let divisor = 4;
      if (i % 2) divisor = -5;
      divisors.push(divisor);
    }
    const a = ns(dividends), b = ns(divisors);
    for (const [left, right] of [[a, b], [a, 4], [7, b]]) {
      const expected = [], av = flatten(left), bv = flatten(right);
      for (let i = 0; i < n * n; i++) {
        let x = av[i], y = bv[i];
        if (typeof left === 'number') x = left;
        if (typeof right === 'number') y = right;
        expected.push(referenceMod(x, y));
      }
      near(flatten(ns.mod(left, right)), expected);
      near(flatten(hg.mod(left, right)), expected);
      const out = ns(), columns = [];
      for (const axis of axes.slice(0, n)) columns.push(out[axis]);
      assert.equal(ns.mod(left, right, out), out);
      near(flatten(out), expected);
      for (let i = 0; i < n; i++) assert.equal(out[axes[i]], columns[i]);
      if (typeof left !== 'number') {
        const alias = ns(flatten(left));
        assert.equal(ns.mod(alias, right, alias), alias);
        near(flatten(alias), expected);
      }
      if (typeof right !== 'number') {
        const alias = ns(flatten(right));
        assert.equal(ns.mod(left, alias, alias), alias);
        near(flatten(alias), expected);
      }
    }
    assert.throws(() => ns.mod(3, 4));
    assert.throws(() => ns.mod(a, hg.vec2()));
    let other = hg.mat2(1);
    if (n === 2) other = hg.mat3(1);
    assert.throws(() => ns.mod(a, other));
  }
});

test('unified vec accessors default all missing components to zero and reuse outputs',
/**
 * Checks every shared swizzle with scalar splats, all vector sizes, missing members, and aliases.
 * @returns {void} Completes when access, result shape, and source preservation are correct.
 */
() => {
  const hg = library(), names = unifiedSwizzles();
  assert.deepEqual(Object.keys(hg.vec).sort(), names.slice().sort());
  const sources = [3, 0, -2, NaN, Infinity, hg.vec2(2, 3), hg.vec3(2, 3, 5), hg.vec4(2, 3, 5, 7),
    { __type__: '__vec2__', x: 5 }, { __type__: '__vec4__', x: null, y: 0, z: NaN, w: undefined }];
  for (const name of names) {
    for (const source of sources) {
      const expected = [];
      for (const axis of name) {
        if (typeof source === 'number') expected.push(source);
        else expected.push(source[axis] ?? 0);
      }
      const before = project(4, source), result = hg.vec[name](source);
      near(flatten(result), expected);
      near(flatten(hg[name](source)), expected);
      if (name.length === 1) continue;
      assert.equal(result.__type__, `__vec${name.length}__`);
      const out = hg[`vec${name.length}`]();
      assert.equal(hg.vec[name](source, out), out);
      near(flatten(out), expected);
      assert.equal(hg[name](source, out), out);
      near(flatten(out), expected);
      near(project(4, source), before);
      if (typeof source !== 'number' && source.__type__ === `__vec${name.length}__`) {
        const alias = hg[`vec${name.length}`].__new__(...project(name.length, source));
        assert.equal(hg.vec[name](alias, alias), alias);
        near(flatten(alias), expected);
      }
    }
  }
  assert.equal(hg.vec.z(hg.vec2(2, 3)), 0);
  assert.equal(hg.vec.w(hg.vec3(2, 3, 5)), 0);
  assert.deepEqual(flatten(hg.vec.zw(hg.vec2(2, 3))), [0, 0]);
  assert.deepEqual(flatten(hg.vec.xyzw(hg.vec2(2, 3))), [2, 3, 0, 0]);
  for (const ns of [hg.vec2, hg.vec3, hg.vec4]) {
    for (const name of names) assert.equal(ns[name], undefined);
  }
  assert.throws(() => hg.vec.x());
  assert.throws(() => hg.vec.x(hg.vec2(), hg.vec2()));
  assert.throws(() => hg.vec.xy(hg.vec2(), hg.vec2(), hg.vec2()));
  for (const value of [null, true, 'abc', [], {}, hg.mat2()]) {
    assert.throws(() => hg.vec.x(value));
    assert.throws(() => hg.vec.xy(value));
  }
});

test('unified swizzle children avoid detection and allocate no reusable results',
/**
 * Guards scalar/vector children against hidden dispatch or temporary construction.
 * @returns {void} Completes when all shared raw swizzles reuse their destinations.
 */
() => {
  const hg = library(true), source = hg.vec2(2, 3);
  const outputs = [null, null, hg.vec2(), hg.vec3(), hg.vec4()];
  for (const vector of [hg.vec2, hg.vec3, hg.vec4]) {
    /**
     * Detects allocation inside a reusable-output accessor.
     * @returns {never} Always throws.
     */
    vector.__new__ = () => { throw new Error('allocated swizzle output'); };
  }
  for (const name of unifiedSwizzles()) {
    const expected = [];
    for (const axis of name) expected.push(source[axis] ?? 0);
    if (name.length === 1) {
      assert.equal(hg.vec[name].__n__(5), 5);
      assert.equal(hg.vec[name].__v__(source), expected[0]);
    } else {
      const out = outputs[name.length];
      assert.equal(hg.vec[name].__v__(source, out), out);
      near(flatten(out), expected);
      assert.equal(hg.vec[name].__n__(5, out), out);
      assert.deepEqual(flatten(out), Array(name.length).fill(5));
    }
  }
});

test('numeric namespace and dimension-owned scalar/vector examples',
/**
 * Checks the public conventions and scalar validation.
 * @returns {void} Completes on success.
 */
() => {
  const hg = library();
  assert.equal(hg.num.add(2, 3), 5);
  assert.equal(hg.num.sub(2, 3), -1);
  assert.equal(hg.num.mul(2, 3), 6);
  assert.equal(hg.num.div(6, 3), 2);
  assert.equal(hg.num.dot(3), 9);
  assert.equal(hg.num.mag(-3), 3);
  assert.equal(hg.num.norm(-3), -1);
  assert.equal(hg.num.norm(0), 0);
  assert.deepEqual(flatten(hg.vec2.add(2, 3)), [5, 5]);
  assert.equal(hg.vec2.dot(2, 3), 12);
  assert.equal(hg.vec3.dot(2, 3), 18);
  assert.equal(hg.vec4.dot(2, 3), 24);
  near([hg.vec2.mag(3)], [Math.sqrt(18)]);
  for (const name of ['add', 'sub', 'mul', 'div', 'lerp', 'dot']) {
    assert.throws(() => hg.num[name](hg.vec2(1), 2, 0.5));
  }
});

test('top-level operations have no legacy children and call typed children directly',
/**
 * Verifies operation dispatch reads the current typed specialization without legacy aliases.
 * @returns {void} Completes when exports and direct dispatch are correct.
 */
() => {
  const hg = library();
  for (const value of Object.values(hg)) {
    if (typeof value !== 'function' || value.__new__) continue;
    assert.deepEqual(Object.keys(value), []);
  }
  assert.equal(hg.add.__v2v2__, undefined);
  assert.equal(hg.hom.__v2__, undefined);
  assert.equal(hg.yx.__v2__, undefined);
  assert.equal(typeof hg.vec2.add.__vv__, 'function');
  const cases = [
    ['add', 'vec2', '__vv__', [hg.vec2(1, 2), hg.vec2(3, 4), hg.vec2()]],
    ['add', 'num', '__nn__', [2, 3]],
    ['det', 'mat4', '__m__', [hg.mat4(2)]],
    ['hom', 'vec2', '__v__', [hg.vec2(2, 3), hg.vec3()]],
    ['yx', 'vec', '__v__', [hg.vec2(2, 3), hg.vec2()]]
  ];
  for (const [operation, namespace, child, args] of cases) {
    const target = hg[namespace][operation], original = target[child];
    const expected = flatten(original(...args));
    let calls = 0;
    /**
     * Records direct selection of a typed arithmetic specialization.
     * @param {...*} operands - Arguments passed by the top-level dispatcher.
     * @returns {*} Result of the original specialization.
     */
    target[child] = function(...operands) {
      calls++;
      return original(...operands);
    };
    try {
      near(flatten(hg[operation](...args)), expected);
      assert.equal(calls, 1);
    } finally {
      target[child] = original;
    }
  }
});

test('vector arithmetic dispatch accepts all dimensions in each n/v category',
/**
 * Uses independent arrays to verify arithmetic, scalar reductions, interpolation, and aliases.
 * @returns {void} Completes on success.
 */
() => {
  const hg = library();
  const inputs = [2, hg.vec2(-2, 3), hg.vec3(4, -5, 6), hg.vec4(7, 8, -9, 10)];
  for (let n = 2; n <= 4; n++) {
    const ns = hg[`vec${n}`];
    for (const a of inputs) for (const b of inputs) {
      const av = project(n, a), bv = project(n, b);
      let family = 'v';
      if (typeof a === 'number') family = 'n';
      if (typeof b === 'number') family += 'n';
      else family += 'v';
      for (const name of ['add', 'sub', 'hmul', 'hdiv', 'dot', 'dist', 'dist2', 'lerp']) {
        const expected = [];
        let dot = 0, squared = 0;
        const diffs = [];
        for (let i = 0; i < n; i++) {
          if (name === 'add') expected.push(av[i] + bv[i]);
          if (name === 'sub') expected.push(av[i] - bv[i]);
          if (name === 'hmul') expected.push(av[i] * bv[i]);
          if (name === 'hdiv') expected.push(av[i] / bv[i]);
          if (name === 'lerp') expected.push(av[i] + (bv[i] - av[i]) * 0.25);
          dot += av[i] * bv[i];
          const d = av[i] - bv[i];
          diffs.push(d); squared += d * d;
        }
        if (name === 'dot') expected.push(dot);
        if (name === 'dist') expected.push(Math.hypot(...diffs));
        if (name === 'dist2') expected.push(squared);
        let result;
        if (name === 'lerp') result = ns[name](a, b, 0.25);
        else result = ns[name](a, b);
        near(flatten(result), expected);
        const child = ns[name][`__${family}__`];
        if (typeof result === 'number') {
          near([child(a, b)], expected);
          continue;
        }
        const out = ns();
        if (name === 'lerp') result = child(a, b, 0.25, out);
        else result = child(a, b, out);
        assert.equal(result, out);
        near(flatten(out), expected);
        for (const side of ['a', 'b']) {
          let original = a;
          if (side === 'b') original = b;
          if (typeof original === 'number' || original.__type__ !== `__vec${n}__`) continue;
          const alias = ns(...project(n, original));
          let left = a, right = b;
          if (side === 'a') left = alias;
          else right = alias;
          if (name === 'lerp') result = ns[name](left, right, 0.25, alias);
          else result = ns[name](left, right, alias);
          assert.equal(result, alias); near(flatten(alias), expected);
        }
      }
    }
    const ignored = hg.vec4(1, 2, Infinity, NaN);
    assert.equal(hg.vec2.dot(ignored), 5);
    assert.throws(() => ns.add(ns(1), hg.mat2(1)));
    assert.throws(() => ns.dot());
  }
});

test('vector unary operations, hom and cross use namespace dimension',
/**
 * Verifies padding/truncation, magnitude normalization, and homogeneous construction.
 * @returns {void} Completes on success.
 */
() => {
  const hg = library();
  const inputs = [0, -3, hg.vec2(3, 4), hg.vec3(2, -3, 6), hg.vec4(1, 2, 3, 4)];
  for (let n = 2; n <= 4; n++) {
    const ns = hg[`vec${n}`];
    for (const a of inputs) {
      const av = project(n, a), mag = Math.hypot(...av);
      let squared = 0;
      for (const x of av) squared += x * x;
      assert.equal(ns.mag(a), mag);
      assert.equal(ns.mag2(a), squared);
      assert.equal(ns.dot(a), squared);
      const normal = [], negative = [], inverse = [];
      for (const x of av) {
        if (mag === 0) normal.push(0);
        else normal.push(x / mag);
        negative.push(-x); inverse.push(1 / x);
      }
      near(flatten(ns.norm(a)), normal);
      near(flatten(ns.neg(a)), negative);
      near(flatten(ns.inv(a)), inverse);
      if (n < 4) near(flatten(ns.hom(a)), [...av, 1]);

    }
    assert.equal(ns.x, undefined);
    assert.equal(ns.xx, undefined);
  }
  near(flatten(hg.vec3.cross(hg.vec2(1, 0), hg.vec4(0, 1, 0, 99))), [0, 0, 1]);
  near(flatten(hg.vec3.cross(2, 3)), [0, 0, 0]);
});

test('vector algebraic products and xform project before multiplying',
/**
 * Compares both multiplication orientations against independent column-major loops.
 * @returns {void} Completes on success.
 */
() => {
  const hg = library();
  const inputs = [2, hg.vec2(-2, 3), hg.vec3(4, -5, 6), hg.vec4(7, 8, -9, 10)];
  for (let n = 2; n <= 4; n++) {
    const ns = hg[`vec${n}`];
    for (let m = n; m <= Math.min(n + 1, 4); m++) {
      const entries = [];
      for (let i = 0; i < m * m; i++) entries.push(i + 1);
      const matrix = hg[`mat${m}`](entries);
      const operation = ns.xform;
      for (const input of inputs) for (const row of [false, true]) {
        const projected = project(n, input);
        if (m > n) projected.push(1);
        const reference = multiplyVector(entries, projected, row).slice(0, n);
        let actual;
        if (row) actual = operation(input, matrix);
        else actual = operation(matrix, input);
        near(flatten(actual), reference);
        const out = ns();
        if (row) actual = operation(input, matrix, out);
        else actual = operation(matrix, input, out);
        assert.equal(actual, out); near(flatten(out), reference);
        if (m === n) {
          if (row) actual = ns.mul(input, matrix);
          else actual = ns.mul(matrix, input);
          near(flatten(actual), reference);
        }
      }
    }
    const diagonal = hg[`mat${n}`](2);
    for (const a of inputs) {
      const av = project(n, a), reference = [];
      for (const x of av) reference.push(x / 2);
      near(flatten(ns.div(a, diagonal)), reference);
    }
    assert.throws(() => ns.mul(ns(), ns()));
    assert.throws(() => ns.div(2, ns(1)));
  }
});

test('matrix namespaces retain matching-size products and inverses',
/**
 * Verifies direct matrix methods, output identity, singular protection, and category validation.
 * @returns {void} Completes on success.
 */
() => {
  const hg = library();
  for (let n = 2; n <= 4; n++) {
    const ns = hg[`mat${n}`], entries = [];
    for (let i = 0; i < n * n; i++) entries.push(i + 1);
    const a = ns(entries), b = ns(2);
    for (const name of ['add', 'sub', 'mul', 'div', 'hmul', 'hdiv', 'xform', 'lerp']) {
      const out = ns();
      let result;
      if (name === 'lerp') result = ns[name](a, b, 0.25, out);
      else result = ns[name](a, b, out);
      assert.equal(result, out);
      let reference;
      if (name === 'lerp') reference = hg[name](a, b, 0.25);
      else reference = hg[name](a, b);
      near(flatten(out), flatten(reference));
      assert.throws(() => ns[name](2, 3, 0.5));
      assert.throws(() => ns[name](a, hg.vec2(1), 0.5));
    }
    assert.equal(ns.det(a), hg.det(a));
    const out = ns(9), before = flatten(out);
    assert.throws(() => ns.inv(ns(), out), /singular/);
    assert.deepEqual(flatten(out), before);
    assert.equal(ns.inv(b, b), b);
    assert.equal(b.x.x, 0.5);
    const columns = [];
    for (const k of axes.slice(0, n)) columns.push(a[k]);
    const expected = flatten(ns.trans(a));
    assert.equal(ns.trans(a, a), a);
    near(flatten(a), expected);
    for (let i = 0; i < n; i++) assert.equal(a[axes[i]], columns[i]);
  }
});

test('all typed children reuse outputs without type dispatch or result construction',
/**
 * Audits every typed operation and swizzle specialization against forbidden allocations.
 * @returns {void} Completes when every recorded trusted path succeeds.
 */
() => {
  const hg = library(true), tasks = [];
  for (const namespace of ['num', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4']) {
    const ns = hg[namespace];
    let n = 1;
    if (namespace !== 'num') n = Number(namespace.at(-1));
    for (const op of Object.keys(ns)) {
      if (op.startsWith('__')) continue;
      const fn = ns[op];
      for (const key of Object.keys(fn)) {
        const families = key.match(/mh|m|n|v/g);
        const args = [];
        for (const family of families) {
          if (family === 'n') args.push(2);
          if (family === 'v') args.push(hg.vec2(3, 4));
          if (family === 'm') args.push(hg[`mat${n}`](2));
          if (family === 'mh') args.push(hg[`mat${n + 1}`](2));
        }
        if (op === 'lerp') args.push(0.25);
        const reference = fn[key](...args), expected = flatten(reference);
        let out;
        if (typeof reference !== 'number') {
          const tag = reference.__type__;
          out = hg[tag.slice(2, -2)]();
        }
        tasks.push({ fn: fn[key], args, out, expected });
      }
    }
  }
  for (const type of ['vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4']) {
    /**
     * Guards against temporary construction in a reusable-output kernel.
     * @returns {never} Always throws.
     */
    hg[type].__new__ = () => { throw new Error('result constructor called'); };
  }
  for (const task of tasks) {
    let result;
    if (task.out === undefined) result = task.fn(...task.args);
    else {
      result = task.fn(...task.args, task.out);
      assert.equal(result, task.out);
    }
    near(flatten(result), task.expected);
  }
  assert.ok(tasks.length > 200);
});
