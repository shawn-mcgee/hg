/**
 * @file mat4.lerp: Linearly interpolates or extrapolates between operands.
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
 * Linearly interpolates or extrapolates between operands.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function lerp
 * @memberof hg.mat4
 * @static
 * @param {number|hgMat4} a - Operand projected into the namespace dimension.
 * @param {number|hgMat4} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function lerp(a, b, t, out) {
  if (arguments.length < 3 || arguments.length > 4) throw new Error(`[mat4.lerp] Expected 3 to 4 arguments`);
  if (typeof t !== "number") throw new Error(`[mat4.lerp] Expected numeric factor`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __mat4__:
          return lerp.__nm__(a, b, t, out)
      } break;
    case __mat4__:
      switch(tb) {
        case __num__:
          return lerp.__mn__(a, b, t, out)
        case __mat4__:
          return lerp.__mm__(a, b, t, out)
      } break;
  }
  throw new Error(`[mat4.lerp] Unsupported operand types or matrix dimensions`);
}

/**
 * Linearly interpolates or extrapolates between operands.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __nm__
 * @memberof hg.mat4.lerp
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 */
lerp.__nm__ = function(a, b, t, out) {
  let xx
  let xy
  let xz
  let xw
  let yx
  let yy
  let yz
  let yw
  let zx
  let zy
  let zz
  let zw
  let wx
  let wy
  let wz
  let ww
  if (t === 0) {
    xx = a
    xy = a
    xz = a
    xw = a
    yx = a
    yy = a
    yz = a
    yw = a
    zx = a
    zy = a
    zz = a
    zw = a
    wx = a
    wy = a
    wz = a
    ww = a
  } else if (t === 1) {
    xx = b.x.x
    xy = b.x.y
    xz = b.x.z
    xw = b.x.w
    yx = b.y.x
    yy = b.y.y
    yz = b.y.z
    yw = b.y.w
    zx = b.z.x
    zy = b.z.y
    zz = b.z.z
    zw = b.z.w
    wx = b.w.x
    wy = b.w.y
    wz = b.w.z
    ww = b.w.w
  } else {
    xx = a + (b.x.x - a) * t
    xy = a + (b.x.y - a) * t
    xz = a + (b.x.z - a) * t
    xw = a + (b.x.w - a) * t
    yx = a + (b.y.x - a) * t
    yy = a + (b.y.y - a) * t
    yz = a + (b.y.z - a) * t
    yw = a + (b.y.w - a) * t
    zx = a + (b.z.x - a) * t
    zy = a + (b.z.y - a) * t
    zz = a + (b.z.z - a) * t
    zw = a + (b.z.w - a) * t
    wx = a + (b.w.x - a) * t
    wy = a + (b.w.y - a) * t
    wz = a + (b.w.z - a) * t
    ww = a + (b.w.w - a) * t
  }
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
 * Linearly interpolates or extrapolates between operands.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mn__
 * @memberof hg.mat4.lerp
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 */
lerp.__mn__ = function(a, b, t, out) {
  let xx
  let xy
  let xz
  let xw
  let yx
  let yy
  let yz
  let yw
  let zx
  let zy
  let zz
  let zw
  let wx
  let wy
  let wz
  let ww
  if (t === 0) {
    xx = a.x.x
    xy = a.x.y
    xz = a.x.z
    xw = a.x.w
    yx = a.y.x
    yy = a.y.y
    yz = a.y.z
    yw = a.y.w
    zx = a.z.x
    zy = a.z.y
    zz = a.z.z
    zw = a.z.w
    wx = a.w.x
    wy = a.w.y
    wz = a.w.z
    ww = a.w.w
  } else if (t === 1) {
    xx = b
    xy = b
    xz = b
    xw = b
    yx = b
    yy = b
    yz = b
    yw = b
    zx = b
    zy = b
    zz = b
    zw = b
    wx = b
    wy = b
    wz = b
    ww = b
  } else {
    xx = a.x.x + (b - a.x.x) * t
    xy = a.x.y + (b - a.x.y) * t
    xz = a.x.z + (b - a.x.z) * t
    xw = a.x.w + (b - a.x.w) * t
    yx = a.y.x + (b - a.y.x) * t
    yy = a.y.y + (b - a.y.y) * t
    yz = a.y.z + (b - a.y.z) * t
    yw = a.y.w + (b - a.y.w) * t
    zx = a.z.x + (b - a.z.x) * t
    zy = a.z.y + (b - a.z.y) * t
    zz = a.z.z + (b - a.z.z) * t
    zw = a.z.w + (b - a.z.w) * t
    wx = a.w.x + (b - a.w.x) * t
    wy = a.w.y + (b - a.w.y) * t
    wz = a.w.z + (b - a.w.z) * t
    ww = a.w.w + (b - a.w.w) * t
  }
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
 * Linearly interpolates or extrapolates between operands.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mm__
 * @memberof hg.mat4.lerp
 * @static
 * @param {hgMat4} a - Operand projected into the namespace dimension.
 * @param {hgMat4} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat4} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat4} Fresh result or the supplied destination.
 */
lerp.__mm__ = function(a, b, t, out) {
  let xx
  let xy
  let xz
  let xw
  let yx
  let yy
  let yz
  let yw
  let zx
  let zy
  let zz
  let zw
  let wx
  let wy
  let wz
  let ww
  if (t === 0) {
    xx = a.x.x
    xy = a.x.y
    xz = a.x.z
    xw = a.x.w
    yx = a.y.x
    yy = a.y.y
    yz = a.y.z
    yw = a.y.w
    zx = a.z.x
    zy = a.z.y
    zz = a.z.z
    zw = a.z.w
    wx = a.w.x
    wy = a.w.y
    wz = a.w.z
    ww = a.w.w
  } else if (t === 1) {
    xx = b.x.x
    xy = b.x.y
    xz = b.x.z
    xw = b.x.w
    yx = b.y.x
    yy = b.y.y
    yz = b.y.z
    yw = b.y.w
    zx = b.z.x
    zy = b.z.y
    zz = b.z.z
    zw = b.z.w
    wx = b.w.x
    wy = b.w.y
    wz = b.w.z
    ww = b.w.w
  } else {
    xx = a.x.x + (b.x.x - a.x.x) * t
    xy = a.x.y + (b.x.y - a.x.y) * t
    xz = a.x.z + (b.x.z - a.x.z) * t
    xw = a.x.w + (b.x.w - a.x.w) * t
    yx = a.y.x + (b.y.x - a.y.x) * t
    yy = a.y.y + (b.y.y - a.y.y) * t
    yz = a.y.z + (b.y.z - a.y.z) * t
    yw = a.y.w + (b.y.w - a.y.w) * t
    zx = a.z.x + (b.z.x - a.z.x) * t
    zy = a.z.y + (b.z.y - a.z.y) * t
    zz = a.z.z + (b.z.z - a.z.z) * t
    zw = a.z.w + (b.z.w - a.z.w) * t
    wx = a.w.x + (b.w.x - a.w.x) * t
    wy = a.w.y + (b.w.y - a.w.y) * t
    wz = a.w.z + (b.w.z - a.w.z) * t
    ww = a.w.w + (b.w.w - a.w.w) * t
  }
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

  mat4.lerp = lerp;
})(globalThis.hg);
