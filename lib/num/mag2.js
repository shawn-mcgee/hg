/**
 * @file num.mag2: Computes squared magnitude.
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
 * Computes squared magnitude.
 *
 * @function mag2
 * @memberof hg.num
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function mag2(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[num.mag2] Expected 1 to 1 arguments`);
  const ta = type(a)
  switch(ta) {
    case __num__:
      return mag2.__n__(a)
  }
  throw new Error(`[num.mag2] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes squared magnitude.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __n__
 * @memberof hg.num.mag2
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
mag2.__n__ = function(a) {
  return a * a
}

  num.mag2 = mag2;
})(globalThis.hg);
