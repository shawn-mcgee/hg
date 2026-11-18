/**
 * @file Compatibility dispatcher: Calculates squared Euclidean distance without taking a square root.
 * Load after hg.js and lib/types.js. Registers hg.dist2 as a direct dispatcher into typed namespace children.
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
 * Calculates squared Euclidean distance without taking a square root.
 * Mixed dimensions are supported by treating missing components as zero.
 * Direct squared arithmetic may overflow or underflow; use the unsquared operation when needed.
 *
 * @function dist2
 * @memberof hg
 * @static
 * @param {hgVector} a - Left operand.
 * @param {hgVector} b - Right operand.
 * @returns {number} Computed numeric result.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.dist2(hg.vec2(0), hg.vec2(3, 4)); // 25
 */
function dist2(a, b) {
  if (arguments.length !== 2) throw new Error(`[dist2] Expected 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __vec2__: switch(tb) {
      case __vec2__: return vec2.dist2.__vv__(a, b)
      case __vec3__: return vec3.dist2.__vv__(a, b)
      case __vec4__: return vec4.dist2.__vv__(a, b)
    } break;
    case __vec3__: switch(tb) {
      case __vec2__: return vec3.dist2.__vv__(a, b)
      case __vec3__: return vec3.dist2.__vv__(a, b)
      case __vec4__: return vec4.dist2.__vv__(a, b)
    } break;
    case __vec4__: switch(tb) {
      case __vec2__: return vec4.dist2.__vv__(a, b)
      case __vec3__: return vec4.dist2.__vv__(a, b)
      case __vec4__: return vec4.dist2.__vv__(a, b)
    } break;
  }
  throw new Error(`[dist2] Unsupported operand types`);
}

  Object.assign(hg, { dist2 });
})(globalThis.hg);
