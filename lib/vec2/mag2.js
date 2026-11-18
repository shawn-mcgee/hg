/**
 * @file vec2.mag2: Computes squared magnitude.
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
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 *
 * @function mag2
 * @memberof hg.vec2
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function mag2(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[vec2.mag2] Expected 1 to 1 arguments`);
  const ta = type(a)
  switch(ta) {
    case __num__:
      return mag2.__n__(a)
    case __vec2__:
    case __vec3__:
    case __vec4__:
      return mag2.__v__(a)
  }
  throw new Error(`[vec2.mag2] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes squared magnitude.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __n__
 * @memberof hg.vec2.mag2
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
mag2.__n__ = function(a) {
  const ax = a
  const ay = a
  return ax * ax + ay * ay
}

/**
 * Computes squared magnitude.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __v__
 * @memberof hg.vec2.mag2
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
mag2.__v__ = function(a) {
  const ax = a.x
  const ay = a.y
  return ax * ax + ay * ay
}

  vec2.mag2 = mag2;
})(globalThis.hg);
