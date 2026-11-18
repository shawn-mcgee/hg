/**
 * @file mat2.inv: Computes reciprocals or a matrix inverse.
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
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function inv
 * @memberof hg.mat2
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
function inv(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[mat2.inv] Expected 1 to 2 arguments`);
  const ta = type(a)
  switch(ta) {
    case __mat2__:
      return inv.__m__(a, out)
  }
  throw new Error(`[mat2.inv] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes reciprocals or a matrix inverse.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __m__
 * @memberof hg.mat2.inv
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @throws {Error} If a matrix inverse is singular; no destination writes occur.
 * @see Number JavaScript division may produce Infinity or NaN for zero divisors.
 */
inv.__m__ = function(a, out) {
  // Cofactors are transposed into the inverse's named columns.
  const c00 = a.y.y
  const c01 = -(a.x.y)
  const c10 = -(a.y.x)
  const c11 = a.x.x

  const d = a.x.x * c00 + a.y.x * c01
  if (d === 0) throw new Error(`[inv] Cannot invert singular mat2`);
  const r = 1 / d
  const xx = c00 * r
  const xy = c01 * r
  const yx = c10 * r
  const yy = c11 * r
  if (out === undefined) return mat2.__new__(
    vec2.__new__(xx, xy),
    vec2.__new__(yx, yy)
  )
  out.x.x = xx
  out.x.y = xy
  out.y.x = yx
  out.y.y = yy
  return out
}

  mat2.inv = inv;
})(globalThis.hg);
