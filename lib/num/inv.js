/**
 * @file num.inv: Computes reciprocals or a matrix inverse.
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
 * Computes reciprocals or a matrix inverse.
 *
 * @function inv
 * @memberof hg.num
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
function inv(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[num.inv] Expected 1 to 1 arguments`);
  const ta = type(a)
  switch(ta) {
    case __num__:
      return inv.__n__(a)
  }
  throw new Error(`[num.inv] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes reciprocals or a matrix inverse.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __n__
 * @memberof hg.num.inv
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
inv.__n__ = function(a) {
  return 1 / a
}

  num.inv = inv;
})(globalThis.hg);
