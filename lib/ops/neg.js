/**
 * @file Compatibility dispatcher: Negates a number or every vector/matrix component.
 * Load after hg.js and lib/types.js. Registers hg.neg as a direct dispatcher into typed namespace children.
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
 * Negates a number or every vector/matrix component.
 * All result components are captured before writes. out must have the result shape;
 * it may alias an input when that input has the same shape.
 * Matrix outputs need independent writable column objects; their identities are preserved.
 *
 * @function neg
 * @memberof hg
 * @static
 * @param {hgOperand} a - Input value.
 * @param {hgVector|hgMatrix} [out] - Matching writable result object; returned by identity when supplied.
 * @returns {hgOperand} Numeric result, a fresh vector/matrix, or the supplied out object.
 * @throws {Error} If the argument count or operand types/dimensions are unsupported.
 * @example
 * hg.neg(hg.vec2(2, -3)); // <-2, 3>
 */
function neg(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[neg] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return num.neg.__n__ (a, out)
    case __vec2__: return vec2.neg.__v__(a, out)
    case __vec3__: return vec3.neg.__v__(a, out)
    case __vec4__: return vec4.neg.__v__(a, out)
    case __mat2__: return mat2.neg.__m__(a, out)
    case __mat3__: return mat3.neg.__m__(a, out)
    case __mat4__: return mat4.neg.__m__(a, out)
  }
  throw new Error(`[neg] Cannot negate ${ta}`);
}

  Object.assign(hg, {
    neg
  });
})(globalThis.hg);
