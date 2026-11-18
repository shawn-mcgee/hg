/**
 * @file Compatibility dispatcher: Divides by a scalar or right-multiplies by the inverse of a matching matrix.
 * Load after hg.js and lib/types.js. Registers hg.div as a direct dispatcher into typed namespace children.
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
 * Divides by a scalar or right-multiplies by the inverse of a matching matrix.
 * For a matrix divisor b, the convention is mul(a, inv(b)), preserving operand order.
 * Supports scalar divisors, number/matrix, matching vector/matrix, and same-size matrix pairs.
 * Vector divisors use hdiv. Inverse components are computed without a temporary matrix.
 * Division follows JavaScript numeric semantics: zero divisors can yield Infinity or NaN.
 * All result components are captured before writes. out must have the result shape;
 * it may alias an input when that input has the same shape.
 * Matrix outputs need independent writable column objects; their identities are preserved.
 *
 * @function div
 * @memberof hg
 * @static
 * @param {hgOperand} a - Numerator.
 * @param {number|hgMatrix} b - Scalar or matrix divisor.
 * @param {hgVector|hgMatrix} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgOperand} Numeric result, a fresh vector/matrix, or the supplied out object.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @throws {Error} If the matrix to invert has a computed determinant of zero; out is unchanged.
 * @example
 * hg.div(hg.mat2(4), hg.mat2(2)); // diagonal matrix with twos
 */
function div(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[div] Expected 2 or 3 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__: switch(tb) {
      case __num__: return num.div.__nn__ (a, b, out)
      case __mat2__: return mat2.div.__nm__(a, b, out)
      case __mat3__: return mat3.div.__nm__(a, b, out)
      case __mat4__: return mat4.div.__nm__(a, b, out)
    } break;
    case __vec2__: switch(tb) {
      case __num__: return vec2.div.__vn__(a, b, out)
      case __mat2__: return vec2.div.__vm__(a, b, out)
    } break;
    case __vec3__: switch(tb) {
      case __num__: return vec3.div.__vn__(a, b, out)
      case __mat3__: return vec3.div.__vm__(a, b, out)
    } break;
    case __vec4__: switch(tb) {
      case __num__: return vec4.div.__vn__(a, b, out)
      case __mat4__: return vec4.div.__vm__(a, b, out)
    } break;
    case __mat2__: switch(tb) {
      case __num__: return mat2.div.__mn__(a, b, out)
      case __mat2__: return mat2.div.__mm__(a, b, out)
    } break;
    case __mat3__: switch(tb) {
      case __num__: return mat3.div.__mn__(a, b, out)
      case __mat3__: return mat3.div.__mm__(a, b, out)
    } break;
    case __mat4__: switch(tb) {
      case __num__: return mat4.div.__mn__(a, b, out)
      case __mat4__: return mat4.div.__mm__(a, b, out)
    } break;
  }
  throw new Error(`[div] Unsupported operand types`);
}

  Object.assign(hg, { div });
})(globalThis.hg);
