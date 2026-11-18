/**
 * @file Compatibility dispatcher: Appends a homogeneous coordinate of one: vec2 to vec3, or vec3 to vec4.
 * Load after hg.js and lib/types.js. Registers hg.hom as a direct dispatcher into typed namespace children.
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
 * Appends a homogeneous coordinate of one: vec2 to vec3, or vec3 to vec4.
 * All result components are captured before writes. out must have the result shape;
 * it must be a vec3 for vec2 input, or a vec4 for vec3 input.
 *
 * @function hom
 * @memberof hg
 * @static
 * @param {hgVec2|hgVec3} a - Input value.
 * @param {hgVec3|hgVec4} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgVec3|hgVec4} Fresh value or the supplied out object.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.hom(hg.vec3(2, 3, 4)); // <2, 3, 4, 1>
 */
function hom(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[hom] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __vec2__: return vec2.hom.__v__(a, out)
    case __vec3__: return vec3.hom.__v__(a, out)
  }
  throw new Error(`[hom] Unsupported operand types`);
}

  Object.assign(hg, { hom });
})(globalThis.hg);
