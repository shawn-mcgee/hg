/**
 * @file vec3.xform: Multiplies operands, with homogeneous extension for a matrix one dimension larger.
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
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function xform
 * @memberof hg.vec3
 * @static
 * @param {number|hgVector|hgMatrix} a - Operand projected into the namespace dimension.
 * @param {number|hgVector|hgMatrix} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function xform(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[vec3.xform] Expected 2 to 3 arguments`);
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
        case __mat3__:
          return xform.__nm__(a, b, out)
        case __mat4__:
          return xform.__nmh__(a, b, out)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return xform.__vn__(a, b, out)
        case __mat3__:
          return xform.__vm__(a, b, out)
        case __mat4__:
          return xform.__vmh__(a, b, out)
      } break;
    case __mat3__:
      switch(tb) {
        case __num__:
          return xform.__mn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return xform.__mv__(a, b, out)
      } break;
    case __mat4__:
      switch(tb) {
        case __num__:
          return xform.__mhn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return xform.__mhv__(a, b, out)
      } break;
  }
  throw new Error(`[vec3.xform] Unsupported operand types or matrix dimensions`);
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nn__
 * @memberof hg.vec3.xform
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__nn__ = function(a, b, out) {
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
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nv__
 * @memberof hg.vec3.xform
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__nv__ = function(a, b, out) {
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
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vn__
 * @memberof hg.vec3.xform
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__vn__ = function(a, b, out) {
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
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nm__
 * @memberof hg.vec3.xform
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__nm__ = function(a, b, out) {
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
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vm__
 * @memberof hg.vec3.xform
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__vm__ = function(a, b, out) {
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
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mn__
 * @memberof hg.vec3.xform
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__mn__ = function(a, b, out) {
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
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mv__
 * @memberof hg.vec3.xform
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__mv__ = function(a, b, out) {
  const x = a.x.x * b.x + a.y.x * b.y + a.z.x * (b.z ?? 0)
  const y = a.x.y * b.x + a.y.y * b.y + a.z.y * (b.z ?? 0)
  const z = a.x.z * b.x + a.y.z * b.y + a.z.z * (b.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nmh__
 * @memberof hg.vec3.xform
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__nmh__ = function(a, b, out) {
  const x = a * b.x.x + a * b.x.y + a * b.x.z + b.x.w
  const y = a * b.y.x + a * b.y.y + a * b.y.z + b.y.w
  const z = a * b.z.x + a * b.z.y + a * b.z.z + b.z.w
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vmh__
 * @memberof hg.vec3.xform
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__vmh__ = function(a, b, out) {
  const x = a.x * b.x.x + a.y * b.x.y + (a.z ?? 0) * b.x.z + b.x.w
  const y = a.x * b.y.x + a.y * b.y.y + (a.z ?? 0) * b.y.z + b.y.w
  const z = a.x * b.z.x + a.y * b.z.y + (a.z ?? 0) * b.z.z + b.z.w
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mhn__
 * @memberof hg.vec3.xform
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__mhn__ = function(a, b, out) {
  const x = a.x.x * b + a.y.x * b + a.z.x * b + a.w.x
  const y = a.x.y * b + a.y.y * b + a.z.y * b + a.w.y
  const z = a.x.z * b + a.y.z * b + a.z.z * b + a.w.z
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Vector or splatted number on the left is a row; on the right it is a column.
 * Vector/vector pairs use hmul for component products or dot for scalar products.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mhv__
 * @memberof hg.vec3.xform
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
xform.__mhv__ = function(a, b, out) {
  const x = a.x.x * b.x + a.y.x * b.y + a.z.x * (b.z ?? 0) + a.w.x
  const y = a.x.y * b.x + a.y.y * b.y + a.z.y * (b.z ?? 0) + a.w.y
  const z = a.x.z * b.x + a.y.z * b.y + a.z.z * (b.z ?? 0) + a.w.z
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

  vec3.xform = xform;
})(globalThis.hg);
