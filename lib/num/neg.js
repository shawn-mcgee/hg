/**
 * @file num.neg: Negates each component.
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
 * Negates each component.
 *
 * @function neg
 * @memberof hg.num
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function neg(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[num.neg] Expected 1 to 1 arguments`);
  const ta = type(a)
  switch(ta) {
    case __num__:
      return neg.__n__(a)
  }
  throw new Error(`[num.neg] Unsupported operand types or matrix dimensions`);
}

/**
 * Negates each component.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __n__
 * @memberof hg.num.neg
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
neg.__n__ = function(a) {
  return -a
}

  num.neg = neg;
})(globalThis.hg);
