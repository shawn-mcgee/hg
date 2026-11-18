/**
 * @file Compatibility dispatcher: Calculates squared vector magnitude without taking a square root.
 * Load after hg.js and lib/types.js. Registers hg.mag2 as a direct dispatcher into typed namespace children.
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
 * Calculates squared vector magnitude without taking a square root.
 * Direct squared arithmetic may overflow or underflow; use the unsquared operation when needed.
 *
 * @function mag2
 * @memberof hg
 * @static
 * @param {hgVector} a - Input value.
 * @returns {number} Computed numeric result.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.mag2(hg.vec2(3, 4)); // 25
 */
function mag2(a) {
  if (arguments.length !== 1) throw new Error(`[mag2] Expected 1 argument, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __vec2__: return vec2.mag2.__v__(a)
    case __vec3__: return vec3.mag2.__v__(a)
    case __vec4__: return vec4.mag2.__v__(a)
  }
  throw new Error(`[mag2] Unsupported operand types`);
}

  Object.assign(hg, { mag2 });
})(globalThis.hg);
