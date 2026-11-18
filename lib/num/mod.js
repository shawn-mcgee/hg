/**
 * @file num.mod: Computes component-wise modulo with the divisor's sign.
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
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 *
 * @function mod
 * @memberof hg.num
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity or operand types/dimensions are unsupported.
 * @see hg.num.mod
 */
function mod(a, b) {
  if (arguments.length < 2 || arguments.length > 2) throw new Error(`[num.mod] Expected 2 to 2 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return mod.__nn__(a, b)
      } break;
  }
  throw new Error(`[num.mod] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __nn__
 * @memberof hg.num.mod
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @see hg.num.mod
 */
mod.__nn__ = function(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || b === 0) return NaN
  let r = a % b
  if (r === 0) return 0
  if ((r < 0) !== (b < 0)) r += b
  return r
}

  num.mod = mod;
})(globalThis.hg);
