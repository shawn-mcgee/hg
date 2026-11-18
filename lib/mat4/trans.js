/**
 * @file mat4.trans: Transposes the named matrix columns.
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
 * @memberof hg.mat4
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function trans(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[mat4.trans] Expected 1 to 2 arguments`);
  const ta = type(a)
  switch(ta) {
    case __mat4__:
      return trans.__m__(a, out)
  }
  throw new Error(`[mat4.trans] Unsupported operand types or matrix dimensions`);
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
 * @memberof hg.mat4.trans
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 */
trans.__m__ = function(a, out) {
  const xx = a.x.x
  const xy = a.y.x
  const xz = a.z.x
  const xw = a.w.x
  const yx = a.x.y
  const yy = a.y.y
  const yz = a.z.y
  const yw = a.w.y
  const zx = a.x.z
  const zy = a.y.z
  const zz = a.z.z
  const zw = a.w.z
  const wx = a.x.w
  const wy = a.y.w
  const wz = a.z.w
  const ww = a.w.w
  if (out === undefined) return mat4.__new__(
    vec4.__new__(xx, xy, xz, xw),
    vec4.__new__(yx, yy, yz, yw),
    vec4.__new__(zx, zy, zz, zw),
    vec4.__new__(wx, wy, wz, ww)
  )
  out.x.x = xx
  out.x.y = xy
  out.x.z = xz
  out.x.w = xw
  out.y.x = yx
  out.y.y = yy
  out.y.z = yz
  out.y.w = yw
  out.z.x = zx
  out.z.y = zy
  out.z.z = zz
  out.z.w = zw
  out.w.x = wx
  out.w.y = wy
  out.w.z = wz
  out.w.w = ww
  return out
}

  mat4.trans = trans;
})(globalThis.hg);
