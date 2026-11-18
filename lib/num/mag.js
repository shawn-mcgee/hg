/**
 * @file num.mag: Computes magnitude using Math.hypot.
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
 * Computes magnitude using Math.hypot.
 *
 * @function mag
 * @memberof hg.num
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function mag(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[num.mag] Expected 1 to 1 arguments`);
  const ta = type(a)
  switch(ta) {
    case __num__:
      return mag.__n__(a)
  }
  throw new Error(`[num.mag] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes magnitude using Math.hypot.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __n__
 * @memberof hg.num.mag
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
mag.__n__ = function(a) {
  return Math.abs(a)
}

  num.mag = mag;
})(globalThis.hg);
