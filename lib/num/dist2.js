/**
 * @file num.dist2: Computes squared Euclidean distance.
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
 * Computes squared Euclidean distance.
 *
 * @function dist2
 * @memberof hg.num
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function dist2(a, b) {
  if (arguments.length < 2 || arguments.length > 2) throw new Error(`[num.dist2] Expected 2 to 2 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return dist2.__nn__(a, b)
      } break;
  }
  throw new Error(`[num.dist2] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes squared Euclidean distance.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __nn__
 * @memberof hg.num.dist2
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dist2.__nn__ = function(a, b) {
  const d = a - b
  return d * d
}

  num.dist2 = dist2;
})(globalThis.hg);
