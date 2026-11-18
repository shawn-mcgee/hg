/**
 * @file vec3.cross: Computes the right-handed three-dimensional cross product.
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
 * Computes the right-handed three-dimensional cross product.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function cross
 * @memberof hg.vec3
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @param {number|hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function cross(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[vec3.cross] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return cross.__nn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return cross.__nv__(a, b, out)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return cross.__vn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return cross.__vv__(a, b, out)
      } break;
  }
  throw new Error(`[vec3.cross] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes the right-handed three-dimensional cross product.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nn__
 * @memberof hg.vec3.cross
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
cross.__nn__ = function(a, b, out) {
  const ax = a
  const ay = a
  const az = a
  const bx = b
  const by = b
  const bz = b
  const x = ay * bz - az * by
  const y = az * bx - ax * bz
  const z = ax * by - ay * bx
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Computes the right-handed three-dimensional cross product.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nv__
 * @memberof hg.vec3.cross
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
cross.__nv__ = function(a, b, out) {
  const ax = a
  const ay = a
  const az = a
  const bx = b.x
  const by = b.y
  const bz = (b.z ?? 0)
  const x = ay * bz - az * by
  const y = az * bx - ax * bz
  const z = ax * by - ay * bx
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Computes the right-handed three-dimensional cross product.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vn__
 * @memberof hg.vec3.cross
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
cross.__vn__ = function(a, b, out) {
  const ax = a.x
  const ay = a.y
  const az = (a.z ?? 0)
  const bx = b
  const by = b
  const bz = b
  const x = ay * bz - az * by
  const y = az * bx - ax * bz
  const z = ax * by - ay * bx
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Computes the right-handed three-dimensional cross product.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vv__
 * @memberof hg.vec3.cross
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
cross.__vv__ = function(a, b, out) {
  const ax = a.x
  const ay = a.y
  const az = (a.z ?? 0)
  const bx = b.x
  const by = b.y
  const bz = (b.z ?? 0)
  const x = ay * bz - az * by
  const y = az * bx - ax * bz
  const z = ax * by - ay * bx
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

  vec3.cross = cross;
})(globalThis.hg);
