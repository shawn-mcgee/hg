/**
 * @file num.xform: Multiplies operands, with homogeneous extension for a matrix one dimension larger.
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
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 *
 * @function xform
 * @memberof hg.num
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function xform(a, b) {
  if (arguments.length < 2 || arguments.length > 2) throw new Error(`[num.xform] Expected 2 to 2 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return xform.__nn__(a, b)
      } break;
  }
  throw new Error(`[num.xform] Unsupported operand types or matrix dimensions`);
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 *
 * @function __nn__
 * @memberof hg.num.xform
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
xform.__nn__ = function(a, b) {
  return a * b
}

  num.xform = xform;
})(globalThis.hg);
