/**
 * @file vec4.xform: Multiplies operands, with homogeneous extension for a matrix one dimension larger.
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
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function xform
 * @memberof hg.vec4
 * @static
 * @param {number|hgVector|hgMatrix} a - Operand projected into the namespace dimension.
 * @param {number|hgVector|hgMatrix} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function xform(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[vec4.xform] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return xform.__nn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return xform.__nv__(a, b, out)
        case __mat4__:
          return xform.__nm__(a, b, out)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return xform.__vn__(a, b, out)
        case __mat4__:
          return xform.__vm__(a, b, out)
      } break;
    case __mat4__:
      switch(tb) {
        case __num__:
          return xform.__mn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return xform.__mv__(a, b, out)
      } break;
  }
  throw new Error(`[vec4.xform] Unsupported operand types or matrix dimensions`);
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nn__
 * @memberof hg.vec4.xform
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 */
xform.__nn__ = function(a, b, out) {
  const x = a * b
  const y = a * b
  const z = a * b
  const w = a * b
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nv__
 * @memberof hg.vec4.xform
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 */
xform.__nv__ = function(a, b, out) {
  const x = a * b.x
  const y = a * b.y
  const z = a * (b.z ?? 0)
  const w = a * (b.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vn__
 * @memberof hg.vec4.xform
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 */
xform.__vn__ = function(a, b, out) {
  const x = a.x * b
  const y = a.y * b
  const z = (a.z ?? 0) * b
  const w = (a.w ?? 0) * b
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nm__
 * @memberof hg.vec4.xform
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 */
xform.__nm__ = function(a, b, out) {
  const x = a * b.x.x + a * b.x.y + a * b.x.z + a * b.x.w
  const y = a * b.y.x + a * b.y.y + a * b.y.z + a * b.y.w
  const z = a * b.z.x + a * b.z.y + a * b.z.z + a * b.z.w
  const w = a * b.w.x + a * b.w.y + a * b.w.z + a * b.w.w
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vm__
 * @memberof hg.vec4.xform
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 */
xform.__vm__ = function(a, b, out) {
  const x = a.x * b.x.x + a.y * b.x.y + (a.z ?? 0) * b.x.z + (a.w ?? 0) * b.x.w
  const y = a.x * b.y.x + a.y * b.y.y + (a.z ?? 0) * b.y.z + (a.w ?? 0) * b.y.w
  const z = a.x * b.z.x + a.y * b.z.y + (a.z ?? 0) * b.z.z + (a.w ?? 0) * b.z.w
  const w = a.x * b.w.x + a.y * b.w.y + (a.z ?? 0) * b.w.z + (a.w ?? 0) * b.w.w
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mn__
 * @memberof hg.vec4.xform
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 */
xform.__mn__ = function(a, b, out) {
  const x = a.x.x * b + a.y.x * b + a.z.x * b + a.w.x * b
  const y = a.x.y * b + a.y.y * b + a.z.y * b + a.w.y * b
  const z = a.x.z * b + a.y.z * b + a.z.z * b + a.w.z * b
  const w = a.x.w * b + a.y.w * b + a.z.w * b + a.w.w * b
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mv__
 * @memberof hg.vec4.xform
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 */
xform.__mv__ = function(a, b, out) {
  const x = a.x.x * b.x + a.y.x * b.y + a.z.x * (b.z ?? 0) + a.w.x * (b.w ?? 0)
  const y = a.x.y * b.x + a.y.y * b.y + a.z.y * (b.z ?? 0) + a.w.y * (b.w ?? 0)
  const z = a.x.z * b.x + a.y.z * b.y + a.z.z * (b.z ?? 0) + a.w.z * (b.w ?? 0)
  const w = a.x.w * b.x + a.y.w * b.y + a.z.w * (b.z ?? 0) + a.w.w * (b.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

  vec4.xform = xform;
})(globalThis.hg);
