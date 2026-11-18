/**
 * @file num.dot: Computes a scalar dot product in the namespace dimension.
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
 * Computes a scalar dot product in the namespace dimension.
 * The public one-argument form computes the self dot product.
 *
 * @function dot
 * @memberof hg.num
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} [b=a] - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function dot(a, b = a) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[num.dot] Expected 1 to 2 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return dot.__nn__(a, b)
      } break;
  }
  throw new Error(`[num.dot] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes a scalar dot product in the namespace dimension.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The public one-argument form computes the self dot product.
 *
 * @function __nn__
 * @memberof hg.num.dot
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dot.__nn__ = function(a, b) {
  return a * b
}

  num.dot = dot;
})(globalThis.hg);
