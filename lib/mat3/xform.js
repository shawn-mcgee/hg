/**
 * @file mat3.xform: Multiplies operands, with homogeneous extension for a matrix one dimension larger.
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
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function xform
 * @memberof hg.mat3
 * @static
 * @param {number|hgMat3} a - Operand projected into the namespace dimension.
 * @param {number|hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function xform(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[mat3.xform] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __mat3__:
          return xform.__nm__(a, b, out)
      } break;
    case __mat3__:
      switch(tb) {
        case __num__:
          return xform.__mn__(a, b, out)
        case __mat3__:
          return xform.__mm__(a, b, out)
      } break;
  }
  throw new Error(`[mat3.xform] Unsupported operand types or matrix dimensions`);
}

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nm__
 * @memberof hg.mat3.xform
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 */
xform.__nm__ = function(a, b, out) {
  const xx = a * b.x.x
  const xy = a * b.x.y
  const xz = a * b.x.z
  const yx = a * b.y.x
  const yy = a * b.y.y
  const yz = a * b.y.z
  const zx = a * b.z.x
  const zy = a * b.z.y
  const zz = a * b.z.z
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

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mn__
 * @memberof hg.mat3.xform
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 */
xform.__mn__ = function(a, b, out) {
  const xx = a.x.x * b
  const xy = a.x.y * b
  const xz = a.x.z * b
  const yx = a.y.x * b
  const yy = a.y.y * b
  const yz = a.y.z * b
  const zx = a.z.x * b
  const zy = a.z.y * b
  const zz = a.z.z * b
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

/**
 * Multiplies operands, with homogeneous extension for a matrix one dimension larger.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * A larger matrix appends 1 to the projected vector, then truncates the result without perspective division.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mm__
 * @memberof hg.mat3.xform
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 */
xform.__mm__ = function(a, b, out) {
  const xx = a.x.x * b.x.x + a.y.x * b.x.y + a.z.x * b.x.z
  const xy = a.x.y * b.x.x + a.y.y * b.x.y + a.z.y * b.x.z
  const xz = a.x.z * b.x.x + a.y.z * b.x.y + a.z.z * b.x.z
  const yx = a.x.x * b.y.x + a.y.x * b.y.y + a.z.x * b.y.z
  const yy = a.x.y * b.y.x + a.y.y * b.y.y + a.z.y * b.y.z
  const yz = a.x.z * b.y.x + a.y.z * b.y.y + a.z.z * b.y.z
  const zx = a.x.x * b.z.x + a.y.x * b.z.y + a.z.x * b.z.z
  const zy = a.x.y * b.z.x + a.y.y * b.z.y + a.z.y * b.z.z
  const zz = a.x.z * b.z.x + a.y.z * b.z.y + a.z.z * b.z.z
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

  mat3.xform = xform;
})(globalThis.hg);
