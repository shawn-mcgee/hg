/**
 * @file Compatibility dispatcher: Performs Hadamard division of corresponding components, broadcasting scalars.
 * Load after hg.js and lib/types.js. Registers hg.hdiv as a direct dispatcher into typed namespace children.
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
 * Performs Hadamard division of corresponding components, broadcasting scalars.
 * Supports numbers, scalar broadcasting, mixed-size vectors, and same-size matrices.
 * Missing vector components are zero; the result uses the larger vector dimension.
 * Division follows JavaScript numeric semantics: zero divisors can yield Infinity or NaN.
 * All result components are captured before writes. out must have the result shape;
 * it may alias an input when that input has the same shape.
 * Matrix outputs need independent writable column objects; their identities are preserved.
 *
 * @function hdiv
 * @memberof hg
 * @static
 * @param {hgOperand} a - Left operand.
 * @param {hgOperand} b - Right operand.
 * @param {hgVector|hgMatrix} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgOperand} Numeric result, a fresh vector/matrix, or the supplied out object.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.hdiv(hg.vec2(8, 15), hg.vec2(2, 3)); // <4, 5>
 */
function hdiv(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[hdiv] Expected 2 or 3 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__ : switch(tb) {
      case __num__ : return num.hdiv.__nn__ (a, b, out)
      case __vec2__: return vec2.hdiv.__nv__(a, b, out)
      case __vec3__: return vec3.hdiv.__nv__(a, b, out)
      case __vec4__: return vec4.hdiv.__nv__(a, b, out)
      case __mat2__: return mat2.hdiv.__nm__(a, b, out)
      case __mat3__: return mat3.hdiv.__nm__(a, b, out)
      case __mat4__: return mat4.hdiv.__nm__(a, b, out)
    } break;
    case __vec2__: switch(tb) {
      case __num__ : return vec2.hdiv.__vn__(a, b, out)
      case __vec2__: return vec2.hdiv.__vv__(a, b, out)
      case __vec3__: return vec3.hdiv.__vv__(a, b, out)
      case __vec4__: return vec4.hdiv.__vv__(a, b, out)
    } break;
    case __vec3__: switch(tb) {
      case __num__ : return vec3.hdiv.__vn__(a, b, out)
      case __vec2__: return vec3.hdiv.__vv__(a, b, out)
      case __vec3__: return vec3.hdiv.__vv__(a, b, out)
      case __vec4__: return vec4.hdiv.__vv__(a, b, out)
    } break;
    case __vec4__: switch(tb) {
      case __num__ : return vec4.hdiv.__vn__(a, b, out)
      case __vec2__: return vec4.hdiv.__vv__(a, b, out)
      case __vec3__: return vec4.hdiv.__vv__(a, b, out)
      case __vec4__: return vec4.hdiv.__vv__(a, b, out)
    } break;
    case __mat2__: switch(tb) {
      case __num__ : return mat2.hdiv.__mn__(a, b, out)
      case __mat2__: return mat2.hdiv.__mm__(a, b, out)
    } break;
    case __mat3__: switch(tb) {
      case __num__ : return mat3.hdiv.__mn__(a, b, out)
      case __mat3__: return mat3.hdiv.__mm__(a, b, out)
    } break;
    case __mat4__: switch(tb) {
      case __num__ : return mat4.hdiv.__mn__(a, b, out)
      case __mat4__: return mat4.hdiv.__mm__(a, b, out)
    } break;
  }
  throw new Error(`[hdiv] Cannot perform Hadamard division of ${ta} by ${tb}`);
}

  Object.assign(hg, {
    hdiv
  });
})(globalThis.hg);
