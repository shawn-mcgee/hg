/**
 * @file mat3.inv: Computes reciprocals or a matrix inverse.
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
 * Computes reciprocals or a matrix inverse.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function inv
 * @memberof hg.mat3
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
function inv(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[mat3.inv] Expected 1 to 2 arguments`);
  const ta = type(a)
  switch(ta) {
    case __mat3__:
      return inv.__m__(a, out)
  }
  throw new Error(`[mat3.inv] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes reciprocals or a matrix inverse.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __m__
 * @memberof hg.mat3.inv
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
inv.__m__ = function(a, out) {
  // Cofactors are transposed into the inverse's named columns.
  const c00 = a.y.y * a.z.z - a.z.y * a.y.z
  const c01 = -(a.x.y * a.z.z - a.z.y * a.x.z)
  const c02 = a.x.y * a.y.z - a.y.y * a.x.z
  const c10 = -(a.y.x * a.z.z - a.z.x * a.y.z)
  const c11 = a.x.x * a.z.z - a.z.x * a.x.z
  const c12 = -(a.x.x * a.y.z - a.y.x * a.x.z)
  const c20 = a.y.x * a.z.y - a.z.x * a.y.y
  const c21 = -(a.x.x * a.z.y - a.z.x * a.x.y)
  const c22 = a.x.x * a.y.y - a.y.x * a.x.y

  const d = a.x.x * c00 + a.y.x * c01 + a.z.x * c02
  if (d === 0) throw new Error(`[inv] Cannot invert singular mat3`);
  const r = 1 / d
  const xx = c00 * r
  const xy = c01 * r
  const xz = c02 * r
  const yx = c10 * r
  const yy = c11 * r
  const yz = c12 * r
  const zx = c20 * r
  const zy = c21 * r
  const zz = c22 * r
  if (out === undefined) return mat3.__new__(
    vec3.__new__(xx, xy, xz),
    vec3.__new__(yx, yy, yz),
    vec3.__new__(zx, zy, zz)
  )
  out.x.x = xx
  out.x.y = xy
  out.x.z = xz
  out.y.x = yx
  out.y.y = yy
  out.y.z = yz
  out.z.x = zx
  out.z.y = zy
  out.z.z = zz
  return out
}

  mat3.inv = inv;
})(globalThis.hg);
