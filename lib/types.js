/**
 * @file HG value representations, coercing/trusted constructors, predicates, and conversion hooks.
 * Matrices store named column vectors; constructor inputs are flattened in column-major order.
 * Load after hg.js. Public constructors are attached to hg; internal tags live in hg.__core__.
 */

/**
 * A mutable 2-component numeric vector.
 * @typedef {Object} hgVec2
 * @property {"__vec2__"} __type__ - Built-in vector tag.
 * @property {number} x - X component.
 * @property {number} y - Y component.
 */

/**
 * A 2x2 matrix stored as 2 column vectors.
 * The first member selects a column; the second selects a row (for example, m.y.x).
 * @typedef {Object} hgMat2
 * @property {"__mat2__"} __type__ - Built-in matrix tag.
 * @property {hgVec2} x - Column 1.
 * @property {hgVec2} y - Column 2.
 */

/**
 * A mutable 3-component numeric vector.
 * @typedef {Object} hgVec3
 * @property {"__vec3__"} __type__ - Built-in vector tag.
 * @property {number} x - X component.
 * @property {number} y - Y component.
 * @property {number} z - Z component.
 */

/**
 * A 3x3 matrix stored as 3 column vectors.
 * The first member selects a column; the second selects a row (for example, m.y.x).
 * @typedef {Object} hgMat3
 * @property {"__mat3__"} __type__ - Built-in matrix tag.
 * @property {hgVec3} x - Column 1.
 * @property {hgVec3} y - Column 2.
 * @property {hgVec3} z - Column 3.
 */

/**
 * A mutable 4-component numeric vector.
 * @typedef {Object} hgVec4
 * @property {"__vec4__"} __type__ - Built-in vector tag.
 * @property {number} x - X component.
 * @property {number} y - Y component.
 * @property {number} z - Z component.
 * @property {number} w - W component.
 */

/**
 * A 4x4 matrix stored as 4 column vectors.
 * The first member selects a column; the second selects a row (for example, m.y.x).
 * @typedef {Object} hgMat4
 * @property {"__mat4__"} __type__ - Built-in matrix tag.
 * @property {hgVec4} x - Column 1.
 * @property {hgVec4} y - Column 2.
 * @property {hgVec4} z - Column 3.
 * @property {hgVec4} w - Column 4.
 */

/**
 * @typedef {hgVec2|hgVec3|hgVec4} hgVector
 */

/**
 * @typedef {hgMat2|hgMat3|hgMat4} hgMatrix
 */

/**
 * @typedef {number|hgVector|hgMatrix} hgOperand
 */

/**
 * @typedef {Array<*>} hgList
 */

/**
 * @typedef {Object<string, *>} hgDict
 */

/**
 * @typedef {null|number|string|boolean|hgList|Object} hgValue
 */

/**
 * The shared library namespace. Constructors carry their conversion hooks, predicates,
 * trusted __new__ methods, and assertions; operations carry explicit dispatch children.
 * @typedef {Object<string, *>} hgNamespace
 */

/**
 * A registered constructor or object containing conversion hooks.
 * type() reads object tags directly and never consults these predicates.
 * @typedef {Object} hgTypeHandler
 * @property {function(*): boolean} [__is__] - Optional explicit type predicate.
 * @property {function(*): number} [__num__] - Optional numeric conversion.
 * @property {function(*): string} [__str__] - Optional string conversion.
 * @property {function(*): boolean} [__bool__] - Optional boolean conversion.
 */































/**
 * Registers this file's public API on the shared namespace without leaking local names.
 * @private
 * @param {hgNamespace} hg - Namespace initialized by hg.js.
 * @returns {void} Attaches constructors or operations to hg.
 */
(function(hg) {
const __nil__  = "__nil__"
const __num__  = "__num__"
const __str__  = "__str__"
const __bool__ = "__bool__"
const __list__ = "__list__"
const __dict__ = "__dict__"
const __vec2__ = "__vec2__"
const __vec3__ = "__vec3__"
const __vec4__ = "__vec4__"
const __mat2__ = "__mat2__"
const __mat3__ = "__mat3__"
const __mat4__ = "__mat4__"

const types = { }

/**
 * Detects built-in primitive types or returns an object's __type__ value verbatim.
 * Own and inherited tags take precedence over array/dictionary detection.
 * No registration lookup or predicates are used; untagged arrays are lists, other objects dictionaries.
 *
 * @function type
 * @memberof hg
 * @static
 * @param {*} a - Value to classify.
 * @returns {*} Built-in tag string or the unmodified object tag, which need not be a string.
 * @throws {Error} For unsupported primitives such as undefined, bigint, symbols, and functions.
 */
function type(a) {
  // Object tags are authoritative; no registry lookup or predicates are needed.
  switch(typeof a) {
    case "number": return __num__;
    case "string": return __str__;
    case "boolean": return __bool__;
    case "object": {
      if (a === null) return __nil__;
      if ("__type__" in a) return a.__type__;
      if (Array.isArray(a)) return __list__;
      return __dict__;
    }
  }
  throw new Error(`[type] Cannot determine type of ${a}`);
}

/**
 * Returns the nil value, ignoring an optional argument.
 *
 * @function nil
 * @memberof hg
 * @static
 * @param {...*} _ - Ignored optional value for nil; extra arguments beyond one are rejected.
 * @returns {null} Constructed or coerced value.
 * @throws {Error} If more than one argument is supplied.
 */
const nil = types[__nil__] = function (..._) {
  if (_.length > 1) throw new Error(`[nil] Expected 0 or 1 arguments, received ${_.length} instead`);
  return null;
}

// __new__ constructors trust their inputs: no coercion, defaults, or validation.
/**
 * Returns null without coercion, validation, or argument checks.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.nil
 * @static
 * @returns {null} Result of construction, inspection, or conversion.
 */
nil.__new__ = function() {
  return null;
}

/**
 * Asserts the explicit nil predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.nil
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
nil.__assert__ = function(a) {
  if (!nil.__is__(a)) throw new Error(`[nil] Expected nil, received ${a} instead`);
}

/**
 * Tests whether the value is exactly null.
 *
 * @function __is__
 * @memberof hg.nil
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
nil.__is__   = function(a) {
  return a === null;
}

/**
 * Converts a trusted nil value to number; skips input validation.
 *
 * @function __num__
 * @memberof hg.nil
 * @static
 * @param {null} a - Trusted input value.
 * @returns {number} Result of construction, inspection, or conversion.
 */
nil.__num__  = function(a) {
  return 0;
}

/**
 * Converts a trusted nil value to string; skips input validation.
 * Returns the literal "nil".
 *
 * @function __str__
 * @memberof hg.nil
 * @static
 * @param {null} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
nil.__str__  = function(a) {
  return "nil";
}

/**
 * Converts a trusted nil value to boolean; skips input validation.
 * Always false.
 *
 * @function __bool__
 * @memberof hg.nil
 * @static
 * @param {null} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
nil.__bool__ = function(a) {
  return false;
}

/**
 * Converts a value to number using its registered conversion hook.
 * An omitted or undefined input is treated as nil.
 *
 * @function num
 * @memberof hg
 * @static
 * @param {*} [a=null] - Value to convert.
 * @param {...*} _ - Unsupported extra arguments; supplying any throws.
 * @returns {number} Constructed or coerced value.
 * @throws {Error} If argument count, type detection, or required coercion fails.
 */
const num = types[__num__] = function (a=null, ..._) {
  if (_.length > 0) throw new Error(`[num] Expected 0 or 1 arguments, received ${_.length + 1} instead`);
  const t = types[type(a)];
  if (!t || !t.__num__) throw new Error(`[num] Cannot coerce ${a} to num`);
  return t.__num__(a);
}

/**
 * Returns the trusted value directly without coercion, validation, or argument checks.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.num
 * @static
 * @param {number} a - Trusted input value.
 * @returns {number} Result of construction, inspection, or conversion.
 */
num.__new__ = function(a) {
  return a;
}

/**
 * Asserts the explicit num predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.num
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
num.__assert__ = function(a) {
  if (!num.__is__(a)) throw new Error(`[num] Expected num, received ${a} instead`);
}

/**
 * Tests JavaScript number values, including NaN and infinities.
 *
 * @function __is__
 * @memberof hg.num
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
num.__is__   = function(a) {
  return typeof a === "number";
}

/**
 * Converts a trusted num value to number; skips input validation.
 *
 * @function __num__
 * @memberof hg.num
 * @static
 * @param {number} a - Trusted input value.
 * @returns {number} Result of construction, inspection, or conversion.
 */
num.__num__  = function(a) {
  return a;
}

/**
 * Converts a trusted num value to string; skips input validation.
 *
 * @function __str__
 * @memberof hg.num
 * @static
 * @param {number} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
num.__str__  = function(a) {
  return a.toString();
}

/**
 * Converts a trusted num value to boolean; skips input validation.
 * False only for zero (including -0); NaN is true.
 *
 * @function __bool__
 * @memberof hg.num
 * @static
 * @param {number} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
num.__bool__ = function(a) {
  return a !== 0;
}

/**
 * Converts a value to string using its registered conversion hook.
 * An omitted or undefined input is treated as nil.
 *
 * @function str
 * @memberof hg
 * @static
 * @param {*} [a=null] - Value to convert.
 * @param {...*} _ - Unsupported extra arguments; supplying any throws.
 * @returns {string} Constructed or coerced value.
 * @throws {Error} If argument count, type detection, or required coercion fails.
 */
const str = types[__str__] = function (a=null, ..._) {
  if (_.length > 0) throw new Error(`[str] Expected 0 or 1 arguments, received ${_.length + 1} instead`);
  const t = types[type(a)];
  if (!t || !t.__str__) throw new Error(`[str] Cannot coerce ${a} to str`);
  return t.__str__(a);
}

/**
 * Returns the trusted value directly without coercion, validation, or argument checks.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.str
 * @static
 * @param {string} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
str.__new__ = function(a) {
  return a;
}

/**
 * Asserts the explicit str predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.str
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
str.__assert__ = function(a) {
  if (!str.__is__(a)) throw new Error(`[str] Expected str, received ${a} instead`)
}

/**
 * Tests for a primitive JavaScript string.
 *
 * @function __is__
 * @memberof hg.str
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
str.__is__   = function(a) {
  return typeof a === "string";
}

/**
 * Converts a trusted str value to number; skips input validation.
 * Uses Number(value), including its NaN and whitespace/empty-string behavior.
 *
 * @function __num__
 * @memberof hg.str
 * @static
 * @param {string} a - Trusted input value.
 * @returns {number} Result of construction, inspection, or conversion.
 */
str.__num__  = function(a) {
  return Number(a);
}

/**
 * Converts a trusted str value to string; skips input validation.
 *
 * @function __str__
 * @memberof hg.str
 * @static
 * @param {string} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
str.__str__  = function(a) {
  return a;
}

/**
 * Converts a trusted str value to boolean; skips input validation.
 * True for any nonempty string.
 *
 * @function __bool__
 * @memberof hg.str
 * @static
 * @param {string} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
str.__bool__ = function(a) {
  return a !== "";
}

/**
 * Converts a value to boolean using its registered conversion hook.
 * An omitted or undefined input is treated as nil.
 *
 * @function bool
 * @memberof hg
 * @static
 * @param {*} [a=null] - Value to convert.
 * @param {...*} _ - Unsupported extra arguments; supplying any throws.
 * @returns {boolean} Constructed or coerced value.
 * @throws {Error} If argument count, type detection, or required coercion fails.
 */
const bool = types[__bool__] = function (a=null, ..._) {
  if (_.length > 0) throw new Error(`[bool] Expected 0 or 1 arguments, received ${_.length + 1} instead`);
  const t = types[type(a)];
  if (!t || !t.__bool__) throw new Error(`[bool] Cannot coerce ${a} to bool`);
  return t.__bool__(a);
}

/**
 * Returns the trusted value directly without coercion, validation, or argument checks.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.bool
 * @static
 * @param {boolean} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
bool.__new__ = function(a) {
  return a;
}

/**
 * Asserts the explicit bool predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.bool
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
bool.__assert__ = function(a) {
  if (!bool.__is__(a)) throw new Error(`[bool] Expected bool, received ${a} instead`)
}

/**
 * Tests for a primitive JavaScript boolean.
 *
 * @function __is__
 * @memberof hg.bool
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
bool.__is__   = function(a) {
  return typeof a === "boolean";
}

/**
 * Converts a trusted bool value to number; skips input validation.
 *
 * @function __num__
 * @memberof hg.bool
 * @static
 * @param {boolean} a - Trusted input value.
 * @returns {number} Result of construction, inspection, or conversion.
 */
bool.__num__  = function(a) {
  if (a) return 1;
  else   return 0;
}

/**
 * Converts a trusted bool value to string; skips input validation.
 *
 * @function __str__
 * @memberof hg.bool
 * @static
 * @param {boolean} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
bool.__str__  = function(a) {
  return a.toString();
}

/**
 * Converts a trusted bool value to boolean; skips input validation.
 * Returns the boolean unchanged.
 *
 * @function __bool__
 * @memberof hg.bool
 * @static
 * @param {boolean} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
bool.__bool__ = function(a) {
  return a;
}

/**
 * Creates a fresh list containing the arguments without flattening or copying its members.
 *
 * @function list
 * @memberof hg
 * @static
 * @param {...*} a - List members, retained by reference.
 * @returns {hgList} Constructed or coerced value.
 */
const list = types[__list__] = function (...a) {
  return list.__new__(a);
}

// Adopt the backing array directly.
/**
 * Adopts the supplied backing value directly, without validation or copying.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.list
 * @static
 * @param {hgList} a - Trusted input value.
 * @returns {hgList} Result of construction, inspection, or conversion.
 */
list.__new__ = function(a) {
  return a;
}

/**
 * Asserts the explicit list predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.list
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
list.__assert__ = function(a) {
  if (!list.__is__(a)) throw new Error(`[list] Expected list, received ${a} instead`);
}

/**
 * Tests for an Array, including arrays carrying a custom type tag.
 *
 * @function __is__
 * @memberof hg.list
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
list.__is__   = function(a) {
  return Array.isArray(a);
}

/**
 * Converts a trusted list value to string; skips input validation.
 * Recursively formats members using str; cyclic lists are unsupported.
 *
 * @function __str__
 * @memberof hg.list
 * @static
 * @param {hgList} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
list.__str__  = function(a) {
  return `[${a.map(    /**
   * Formats one list member through the generic str conversion.
   * @private
   * @param {hgValue} v - List member.
   * @returns {string} Display representation.
   */
  v => str(v)).join(", ")}]`;
}

/**
 * Converts a trusted list value to boolean; skips input validation.
 * True when the array length is nonzero.
 *
 * @function __bool__
 * @memberof hg.list
 * @static
 * @param {hgList} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
list.__bool__ = function(a) {
  return a.length > 0;
}

/**
 * Creates a dictionary from alternating keys and values.
 * Keys use str conversion; nullish keys/values become nil. An unmatched key receives null.
 * Duplicate keys overwrite earlier values. A __type__ key intentionally changes type detection.
 *
 * @function dict
 * @memberof hg
 * @static
 * @param {...*} a - Alternating keys and values.
 * @returns {hgDict} Constructed or coerced value.
 * @throws {Error} If argument count, type detection, or required coercion fails.
 */
const dict = types[__dict__] = function (...a) {
  const d = { }

  for(let i = 0; i < a.length; i += 2) {
    const k = str(a[i + 0] ?? null)
    const v =    (a[i + 1] ?? null)
    Object.defineProperty(d, k, {
      configurable: true,
      enumerable  : true,
      writable    : true,
      value: v
    })
  }

  return d
}

// Adopt the backing object directly, including any __type__ marker.
/**
 * Adopts the supplied backing value directly, without validation or copying.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.dict
 * @static
 * @param {hgDict} a - Trusted input value.
 * @returns {hgDict} Result of construction, inspection, or conversion.
 */
dict.__new__ = function(a) {
  return a;
}

/**
 * Asserts the explicit dict predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.dict
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
dict.__assert__ = function(a) {
  if (!dict.__is__(a)) throw new Error(`[dict] Expected dict, received ${a} instead`);
}

/**
 * Tests for a non-null, non-array object without an own __type__ property.
 *
 * @function __is__
 * @memberof hg.dict
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
dict.__is__   = function(a) {
  return (
    typeof a === "object" && a !== null &&
    !Array.isArray(a            ) &&
    !Object.hasOwn(a, "__type__")
  )
}

/**
 * Converts a trusted dict value to string; skips input validation.
 * Formats own enumerable string keys as key=value pairs using str for values.
 *
 * @function __str__
 * @memberof hg.dict
 * @static
 * @param {hgDict} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
dict.__str__  = function(a) {
  return `{${Object.keys(a).map(    /**
   * Formats an enumerable dictionary key and its value.
   * @private
   * @param {string} k - Own enumerable key.
   * @returns {string} The key=value display pair.
   */
  k => k + "=" + str(a[k])).join(", ")}}`
}

/**
 * Converts a trusted dict value to boolean; skips input validation.
 * True when own enumerable string keys exist.
 *
 * @function __bool__
 * @memberof hg.dict
 * @static
 * @param {hgDict} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
dict.__bool__ = function(a) {
  return Object.keys(a).length > 0;
}

/**
 * Recursively flattens list elements and expands vectors/matrices into components.
 * Matrices expand one column at a time. Other supported values remain leaf values.
 * Inputs are assumed acyclic; cyclic lists cause recursion failure.
 * @private
 * @param {...*} a - Values to flatten.
 * @returns {Array<*>} Fresh flat component list.
 * @throws {Error} If type detection fails for a leaf.
 */
function __flat__(...a) {
  let b = []
  for(const i of a) switch(type(i)) {
    case __list__: b.push(...__flat__(...i)); break;
    case __vec2__: b.push(i.x, i.y          ); break;
    case __vec3__: b.push(i.x, i.y, i.z     ); break;
    case __vec4__: b.push(i.x, i.y, i.z, i.w); break;
    case __mat2__: b.push(...__flat__(i.x, i.y)); break;
    case __mat3__: b.push(...__flat__(i.x, i.y, i.z)); break;
    case __mat4__: b.push(...__flat__(i.x, i.y, i.z, i.w)); break;
    default: b.push(i);
  }
  return b;
}

/**
 * Constructs a 2-component vector from recursively flattened inputs.
 * A single flattened value is replicated. Missing/nullish components become zero;
 * extra components are ignored, and retained components are converted with num.
 *
 * @function vec2
 * @memberof hg
 * @static
 * @param {...*} a - Values or nested lists/vectors/matrices to flatten.
 * @returns {hgVec2} Constructed or coerced value.
 * @throws {Error} If argument count, type detection, or required coercion fails.
 * @example
 * hg.vec2([1, 2]); // remaining components default to zero
 */
const vec2 = types[__vec2__] = function(...a) {
  try {
    const b = __flat__(...a)
    if (b.length === 1) {
      const v = num(b[0] ?? 0)
      return vec2.__new__(v, v)
    } else {
      const x = num(b[0] ?? 0)
      const y = num(b[1] ?? 0)
      return vec2.__new__(x, y)
    }
  } catch(e) {
    throw new Error(`[vec2] Cannot coerce ${a} to vec2`)
  }
}

/**
 * Allocates a fresh vector from exact numeric components without checks or coercion.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.vec2
 * @static
 * @param {number} x - X component.
 * @param {number} y - Y component.
 * @returns {hgVec2} Result of construction, inspection, or conversion.
 */
vec2.__new__ = function(x, y) {
  return { __type__: __vec2__, x, y };
}

/**
 * Asserts the explicit vec2 predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.vec2
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
vec2.__assert__ = function(a) {
  if (!vec2.__is__(a)) throw new Error(`[vec2] Expected vec2, received ${a} instead`);
}

/**
 * Tests for a non-null object with the vec2 tag; does not validate its components.
 *
 * @function __is__
 * @memberof hg.vec2
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
vec2.__is__   = function(a) {
  return typeof a === "object" && a !== null && a.__type__ === __vec2__
}

/**
 * Converts a trusted vec2 value to string; skips input validation.
 *
 * @function __str__
 * @memberof hg.vec2
 * @static
 * @param {hgVec2} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
vec2.__str__  = function(a) {
  return `<${a.x}, ${a.y}>`
}

/**
 * Converts a trusted vec2 value to boolean; skips input validation.
 * True when at least one component is not zero.
 *
 * @function __bool__
 * @memberof hg.vec2
 * @static
 * @param {hgVec2} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
vec2.__bool__ = function(a) {
  return a.x !== 0 || a.y !== 0
}

/**
 * Constructs a 3-component vector from recursively flattened inputs.
 * A single flattened value is replicated. Missing/nullish components become zero;
 * extra components are ignored, and retained components are converted with num.
 *
 * @function vec3
 * @memberof hg
 * @static
 * @param {...*} a - Values or nested lists/vectors/matrices to flatten.
 * @returns {hgVec3} Constructed or coerced value.
 * @throws {Error} If argument count, type detection, or required coercion fails.
 * @example
 * hg.vec3([1, 2]); // remaining components default to zero
 */
const vec3 = types[__vec3__] = function(...a) {
  try {
    const b = __flat__(...a)
    if (b.length === 1) {
      const v = num(b[0] ?? 0)
      return vec3.__new__(v, v, v)
    } else {
      const x = num(b[0] ?? 0)
      const y = num(b[1] ?? 0)
      const z = num(b[2] ?? 0)
      return vec3.__new__(x, y, z)
    }
  } catch(e) {
    throw new Error(`[vec3] Cannot coerce ${a} to vec3`)
  }
}

/**
 * Allocates a fresh vector from exact numeric components without checks or coercion.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.vec3
 * @static
 * @param {number} x - X component.
 * @param {number} y - Y component.
 * @param {number} z - Z component.
 * @returns {hgVec3} Result of construction, inspection, or conversion.
 */
vec3.__new__ = function(x, y, z) {
  return { __type__: __vec3__, x, y, z };
}

/**
 * Asserts the explicit vec3 predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.vec3
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
vec3.__assert__ = function(a) {
  if (!vec3.__is__(a)) throw new Error(`[vec3] Expected vec3, received ${a} instead`);
}

/**
 * Tests for a non-null object with the vec3 tag; does not validate its components.
 *
 * @function __is__
 * @memberof hg.vec3
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
vec3.__is__ = function(a) {
  return typeof a === "object" && a !== null && a.__type__ === __vec3__
}

/**
 * Converts a trusted vec3 value to string; skips input validation.
 *
 * @function __str__
 * @memberof hg.vec3
 * @static
 * @param {hgVec3} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
vec3.__str__ = function(a) {
  return `<${a.x}, ${a.y}, ${a.z}>`
}

/**
 * Converts a trusted vec3 value to boolean; skips input validation.
 * True when at least one component is not zero.
 *
 * @function __bool__
 * @memberof hg.vec3
 * @static
 * @param {hgVec3} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
vec3.__bool__ = function(a) {
  return a.x !== 0 || a.y !== 0 || a.z !== 0
}

/**
 * Constructs a 4-component vector from recursively flattened inputs.
 * A single flattened value is replicated. Missing/nullish components become zero;
 * extra components are ignored, and retained components are converted with num.
 *
 * @function vec4
 * @memberof hg
 * @static
 * @param {...*} a - Values or nested lists/vectors/matrices to flatten.
 * @returns {hgVec4} Constructed or coerced value.
 * @throws {Error} If argument count, type detection, or required coercion fails.
 * @example
 * hg.vec4([1, 2]); // remaining components default to zero
 */
const vec4 = types[__vec4__] = function(...a) {
  try {
    const b = __flat__(...a)
    if (b.length === 1) {
      const v = num(b[0] ?? 0)
      return vec4.__new__(v, v, v, v)
    } else {
      const x = num(b[0] ?? 0)
      const y = num(b[1] ?? 0)
      const z = num(b[2] ?? 0)
      const w = num(b[3] ?? 0)
      return vec4.__new__(x, y, z, w)
    }
  } catch(e) {
    throw new Error(`[vec4] Cannot coerce ${a} to vec4`)
  }
}

/**
 * Allocates a fresh vector from exact numeric components without checks or coercion.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.vec4
 * @static
 * @param {number} x - X component.
 * @param {number} y - Y component.
 * @param {number} z - Z component.
 * @param {number} w - W component.
 * @returns {hgVec4} Result of construction, inspection, or conversion.
 */
vec4.__new__ = function(x, y, z, w) {
  return { __type__: __vec4__, x, y, z, w };
}

/**
 * Asserts the explicit vec4 predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.vec4
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
vec4.__assert__ = function(a) {
  if (!vec4.__is__(a)) throw new Error(`[vec4] Expected vec4, received ${a} instead`);
}

/**
 * Tests for a non-null object with the vec4 tag; does not validate its components.
 *
 * @function __is__
 * @memberof hg.vec4
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
vec4.__is__ = function(a) {
  return typeof a === "object" && a !== null && a.__type__ === __vec4__
}

/**
 * Converts a trusted vec4 value to string; skips input validation.
 *
 * @function __str__
 * @memberof hg.vec4
 * @static
 * @param {hgVec4} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
vec4.__str__ = function(a) {
  return `<${a.x}, ${a.y}, ${a.z}, ${a.w}>`
}

/**
 * Converts a trusted vec4 value to boolean; skips input validation.
 * True when at least one component is not zero.
 *
 * @function __bool__
 * @memberof hg.vec4
 * @static
 * @param {hgVec4} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
vec4.__bool__ = function(a) {
  return a.x !== 0 || a.y !== 0 || a.z !== 0 || a.w !== 0
}

// Named vector columns; flattened inputs fill each column in order.
/**
 * Constructs a 2x2 matrix with named vector columns.
 * Recursively flattened values fill columns in order. A single flattened value fills only
 * the diagonal. Missing/nullish entries become zero, and extra values are ignored.
 * All retained components are converted with num.
 *
 * @function mat2
 * @memberof hg
 * @static
 * @param {...*} a - Values or nested lists/vectors/matrices to flatten.
 * @returns {hgMat2} Constructed or coerced value.
 * @throws {Error} If argument count, type detection, or required coercion fails.
 * @example
 * hg.mat2(1); // identity matrix
 */
const mat2 = types[__mat2__] = function(...a) {
  try {
    const b = __flat__(...a)
    if (b.length === 1) {
      const v = num(b[0] ?? 0)
      return mat2.__new__(vec2.__new__(v, 0), vec2.__new__(0, v))
    } else {
      const x = vec2.__new__(num(b[0] ?? 0), num(b[1] ?? 0))
      const y = vec2.__new__(num(b[2] ?? 0), num(b[3] ?? 0))
      return mat2.__new__(x, y)
    }
  } catch(e) {
    throw new Error(`[mat2] Cannot coerce arguments to mat2`, { cause: e })
  }
}

/**
 * Allocates a fresh matrix shell from exact column vectors without checks or coercion.
 * Column references are retained directly; columns are not cloned.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.mat2
 * @static
 * @param {hgVec2} x - Column x, retained by reference.
 * @param {hgVec2} y - Column y, retained by reference.
 * @returns {hgMat2} Result of construction, inspection, or conversion.
 */
mat2.__new__ = function(x, y) {
  return { __type__: __mat2__, x, y };
}

/**
 * Asserts the explicit mat2 predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.mat2
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
mat2.__assert__ = function(a) {
  if (!mat2.__is__(a)) throw new Error(`[mat2] Expected mat2, received ${a} instead`);
}

/**
 * Tests for a non-null object with the mat2 tag; does not validate its components.
 *
 * @function __is__
 * @memberof hg.mat2
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
mat2.__is__ = function(a) {
  return typeof a === "object" && a !== null && a.__type__ === __mat2__
}

/**
 * Converts a trusted mat2 value to string; skips input validation.
 * Columns appear in storage order, enclosed in angle brackets.
 *
 * @function __str__
 * @memberof hg.mat2
 * @static
 * @param {hgMat2} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
mat2.__str__ = function(a) {
  return `<${str(a.x)}, ${str(a.y)}>`
}

/**
 * Converts a trusted mat2 value to boolean; skips input validation.
 * True when at least one column has a nonzero component.
 *
 * @function __bool__
 * @memberof hg.mat2
 * @static
 * @param {hgMat2} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
mat2.__bool__ = function(a) {
  return bool(a.x) || bool(a.y)
}

/**
 * Constructs a 3x3 matrix with named vector columns.
 * Recursively flattened values fill columns in order. A single flattened value fills only
 * the diagonal. Missing/nullish entries become zero, and extra values are ignored.
 * All retained components are converted with num.
 *
 * @function mat3
 * @memberof hg
 * @static
 * @param {...*} a - Values or nested lists/vectors/matrices to flatten.
 * @returns {hgMat3} Constructed or coerced value.
 * @throws {Error} If argument count, type detection, or required coercion fails.
 * @example
 * hg.mat3(1); // identity matrix
 */
const mat3 = types[__mat3__] = function(...a) {
  try {
    const b = __flat__(...a)
    if (b.length === 1) {
      const v = num(b[0] ?? 0)
      return mat3.__new__(vec3.__new__(v, 0, 0), vec3.__new__(0, v, 0), vec3.__new__(0, 0, v))
    } else {
      const x = vec3.__new__(num(b[0] ?? 0), num(b[1] ?? 0), num(b[2] ?? 0))
      const y = vec3.__new__(num(b[3] ?? 0), num(b[4] ?? 0), num(b[5] ?? 0))
      const z = vec3.__new__(num(b[6] ?? 0), num(b[7] ?? 0), num(b[8] ?? 0))
      return mat3.__new__(x, y, z)
    }
  } catch(e) {
    throw new Error(`[mat3] Cannot coerce arguments to mat3`, { cause: e })
  }
}

/**
 * Allocates a fresh matrix shell from exact column vectors without checks or coercion.
 * Column references are retained directly; columns are not cloned.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.mat3
 * @static
 * @param {hgVec3} x - Column x, retained by reference.
 * @param {hgVec3} y - Column y, retained by reference.
 * @param {hgVec3} z - Column z, retained by reference.
 * @returns {hgMat3} Result of construction, inspection, or conversion.
 */
mat3.__new__ = function(x, y, z) {
  return { __type__: __mat3__, x, y, z };
}

/**
 * Asserts the explicit mat3 predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.mat3
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
mat3.__assert__ = function(a) {
  if (!mat3.__is__(a)) throw new Error(`[mat3] Expected mat3, received ${a} instead`);
}

/**
 * Tests for a non-null object with the mat3 tag; does not validate its components.
 *
 * @function __is__
 * @memberof hg.mat3
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
mat3.__is__ = function(a) {
  return typeof a === "object" && a !== null && a.__type__ === __mat3__
}

/**
 * Converts a trusted mat3 value to string; skips input validation.
 * Columns appear in storage order, enclosed in angle brackets.
 *
 * @function __str__
 * @memberof hg.mat3
 * @static
 * @param {hgMat3} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
mat3.__str__ = function(a) {
  return `<${str(a.x)}, ${str(a.y)}, ${str(a.z)}>`
}

/**
 * Converts a trusted mat3 value to boolean; skips input validation.
 * True when at least one column has a nonzero component.
 *
 * @function __bool__
 * @memberof hg.mat3
 * @static
 * @param {hgMat3} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
mat3.__bool__ = function(a) {
  return bool(a.x) || bool(a.y) || bool(a.z)
}

/**
 * Constructs a 4x4 matrix with named vector columns.
 * Recursively flattened values fill columns in order. A single flattened value fills only
 * the diagonal. Missing/nullish entries become zero, and extra values are ignored.
 * Current behavior: only each column's first component is converted with num;
 * the other components are stored as supplied after nullish defaults.
 *
 * @function mat4
 * @memberof hg
 * @static
 * @param {...*} a - Values or nested lists/vectors/matrices to flatten.
 * @returns {hgMat4} Constructed or coerced value.
 * @throws {Error} If argument count, type detection, or required coercion fails.
 * @example
 * hg.mat4(1); // identity matrix
 */
const mat4 = types[__mat4__] = function(...a) {
  try {
    const b = __flat__(...a)
    if (b.length === 1) {
      const v = num(b[0] ?? 0)
      return mat4.__new__(
        vec4.__new__(v, 0, 0, 0),
        vec4.__new__(0, v, 0, 0),
        vec4.__new__(0, 0, v, 0),
        vec4.__new__(0, 0, 0, v)
      )
    } else {
      const x = vec4.__new__(num(b[0]  ?? 0), num(b[1]  ?? 0), num(b[2]  ?? 0), num(b[3]  ?? 0))
      const y = vec4.__new__(num(b[4]  ?? 0), num(b[5]  ?? 0), num(b[6]  ?? 0), num(b[7]  ?? 0))
      const z = vec4.__new__(num(b[8]  ?? 0), num(b[9]  ?? 0), num(b[10] ?? 0), num(b[11] ?? 0))
      const w = vec4.__new__(num(b[12] ?? 0), num(b[13] ?? 0), num(b[14] ?? 0), num(b[15] ?? 0))
      return mat4.__new__(x, y, z, w)
    }
  } catch(e) {
    throw new Error(`[mat4] Cannot coerce arguments to mat4`, { cause: e })
  }
}

/**
 * Allocates a fresh matrix shell from exact column vectors without checks or coercion.
 * Column references are retained directly; columns are not cloned.
 * Does not accept an output object.
 *
 * @function __new__
 * @memberof hg.mat4
 * @static
 * @param {hgVec4} x - Column x, retained by reference.
 * @param {hgVec4} y - Column y, retained by reference.
 * @param {hgVec4} z - Column z, retained by reference.
 * @param {hgVec4} w - Column w, retained by reference.
 * @returns {hgMat4} Result of construction, inspection, or conversion.
 */
mat4.__new__ = function(x, y, z, w) {
  return { __type__: __mat4__, x, y, z, w };
}



/**
 * Asserts the explicit mat4 predicate; performs no component validation.
 *
 * @function __assert__
 * @memberof hg.mat4
 * @static
 * @param {*} a - Value to inspect.
 * @returns {void} Returns normally when the predicate passes.
 * @throws {Error} If the explicit predicate rejects the value.
 */
mat4.__assert__ = function(a) {
  if (!mat4.__is__(a)) throw new Error(`[mat4] Expected mat4, received ${a} instead`);
}

/**
 * Tests for a non-null object with the mat4 tag; does not validate its components.
 *
 * @function __is__
 * @memberof hg.mat4
 * @static
 * @param {*} a - Value to inspect.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
mat4.__is__ = function(a) {
  return typeof a === "object" && a !== null && a.__type__ === __mat4__
}

/**
 * Converts a trusted mat4 value to string; skips input validation.
 * Columns appear in storage order, enclosed in angle brackets.
 *
 * @function __str__
 * @memberof hg.mat4
 * @static
 * @param {hgMat4} a - Trusted input value.
 * @returns {string} Result of construction, inspection, or conversion.
 */
mat4.__str__ = function(a) {
  return `<${str(a.x)}, ${str(a.y)}, ${str(a.z)}, ${str(a.w)}>`
}

/**
 * Converts a trusted mat4 value to boolean; skips input validation.
 * True when at least one column has a nonzero component.
 *
 * @function __bool__
 * @memberof hg.mat4
 * @static
 * @param {hgMat4} a - Trusted input value.
 * @returns {boolean} Result of construction, inspection, or conversion.
 */
mat4.__bool__ = function(a) {
  return bool(a.x) || bool(a.y) || bool(a.z) || bool(a.w)
}

  const core = { __nil__, __num__, __str__, __bool__, __list__, __dict__, __vec2__, __vec3__, __vec4__, __mat2__, __mat3__, __mat4__, type, types, nil, num, str, bool, list, dict, vec2, vec3, vec4, mat2, mat3, mat4, __flat__ };
  Object.defineProperty(hg, "__core__", { value: core });
  Object.assign(hg, {
    type, types, nil, num, str, bool,
    list, dict, vec2, vec3, vec4, mat2,
    mat3, mat4
  });
})(globalThis.hg);
