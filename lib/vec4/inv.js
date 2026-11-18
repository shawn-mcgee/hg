/**
 * @file vec4.inv: Computes reciprocals or a matrix inverse.
 * Loads after hg.js and lib/types.js; the namespace fixes computation dimension.
 */
/**
 * Registers the typed operation without exposing implementation names.
 * @private
 * @param {hgNamespace} hg - Shared namespace.
 * @returns {void} Adds one operation to the constructor namespace.
 */
(function(hg) {
  const { __num__, __vec2__, __vec3__, __vec4__, __mat2__, __mat3__, __mat4__, type, num, vec2, vec3, vec4, mat2, mat3, mat4 } = hg.__core__;

/**
 * Computes reciprocals or a matrix inverse.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Vector inverse means component reciprocals, not a matrix inverse.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function inv
 * @memberof hg.vec4
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
function inv(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec4.inv] Expected 1 to 2 arguments`);
  const ta = type(a)
  switch(ta) {
    case __num__:
      return inv.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__:
      return inv.__v__(a, out)
  }
  throw new Error(`[vec4.inv] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes reciprocals or a matrix inverse.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Vector inverse means component reciprocals, not a matrix inverse.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __n__
 * @memberof hg.vec4.inv
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
inv.__n__ = function(a, out) {
  const x = 1 / a
  const y = 1 / a
  const z = 1 / a
  const w = 1 / a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Computes reciprocals or a matrix inverse.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Vector inverse means component reciprocals, not a matrix inverse.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __v__
 * @memberof hg.vec4.inv
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVec4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec4} Fresh result or the supplied destination.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
inv.__v__ = function(a, out) {
  const x = 1 / a.x
  const y = 1 / a.y
  const z = 1 / (a.z ?? 0)
  const w = 1 / (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

  vec4.inv = inv;
})(globalThis.hg);
