/**
 * @file vec3.mod: Computes component-wise modulo with the divisor's sign.
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
  const scalarMod = num.mod.__nn__;

/**
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function mod
 * @memberof hg.vec3
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @param {number|hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @throws {Error} If arity or operand types/dimensions are unsupported.
 * @see hg.num.mod
 */
function mod(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[vec3.mod] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return mod.__nn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return mod.__nv__(a, b, out)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return mod.__vn__(a, b, out)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return mod.__vv__(a, b, out)
      } break;
  }
  throw new Error(`[vec3.mod] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nn__
 * @memberof hg.vec3.mod
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @see hg.num.mod
 */
mod.__nn__ = function(a, b, out) {
  const value = scalarMod(a, b)
  const x = value
  const y = value
  const z = value
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nv__
 * @memberof hg.vec3.mod
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @see hg.num.mod
 */
mod.__nv__ = function(a, b, out) {
  const x = scalarMod(a, b.x)
  const y = scalarMod(a, b.y)
  const z = scalarMod(a, (b.z ?? 0))
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vn__
 * @memberof hg.vec3.mod
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @see hg.num.mod
 */
mod.__vn__ = function(a, b, out) {
  const x = scalarMod(a.x, b)
  const y = scalarMod(a.y, b)
  const z = scalarMod((a.z ?? 0), b)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __vv__
 * @memberof hg.vec3.mod
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @see hg.num.mod
 */
mod.__vv__ = function(a, b, out) {
  const x = scalarMod(a.x, b.x)
  const y = scalarMod(a.y, b.y)
  const z = scalarMod((a.z ?? 0), (b.z ?? 0))
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

  vec3.mod = mod;
})(globalThis.hg);
