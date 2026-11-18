/**
 * @file vec3.hmul: Computes Hadamard multiplication.
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
 * Computes Hadamard multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function hmul
 * @memberof hg.vec3
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @param {number|hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function hmul(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[vec3.hmul] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return hmul.__nn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return hmul.__nv__(a, b, out)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return hmul.__vn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return hmul.__vv__(a, b, out)
      } break;
  }
  throw new Error(`[vec3.hmul] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes Hadamard multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nn__
 * @memberof hg.vec3.hmul
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
hmul.__nn__ = function(a, b, out) {
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
 * Computes Hadamard multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nv__
 * @memberof hg.vec3.hmul
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
hmul.__nv__ = function(a, b, out) {
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
 * Computes Hadamard multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vn__
 * @memberof hg.vec3.hmul
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
hmul.__vn__ = function(a, b, out) {
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
 * Computes Hadamard multiplication.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vv__
 * @memberof hg.vec3.hmul
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
hmul.__vv__ = function(a, b, out) {
  const x = a.x * b.x
  const y = a.y * b.y
  const z = (a.z ?? 0) * (b.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

  vec3.hmul = hmul;
})(globalThis.hg);
