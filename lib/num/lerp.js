/**
 * @file num.lerp: Linearly interpolates or extrapolates between operands.
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
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 *
 * @function lerp
 * @memberof hg.num
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function lerp(a, b, t) {
  if (arguments.length < 3 || arguments.length > 3) throw new Error(`[num.lerp] Expected 3 to 3 arguments`);
  if (typeof t !== "number") throw new Error(`[num.lerp] Expected numeric factor`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return lerp.__nn__(a, b, t)
      } break;
  }
  throw new Error(`[num.lerp] Unsupported operand types or matrix dimensions`);
}

/**
 * Linearly interpolates or extrapolates between operands.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 *
 * @function __nn__
 * @memberof hg.num.lerp
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @returns {number} Computed scalar.
 */
lerp.__nn__ = function(a, b, t) {
  if (t === 0) return a
  if (t === 1) return b
  return a + (b - a) * t
}

  num.lerp = lerp;
})(globalThis.hg);
