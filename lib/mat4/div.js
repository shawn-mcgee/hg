/**
 * @file mat4.div: Divides by a scalar or right-multiplies by a matrix inverse.
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
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function div
 * @memberof hg.mat4
 * @static
 * @param {number|hgMat4} a - Operand projected into the namespace dimension.
 * @param {number|hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
function div(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[mat4.div] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __mat4__:
          return div.__nm__(a, b, out)
      } break;
    case __mat4__:
      switch(tb) {
        case __num__:
          return div.__mn__(a, b, out)
        case __mat4__:
          return div.__mm__(a, b, out)
      } break;
  }
  throw new Error(`[mat4.div] Unsupported operand types or matrix dimensions`);
}

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nm__
 * @memberof hg.mat4.div
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__nm__ = function(a, b, out) {
  // Compute inverse components directly, avoiding a temporary matrix.
  // Six column-pair minors for each half of the matrix serve all 16 cofactors.
  const s0 = b.x.x * b.y.y - b.y.x * b.x.y
  const s1 = b.x.x * b.z.y - b.z.x * b.x.y
  const s2 = b.x.x * b.w.y - b.w.x * b.x.y
  const s3 = b.y.x * b.z.y - b.z.x * b.y.y
  const s4 = b.y.x * b.w.y - b.w.x * b.y.y
  const s5 = b.z.x * b.w.y - b.w.x * b.z.y

  const t0 = b.x.z * b.y.w - b.y.z * b.x.w
  const t1 = b.x.z * b.z.w - b.z.z * b.x.w
  const t2 = b.x.z * b.w.w - b.w.z * b.x.w
  const t3 = b.y.z * b.z.w - b.z.z * b.y.w
  const t4 = b.y.z * b.w.w - b.w.z * b.y.w
  const t5 = b.z.z * b.w.w - b.w.z * b.z.w

  // Cofactors are transposed into the inverse's named columns.
  const c00 = b.y.y * t5 - b.z.y * t4 + b.w.y * t3
  const c01 = -(b.x.y * t5 - b.z.y * t2 + b.w.y * t1)
  const c02 = b.x.y * t4 - b.y.y * t2 + b.w.y * t0
  const c03 = -(b.x.y * t3 - b.y.y * t1 + b.z.y * t0)
  const c10 = -(b.y.x * t5 - b.z.x * t4 + b.w.x * t3)
  const c11 = b.x.x * t5 - b.z.x * t2 + b.w.x * t1
  const c12 = -(b.x.x * t4 - b.y.x * t2 + b.w.x * t0)
  const c13 = b.x.x * t3 - b.y.x * t1 + b.z.x * t0
  const c20 = b.y.w * s5 - b.z.w * s4 + b.w.w * s3
  const c21 = -(b.x.w * s5 - b.z.w * s2 + b.w.w * s1)
  const c22 = b.x.w * s4 - b.y.w * s2 + b.w.w * s0
  const c23 = -(b.x.w * s3 - b.y.w * s1 + b.z.w * s0)
  const c30 = -(b.y.z * s5 - b.z.z * s4 + b.w.z * s3)
  const c31 = b.x.z * s5 - b.z.z * s2 + b.w.z * s1
  const c32 = -(b.x.z * s4 - b.y.z * s2 + b.w.z * s0)
  const c33 = b.x.z * s3 - b.y.z * s1 + b.z.z * s0

  const d = b.x.x * c00 + b.y.x * c01 + b.z.x * c02 + b.w.x * c03
  if (d === 0) throw new Error(`[div] Cannot invert singular mat4`);
  const r = 1 / d
  const ixx = c00 * r
  const ixy = c01 * r
  const ixz = c02 * r
  const ixw = c03 * r
  const iyx = c10 * r
  const iyy = c11 * r
  const iyz = c12 * r
  const iyw = c13 * r
  const izx = c20 * r
  const izy = c21 * r
  const izz = c22 * r
  const izw = c23 * r
  const iwx = c30 * r
  const iwy = c31 * r
  const iwz = c32 * r
  const iww = c33 * r
  const xx = a * ixx
  const xy = a * ixy
  const xz = a * ixz
  const xw = a * ixw
  const yx = a * iyx
  const yy = a * iyy
  const yz = a * iyz
  const yw = a * iyw
  const zx = a * izx
  const zy = a * izy
  const zz = a * izz
  const zw = a * izw
  const wx = a * iwx
  const wy = a * iwy
  const wz = a * iwz
  const ww = a * iww
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

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mn__
 * @memberof hg.mat4.div
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__mn__ = function(a, b, out) {
  const xx = a.x.x / b
  const xy = a.x.y / b
  const xz = a.x.z / b
  const xw = a.x.w / b
  const yx = a.y.x / b
  const yy = a.y.y / b
  const yz = a.y.z / b
  const yw = a.y.w / b
  const zx = a.z.x / b
  const zy = a.z.y / b
  const zz = a.z.z / b
  const zw = a.z.w / b
  const wx = a.w.x / b
  const wy = a.w.y / b
  const wz = a.w.z / b
  const ww = a.w.w / b
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

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mm__
 * @memberof hg.mat4.div
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__mm__ = function(a, b, out) {
  // Compute inverse components directly, avoiding a temporary matrix.
  // Six column-pair minors for each half of the matrix serve all 16 cofactors.
  const s0 = b.x.x * b.y.y - b.y.x * b.x.y
  const s1 = b.x.x * b.z.y - b.z.x * b.x.y
  const s2 = b.x.x * b.w.y - b.w.x * b.x.y
  const s3 = b.y.x * b.z.y - b.z.x * b.y.y
  const s4 = b.y.x * b.w.y - b.w.x * b.y.y
  const s5 = b.z.x * b.w.y - b.w.x * b.z.y

  const t0 = b.x.z * b.y.w - b.y.z * b.x.w
  const t1 = b.x.z * b.z.w - b.z.z * b.x.w
  const t2 = b.x.z * b.w.w - b.w.z * b.x.w
  const t3 = b.y.z * b.z.w - b.z.z * b.y.w
  const t4 = b.y.z * b.w.w - b.w.z * b.y.w
  const t5 = b.z.z * b.w.w - b.w.z * b.z.w

  // Cofactors are transposed into the inverse's named columns.
  const c00 = b.y.y * t5 - b.z.y * t4 + b.w.y * t3
  const c01 = -(b.x.y * t5 - b.z.y * t2 + b.w.y * t1)
  const c02 = b.x.y * t4 - b.y.y * t2 + b.w.y * t0
  const c03 = -(b.x.y * t3 - b.y.y * t1 + b.z.y * t0)
  const c10 = -(b.y.x * t5 - b.z.x * t4 + b.w.x * t3)
  const c11 = b.x.x * t5 - b.z.x * t2 + b.w.x * t1
  const c12 = -(b.x.x * t4 - b.y.x * t2 + b.w.x * t0)
  const c13 = b.x.x * t3 - b.y.x * t1 + b.z.x * t0
  const c20 = b.y.w * s5 - b.z.w * s4 + b.w.w * s3
  const c21 = -(b.x.w * s5 - b.z.w * s2 + b.w.w * s1)
  const c22 = b.x.w * s4 - b.y.w * s2 + b.w.w * s0
  const c23 = -(b.x.w * s3 - b.y.w * s1 + b.z.w * s0)
  const c30 = -(b.y.z * s5 - b.z.z * s4 + b.w.z * s3)
  const c31 = b.x.z * s5 - b.z.z * s2 + b.w.z * s1
  const c32 = -(b.x.z * s4 - b.y.z * s2 + b.w.z * s0)
  const c33 = b.x.z * s3 - b.y.z * s1 + b.z.z * s0

  const d = b.x.x * c00 + b.y.x * c01 + b.z.x * c02 + b.w.x * c03
  if (d === 0) throw new Error(`[div] Cannot invert singular mat4`);
  const r = 1 / d
  const ixx = c00 * r
  const ixy = c01 * r
  const ixz = c02 * r
  const ixw = c03 * r
  const iyx = c10 * r
  const iyy = c11 * r
  const iyz = c12 * r
  const iyw = c13 * r
  const izx = c20 * r
  const izy = c21 * r
  const izz = c22 * r
  const izw = c23 * r
  const iwx = c30 * r
  const iwy = c31 * r
  const iwz = c32 * r
  const iww = c33 * r
  const xx = a.x.x * ixx + a.y.x * ixy + a.z.x * ixz + a.w.x * ixw
  const xy = a.x.y * ixx + a.y.y * ixy + a.z.y * ixz + a.w.y * ixw
  const xz = a.x.z * ixx + a.y.z * ixy + a.z.z * ixz + a.w.z * ixw
  const xw = a.x.w * ixx + a.y.w * ixy + a.z.w * ixz + a.w.w * ixw
  const yx = a.x.x * iyx + a.y.x * iyy + a.z.x * iyz + a.w.x * iyw
  const yy = a.x.y * iyx + a.y.y * iyy + a.z.y * iyz + a.w.y * iyw
  const yz = a.x.z * iyx + a.y.z * iyy + a.z.z * iyz + a.w.z * iyw
  const yw = a.x.w * iyx + a.y.w * iyy + a.z.w * iyz + a.w.w * iyw
  const zx = a.x.x * izx + a.y.x * izy + a.z.x * izz + a.w.x * izw
  const zy = a.x.y * izx + a.y.y * izy + a.z.y * izz + a.w.y * izw
  const zz = a.x.z * izx + a.y.z * izy + a.z.z * izz + a.w.z * izw
  const zw = a.x.w * izx + a.y.w * izy + a.z.w * izz + a.w.w * izw
  const wx = a.x.x * iwx + a.y.x * iwy + a.z.x * iwz + a.w.x * iww
  const wy = a.x.y * iwx + a.y.y * iwy + a.z.y * iwz + a.w.y * iww
  const wz = a.x.z * iwx + a.y.z * iwy + a.z.z * iwz + a.w.z * iww
  const ww = a.x.w * iwx + a.y.w * iwy + a.z.w * iwz + a.w.w * iww
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

  mat4.div = div;
})(globalThis.hg);
