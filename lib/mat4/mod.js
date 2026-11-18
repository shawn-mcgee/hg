/**
 * @file mat4.mod: Computes component-wise modulo with the divisor's sign.
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
  const scalarMod = num.mod.__nn__;

/**
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function mod
 * @memberof hg.mat4
 * @static
 * @param {number|hgMat4} a - Operand projected into the namespace dimension.
 * @param {number|hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @throws {Error} If arity or operand types/dimensions are unsupported.
 * @see hg.num.mod
 */
function mod(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[mat4.mod] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __mat4__:
          return mod.__nm__(a, b, out)
      } break;
    case __mat4__:
      switch(tb) {
        case __num__:
          return mod.__mn__(a, b, out)
        case __mat4__:
          return mod.__mm__(a, b, out)
      } break;
  }
  throw new Error(`[mat4.mod] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nm__
 * @memberof hg.mat4.mod
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @see hg.num.mod
 */
mod.__nm__ = function(a, b, out) {
  const xx = scalarMod(a, b.x.x)
  const xy = scalarMod(a, b.x.y)
  const xz = scalarMod(a, b.x.z)
  const xw = scalarMod(a, b.x.w)
  const yx = scalarMod(a, b.y.x)
  const yy = scalarMod(a, b.y.y)
  const yz = scalarMod(a, b.y.z)
  const yw = scalarMod(a, b.y.w)
  const zx = scalarMod(a, b.z.x)
  const zy = scalarMod(a, b.z.y)
  const zz = scalarMod(a, b.z.z)
  const zw = scalarMod(a, b.z.w)
  const wx = scalarMod(a, b.w.x)
  const wy = scalarMod(a, b.w.y)
  const wz = scalarMod(a, b.w.z)
  const ww = scalarMod(a, b.w.w)
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

/**
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mn__
 * @memberof hg.mat4.mod
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @see hg.num.mod
 */
mod.__mn__ = function(a, b, out) {
  const xx = scalarMod(a.x.x, b)
  const xy = scalarMod(a.x.y, b)
  const xz = scalarMod(a.x.z, b)
  const xw = scalarMod(a.x.w, b)
  const yx = scalarMod(a.y.x, b)
  const yy = scalarMod(a.y.y, b)
  const yz = scalarMod(a.y.z, b)
  const yw = scalarMod(a.y.w, b)
  const zx = scalarMod(a.z.x, b)
  const zy = scalarMod(a.z.y, b)
  const zz = scalarMod(a.z.z, b)
  const zw = scalarMod(a.z.w, b)
  const wx = scalarMod(a.w.x, b)
  const wy = scalarMod(a.w.y, b)
  const wz = scalarMod(a.w.z, b)
  const ww = scalarMod(a.w.w, b)
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

/**
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mm__
 * @memberof hg.mat4.mod
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @see hg.num.mod
 */
mod.__mm__ = function(a, b, out) {
  const xx = scalarMod(a.x.x, b.x.x)
  const xy = scalarMod(a.x.y, b.x.y)
  const xz = scalarMod(a.x.z, b.x.z)
  const xw = scalarMod(a.x.w, b.x.w)
  const yx = scalarMod(a.y.x, b.y.x)
  const yy = scalarMod(a.y.y, b.y.y)
  const yz = scalarMod(a.y.z, b.y.z)
  const yw = scalarMod(a.y.w, b.y.w)
  const zx = scalarMod(a.z.x, b.z.x)
  const zy = scalarMod(a.z.y, b.z.y)
  const zz = scalarMod(a.z.z, b.z.z)
  const zw = scalarMod(a.z.w, b.z.w)
  const wx = scalarMod(a.w.x, b.w.x)
  const wy = scalarMod(a.w.y, b.w.y)
  const wz = scalarMod(a.w.z, b.w.z)
  const ww = scalarMod(a.w.w, b.w.w)
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

  mat4.mod = mod;
})(globalThis.hg);
