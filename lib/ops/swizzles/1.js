/**
 * @file 1-component xyzw swizzles, with explicit dispatchers and trusted specializations.
 * Scalar selections return a number. Longer selections allocate a matching vector or reuse out.
 * Source components are captured before writes, including repeated/reordered in-place selections.
 * Typed namespace methods must be registered first; this file only dispatches to them.
 */

/**
 * Registers this file's public API on the shared namespace without leaking local names.
 * @private
 * @param {hgNamespace} hg - Namespace initialized by hg.js.
 * @returns {void} Attaches constructors or operations to hg.
 */
(function(hg) {
  const { type, __num__, __vec2__, __vec3__, __vec4__ } = hg.__core__;
  const { vec } = hg;

/**
 * Selects a.x in that order as a scalar.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function x
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @returns {number} Selected numeric component.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function x(a) {
  if (arguments.length !== 1) throw new Error(`[x] Expected 1 argument, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.x.__n__(a)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.x.__v__(a)
  }
  throw new Error(`[x] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y in that order as a scalar.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function y
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @returns {number} Selected numeric component.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function y(a) {
  if (arguments.length !== 1) throw new Error(`[y] Expected 1 argument, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.y.__n__(a)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.y.__v__(a)
  }
  throw new Error(`[y] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z in that order as a scalar.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function z
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @returns {number} Selected numeric component.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function z(a) {
  if (arguments.length !== 1) throw new Error(`[z] Expected 1 argument, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.z.__n__(a)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.z.__v__(a)
  }
  throw new Error(`[z] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w in that order as a scalar.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function w
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @returns {number} Selected numeric component.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function w(a) {
  if (arguments.length !== 1) throw new Error(`[w] Expected 1 argument, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.w.__n__(a)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.w.__v__(a)
  }
  throw new Error(`[w] Cannot swizzle ${ta}`);
}

  Object.assign(hg, {
    x, y, z, w
  });
})(globalThis.hg);
