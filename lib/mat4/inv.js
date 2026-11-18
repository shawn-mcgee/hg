/**
 * @file mat4.inv: Computes reciprocals or a matrix inverse.
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
 * @memberof hg.mat4
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
function inv(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[mat4.inv] Expected 1 to 2 arguments`);
  const ta = type(a)
  switch(ta) {
    case __mat4__:
      return inv.__m__(a, out)
  }
  throw new Error(`[mat4.inv] Unsupported operand types or matrix dimensions`);
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
 * @memberof hg.mat4.inv
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
inv.__m__ = function(a, out) {
  // Six column-pair minors for each half of the matrix serve all 16 cofactors.
  const s0 = a.x.x * a.y.y - a.y.x * a.x.y
  const s1 = a.x.x * a.z.y - a.z.x * a.x.y
  const s2 = a.x.x * a.w.y - a.w.x * a.x.y
  const s3 = a.y.x * a.z.y - a.z.x * a.y.y
  const s4 = a.y.x * a.w.y - a.w.x * a.y.y
  const s5 = a.z.x * a.w.y - a.w.x * a.z.y

  const t0 = a.x.z * a.y.w - a.y.z * a.x.w
  const t1 = a.x.z * a.z.w - a.z.z * a.x.w
  const t2 = a.x.z * a.w.w - a.w.z * a.x.w
  const t3 = a.y.z * a.z.w - a.z.z * a.y.w
  const t4 = a.y.z * a.w.w - a.w.z * a.y.w
  const t5 = a.z.z * a.w.w - a.w.z * a.z.w

  // Cofactors are transposed into the inverse's named columns.
  const c00 = a.y.y * t5 - a.z.y * t4 + a.w.y * t3
  const c01 = -(a.x.y * t5 - a.z.y * t2 + a.w.y * t1)
  const c02 = a.x.y * t4 - a.y.y * t2 + a.w.y * t0
  const c03 = -(a.x.y * t3 - a.y.y * t1 + a.z.y * t0)
  const c10 = -(a.y.x * t5 - a.z.x * t4 + a.w.x * t3)
  const c11 = a.x.x * t5 - a.z.x * t2 + a.w.x * t1
  const c12 = -(a.x.x * t4 - a.y.x * t2 + a.w.x * t0)
  const c13 = a.x.x * t3 - a.y.x * t1 + a.z.x * t0
  const c20 = a.y.w * s5 - a.z.w * s4 + a.w.w * s3
  const c21 = -(a.x.w * s5 - a.z.w * s2 + a.w.w * s1)
  const c22 = a.x.w * s4 - a.y.w * s2 + a.w.w * s0
  const c23 = -(a.x.w * s3 - a.y.w * s1 + a.z.w * s0)
  const c30 = -(a.y.z * s5 - a.z.z * s4 + a.w.z * s3)
  const c31 = a.x.z * s5 - a.z.z * s2 + a.w.z * s1
  const c32 = -(a.x.z * s4 - a.y.z * s2 + a.w.z * s0)
  const c33 = a.x.z * s3 - a.y.z * s1 + a.z.z * s0

  const d = a.x.x * c00 + a.y.x * c01 + a.z.x * c02 + a.w.x * c03
  if (d === 0) throw new Error(`[inv] Cannot invert singular mat4`);
  const r = 1 / d
  const xx = c00 * r
  const xy = c01 * r
  const xz = c02 * r
  const xw = c03 * r
  const yx = c10 * r
  const yy = c11 * r
  const yz = c12 * r
  const yw = c13 * r
  const zx = c20 * r
  const zy = c21 * r
  const zz = c22 * r
  const zw = c23 * r
  const wx = c30 * r
  const wy = c31 * r
  const wz = c32 * r
  const ww = c33 * r
  if (out === undefined) return mat4.__new__(
    vec4.__new__(xx, xy, xz, xw),
    vec4.__new__(yx, yy, yz, yw),
    vec4.__new__(zx, zy, zz, zw),
    vec4.__new__(wx, wy, wz, ww)
  )
  out.x.x = xx
  out.x.y = xy
  out.x.z = xz
  out.x.w = xw
  out.y.x = yx
  out.y.y = yy
  out.y.z = yz
  out.y.w = yw
  out.z.x = zx
  out.z.y = zy
  out.z.z = zz
  out.z.w = zw
  out.w.x = wx
  out.w.y = wy
  out.w.z = wz
  out.w.w = ww
  return out
}

  mat4.inv = inv;
})(globalThis.hg);
