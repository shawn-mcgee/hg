/**
 * @file mat2.xform: Multiplies operands, with homogeneous extension for a matrix one dimension larger.
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
 * @memberof hg.mat2
 * @static
 * @param {number|hgMat2} a - Operand projected into the namespace dimension.
 * @param {number|hgMat2} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function xform(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[mat2.xform] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __mat2__:
          return xform.__nm__(a, b, out)
      } break;
    case __mat2__:
      switch(tb) {
        case __num__:
          return xform.__mn__(a, b, out)
        case __mat2__:
          return xform.__mm__(a, b, out)
      } break;
  }
  throw new Error(`[mat2.xform] Unsupported operand types or matrix dimensions`);
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
 * @memberof hg.mat2.xform
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat2} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 */
xform.__nm__ = function(a, b, out) {
  const xx = a * b.x.x
  const xy = a * b.x.y
  const yx = a * b.y.x
  const yy = a * b.y.y
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
 * @memberof hg.mat2.xform
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 */
xform.__mn__ = function(a, b, out) {
  const xx = a.x.x * b
  const xy = a.x.y * b
  const yx = a.y.x * b
  const yy = a.y.y * b
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
 * @memberof hg.mat2.xform
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @param {hgMat2} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 */
xform.__mm__ = function(a, b, out) {
  const xx = a.x.x * b.x.x + a.y.x * b.x.y
  const xy = a.x.y * b.x.x + a.y.y * b.x.y
  const yx = a.x.x * b.y.x + a.y.x * b.y.y
  const yy = a.x.y * b.y.x + a.y.y * b.y.y
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

  mat2.xform = xform;
})(globalThis.hg);
