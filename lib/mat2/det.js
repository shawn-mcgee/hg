/**
 * @file mat2.det: Computes the determinant.
 * Loads after hg.js and lib/types.js; the namespace fixes computation dimension.
 */
/**
 * Registers the typed operation without exposing implementation names.
 * @private
 * @param {hgNamespace} hg - Shared namespace.
 * @returns {void} Adds one operation to the constructor namespace.
 */
(function(hg) {
  const { __num__, __vec2__, __vec3__, __vec4__, __mat2__, __mat3__, __mat4__, type, num, vec2, vec3, vec4, mat2, mat3, mat4 } = hg.__core__;

/**
 * Computes the determinant.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 *
 * @function det
 * @memberof hg.mat2
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function det(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[mat2.det] Expected 1 to 1 arguments`);
  const ta = type(a)
  switch(ta) {
    case __mat2__:
      return det.__m__(a)
  }
  throw new Error(`[mat2.det] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes the determinant.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 *
 * @function __m__
 * @memberof hg.mat2.det
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
det.__m__ = function(a) {
  return a.x.x * a.y.y - a.y.x * a.x.y
}

  mat2.det = det;
})(globalThis.hg);
