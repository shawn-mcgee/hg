/**
 * @file mat2.div: Divides by a scalar or right-multiplies by a matrix inverse.
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
 * @memberof hg.mat2
 * @static
 * @param {number|hgMat2} a - Operand projected into the namespace dimension.
 * @param {number|hgMat2} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
function div(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[mat2.div] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __mat2__:
          return div.__nm__(a, b, out)
      } break;
    case __mat2__:
      switch(tb) {
        case __num__:
          return div.__mn__(a, b, out)
        case __mat2__:
          return div.__mm__(a, b, out)
      } break;
  }
  throw new Error(`[mat2.div] Unsupported operand types or matrix dimensions`);
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
 * @memberof hg.mat2.div
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat2} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__nm__ = function(a, b, out) {
  // Compute inverse components directly, avoiding a temporary matrix.
  // Cofactors are transposed into the inverse's named columns.
  const c00 = b.y.y
  const c01 = -(b.x.y)
  const c10 = -(b.y.x)
  const c11 = b.x.x

  const d = b.x.x * c00 + b.y.x * c01
  if (d === 0) throw new Error(`[div] Cannot invert singular mat2`);
  const r = 1 / d
  const ixx = c00 * r
  const ixy = c01 * r
  const iyx = c10 * r
  const iyy = c11 * r
  const xx = a * ixx
  const xy = a * ixy
  const yx = a * iyx
  const yy = a * iyy
  if (out === undefined) return mat2.__new__(
    vec2.__new__(xx, xy),
    vec2.__new__(yx, yy)
  )
  out.x.x = xx
  out.x.y = xy
  out.y.x = yx
  out.y.y = yy
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
 * @memberof hg.mat2.div
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__mn__ = function(a, b, out) {
  const xx = a.x.x / b
  const xy = a.x.y / b
  const yx = a.y.x / b
  const yy = a.y.y / b
  if (out === undefined) return mat2.__new__(
    vec2.__new__(xx, xy),
    vec2.__new__(yx, yy)
  )
  out.x.x = xx
  out.x.y = xy
  out.y.x = yx
  out.y.y = yy
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
 * @memberof hg.mat2.div
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @param {hgMat2} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__mm__ = function(a, b, out) {
  // Compute inverse components directly, avoiding a temporary matrix.
  // Cofactors are transposed into the inverse's named columns.
  const c00 = b.y.y
  const c01 = -(b.x.y)
  const c10 = -(b.y.x)
  const c11 = b.x.x

  const d = b.x.x * c00 + b.y.x * c01
  if (d === 0) throw new Error(`[div] Cannot invert singular mat2`);
  const r = 1 / d
  const ixx = c00 * r
  const ixy = c01 * r
  const iyx = c10 * r
  const iyy = c11 * r
  const xx = a.x.x * ixx + a.y.x * ixy
  const xy = a.x.y * ixx + a.y.y * ixy
  const yx = a.x.x * iyx + a.y.x * iyy
  const yy = a.x.y * iyx + a.y.y * iyy
  if (out === undefined) return mat2.__new__(
    vec2.__new__(xx, xy),
    vec2.__new__(yx, yy)
  )
  out.x.x = xx
  out.x.y = xy
  out.y.x = yx
  out.y.y = yy
  return out
}

  mat2.div = div;
})(globalThis.hg);
