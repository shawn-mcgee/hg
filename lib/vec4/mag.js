/**
 * @file vec4.mag: Computes magnitude using Math.hypot.
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
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 *
 * @function mag
 * @memberof hg.vec4
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function mag(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[vec4.mag] Expected 1 to 1 arguments`);
  const ta = type(a)
  switch(ta) {
    case __num__:
      return mag.__n__(a)
    case __vec2__:
    case __vec3__:
    case __vec4__:
      return mag.__v__(a)
  }
  throw new Error(`[vec4.mag] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes magnitude using Math.hypot.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __n__
 * @memberof hg.vec4.mag
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
mag.__n__ = function(a) {
  const ax = a
  const ay = a
  const az = a
  const aw = a
  return Math.hypot(ax, ay, az, aw)
}

/**
 * Computes magnitude using Math.hypot.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __v__
 * @memberof hg.vec4.mag
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
mag.__v__ = function(a) {
  const ax = a.x
  const ay = a.y
  const az = (a.z ?? 0)
  const aw = (a.w ?? 0)
  return Math.hypot(ax, ay, az, aw)
}

  vec4.mag = mag;
})(globalThis.hg);
