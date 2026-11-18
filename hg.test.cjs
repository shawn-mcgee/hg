/**
 * @file Node regression and integration suite for arithmetic, constructors, swizzles, and loaders.
 * Includes independent numeric references, alias safety, allocation guards, and browser-bundle checks.
 * Run npm test to rebuild first, or node --test hg.test.cjs to test the current bundle.
 */



const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

/**
 * Loads the browser bundle into a fresh VM so tests cannot share mutated constructors.
 * @returns {{api: hgNamespace}} Isolated test API.
 * @private
 */
function load() {
  return loadBrowser();
}

/**
 * Evaluates the standalone bundle or ordered sources in a browser-like VM.
 * @param {boolean} [blockDetection=false] - Replace type detection before loading operations to audit trusted children.
 * @param {boolean} [useSources=false] - Load ordered source files instead of the bundle.
 * @returns {{api: hgNamespace, context: Object}} Namespace and VM context.
 * @private
 */
function loadBrowser(blockDetection = false, useSources = false) {
  const context = vm.createContext({});
  vm.runInContext('window = globalThis;', context);
  const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
  let scripts = Array.from(html.matchAll(/<script src="([^"]+)"><\/script>/g),     /**
   * Projects fixture elements into the expected component, shape, or script list.
   * @private
   * @param {RegExpMatchArray} match - Callback input supplied by the enclosing test or collection.
   * @returns {*} Callback result consumed by the enclosing test.
   */
  match => match[1]);
  if (blockDetection || useSources) scripts = require('./scripts/files.json');
  for (const filename of scripts) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, filename), 'utf8'), context, { filename });
    if (blockDetection && filename === 'lib/types.js') {
                        /**
                         * Fails immediately if a forbidden allocation, predicate, or detection path is reached.
                         * @private
                         * @returns {never} Callback result consumed by the enclosing test.
                         */
                        context.hg.__core__.type = () => { throw new Error('type called'); };
                        /**
                         * Fails immediately if a forbidden allocation, predicate, or detection path is reached.
                         * @private
                         * @returns {never} Callback result consumed by the enclosing test.
                         */
                        context.hg.__core__.__flat__ = () => { throw new Error('flatten called'); };
    }
  }
  return { api: context.hg, context };
}

const axes = ['x', 'y', 'z', 'w'];
const kinds = ['n', 'v2', 'v3', 'v4', 'm2', 'm3', 'm4'];
/**
 * Resolves a vector or matrix constructor from a compact fixture kind.
 * @param {hgNamespace} api - Test namespace.
 * @param {string} kind - v2/v3/v4 or m2/m3/m4.
 * @returns {Function} Matching checked constructor.
 * @private
 */
function ctor(api, kind) {
  if (kind[0] === 'v') return api['vec' + kind[1]];
  return api['mat' + kind[1]];
}
/**
 * Serializes a fixture into numeric components in column-major order.
 * @param {string} kind - Numeric, vector, or matrix fixture kind.
 * @param {hgOperand} value - Fixture to read.
 * @returns {number[]} Flat component values.
 * @private
 */
function flat(kind, value) {
  if (kind === 'n') return [value];
  const keys = axes.slice(0, Number(kind[1]));
  if (kind[0] === 'v') return keys.map(    /**
   * Projects fixture elements into the expected component, shape, or script list.
   * @private
   * @param {string} k - Callback input supplied by the enclosing test or collection.
   * @returns {*} Callback result consumed by the enclosing test.
   */
  k => value[k]);
  return keys.flatMap(    /**
   * Projects fixture elements into the expected component, shape, or script list.
   * @private
   * @param {string} c - Callback input supplied by the enclosing test or collection.
   * @returns {*} Callback result consumed by the enclosing test.
   */
  c => keys.map(    /**
   * Projects fixture elements into the expected component, shape, or script list.
   * @private
   * @param {string} r - Callback input supplied by the enclosing test or collection.
   * @returns {*} Callback result consumed by the enclosing test.
   */
  r => value[c][r]));
}
/**
 * Copies an operand fixture while preserving its result shape.
 * @param {hgNamespace} api - Test namespace.
 * @param {string} kind - Fixture kind.
 * @param {hgOperand} value - Operand to copy.
 * @returns {hgOperand} Scalar value or freshly constructed compound value.
 * @private
 */
function copy(api, kind, value) {
  if (kind === 'n') return value;
  return ctor(api, kind)(flat(kind, value));
}
/**
 * Builds deterministic operands with mixed signs and invertible matrices.
 * @param {hgNamespace} api - Test namespace.
 * @returns {hgOperand[]} Fixtures ordered by the kinds array.
 * @private
 */
function samples(api) {
  return kinds.map(    /**
   * Projects fixture elements into the expected component, shape, or script list.
   * @private
   * @param {string} kind - Callback input supplied by the enclosing test or collection.
   * @returns {*} Callback result consumed by the enclosing test.
   */
  kind => {
    if (kind === 'n') return 2;
    const n = Number(kind[1]);
    let length = n;
    if (kind[0] === 'm') length = n * n;
    return ctor(api, kind)(Array.from({ length },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, i) => {
      let value = (i % 5) - 2;
      if (kind[0] === 'm' && i % (n + 1) === 0) value += 12;
      return value;
    }));
  });
}
/**
 * Describes the supported binary combinations for the reference tests.
 * @param {string} op - Operation name.
 * @param {string} ka - Left kind.
 * @param {string} kb - Right kind.
 * @returns {boolean} Whether the pair is expected to dispatch.
 * @private
 */
function supported(op, ka, kb) {
  if (ka === 'n' || kb === 'n') return true;
  if (op !== 'mul') return (ka[0] === 'v' && kb[0] === 'v') || ka === kb;
  return ka[1] === kb[1] && (ka[0] === 'm' || kb[0] === 'm');
}
/**
 * Derives the result shape for the fixture operand pair.
 * @param {string} ka - Left kind.
 * @param {string} kb - Right kind.
 * @returns {string} Expected scalar/vector/matrix kind.
 * @private
 */
function resultKind(ka, kb) {
  if (ka === 'n') return kb;
  if (kb === 'n') return ka;
  if (ka[0] !== kb[0]) {
    if (ka[0] === 'v') return ka;
    return kb;
  }
  if (Number(ka[1]) >= Number(kb[1])) return ka;
  return kb;
}
/**
 * Computes independent reference arithmetic on flat row/column indices.
 * @param {string} op - Operation under test.
 * @param {string} ka - Left kind.
 * @param {hgOperand} a - Left operand.
 * @param {string} kb - Right kind.
 * @param {hgOperand} b - Right operand.
 * @returns {number[]} Reference result components.
 * @private
 */
function expected(op, ka, a, kb, b) {
  const av = flat(ka, a), bv = flat(kb, b);
  if (op !== 'mul' || ka === 'n' || kb === 'n') {
    return Array.from({ length: Math.max(av.length, bv.length) },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, i) => {
      let x = av[i] ?? 0;
      let y = bv[i] ?? 0;
      if (ka === 'n') x = a;
      if (kb === 'n') y = b;
      if (op === 'add') return x + y;
      if (op === 'sub') return x - y;
      if (op === 'hdiv') return x / y;
      return x * y;
    });
  }
  const n = Number(ka[1]);
  let length = n;
  if (ka[0] === 'm' && kb[0] === 'm') length = n * n;
  const out = Array(length).fill(0);
  if (ka[0] === 'v') {
    for (let c = 0; c < n; c++) for (let r = 0; r < n; r++) out[c] += av[r] * bv[c * n + r];
  } else if (kb[0] === 'v') {
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) out[r] += av[c * n + r] * bv[c];
  } else {
    for (let c = 0; c < n; c++) for (let r = 0; r < n; r++) for (let k = 0; k < n; k++) {
      out[c * n + r] += av[k * n + r] * bv[c * n + k];
    }
  }
  return out;
}

test('type uses object tags directly and never calls predicates', /**
 * Verifies type uses object tags directly and never calls predicates.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api } = load();
  for (const [value, tag] of [[null, '__nil__'], [NaN, '__num__'], ['', '__str__'],
    [false, '__bool__'], [[], '__list__'], [{}, '__dict__']]) assert.equal(api.type(value), tag);
  for (const kind of kinds.slice(1)) {
    let prefix = 'mat';
    if (kind[0] === 'v') prefix = 'vec';
    assert.equal(api.type(ctor(api, kind)()), `__${prefix}${kind[1]}__`);
  }
  for (const t of Object.values(api.types)) {
                /**
                 * Verifies type uses object tags directly and never calls predicates.
                 * @private
                 * @returns {void} Callback result consumed by the enclosing test.
                 */
                t.__is__ = () => { throw new Error('type predicate called'); };
  }
  api.types.custom = { __is__:     /**
   * Verifies type uses object tags directly and never calls predicates.
   * @private
   * @returns {void} Callback result consumed by the enclosing test.
   */
  () => { throw new Error('custom predicate called'); } };
  assert.equal(api.type({ __type__: 'custom' }), 'custom');
  api.types.big = { __is__:     /**
   * Verifies type uses object tags directly and never calls predicates.
   * @private
   * @param {*} value - Callback input supplied by the enclosing test or collection.
   * @returns {void} Callback result consumed by the enclosing test.
   */
  value => typeof value === 'bigint' };
  assert.throws(    /**
   * Invokes the invalid-input path for an exception assertion.
   * @private
   * @returns {*} Callback result consumed by the enclosing test.
   */
  () => api.type(1n));
  const inherited = Object.create({ __type__: '__vec2__' });
  assert.equal(api.type(inherited), '__vec2__');
  assert.equal(api.type(Object.assign([], { __type__: '__vec2__' })), '__vec2__');
  assert.equal(api.type({ __type__: 'unknown' }), 'unknown');
  for (const tag of [undefined, null, false, 0, '']) assert.equal(api.type({ __type__: tag }), tag);
  assert.equal(api.type(Object.create(null)), '__dict__');
  assert.equal(api.type(2), '__num__');
  assert.equal(api.type({}), '__dict__');
  assert.throws(    /**
   * Invokes the invalid-input path for an exception assertion.
   * @private
   * @returns {*} Callback result consumed by the enclosing test.
   */
  () => api.type(undefined));
});

test('binary arithmetic: reference results, reusable outputs, aliases, and column identity', /**
 * Verifies binary arithmetic: reference results, reusable outputs, aliases, and column identity.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api } = load();
  const values = samples(api);
  for (const name of ['add', 'sub', 'mul', 'hmul', 'hdiv']) {
    for (let i = 0; i < kinds.length; i++) for (let j = 0; j < kinds.length; j++) {
      const ka = kinds[i], kb = kinds[j], a = values[i], b = values[j], op = api[name];
      if (!supported(name, ka, kb)) {
        assert.throws(                /**
         * Invokes the invalid-input path for an exception assertion.
         * @private
         * @returns {*} Callback result consumed by the enclosing test.
         */
        () => op(a, b));
        continue;
      }
      const kind = resultKind(ka, kb), reference = expected(name, ka, a, kb, b);
      const beforeA = flat(ka, a), beforeB = flat(kb, b);
      assert.deepEqual(flat(kind, op(a, b)), reference, `${name} ${ka} ${kb}`);
      if (kind === 'n') continue;
      const out = ctor(api, kind)();
      let columns = [];
      if (kind[0] === 'm') columns = axes.slice(0, Number(kind[1])).map(            /**
       * Projects fixture elements into the expected component, shape, or script list.
       * @private
       * @param {string} k - Callback input supplied by the enclosing test or collection.
       * @returns {*} Callback result consumed by the enclosing test.
       */
      k => out[k]);
      assert.equal(op(a, b, out), out);
      assert.deepEqual(flat(kind, out), reference);
      columns.forEach(            /**
       * Asserts the current component or object identity.
       * @private
       * @param {*} column - Callback input supplied by the enclosing test or collection.
       * @param {number} c - Callback input supplied by the enclosing test or collection.
       * @returns {void} Callback result consumed by the enclosing test.
       */
      (column, c) => assert.equal(out[axes[c]], column));
      assert.deepEqual(flat(ka, a), beforeA);
      assert.deepEqual(flat(kb, b), beforeB);
      // Reuse either operand whenever it has the result's shape.
      for (const side of ['left', 'right']) {
        let inputKind = kb;
        if (side === 'left') inputKind = ka;
        if (inputKind !== kind) continue;
        const left = copy(api, ka, a), right = copy(api, kb, b);
        let alias = right;
        if (side === 'left') alias = left;
        assert.equal(op(left, right, alias), alias);
        assert.deepEqual(flat(kind, alias), reference, `${name} aliases ${side}`);
      }
    }
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => api[name](1));
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => api[name](1, 2, undefined, 4));
  }
});

test('unary arithmetic: in-place negation, inversion, and singular output preservation', /**
 * Verifies unary arithmetic: in-place negation, inversion, and singular output preservation.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api } = load();
  for (const kind of kinds.slice(1)) {
    const n = Number(kind[1]);
    let value;
    if (kind[0] === 'm') value = ctor(api, kind)(2);
    else value = ctor(api, kind)(2, 4, 8, 16);
    for (const name of ['neg', 'inv']) {
      const reference = flat(kind, api[name](value));
      const out = ctor(api, kind)();
      let columns = [];
      if (kind[0] === 'm') columns = axes.slice(0, n).map(            /**
       * Projects fixture elements into the expected component, shape, or script list.
       * @private
       * @param {string} k - Callback input supplied by the enclosing test or collection.
       * @returns {*} Callback result consumed by the enclosing test.
       */
      k => out[k]);
      assert.equal(api[name](value, out), out);
      assert.deepEqual(flat(kind, out), reference);
      columns.forEach(            /**
       * Asserts the current component or object identity.
       * @private
       * @param {*} column - Callback input supplied by the enclosing test or collection.
       * @param {number} i - Callback input supplied by the enclosing test or collection.
       * @returns {void} Callback result consumed by the enclosing test.
       */
      (column, i) => assert.equal(out[axes[i]], column));
      const alias = copy(api, kind, value);
      assert.equal(api[name](alias, alias), alias);
      assert.deepEqual(flat(kind, alias), reference);
    }
    if (kind[0] === 'm') {
      const out = ctor(api, kind)(7), before = flat(kind, out);
      assert.throws(            /**
       * Invokes the invalid-input path for an exception assertion.
       * @private
       * @returns {*} Callback result consumed by the enclosing test.
       */
      () => api.inv(ctor(api, kind)(), out), /singular/);
      assert.deepEqual(flat(kind, out), before);
    }
  }
  for (const name of ['neg', 'inv']) {
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => api[name]());
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => api[name](1, undefined, 3));
  }
});

test('matrix inverses agree with independent pivoted row elimination', /**
 * Verifies matrix inverses agree with independent pivoted row elimination.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api } = load();
  let seed = 123;
  const random =     /**
   * Advances a seeded integer generator for reproducible numeric fixtures.
   * @private
   * @returns {number} Callback result consumed by the enclosing test.
   */
  () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed % 15 - 7; };
  for (let n = 2; n <= 4; n++) for (let trial = 0; trial < 50; trial++) {
    const rows = Array.from({ length: n },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} r - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, r) => Array.from({ length: n },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} c - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, c) => {
      let value = random();
      if (r === c) value += 30;
      return value;
    }));
    const augmented = rows.map(        /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} row - Callback input supplied by the enclosing test or collection.
     * @param {number} r - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (row, r) => [...row, ...Array.from({ length: n },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} c - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, c) => Number(r === c))]);
    for (let c = 0; c < n; c++) {
      let pivot = c;
      for (let r = c + 1; r < n; r++) if (Math.abs(augmented[r][c]) > Math.abs(augmented[pivot][c])) pivot = r;
      [augmented[c], augmented[pivot]] = [augmented[pivot], augmented[c]];
      const d = augmented[c][c];
      for (let j = 0; j < 2 * n; j++) augmented[c][j] /= d;
      for (let r = 0; r < n; r++) if (r !== c) {
        const f = augmented[r][c];
        for (let j = 0; j < 2 * n; j++) augmented[r][j] -= f * augmented[c][j];
      }
    }
    const matrix = api[`mat${n}`](Array.from({ length: n },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} c - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, c) => rows.map(        /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} row - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    row => row[c])).flat());
    const inverse = api.inv(matrix);
    api.inv(matrix, matrix);
    for (let c = 0; c < n; c++) for (let r = 0; r < n; r++) {
      assert.ok(Math.abs(inverse[axes[c]][axes[r]] - augmented[r][n + c]) < 1e-12);
      assert.equal(matrix[axes[c]][axes[r]], inverse[axes[c]][axes[r]]);
    }
  }
});

test('all arithmetic output paths avoid vector and matrix construction', /**
 * Verifies all arithmetic output paths avoid vector and matrix construction.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api } = load();
  const values = samples(api);
  const outputs = Object.fromEntries(kinds.slice(1).map(    /**
   * Projects fixture elements into the expected component, shape, or script list.
   * @private
   * @param {string} kind - Callback input supplied by the enclosing test or collection.
   * @returns {*} Callback result consumed by the enclosing test.
   */
  kind => [kind, ctor(api, kind)()]));
  for (const kind of kinds.slice(1))     /**
   * Verifies all arithmetic output paths avoid vector and matrix construction.
   * @private
   * @returns {void} Callback result consumed by the enclosing test.
   */
  ctor(api, kind).__new__ = () => { throw new Error('allocated a result'); };
  for (const name of ['add', 'sub', 'mul', 'hmul', 'hdiv']) {
    for (let i = 0; i < kinds.length; i++) for (let j = 0; j < kinds.length; j++) {
      if (!supported(name, kinds[i], kinds[j])) continue;
      const kind = resultKind(kinds[i], kinds[j]);
      if (kind !== 'n') assert.equal(api[name](values[i], values[j], outputs[kind]), outputs[kind]);
    }
  }
  for (const name of ['neg', 'inv']) for (let i = 1; i < kinds.length; i++) {
    assert.equal(api[name](values[i], outputs[kinds[i]]), outputs[kinds[i]]);
  }
});

test('unchecked constructors allocate fresh values and retain supplied components', /**
 * Verifies unchecked constructors allocate fresh values and retain supplied components.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api } = load();
  for (let n = 2; n <= 4; n++) {
    const vector = api[`vec${n}`], matrix = api[`mat${n}`];
    const components = Array.from({ length: n },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, i) => i + 1);
    assert.equal(vector.__new__.length, n);
    assert.equal(matrix.__new__.length, n);
    const v = vector.__new__(...components);
    assert.deepEqual(flat(`v${n}`, v), Array.from({ length: n },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, i) => i + 1));
    assert.notEqual(vector.__new__(...components), v);
    const sentinel = {};
    assert.equal(vector.__new__(sentinel).x, sentinel);
    assert.equal(vector.__new__(1).y, undefined);
    const m = matrix(Array.from({ length: n * n },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, i) => i + 1));
    const columns = axes.slice(0, n).map(        /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {string} k - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    k => m[k]);
    const expected = columns.slice().reverse().flatMap(        /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} column - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    column => flat(`v${n}`, column));
    const result = matrix.__new__(...columns.slice().reverse());
    assert.notEqual(result, m);
    assert.notEqual(matrix.__new__(...columns.slice().reverse()), result);
    assert.deepEqual(flat(`m${n}`, result), expected);
    columns.slice().reverse().forEach(        /**
     * Asserts the current component or object identity.
     * @private
     * @param {*} column - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {void} Callback result consumed by the enclosing test.
     */
    (column, i) => assert.equal(result[axes[i]], column));
    columns.forEach(        /**
     * Asserts the current component or object identity.
     * @private
     * @param {*} column - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {void} Callback result consumed by the enclosing test.
     */
    (column, i) => assert.equal(m[axes[i]], column));
  }
});

test('arithmetic handles outputs sharing reordered input columns', /**
 * Verifies arithmetic handles outputs sharing reordered input columns.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api } = load();
  for (let n = 2; n <= 4; n++) for (const name of ['add', 'sub', 'mul', 'hmul', 'hdiv']) {
    const matrix = api[`mat${n}`];
    const a = matrix(Array.from({ length: n * n },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, i) => i + 1));
    const b = matrix(2);
    const reference = flat(`m${n}`, api[name](a, b));
    const columns = axes.slice(0, n).map(        /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {string} k - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    k => a[k]).reverse();
    const out = matrix.__new__(...columns);
    assert.equal(api[name](a, b, out), out);
    assert.deepEqual(flat(`m${n}`, out), reference);
    columns.forEach(        /**
     * Asserts the current component or object identity.
     * @private
     * @param {*} column - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {void} Callback result consumed by the enclosing test.
     */
    (column, i) => assert.equal(out[axes[i]], column));
  }
  // A vector result may overwrite a column used by the same multiplication.
  for (let n = 2; n <= 4; n++) for (const row of [false, true]) {
    const matrix = api[`mat${n}`](Array.from({ length: n * n },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, i) => i + 1));
    const vector = api[`vec${n}`](2);
    let result;
    if (row) result = api.mul(vector, matrix);
    else result = api.mul(matrix, vector);
    const reference = flat(`v${n}`, result);
    const out = matrix.y;
    if (row) result = api.mul(vector, matrix, out);
    else result = api.mul(matrix, vector, out);
    assert.equal(result, out);
    assert.deepEqual(flat(`v${n}`, out), reference);
  }
});

/**
 * Enumerates every one- to four-component xyzw swizzle name.
 * @returns {string[]} All 340 public swizzle names.
 * @private
 */
function swizzleNames() {
  const names = [];
        /**
         * Appends all axis sequences of the requested length to the enclosing collection.
         * @param {string} prefix - Sequence built so far.
         * @param {number} length - Target number of axes.
         * @returns {void} Updates the enclosing names array.
         * @private
         */
        function append(prefix, length) {
    if (prefix.length === length) {
      names.push(prefix);
      return;
    }
    for (const axis of axes) append(prefix + axis, length);
  }
  for (let length = 1; length <= 4; length++) append('', length);
  return names;
}

test('all swizzles default missing axes to zero and reuse outputs', /**
 * Verifies all swizzles default missing axes to zero and reuse outputs.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api } = load();
  for (const name of swizzleNames()) {
    const swizzle = api[name];
    for (let n = 2; n <= 4; n++) {
      const vector = api[`vec${n}`](2, 3, 5, 7);
      const child = api.vec[name].__v__;
      const expected = [...name].map(            /**
       * Projects fixture elements into the expected component, shape, or script list.
       * @private
       * @param {string} axis - Callback input supplied by the enclosing test or collection.
       * @returns {*} Callback result consumed by the enclosing test.
       */
      axis => vector[axis] ?? 0);
      const before = flat(`v${n}`, vector);
      if (name.length === 1) {
        assert.equal(swizzle(vector), expected[0]);
        assert.equal(child(vector), expected[0]);
        assert.throws(                /**
         * Invokes the invalid-input path for an exception assertion.
         * @private
         * @returns {*} Callback result consumed by the enclosing test.
         */
        () => swizzle(vector, vector));
      } else {
        const kind = `v${name.length}`;
        const result = swizzle(vector);
        assert.equal(api.type(result), `__vec${name.length}__`);
        assert.notEqual(result, vector);
        assert.deepEqual(flat(kind, result), expected);
        assert.deepEqual(flat(kind, child(vector)), expected);
        const out = api[`vec${name.length}`]();
        assert.equal(swizzle(vector, out), out);
        assert.deepEqual(flat(kind, out), expected);
        assert.equal(child(vector, out), out);
        assert.deepEqual(flat(kind, out), expected);
        if (name.length === n) {
          assert.equal(swizzle(vector, vector), vector);
          assert.deepEqual(flat(kind, vector), expected, `${name} in-place`);
        } else {
          assert.deepEqual(flat(`v${n}`, vector), before);
        }
      }
    }
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => swizzle());
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => swizzle(api.vec4(), undefined, undefined));
    for (const value of [null, 'abc', true, [], {}, api.mat2(1)]) {
      assert.throws(            /**
       * Invokes the invalid-input path for an exception assertion.
       * @private
       * @returns {*} Callback result consumed by the enclosing test.
       */
      () => swizzle(value), /Cannot swizzle/);
    }
  }
});

test('swizzle children skip detection and flattening and are exported through window.hg', /**
 * Verifies swizzle children skip detection and flattening and are exported through window.hg.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api: hg, context } = loadBrowser(true);
  const vectors = [hg.vec2(2, 3), hg.vec3(2, 3, 5), hg.vec4(2, 3, 5, 7)];
  const outputs = [null, null, hg.vec2(), hg.vec3(), hg.vec4()];
  for (const vector of [hg.vec2, hg.vec3, hg.vec4]) {
                /**
                 * Verifies swizzle children skip detection and flattening and are exported through window.hg.
                 * @private
                 * @returns {void} Callback result consumed by the enclosing test.
                 */
                vector.__new__ = () => { throw new Error('allocated a swizzle result'); };
  }
  for (const name of swizzleNames()) {
    assert.equal(hg[name], context.window.hg[name]);
    for (let n = 2; n <= 4; n++) {
      const child = hg.vec[name].__v__;
      if (!child) continue;
      const vector = vectors[n - 2];
      const expected = [...name].map(            /**
       * Projects fixture elements into the expected component, shape, or script list.
       * @private
       * @param {string} axis - Callback input supplied by the enclosing test or collection.
       * @returns {*} Callback result consumed by the enclosing test.
       */
      axis => vector[axis] ?? 0);
      if (name.length === 1) {
        assert.equal(child(vector), expected[0]);
      } else {
        const out = outputs[name.length];
        assert.equal(child(vector, out), out);
        assert.deepEqual(flat(`v${name.length}`, out), expected);
      }
    }
  }
});

test('Browser source files and bundle expose the same API', /**
 * Verifies Browser source files and bundle expose the same API.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api: sources } = loadBrowser(false, true);
  const { api: browser, context } = loadBrowser();
  assert.deepEqual(Object.keys(sources).sort(), Object.keys(browser).sort());
  assert.equal(Object.keys(sources).length, 377);
  assert.equal(vm.runInContext('typeof xx', context), 'undefined');
  for (const hg of [sources, browser]) {
    const v = hg.vec3(1, 2, 3), out = hg.vec3();
    assert.equal(hg.add(v, hg.vec3(4), out), out);
    assert.deepEqual(flat('v3', out), [5, 6, 7]);
    assert.equal(hg.zyx(v, out), out);
    assert.deepEqual(flat('v3', out), [3, 2, 1]);
    const m = hg.mat4(2);
    assert.equal(hg.inv(m, m), m);
    assert.equal(m.w.w, 0.5);
  }
});



test('browser components need no module system and support loading only selected operations', /**
 * Verifies browser components need no module system and support loading only selected operations.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const context = vm.createContext({});
  for (const filename of ['hg.js', 'lib/types.js', 'lib/vec2/add.js']) {
    const source = fs.readFileSync(path.join(__dirname, filename), 'utf8');
    assert.doesNotMatch(source, /module\.exports|\brequire\(|\bimport\s|\bexport\s/);
    vm.runInContext(source, context, { filename });
  }
  assert.deepEqual(flat('v2', context.hg.vec2.add(2, 3)), [5, 5]);
  assert.equal(context.hg.mul, undefined);
  assert.equal(vm.runInContext('typeof add', context), 'undefined');
});



test('browser distribution needs only one standalone script', /**
 * Verifies browser distribution needs only one standalone script.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
  const scripts = Array.from(html.matchAll(/<script src="([^"]+)"><\/script>/g),     /**
   * Projects fixture elements into the expected component, shape, or script list.
   * @private
   * @param {RegExpMatchArray} match - Callback input supplied by the enclosing test or collection.
   * @returns {*} Callback result consumed by the enclosing test.
   */
  match => match[1]);
  assert.deepEqual(scripts, ['dist/hg.js']);
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(`${__dirname}/dist/hg.js`, 'utf8'), context);
  assert.equal(Object.keys(context.hg).length, 377);
  assert.equal(context.hg.str(context.hg.zyx(context.hg.vec3(1, 2, 3))), '<3, 2, 1>');
  assert.equal(context.hg.det(context.hg.mat4(2)), 16);
});

/**
 * Asserts component-wise numerical agreement with relative tolerance.
 * @param {number[]} actual - Computed components.
 * @param {number[]} reference - Expected components.
 * @param {number} [tolerance=1e-11] - Relative tolerance, with a unit absolute floor.
 * @returns {void} Returns when every component agrees.
 * @throws {AssertionError} If lengths or values disagree.
 * @private
 */
function nearly(actual, reference, tolerance = 1e-11) {
  assert.equal(actual.length, reference.length);
  actual.forEach(    /**
   * Asserts the current component or object identity.
   * @private
   * @param {*} value - Callback input supplied by the enclosing test or collection.
   * @param {number} i - Callback input supplied by the enclosing test or collection.
   * @returns {void} Callback result consumed by the enclosing test.
   */
  (value, i) => {
    if (Object.is(value, reference[i])) return;
    assert.ok(Math.abs(value - reference[i]) <= tolerance * Math.max(1, Math.abs(reference[i])),
      `${value} differs from ${reference[i]}`);
  });
}

test('xform matches mul for every standard operand pair',
/**
 * Verifies ordinary multiplication dispatch, reusable outputs, and the transpose rename.
 * @private
 * @returns {void} Completes when standard multiplication behavior is preserved.
 */
() => {
  const { api: hg } = load();
  const values = samples(hg);
  assert.equal(hg.tran, undefined);
  assert.equal(typeof hg.trans, 'function');
  for (let i = 0; i < kinds.length; i++) for (let j = 0; j < kinds.length; j++) {
    const ka = kinds[i], kb = kinds[j], a = values[i], b = values[j];
    if (!supported('mul', ka, kb)) continue;
    const kind = resultKind(ka, kb), reference = flat(kind, hg.mul(a, b));
    assert.deepEqual(flat(kind, hg.xform(a, b)), reference);
    if (kind === 'n') continue;
    const out = ctor(hg, kind)();
    assert.equal(hg.xform(a, b, out), out);
    assert.deepEqual(flat(kind, out), reference);
    for (const side of ['left', 'right']) {
      let inputKind = kb;
      if (side === 'left') inputKind = ka;
      if (inputKind !== kind) continue;
      const left = copy(hg, ka, a), right = copy(hg, kb, b);
      let alias = right;
      if (side === 'left') alias = left;
      assert.equal(hg.xform(left, right, alias), alias);
      assert.deepEqual(flat(kind, alias), reference);
    }
  }
});

test('xform extends and truncates lower-dimensional row and column vectors',
/**
 * Checks both homogeneous transform orientations against explicit hom, mul, and truncation.
 * @private
 * @returns {void} Completes when transforms, aliases, and invalid dimensions behave correctly.
 */
() => {
  const { api: hg } = load();
  for (const n of [2, 3]) {
    const m = n + 1, kind = `v${n}`;
    for (let trial = 0; trial < 10; trial++) {
      const components = [];
      for (let i = 0; i < m * m; i++) components.push((i * 3 + trial) % 19 - 9);
      const matrix = hg[`mat${m}`](components);
      const vector = hg[`vec${n}`](2, -3, 5);
      const beforeMatrix = flat(`m${m}`, matrix), beforeVector = flat(kind, vector);
      for (const row of [false, true]) {
        let expanded;
        if (row) expanded = hg.mul(hg.hom(vector), matrix);
        else expanded = hg.mul(matrix, hg.hom(vector));
        const reference = flat(`v${m}`, expanded).slice(0, n);
        let result;
        if (row) result = hg.xform(vector, matrix);
        else result = hg.xform(matrix, vector);
        assert.equal(hg.type(result), `__vec${n}__`);
        assert.deepEqual(flat(kind, result), reference);
        const out = hg[`vec${n}`]();
        if (row) result = hg.xform(vector, matrix, out);
        else result = hg.xform(matrix, vector, out);
        assert.equal(result, out);
        assert.deepEqual(flat(kind, out), reference);
        const alias = copy(hg, kind, vector);
        if (row) result = hg.xform(alias, matrix, alias);
        else result = hg.xform(matrix, alias, alias);
        assert.equal(result, alias);
        assert.deepEqual(flat(kind, alias), reference);
      }
      assert.deepEqual(flat(kind, vector), beforeVector);
      assert.deepEqual(flat(`m${m}`, matrix), beforeMatrix);
    }
  }
  const column = hg.mat3(1, 0, 0, 0, 1, 0, 10, 20, 2);
  const row = hg.trans(column);
  assert.deepEqual(flat('v2', hg.xform(column, hg.vec2(2, 3))), [12, 23]);
  assert.deepEqual(flat('v2', hg.xform(hg.vec2(2, 3), row)), [12, 23]);
  for (const operands of [[hg.vec2(), hg.mat4()], [hg.mat4(), hg.vec2()],
    [hg.mat2(), hg.vec3()], [hg.vec3(), hg.mat2()], [hg.vec2(), hg.vec2()],
    [hg.mat2(), hg.mat3()], [null, hg.vec2()]]) {
    assert.throws(() => hg.xform(...operands));
  }
  assert.throws(() => hg.xform());
  assert.throws(() => hg.xform(hg.vec2()));
  assert.throws(() => hg.xform(hg.vec2(), hg.mat3(), hg.vec2(), 1));
});



test('one-argument dot computes self dot without changing two-argument behavior',
/**
 * Verifies self-dot defaults, explicit operands, exceptional values, and rejected inputs.
 * @private
 * @returns {void} Completes when all dot-product assertions pass.
 */
() => {
  const { api: hg } = load();
  for (let n = 2; n <= 4; n++) {
    const vector = hg[`vec${n}`](-2, 3, -4, 5);
    const before = flat(`v${n}`, vector);
    assert.equal(hg.dot(vector), hg.mag2(vector));
    assert.equal(hg.dot(vector), hg.dot(vector, vector));
    assert.equal(hg.dot(vector, undefined), hg.dot(vector));
    assert.deepEqual(flat(`v${n}`, vector), before);
    assert.equal(hg.dot(hg[`vec${n}`]()), 0);
  }
  assert.equal(hg.dot(hg.vec3(1, 2, 3)), 14);
  assert.equal(hg.dot(hg.vec3(1, 2, 3), hg.vec3(4, 5, 6)), 32);
  assert.equal(hg.dot(hg.vec2(1, 2), hg.vec3(3, 4, 99)), 11);
  assert.equal(hg.dot(hg.vec2(Infinity, 1)), Infinity);
  assert.ok(Number.isNaN(hg.dot(hg.vec2(NaN, 1))));
  assert.throws(() => hg.dot());
  assert.throws(() => hg.dot(hg.vec2(), hg.vec2(), hg.vec2()));
  for (const value of [null, 2, 'a', true, [], {}, hg.mat2()]) {
    assert.throws(() => hg.dot(value));
  }
});

test('hom appends one, preserves inputs, and supports reusable outputs', /**
 * Verifies hom appends one, preserves inputs, and supports reusable outputs.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api: hg } = load();
  for (const n of [2, 3]) {
    const input = hg[`vec${n}`](-2, 0, 7);
    const before = flat(`v${n}`, input);
    const expected = [...before, 1];
    const result = hg.hom(input);
    assert.equal(hg.type(result), `__vec${n + 1}__`);
    assert.notEqual(result, input);
    assert.deepEqual(flat(`v${n + 1}`, result), expected);
    const out = hg[`vec${n + 1}`](99);
    assert.equal(hg.hom(input, out), out);
    assert.deepEqual(flat(`v${n + 1}`, out), expected);
    assert.deepEqual(flat(`v${n}`, input), before);
    assert.equal(hg[`vec${n}`].hom.__v__(input, out), out);
    assert.deepEqual(flat(`v${n + 1}`, out), expected);
  }
  for (const args of [[], [hg.vec2(), hg.vec3(), 1], [null], [1], [true], ['a'], [[]], [{}], [hg.vec4()], [hg.mat2()]]) {
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => hg.hom(...args), /\[hom\]/);
  }
  const { api: unchecked } = loadBrowser(true);
  const v2 = unchecked.vec2(2, 3), v3 = unchecked.vec3(4, 5, 6);
  const out3 = unchecked.vec3(), out4 = unchecked.vec4();
  for (const vector of [unchecked.vec3, unchecked.vec4]) {
                /**
                 * Verifies hom appends one, preserves inputs, and supports reusable outputs.
                 * @private
                 * @returns {void} Callback result consumed by the enclosing test.
                 */
                vector.__new__ = () => { throw new Error('allocated a result'); };
  }
  assert.equal(unchecked.vec2.hom.__v__(v2, out3), out3);
  assert.deepEqual(flat('v3', out3), [2, 3, 1]);
  assert.equal(unchecked.vec3.hom.__v__(v3, out4), out4);
  assert.deepEqual(flat('v4', out4), [4, 5, 6, 1]);
});

test('mag, mag2, norm, dist, and dist2 handle dimensions, zero, and extreme scales', /**
 * Verifies mag, mag2, norm, dist, and dist2 handle dimensions, zero, and extreme scales.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api: hg } = load();
  for (let n = 2; n <= 4; n++) {
    const ctor = hg[`vec${n}`], kind = `v${n}`;
    const v = ctor(3, 4, 12, -8), values = flat(kind, v);
    const squared = values.reduce(        /**
     * Accumulates the scalar reference result.
     * @private
     * @param {number} sum - Callback input supplied by the enclosing test or collection.
     * @param {*} value - Callback input supplied by the enclosing test or collection.
     * @returns {number} Callback result consumed by the enclosing test.
     */
    (sum, value) => sum + value * value, 0);
    assert.equal(hg.mag2(v), squared);
    assert.equal(hg.mag(v), Math.hypot(...values));
    assert.equal(hg[`vec${n}`].mag2.__v__(v), squared);
    const before = flat(kind, v), out = ctor();
    assert.equal(hg.norm(v, out), out);
    nearly([hg.mag(out)], [1]);
    assert.deepEqual(flat(kind, v), before);
    assert.equal(hg.norm(v, v), v);
    nearly(flat(kind, v), flat(kind, out));
    assert.deepEqual(flat(kind, hg.norm(ctor())), Array(n).fill(0));
    for (const scale of [1e300, 1e-300]) {
      const huge = ctor(scale);
      nearly([hg.mag(hg.norm(huge))], [1]);
      assert.ok(Number.isFinite(hg.mag(huge)));
    }
    for (let m = 2; m <= 4; m++) {
      const a = ctor(1, 2, 3, 4), b = hg[`vec${m}`](5, 6, 7, 8);
      const av = flat(kind, a), bv = flat(`v${m}`, b);
      const diffs = Array.from({ length: Math.max(n, m) },             /**
       * Projects fixture elements into the expected component, shape, or script list.
       * @private
       * @param {*} _ - Callback input supplied by the enclosing test or collection.
       * @param {number} i - Callback input supplied by the enclosing test or collection.
       * @returns {*} Callback result consumed by the enclosing test.
       */
      (_, i) => (av[i] ?? 0) - (bv[i] ?? 0));
      assert.equal(hg.dist(a, b), Math.hypot(...diffs));
      assert.equal(hg.dist2(a, b), diffs.reduce(            /**
       * Accumulates the scalar reference result.
       * @private
       * @param {number} sum - Callback input supplied by the enclosing test or collection.
       * @param {number} d - Callback input supplied by the enclosing test or collection.
       * @returns {number} Callback result consumed by the enclosing test.
       */
      (sum, d) => sum + d * d, 0));
      assert.equal(hg.dist(a, b), hg.dist(b, a));
    }
  }
  for (const name of ['mag', 'mag2', 'norm']) {
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => hg[name](2));
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => hg[name](hg.mat2(1)));
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => hg[name]());
  }
});

test('cross product orientation, orthogonality, and input aliasing', /**
 * Verifies cross product orientation, orthogonality, and input aliasing.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api: hg } = load();
  assert.deepEqual(flat('v3', hg.cross(hg.vec3(1, 0, 0), hg.vec3(0, 1, 0))), [0, 0, 1]);
  const a = hg.vec3(2, 3, 5), b = hg.vec3(7, 11, 13);
  const expected = hg.cross(a, b);
  assert.equal(hg.dot(a, expected), 0);
  assert.equal(hg.dot(b, expected), 0);
  assert.equal(hg.cross(a, b, a), a);
  assert.deepEqual(flat('v3', a), flat('v3', expected));
  assert.throws(    /**
   * Invokes the invalid-input path for an exception assertion.
   * @private
   * @returns {*} Callback result consumed by the enclosing test.
   */
  () => hg.cross(hg.vec2(1), hg.vec2(2)));
  assert.throws(    /**
   * Invokes the invalid-input path for an exception assertion.
   * @private
   * @returns {*} Callback result consumed by the enclosing test.
   */
  () => hg.cross(hg.vec4(1), hg.vec4(2)));
});

test('transpose preserves columns and supports in-place updates', /**
 * Verifies transpose preserves columns and supports in-place updates.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api: hg } = load();
  for (let n = 2; n <= 4; n++) {
    const ctor = hg[`mat${n}`], kind = `m${n}`;
    const values = Array.from({ length: n * n },         /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {*} _ - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    (_, i) => i + 1), m = ctor(values);
    const result = hg.trans(m);
    assert.notEqual(result, m);
    for (let c = 0; c < n; c++) for (let r = 0; r < n; r++) {
      assert.equal(result[axes[c]][axes[r]], m[axes[r]][axes[c]]);
    }
    assert.deepEqual(flat(kind, hg.trans(result)), values);
    const columns = axes.slice(0, n).map(        /**
     * Projects fixture elements into the expected component, shape, or script list.
     * @private
     * @param {string} c - Callback input supplied by the enclosing test or collection.
     * @returns {*} Callback result consumed by the enclosing test.
     */
    c => m[c]);
    assert.equal(hg.trans(m, m), m);
    assert.deepEqual(flat(kind, m), flat(kind, result));
    columns.forEach(        /**
     * Asserts the current component or object identity.
     * @private
     * @param {*} col - Callback input supplied by the enclosing test or collection.
     * @param {number} i - Callback input supplied by the enclosing test or collection.
     * @returns {void} Callback result consumed by the enclosing test.
     */
    (col, i) => assert.equal(m[axes[i]], col));
  }
  assert.throws(    /**
   * Invokes the invalid-input path for an exception assertion.
   * @private
   * @returns {*} Callback result consumed by the enclosing test.
   */
  () => hg.trans(hg.vec3(1)));
});

test('lerp broadcasts scalars, pads vectors, supports extrapolation and aliases', /**
 * Verifies lerp broadcasts scalars, pads vectors, supports extrapolation and aliases.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api: hg } = load();
  const values = samples(hg);
  for (let i = 0; i < kinds.length; i++) for (let j = 0; j < kinds.length; j++) {
    const ka = kinds[i], kb = kinds[j], a = values[i], b = values[j];
    if (!supported('add', ka, kb)) {
      assert.throws(            /**
       * Invokes the invalid-input path for an exception assertion.
       * @private
       * @returns {*} Callback result consumed by the enclosing test.
       */
      () => hg.lerp(a, b, 0.5));
      continue;
    }
    const kind = resultKind(ka, kb), av = flat(ka, a), bv = flat(kb, b);
    for (const t of [0, 1, 0.25, 0.5, -1, 2]) {
      const expected = Array.from({ length: Math.max(av.length, bv.length) },             /**
       * Projects fixture elements into the expected component, shape, or script list.
       * @private
       * @param {*} _ - Callback input supplied by the enclosing test or collection.
       * @param {number} k - Callback input supplied by the enclosing test or collection.
       * @returns {*} Callback result consumed by the enclosing test.
       */
      (_, k) => {
        let x = av[k] ?? 0, y = bv[k] ?? 0;
        if (ka === 'n') x = a;
        if (kb === 'n') y = b;
        if (t === 0) return x;
        if (t === 1) return y;
        return x + (y - x) * t;
      });
      assert.deepEqual(flat(kind, hg.lerp(a, b, t)), expected);
      if (kind === 'n') continue;
      const out = ctor(hg, kind)();
      assert.equal(hg.lerp(a, b, t, out), out);
      assert.deepEqual(flat(kind, out), expected);
      for (const side of ['left', 'right']) {
        let inputKind = kb;
        if (side === 'left') inputKind = ka;
        if (kind !== inputKind) continue;
        const left = copy(hg, ka, a), right = copy(hg, kb, b);
        let alias = right;
        if (side === 'left') alias = left;
        hg.lerp(left, right, t, alias);
        assert.deepEqual(flat(kind, alias), expected);
      }
    }
  }
  assert.equal(hg.lerp(-Number.MAX_VALUE, Number.MAX_VALUE, 0), -Number.MAX_VALUE);
  assert.equal(hg.lerp(-Number.MAX_VALUE, Number.MAX_VALUE, 1), Number.MAX_VALUE);
  assert.throws(    /**
   * Invokes the invalid-input path for an exception assertion.
   * @private
   * @returns {*} Callback result consumed by the enclosing test.
   */
  () => hg.lerp(1, 2, '0.5'));
  assert.throws(    /**
   * Invokes the invalid-input path for an exception assertion.
   * @private
   * @returns {*} Callback result consumed by the enclosing test.
   */
  () => hg.lerp(1, 2));
});

test('algebraic division matches multiplication by inverse and preserves operand order', /**
 * Verifies algebraic division matches multiplication by inverse and preserves operand order.
 * @private
 * @returns {void} Callback result consumed by the enclosing test.
 */
() => {
  const { api: hg } = load();
  const values = samples(hg);
  for (let i = 0; i < kinds.length; i++) for (let j = 0; j < kinds.length; j++) {
    const ka = kinds[i], kb = kinds[j], a = values[i], b = values[j];
    const valid = kb === 'n' || (kb[0] === 'm' && (ka === 'n' || ka[1] === kb[1]));
    if (!valid) {
      assert.throws(            /**
       * Invokes the invalid-input path for an exception assertion.
       * @private
       * @returns {*} Callback result consumed by the enclosing test.
       */
      () => hg.div(a, b));
      continue;
    }
    const kind = resultKind(ka, kb);
    const reference = flat(kind, hg.mul(a, hg.inv(b)));
    nearly(flat(kind, hg.div(a, b)), reference);
    if (kind === 'n') continue;
    const out = ctor(hg, kind)();
    assert.equal(hg.div(a, b, out), out);
    nearly(flat(kind, out), reference);
    for (const side of ['left', 'right']) {
      let inputKind = kb;
      if (side === 'left') inputKind = ka;
      if (kind !== inputKind) continue;
      const left = copy(hg, ka, a), right = copy(hg, kb, b);
      let alias = right;
      if (side === 'left') alias = left;
      assert.equal(hg.div(left, right, alias), alias);
      nearly(flat(kind, alias), reference);
    }
    if (kb[0] === 'm') {
      const quotient = hg.div(a, b);
      let recovered = flat(ka, a);
      if (ka === 'n') recovered = flat(kind, hg.mul(a, hg[`mat${kb[1]}`](1)));
      nearly(flat(kind, hg.mul(quotient, b)), recovered);
    }
  }
  for (let n = 2; n <= 4; n++) {
    const out = hg[`mat${n}`](7), before = flat(`m${n}`, out);
    assert.throws(        /**
     * Invokes the invalid-input path for an exception assertion.
     * @private
     * @returns {*} Callback result consumed by the enclosing test.
     */
    () => hg.div(out, hg[`mat${n}`](), out), /singular/);
    assert.deepEqual(flat(`m${n}`, out), before);
  }
  assert.equal(hg.div(1, 0), Infinity);
  assert.equal(hg.div(1, -0), -Infinity);
  assert.ok(Number.isNaN(hg.div(0, 0)));
});
