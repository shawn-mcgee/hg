/**
 * @file Compatibility dispatcher: Calculates the right-handed cross product of two three-component vectors.
 * Load after hg.js and lib/types.js. Registers hg.cross as a direct dispatcher into typed namespace children.
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
 * Calculates the right-handed cross product of two three-component vectors.
 * All result components are captured before writes. out must have the result shape;
 * it may alias an input when that input has the same shape.
 *
 * @function cross
 * @memberof hg
 * @static
 * @param {hgVec3} a - Left operand.
 * @param {hgVec3} b - Right operand.
 * @param {hgVec3} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgVec3} Fresh value or the supplied out object.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.cross(hg.vec3(1, 0, 0), hg.vec3(0, 1, 0)); // <0, 0, 1>
 */
function cross(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[cross] Expected 2 or 3 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __vec3__: switch(tb) {
      case __vec3__: return vec3.cross.__vv__(a, b, out)
    } break;
  }
  throw new Error(`[cross] Unsupported operand types`);
}

  Object.assign(hg, { cross });
})(globalThis.hg);
