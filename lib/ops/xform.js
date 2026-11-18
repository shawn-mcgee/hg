/**
 * @file Compatibility dispatcher: Multiplies operands, automatically extending a vector one dimension below its matrix.
 * Load after hg.js and lib/types.js. Registers hg.xform as a direct dispatcher into typed namespace children.
 * Part of the standalone dist/hg.js bundle.
 * Typed namespace methods must be registered first; this file only dispatches to them.
 */

/**
 * Registers this file's public API on the shared namespace without leaking local names.
 * @private
 * @param {hgNamespace} hg - Namespace initialized by hg.js.
 * @returns {void} Attaches constructors or operations to hg.
 */
(function(hg) {
  const { __nil__, __num__, __str__, __bool__, __list__, __dict__, __vec2__, __vec3__, __vec4__, __mat2__, __mat3__, __mat4__, type, num, vec2, vec3, vec4, mat2, mat3, mat4 } = hg.__core__;

/**
 * Multiplies operands, automatically extending a vector one dimension below its matrix.
 * Vector times matrix treats the vector as a row; matrix times vector treats it as a column.
 * Matrix/vector dimensions must match or the vector must be exactly one dimension smaller.
 * Lower-dimensional vectors are extended with a final 1, multiplied, and truncated back.
 * The discarded component is not used for perspective division. Vector pairs use hmul or dot.
 * All result components are captured before writes. out must have the result shape;
 * it may alias an input when that input has the same shape.
 * Matrix outputs need independent writable column objects; their identities are preserved.
 *
 * @function xform
 * @memberof hg
 * @static
 * @param {hgOperand} a - Left operand.
 * @param {hgOperand} b - Right operand.
 * @param {hgVector|hgMatrix} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgOperand} Numeric result, a fresh vector/matrix, or the supplied out object.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.xform(hg.mat3(1, 0, 0, 0, 1, 0, 10, 20, 1), hg.vec2(2, 3)); // <12, 23>
 */
function xform(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[xform] Expected 2 or 3 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__ : switch(tb) {
      case __num__ : return num.xform.__nn__  (a, b, out)
      case __vec2__: return vec2.xform.__nv__ (a, b, out)
      case __vec3__: return vec3.xform.__nv__ (a, b, out)
      case __vec4__: return vec4.xform.__nv__ (a, b, out)
      case __mat2__: return mat2.xform.__nm__ (a, b, out)
      case __mat3__: return mat3.xform.__nm__ (a, b, out)
      case __mat4__: return mat4.xform.__nm__ (a, b, out)
    } break;
    case __vec2__: switch(tb) {
      case __num__ : return vec2.xform.__vn__ (a, b, out)
      case __mat2__: return vec2.xform.__vm__ (a, b, out)
      case __mat3__: return vec2.xform.__vmh__(a, b, out)
    } break;
    case __vec3__: switch(tb) {
      case __num__ : return vec3.xform.__vn__ (a, b, out)
      case __mat3__: return vec3.xform.__vm__ (a, b, out)
      case __mat4__: return vec3.xform.__vmh__(a, b, out)
    } break;
    case __vec4__: switch(tb) {
      case __num__ : return vec4.xform.__vn__ (a, b, out)
      case __mat4__: return vec4.xform.__vm__ (a, b, out)
    } break;
    case __mat2__: switch(tb) {
      case __num__ : return mat2.xform.__mn__ (a, b, out)
      case __mat2__: return mat2.xform.__mm__ (a, b, out)
      case __vec2__: return vec2.xform.__mv__ (a, b, out)
    } break;
    case __mat3__: switch(tb) {
      case __num__ : return mat3.xform.__mn__ (a, b, out)
      case __mat3__: return mat3.xform.__mm__ (a, b, out)
      case __vec3__: return vec3.xform.__mv__ (a, b, out)
      case __vec2__: return vec2.xform.__mhv__(a, b, out)
    } break;
    case __mat4__: switch(tb) {
      case __num__ : return mat4.xform.__mn__ (a, b, out)
      case __mat4__: return mat4.xform.__mm__ (a, b, out)
      case __vec4__: return vec4.xform.__mv__ (a, b, out)
      case __vec3__: return vec3.xform.__mhv__(a, b, out)
    } break;
  }
  throw new Error(`[xform] Cannot multiply ${ta} and ${tb}`);
}

// Row vector times matrix: dot the vector with each column.

// Matrix times column vector: combine the scaled columns.

// Row vector times matrix: dot the vector with each column.

// Matrix times column vector: combine the scaled columns.

// Row vector times matrix: dot the vector with each column.

// Matrix times column vector: combine the scaled columns.

  Object.assign(hg, {
    xform
  });
})(globalThis.hg);
