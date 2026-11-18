/**
 * @file Compatibility dispatcher: Computes a numeric/vector reciprocal or the algebraic inverse of a square matrix.
 * Load after hg.js and lib/types.js. Registers hg.inv as a direct dispatcher into typed namespace children.
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
 * Computes a numeric/vector reciprocal or the algebraic inverse of a square matrix.
 * Numbers and vectors use component reciprocals; matrices use a cofactor-based inverse.
 * Division follows JavaScript numeric semantics: zero divisors can yield Infinity or NaN.
 * All result components are captured before writes. out must have the result shape;
 * it may alias an input when that input has the same shape.
 * Matrix outputs need independent writable column objects; their identities are preserved.
 *
 * @function inv
 * @memberof hg
 * @static
 * @param {hgOperand} a - Input value.
 * @param {hgVector|hgMatrix} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgOperand} Numeric result, a fresh vector/matrix, or the supplied out object.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @throws {Error} If the matrix to invert has a computed determinant of zero; out is unchanged.
 * @example
 * hg.inv(hg.mat4(2)); // diagonal matrix with 0.5 entries
 */
function inv(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[inv] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return num.inv.__n__ (a, out)
    case __vec2__: return vec2.inv.__v__(a, out)
    case __vec3__: return vec3.inv.__v__(a, out)
    case __vec4__: return vec4.inv.__v__(a, out)
    case __mat2__: return mat2.inv.__m__(a, out)
    case __mat3__: return mat3.inv.__m__(a, out)
    case __mat4__: return mat4.inv.__m__(a, out)
  }
  throw new Error(`[inv] Cannot invert ${ta}`);
}

  Object.assign(hg, {
    inv
  });
})(globalThis.hg);
