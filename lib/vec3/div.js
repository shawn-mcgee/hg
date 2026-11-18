/**
 * @file vec3.div: Divides by a scalar or right-multiplies by a matrix inverse.
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
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function div
 * @memberof hg.vec3
 * @static
 * @param {number|hgVector|hgMatrix} a - Operand projected into the namespace dimension.
 * @param {number|hgVector|hgMatrix} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
function div(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[vec3.div] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return div.__nn__(a, b, out)
        case __mat3__:
          return div.__nm__(a, b, out)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return div.__vn__(a, b, out)
        case __mat3__:
          return div.__vm__(a, b, out)
      } break;
  }
  throw new Error(`[vec3.div] Unsupported operand types or matrix dimensions`);
}

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nn__
 * @memberof hg.vec3.div
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__nn__ = function(a, b, out) {
  const x = a / b
  const y = a / b
  const z = a / b
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vn__
 * @memberof hg.vec3.div
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__vn__ = function(a, b, out) {
  const x = a.x / b
  const y = a.y / b
  const z = (a.z ?? 0) / b
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nm__
 * @memberof hg.vec3.div
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__nm__ = function(a, b, out) {
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
  if (d === 0) throw new Error(`[vec3.div] Cannot invert singular mat3`);
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
  const x = a * ixx + a * ixy + a * ixz
  const y = a * iyx + a * iyy + a * iyz
  const z = a * izx + a * izy + a * izz
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vm__
 * @memberof hg.vec3.div
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__vm__ = function(a, b, out) {
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
  if (d === 0) throw new Error(`[vec3.div] Cannot invert singular mat3`);
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
  const x = a.x * ixx + a.y * ixy + (a.z ?? 0) * ixz
  const y = a.x * iyx + a.y * iyy + (a.z ?? 0) * iyz
  const z = a.x * izx + a.y * izy + (a.z ?? 0) * izz
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

  vec3.div = div;
})(globalThis.hg);
