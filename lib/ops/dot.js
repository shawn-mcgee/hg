/**
 * @file Compatibility dispatcher: Computes a scalar dot product; one argument computes its squared magnitude.
 * Load after hg.js and lib/types.js. Registers hg.dot as a direct dispatcher into typed namespace children.
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
 * Computes a scalar dot product over the components shared by two vectors.
 * With one argument, computes dot(a, a), equivalent to mag2(a).
 * Unmatched components are omitted, including their NaN or infinite values.
 *
 * @function dot
 * @memberof hg
 * @static
 * @param {hgVector} a - Left operand.
 * @param {hgVector} [b=a] - Right operand; defaults to the left operand.
 * @returns {number} Computed numeric result.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.dot(hg.vec3(1, 2, 3), hg.vec3(4, 5, 6)); // 32
 * @example
 * hg.dot(hg.vec3(1, 2, 3)); // 14
 */
function dot(a, b = a) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[dot] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __vec2__: switch(tb) {
      case __vec2__: return vec2.dot.__vv__(a, b)
      case __vec3__: return vec2.dot.__vv__(a, b)
      case __vec4__: return vec2.dot.__vv__(a, b)
    } break;
    case __vec3__: switch(tb) {
      case __vec2__: return vec2.dot.__vv__(a, b)
      case __vec3__: return vec3.dot.__vv__(a, b)
      case __vec4__: return vec3.dot.__vv__(a, b)
    } break;
    case __vec4__: switch(tb) {
      case __vec2__: return vec2.dot.__vv__(a, b)
      case __vec3__: return vec3.dot.__vv__(a, b)
      case __vec4__: return vec4.dot.__vv__(a, b)
    } break;
  }
  throw new Error(`[dot] Cannot compute dot product of ${ta} and ${tb}`);
}

  Object.assign(hg, {
    dot
  });
})(globalThis.hg);
