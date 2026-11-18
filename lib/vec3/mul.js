/**
 * @file vec3.mul: Scales operands or performs algebraic matrix/vector multiplication.
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
 * Scales operands or performs algebraic matrix/vector multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function mul
 * @memberof hg.vec3
 * @static
 * @param {number|hgVector|hgMatrix} a - Operand projected into the namespace dimension.
 * @param {number|hgVector|hgMatrix} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function mul(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[vec3.mul] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return mul.__nn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return mul.__nv__(a, b, out)
        case __mat3__:
          return mul.__nm__(a, b, out)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return mul.__vn__(a, b, out)
        case __mat3__:
          return mul.__vm__(a, b, out)
      } break;
    case __mat3__:
      switch(tb) {
        case __num__:
          return mul.__mn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return mul.__mv__(a, b, out)
      } break;
  }
  throw new Error(`[vec3.mul] Unsupported operand types or matrix dimensions`);
}

/**
 * Scales operands or performs algebraic matrix/vector multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nn__
 * @memberof hg.vec3.mul
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
mul.__nn__ = function(a, b, out) {
  const x = a * b
  const y = a * b
  const z = a * b
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Scales operands or performs algebraic matrix/vector multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nv__
 * @memberof hg.vec3.mul
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
mul.__nv__ = function(a, b, out) {
  const x = a * b.x
  const y = a * b.y
  const z = a * (b.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Scales operands or performs algebraic matrix/vector multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vn__
 * @memberof hg.vec3.mul
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
mul.__vn__ = function(a, b, out) {
  const x = a.x * b
  const y = a.y * b
  const z = (a.z ?? 0) * b
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Scales operands or performs algebraic matrix/vector multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nm__
 * @memberof hg.vec3.mul
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
mul.__nm__ = function(a, b, out) {
  const x = a * b.x.x + a * b.x.y + a * b.x.z
  const y = a * b.y.x + a * b.y.y + a * b.y.z
  const z = a * b.z.x + a * b.z.y + a * b.z.z
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Scales operands or performs algebraic matrix/vector multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vm__
 * @memberof hg.vec3.mul
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
mul.__vm__ = function(a, b, out) {
  const x = a.x * b.x.x + a.y * b.x.y + (a.z ?? 0) * b.x.z
  const y = a.x * b.y.x + a.y * b.y.y + (a.z ?? 0) * b.y.z
  const z = a.x * b.z.x + a.y * b.z.y + (a.z ?? 0) * b.z.z
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Scales operands or performs algebraic matrix/vector multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mn__
 * @memberof hg.vec3.mul
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
mul.__mn__ = function(a, b, out) {
  const x = a.x.x * b + a.y.x * b + a.z.x * b
  const y = a.x.y * b + a.y.y * b + a.z.y * b
  const z = a.x.z * b + a.y.z * b + a.z.z * b
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Scales operands or performs algebraic matrix/vector multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mv__
 * @memberof hg.vec3.mul
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
mul.__mv__ = function(a, b, out) {
  const x = a.x.x * b.x + a.y.x * b.y + a.z.x * (b.z ?? 0)
  const y = a.x.y * b.x + a.y.y * b.y + a.z.y * (b.z ?? 0)
  const z = a.x.z * b.x + a.y.z * b.y + a.z.z * (b.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

  vec3.mul = mul;
})(globalThis.hg);
