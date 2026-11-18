/**
 * @file Compatibility dispatcher: Interpolates or extrapolates between two values using a numeric factor.
 * Load after hg.js and lib/types.js. Registers hg.lerp as a direct dispatcher into typed namespace children.
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
 * Interpolates or extrapolates between two values using a numeric factor.
 * Supports numbers, scalar broadcasting, mixed-size vectors, and same-size matrices.
 * Missing vector components are zero; the result uses the larger vector dimension.
 * t is not clamped. t=0 and t=1 copy the respective endpoint exactly.
 * All result components are captured before writes. out must have the result shape;
 * it may alias an input when that input has the same shape.
 * Matrix outputs need independent writable column objects; their identities are preserved.
 *
 * @function lerp
 * @memberof hg
 * @static
 * @param {hgOperand} a - Left operand.
 * @param {hgOperand} b - Right operand.
 * @param {number} t - Interpolation factor; values outside [0, 1] extrapolate.
 * @param {hgVector|hgMatrix} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgOperand} Numeric result, a fresh vector/matrix, or the supplied out object.
 * @throws {Error} If argument count, operand types/dimensions, or the numeric factor are unsupported.
 * @example
 * hg.lerp(hg.vec2(0), hg.vec2(10), 0.25); // <2.5, 2.5>
 */
function lerp(a, b, t, out) {
  if (arguments.length < 3 || arguments.length > 4) throw new Error(`[lerp] Expected 3 or 4 arguments, received ${arguments.length} instead`);
  if (typeof t !== "number") throw new Error(`[lerp] Expected numeric interpolation factor`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__: switch(tb) {
      case __num__: return num.lerp.__nn__ (a, b, t, out)
      case __vec2__: return vec2.lerp.__nv__(a, b, t, out)
      case __vec3__: return vec3.lerp.__nv__(a, b, t, out)
      case __vec4__: return vec4.lerp.__nv__(a, b, t, out)
      case __mat2__: return mat2.lerp.__nm__(a, b, t, out)
      case __mat3__: return mat3.lerp.__nm__(a, b, t, out)
      case __mat4__: return mat4.lerp.__nm__(a, b, t, out)
    } break;
    case __vec2__: switch(tb) {
      case __num__: return vec2.lerp.__vn__(a, b, t, out)
      case __vec2__: return vec2.lerp.__vv__(a, b, t, out)
      case __vec3__: return vec3.lerp.__vv__(a, b, t, out)
      case __vec4__: return vec4.lerp.__vv__(a, b, t, out)
    } break;
    case __vec3__: switch(tb) {
      case __num__: return vec3.lerp.__vn__(a, b, t, out)
      case __vec2__: return vec3.lerp.__vv__(a, b, t, out)
      case __vec3__: return vec3.lerp.__vv__(a, b, t, out)
      case __vec4__: return vec4.lerp.__vv__(a, b, t, out)
    } break;
    case __vec4__: switch(tb) {
      case __num__: return vec4.lerp.__vn__(a, b, t, out)
      case __vec2__: return vec4.lerp.__vv__(a, b, t, out)
      case __vec3__: return vec4.lerp.__vv__(a, b, t, out)
      case __vec4__: return vec4.lerp.__vv__(a, b, t, out)
    } break;
    case __mat2__: switch(tb) {
      case __num__: return mat2.lerp.__mn__(a, b, t, out)
      case __mat2__: return mat2.lerp.__mm__(a, b, t, out)
    } break;
    case __mat3__: switch(tb) {
      case __num__: return mat3.lerp.__mn__(a, b, t, out)
      case __mat3__: return mat3.lerp.__mm__(a, b, t, out)
    } break;
    case __mat4__: switch(tb) {
      case __num__: return mat4.lerp.__mn__(a, b, t, out)
      case __mat4__: return mat4.lerp.__mm__(a, b, t, out)
    } break;
  }
  throw new Error(`[lerp] Unsupported operand types`);
}

  Object.assign(hg, { lerp });
})(globalThis.hg);
