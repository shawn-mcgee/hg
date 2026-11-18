/**
 * @file vec3.lerp: Linearly interpolates or extrapolates between operands.
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
 * Linearly interpolates or extrapolates between operands.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function lerp
 * @memberof hg.vec3
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @param {number|hgVector} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function lerp(a, b, t, out) {
  if (arguments.length < 3 || arguments.length > 4) throw new Error(`[vec3.lerp] Expected 3 to 4 arguments`);
  if (typeof t !== "number") throw new Error(`[vec3.lerp] Expected numeric factor`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return lerp.__nn__(a, b, t, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return lerp.__nv__(a, b, t, out)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return lerp.__vn__(a, b, t, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return lerp.__vv__(a, b, t, out)
      } break;
  }
  throw new Error(`[vec3.lerp] Unsupported operand types or matrix dimensions`);
}

/**
 * Linearly interpolates or extrapolates between operands.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nn__
 * @memberof hg.vec3.lerp
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
lerp.__nn__ = function(a, b, t, out) {
  const ax = a
  const ay = a
  const az = a
  const bx = b
  const by = b
  const bz = b
  let x
  let y
  let z
  if (t === 0) {
    x = ax
    y = ay
    z = az
  } else if (t === 1) {
    x = bx
    y = by
    z = bz
  } else {
    x = ax + (bx - ax) * t
    y = ay + (by - ay) * t
    z = az + (bz - az) * t
  }
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Linearly interpolates or extrapolates between operands.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nv__
 * @memberof hg.vec3.lerp
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
lerp.__nv__ = function(a, b, t, out) {
  const ax = a
  const ay = a
  const az = a
  const bx = b.x
  const by = b.y
  const bz = (b.z ?? 0)
  let x
  let y
  let z
  if (t === 0) {
    x = ax
    y = ay
    z = az
  } else if (t === 1) {
    x = bx
    y = by
    z = bz
  } else {
    x = ax + (bx - ax) * t
    y = ay + (by - ay) * t
    z = az + (bz - az) * t
  }
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Linearly interpolates or extrapolates between operands.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vn__
 * @memberof hg.vec3.lerp
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
lerp.__vn__ = function(a, b, t, out) {
  const ax = a.x
  const ay = a.y
  const az = (a.z ?? 0)
  const bx = b
  const by = b
  const bz = b
  let x
  let y
  let z
  if (t === 0) {
    x = ax
    y = ay
    z = az
  } else if (t === 1) {
    x = bx
    y = by
    z = bz
  } else {
    x = ax + (bx - ax) * t
    y = ay + (by - ay) * t
    z = az + (bz - az) * t
  }
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Linearly interpolates or extrapolates between operands.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vv__
 * @memberof hg.vec3.lerp
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
lerp.__vv__ = function(a, b, t, out) {
  const ax = a.x
  const ay = a.y
  const az = (a.z ?? 0)
  const bx = b.x
  const by = b.y
  const bz = (b.z ?? 0)
  let x
  let y
  let z
  if (t === 0) {
    x = ax
    y = ay
    z = az
  } else if (t === 1) {
    x = bx
    y = by
    z = bz
  } else {
    x = ax + (bx - ax) * t
    y = ay + (by - ay) * t
    z = az + (bz - az) * t
  }
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

  vec3.lerp = lerp;
})(globalThis.hg);
