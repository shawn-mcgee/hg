/**
 * @file mat4.det: Computes the determinant.
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
 * @memberof hg.mat4
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function det(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[mat4.det] Expected 1 to 1 arguments`);
  const ta = type(a)
  switch(ta) {
    case __mat4__:
      return det.__m__(a)
  }
  throw new Error(`[mat4.det] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes the determinant.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 *
 * @function __m__
 * @memberof hg.mat4.det
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
det.__m__ = function(a) {
  // Pair 2x2 minors from the first two rows with those from the last two.
  const s0 = a.x.x * a.y.y - a.y.x * a.x.y
  const s1 = a.x.x * a.z.y - a.z.x * a.x.y
  const s2 = a.x.x * a.w.y - a.w.x * a.x.y
  const s3 = a.y.x * a.z.y - a.z.x * a.y.y
  const s4 = a.y.x * a.w.y - a.w.x * a.y.y
  const s5 = a.z.x * a.w.y - a.w.x * a.z.y

  const c0 = a.x.z * a.y.w - a.y.z * a.x.w
  const c1 = a.x.z * a.z.w - a.z.z * a.x.w
  const c2 = a.x.z * a.w.w - a.w.z * a.x.w
  const c3 = a.y.z * a.z.w - a.z.z * a.y.w
  const c4 = a.y.z * a.w.w - a.w.z * a.y.w
  const c5 = a.z.z * a.w.w - a.w.z * a.z.w

  return s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0
}

  mat4.det = det;
})(globalThis.hg);
