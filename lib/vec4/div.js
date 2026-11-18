/**
 * @file vec4.div: Divides by a scalar or right-multiplies by a matrix inverse.
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
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function div
 * @memberof hg.vec4
 * @static
 * @param {number|hgVector|hgMatrix} a - Operand projected into the namespace dimension.
 * @param {number|hgVector|hgMatrix} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
function div(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[vec4.div] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return div.__nn__(a, b, out)
        case __mat4__:
          return div.__nm__(a, b, out)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return div.__vn__(a, b, out)
        case __mat4__:
          return div.__vm__(a, b, out)
      } break;
  }
  throw new Error(`[vec4.div] Unsupported operand types or matrix dimensions`);
}

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nn__
 * @memberof hg.vec4.div
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__nn__ = function(a, b, out) {
  const x = a / b
  const y = a / b
  const z = a / b
  const w = a / b
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vn__
 * @memberof hg.vec4.div
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__vn__ = function(a, b, out) {
  const x = a.x / b
  const y = a.y / b
  const z = (a.z ?? 0) / b
  const w = (a.w ?? 0) / b
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nm__
 * @memberof hg.vec4.div
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__nm__ = function(a, b, out) {
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
  if (d === 0) throw new Error(`[vec4.div] Cannot invert singular mat4`);
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
  const x = a * ixx + a * ixy + a * ixz + a * ixw
  const y = a * iyx + a * iyy + a * iyz + a * iyw
  const z = a * izx + a * izy + a * izz + a * izw
  const w = a * iwx + a * iwy + a * iwz + a * iww
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Divides by a scalar or right-multiplies by a matrix inverse.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A matrix divisor follows numerator * inverse(divisor), with row-vector semantics for a vector numerator.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vm__
 * @memberof hg.vec4.div
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
div.__vm__ = function(a, b, out) {
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
  if (d === 0) throw new Error(`[vec4.div] Cannot invert singular mat4`);
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
  const x = a.x * ixx + a.y * ixy + (a.z ?? 0) * ixz + (a.w ?? 0) * ixw
  const y = a.x * iyx + a.y * iyy + (a.z ?? 0) * iyz + (a.w ?? 0) * iyw
  const z = a.x * izx + a.y * izy + (a.z ?? 0) * izz + (a.w ?? 0) * izw
  const w = a.x * iwx + a.y * iwy + (a.z ?? 0) * iwz + (a.w ?? 0) * iww
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

  vec4.div = div;
})(globalThis.hg);
