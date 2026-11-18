/**
 * @file num.norm: Normalizes the value; zero remains zero.
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
 * Normalizes the value; zero remains zero.
 *
 * @function norm
 * @memberof hg.num
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function norm(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[num.norm] Expected 1 to 1 arguments`);
  const ta = type(a)
  switch(ta) {
    case __num__:
      return norm.__n__(a)
  }
  throw new Error(`[num.norm] Unsupported operand types or matrix dimensions`);
}

/**
 * Normalizes the value; zero remains zero.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __n__
 * @memberof hg.num.norm
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
norm.__n__ = function(a) {
  if (a === 0) return 0
  return a / Math.abs(a)
}

  num.norm = norm;
})(globalThis.hg);
