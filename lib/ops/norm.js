/**
 * @file Compatibility dispatcher: Normalizes a vector to unit magnitude; the zero vector remains zero.
 * Load after hg.js and lib/types.js. Registers hg.norm as a direct dispatcher into typed namespace children.
 * Part of the standalone dist/hg.js bundle.
 * Typed namespace methods must be registered first; this file only dispatches to them.
 */

/**
 * Registers this file's public API on the shared namespace without leaking local names.
 * @private
 * @param {hgNamespace} hg - Namespace initialized by hg.js.
 * @returns {void} Attaches constructors or operations to hg.
 */
(function(hg) {
  const { __nil__, __num__, __str__, __bool__, __list__, __dict__, __vec2__, __vec3__, __vec4__, __mat2__, __mat3__, __mat4__, type, num, vec2, vec3, vec4, mat2, mat3, mat4 } = hg.__core__;

/**
 * Normalizes a vector to unit magnitude; the zero vector remains zero.
 * Uses direct division by Math.hypot, including for very small or large finite inputs.
 * All result components are captured before writes. out must have the result shape;
 * it may alias an input when that input has the same shape.
 *
 * @function norm
 * @memberof hg
 * @static
 * @param {hgVector} a - Input value.
 * @param {hgVector} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgVector} Fresh value or the supplied out object.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.norm(hg.vec2(3, 4)); // <0.6, 0.8>
 */
function norm(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[norm] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __vec2__: return vec2.norm.__v__(a, out)
    case __vec3__: return vec3.norm.__v__(a, out)
    case __vec4__: return vec4.norm.__v__(a, out)
  }
  throw new Error(`[norm] Unsupported operand types`);
}

  Object.assign(hg, { norm });
})(globalThis.hg);
