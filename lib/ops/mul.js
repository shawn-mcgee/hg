/**
 * @file Compatibility dispatcher: Scales values or performs algebraic matrix/vector multiplication.
 * Load after hg.js and lib/types.js. Registers hg.mul as a direct dispatcher into typed namespace children.
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
 * Scales values or performs algebraic matrix/vector multiplication.
 * Vector times matrix treats the vector as a row; matrix times vector treats it as a column.
 * Matrix/vector dimensions must match. Vector pairs use hmul or dot instead.
 * All result components are captured before writes. out must have the result shape;
 * it may alias an input when that input has the same shape.
 * Matrix outputs need independent writable column objects; their identities are preserved.
 *
 * @function mul
 * @memberof hg
 * @static
 * @param {hgOperand} a - Left operand.
 * @param {hgOperand} b - Right operand.
 * @param {hgVector|hgMatrix} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgOperand} Numeric result, a fresh vector/matrix, or the supplied out object.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.mul(hg.mat2(1, 2, 3, 4), hg.vec2(5, 6)); // <23, 34>
 */
function mul(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[mul] Expected 2 or 3 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__ : switch(tb) {
      case __num__ : return num.mul.__nn__ (a, b, out)
      case __vec2__: return vec2.mul.__nv__(a, b, out)
      case __vec3__: return vec3.mul.__nv__(a, b, out)
      case __vec4__: return vec4.mul.__nv__(a, b, out)
      case __mat2__: return mat2.mul.__nm__(a, b, out)
      case __mat3__: return mat3.mul.__nm__(a, b, out)
      case __mat4__: return mat4.mul.__nm__(a, b, out)
    } break;
    case __vec2__: switch(tb) {
      case __num__ : return vec2.mul.__vn__(a, b, out)
      case __mat2__: return vec2.mul.__vm__(a, b, out)
    } break;
    case __vec3__: switch(tb) {
      case __num__ : return vec3.mul.__vn__(a, b, out)
      case __mat3__: return vec3.mul.__vm__(a, b, out)
    } break;
    case __vec4__: switch(tb) {
      case __num__ : return vec4.mul.__vn__(a, b, out)
      case __mat4__: return vec4.mul.__vm__(a, b, out)
    } break;
    case __mat2__: switch(tb) {
      case __num__ : return mat2.mul.__mn__(a, b, out)
      case __mat2__: return mat2.mul.__mm__(a, b, out)
      case __vec2__: return vec2.mul.__mv__(a, b, out)
    } break;
    case __mat3__: switch(tb) {
      case __num__ : return mat3.mul.__mn__(a, b, out)
      case __mat3__: return mat3.mul.__mm__(a, b, out)
      case __vec3__: return vec3.mul.__mv__(a, b, out)
    } break;
    case __mat4__: switch(tb) {
      case __num__ : return mat4.mul.__mn__(a, b, out)
      case __mat4__: return mat4.mul.__mm__(a, b, out)
      case __vec4__: return vec4.mul.__mv__(a, b, out)
    } break;
  }
  throw new Error(`[mul] Cannot multiply ${ta} and ${tb}`);
}

// Row vector times matrix: dot the vector with each column.

// Matrix times column vector: combine the scaled columns.

// Row vector times matrix: dot the vector with each column.

// Matrix times column vector: combine the scaled columns.

// Row vector times matrix: dot the vector with each column.

// Matrix times column vector: combine the scaled columns.

  Object.assign(hg, {
    mul
  });
})(globalThis.hg);
