/**
 * @file Compatibility dispatcher: Calculates the determinant of a column-stored square matrix.
 * Load after hg.js and lib/types.js. Registers hg.det as a direct dispatcher into typed namespace children.
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
 * Calculates the determinant of a column-stored square matrix.
 *
 * @function det
 * @memberof hg
 * @static
 * @param {hgMatrix} a - Input value.
 * @returns {number} Computed numeric result.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.det(hg.mat2(1, 2, 3, 4)); // -2
 */
function det(a) {
  if (arguments.length !== 1) throw new Error(`[det] Expected 1 argument, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __mat2__: return mat2.det.__m__(a)
    case __mat3__: return mat3.det.__m__(a)
    case __mat4__: return mat4.det.__m__(a)
  }
  throw new Error(`[det] Cannot compute determinant of ${ta}`);
}

  Object.assign(hg, {
    det
  });
})(globalThis.hg);
