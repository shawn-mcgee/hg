/**
 * @file Compatibility dispatcher: Subtracts the right operand from the left, broadcasting scalars component-wise.
 * Load after hg.js and lib/types.js. Registers hg.sub as a direct dispatcher into typed namespace children.
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
 * Subtracts the right operand from the left, broadcasting scalars component-wise.
 * Supports numbers, scalar broadcasting, mixed-size vectors, and same-size matrices.
 * Missing vector components are zero; the result uses the larger vector dimension.
 * All result components are captured before writes. out must have the result shape;
 * it may alias an input when that input has the same shape.
 * Matrix outputs need independent writable column objects; their identities are preserved.
 *
 * @function sub
 * @memberof hg
 * @static
 * @param {hgOperand} a - Left operand.
 * @param {hgOperand} b - Right operand.
 * @param {hgVector|hgMatrix} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgOperand} Numeric result, a fresh vector/matrix, or the supplied out object.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.sub(hg.vec2(4, 7), 2); // <2, 5>
 */
function sub(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[sub] Expected 2 or 3 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__ : switch(tb) {
      case __num__ : return num.sub.__nn__ (a, b, out)
      case __vec2__: return vec2.sub.__nv__(a, b, out)
      case __vec3__: return vec3.sub.__nv__(a, b, out)
      case __vec4__: return vec4.sub.__nv__(a, b, out)
      case __mat2__: return mat2.sub.__nm__(a, b, out)
      case __mat3__: return mat3.sub.__nm__(a, b, out)
      case __mat4__: return mat4.sub.__nm__(a, b, out)
    } break;
    case __vec2__: switch(tb) {
      case __num__ : return vec2.sub.__vn__(a, b, out)
      case __vec2__: return vec2.sub.__vv__(a, b, out)
      case __vec3__: return vec3.sub.__vv__(a, b, out)
      case __vec4__: return vec4.sub.__vv__(a, b, out)
    } break;
    case __vec3__: switch(tb) {
      case __num__ : return vec3.sub.__vn__(a, b, out)
      case __vec2__: return vec3.sub.__vv__(a, b, out)
      case __vec3__: return vec3.sub.__vv__(a, b, out)
      case __vec4__: return vec4.sub.__vv__(a, b, out)
    } break;
    case __vec4__: switch(tb) {
      case __num__ : return vec4.sub.__vn__(a, b, out)
      case __vec2__: return vec4.sub.__vv__(a, b, out)
      case __vec3__: return vec4.sub.__vv__(a, b, out)
      case __vec4__: return vec4.sub.__vv__(a, b, out)
    } break;
    case __mat2__: switch(tb) {
      case __num__ : return mat2.sub.__mn__(a, b, out)
      case __mat2__: return mat2.sub.__mm__(a, b, out)
    } break;
    case __mat3__: switch(tb) {
      case __num__ : return mat3.sub.__mn__(a, b, out)
      case __mat3__: return mat3.sub.__mm__(a, b, out)
    } break;
    case __mat4__: switch(tb) {
      case __num__ : return mat4.sub.__mn__(a, b, out)
      case __mat4__: return mat4.sub.__mm__(a, b, out)
    } break;
  }
  throw new Error(`[sub] Cannot subtract ${tb} from ${ta}`);
}

  Object.assign(hg, {
    sub
  });
})(globalThis.hg);
