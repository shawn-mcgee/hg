/**
 * @file mat3.div: Divides by a scalar or right-multiplies by a matrix inverse.
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
 * @memberof hg.mat3
 * @static
 * @param {number|hgMat3} a - Operand projected into the namespace dimension.
 * @param {number|hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
function div(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[mat3.div] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __mat3__:
          return div.__nm__(a, b, out)
      } break;
    case __mat3__:
      switch(tb) {
        case __num__:
          return div.__mn__(a, b, out)
        case __mat3__:
          return div.__mm__(a, b, out)
      } break;
  }
  throw new Error(`[mat3.div] Unsupported operand types or matrix dimensions`);
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
 * @memberof hg.mat3.div
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__nm__ = function(a, b, out) {
  // Compute inverse components directly, avoiding a temporary matrix.
  // Cofactors are transposed into the inverse's named columns.
  const c00 = b.y.y * b.z.z - b.z.y * b.y.z
  const c01 = -(b.x.y * b.z.z - b.z.y * b.x.z)
  const c02 = b.x.y * b.y.z - b.y.y * b.x.z
  const c10 = -(b.y.x * b.z.z - b.z.x * b.y.z)
  const c11 = b.x.x * b.z.z - b.z.x * b.x.z
  const c12 = -(b.x.x * b.y.z - b.y.x * b.x.z)
  const c20 = b.y.x * b.z.y - b.z.x * b.y.y
  const c21 = -(b.x.x * b.z.y - b.z.x * b.x.y)
  const c22 = b.x.x * b.y.y - b.y.x * b.x.y

  const d = b.x.x * c00 + b.y.x * c01 + b.z.x * c02
  if (d === 0) throw new Error(`[div] Cannot invert singular mat3`);
  const r = 1 / d
  const ixx = c00 * r
  const ixy = c01 * r
  const ixz = c02 * r
  const iyx = c10 * r
  const iyy = c11 * r
  const iyz = c12 * r
  const izx = c20 * r
  const izy = c21 * r
  const izz = c22 * r
  const xx = a * ixx
  const xy = a * ixy
  const xz = a * ixz
  const yx = a * iyx
  const yy = a * iyy
  const yz = a * iyz
  const zx = a * izx
  const zy = a * izy
  const zz = a * izz
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
 * @memberof hg.mat3.div
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__mn__ = function(a, b, out) {
  const xx = a.x.x / b
  const xy = a.x.y / b
  const xz = a.x.z / b
  const yx = a.y.x / b
  const yy = a.y.y / b
  const yz = a.y.z / b
  const zx = a.z.x / b
  const zy = a.z.y / b
  const zz = a.z.z / b
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
 * @memberof hg.mat3.div
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__mm__ = function(a, b, out) {
  // Compute inverse components directly, avoiding a temporary matrix.
  // Cofactors are transposed into the inverse's named columns.
  const c00 = b.y.y * b.z.z - b.z.y * b.y.z
  const c01 = -(b.x.y * b.z.z - b.z.y * b.x.z)
  const c02 = b.x.y * b.y.z - b.y.y * b.x.z
  const c10 = -(b.y.x * b.z.z - b.z.x * b.y.z)
  const c11 = b.x.x * b.z.z - b.z.x * b.x.z
  const c12 = -(b.x.x * b.y.z - b.y.x * b.x.z)
  const c20 = b.y.x * b.z.y - b.z.x * b.y.y
  const c21 = -(b.x.x * b.z.y - b.z.x * b.x.y)
  const c22 = b.x.x * b.y.y - b.y.x * b.x.y

  const d = b.x.x * c00 + b.y.x * c01 + b.z.x * c02
  if (d === 0) throw new Error(`[div] Cannot invert singular mat3`);
  const r = 1 / d
  const ixx = c00 * r
  const ixy = c01 * r
  const ixz = c02 * r
  const iyx = c10 * r
  const iyy = c11 * r
  const iyz = c12 * r
  const izx = c20 * r
  const izy = c21 * r
  const izz = c22 * r
  const xx = a.x.x * ixx + a.y.x * ixy + a.z.x * ixz
  const xy = a.x.y * ixx + a.y.y * ixy + a.z.y * ixz
  const xz = a.x.z * ixx + a.y.z * ixy + a.z.z * ixz
  const yx = a.x.x * iyx + a.y.x * iyy + a.z.x * iyz
  const yy = a.x.y * iyx + a.y.y * iyy + a.z.y * iyz
  const yz = a.x.z * iyx + a.y.z * iyy + a.z.z * iyz
  const zx = a.x.x * izx + a.y.x * izy + a.z.x * izz
  const zy = a.x.y * izx + a.y.y * izy + a.z.y * izz
  const zz = a.x.z * izx + a.y.z * izy + a.z.z * izz
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

  mat3.div = div;
})(globalThis.hg);
