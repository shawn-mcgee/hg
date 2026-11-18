/**
 * @file mat3.trans: Transposes the named matrix columns.
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
 * Transposes the named matrix columns.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function trans
 * @memberof hg.mat3
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function trans(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[mat3.trans] Expected 1 to 2 arguments`);
  const ta = type(a)
  switch(ta) {
    case __mat3__:
      return trans.__m__(a, out)
  }
  throw new Error(`[mat3.trans] Unsupported operand types or matrix dimensions`);
}

/**
 * Transposes the named matrix columns.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __m__
 * @memberof hg.mat3.trans
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 */
trans.__m__ = function(a, out) {
  const xx = a.x.x
  const xy = a.y.x
  const xz = a.z.x
  const yx = a.x.y
  const yy = a.y.y
  const yz = a.z.y
  const zx = a.x.z
  const zy = a.y.z
  const zz = a.z.z
  if (out === undefined) return mat3.__new__(
    vec3.__new__(xx, xy, xz),
    vec3.__new__(yx, yy, yz),
    vec3.__new__(zx, zy, zz)
  )
  out.x.x = xx
  out.x.y = xy
  out.x.z = xz
  out.y.x = yx
  out.y.y = yy
  out.y.z = yz
  out.z.x = zx
  out.z.y = zy
  out.z.z = zz
  return out
}

  mat3.trans = trans;
})(globalThis.hg);
