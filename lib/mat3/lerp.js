/**
 * @file mat3.lerp: Linearly interpolates or extrapolates between operands.
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
 * @memberof hg.mat3
 * @static
 * @param {number|hgMat3} a - Operand projected into the namespace dimension.
 * @param {number|hgMat3} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function lerp(a, b, t, out) {
  if (arguments.length < 3 || arguments.length > 4) throw new Error(`[mat3.lerp] Expected 3 to 4 arguments`);
  if (typeof t !== "number") throw new Error(`[mat3.lerp] Expected numeric factor`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __mat3__:
          return lerp.__nm__(a, b, t, out)
      } break;
    case __mat3__:
      switch(tb) {
        case __num__:
          return lerp.__mn__(a, b, t, out)
        case __mat3__:
          return lerp.__mm__(a, b, t, out)
      } break;
  }
  throw new Error(`[mat3.lerp] Unsupported operand types or matrix dimensions`);
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
 * @memberof hg.mat3.lerp
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 */
lerp.__nm__ = function(a, b, t, out) {
  let xx
  let xy
  let xz
  let yx
  let yy
  let yz
  let zx
  let zy
  let zz
  if (t === 0) {
    xx = a
    xy = a
    xz = a
    yx = a
    yy = a
    yz = a
    zx = a
    zy = a
    zz = a
  } else if (t === 1) {
    xx = b.x.x
    xy = b.x.y
    xz = b.x.z
    yx = b.y.x
    yy = b.y.y
    yz = b.y.z
    zx = b.z.x
    zy = b.z.y
    zz = b.z.z
  } else {
    xx = a + (b.x.x - a) * t
    xy = a + (b.x.y - a) * t
    xz = a + (b.x.z - a) * t
    yx = a + (b.y.x - a) * t
    yy = a + (b.y.y - a) * t
    yz = a + (b.y.z - a) * t
    zx = a + (b.z.x - a) * t
    zy = a + (b.z.y - a) * t
    zz = a + (b.z.z - a) * t
  }
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
 * Linearly interpolates or extrapolates between operands.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mn__
 * @memberof hg.mat3.lerp
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 */
lerp.__mn__ = function(a, b, t, out) {
  let xx
  let xy
  let xz
  let yx
  let yy
  let yz
  let zx
  let zy
  let zz
  if (t === 0) {
    xx = a.x.x
    xy = a.x.y
    xz = a.x.z
    yx = a.y.x
    yy = a.y.y
    yz = a.y.z
    zx = a.z.x
    zy = a.z.y
    zz = a.z.z
  } else if (t === 1) {
    xx = b
    xy = b
    xz = b
    yx = b
    yy = b
    yz = b
    zx = b
    zy = b
    zz = b
  } else {
    xx = a.x.x + (b - a.x.x) * t
    xy = a.x.y + (b - a.x.y) * t
    xz = a.x.z + (b - a.x.z) * t
    yx = a.y.x + (b - a.y.x) * t
    yy = a.y.y + (b - a.y.y) * t
    yz = a.y.z + (b - a.y.z) * t
    zx = a.z.x + (b - a.z.x) * t
    zy = a.z.y + (b - a.z.y) * t
    zz = a.z.z + (b - a.z.z) * t
  }
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
 * Linearly interpolates or extrapolates between operands.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mm__
 * @memberof hg.mat3.lerp
 * @static
 * @param {hgMat3} a - Operand projected into the namespace dimension.
 * @param {hgMat3} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat3} Fresh result or the supplied destination.
 */
lerp.__mm__ = function(a, b, t, out) {
  let xx
  let xy
  let xz
  let yx
  let yy
  let yz
  let zx
  let zy
  let zz
  if (t === 0) {
    xx = a.x.x
    xy = a.x.y
    xz = a.x.z
    yx = a.y.x
    yy = a.y.y
    yz = a.y.z
    zx = a.z.x
    zy = a.z.y
    zz = a.z.z
  } else if (t === 1) {
    xx = b.x.x
    xy = b.x.y
    xz = b.x.z
    yx = b.y.x
    yy = b.y.y
    yz = b.y.z
    zx = b.z.x
    zy = b.z.y
    zz = b.z.z
  } else {
    xx = a.x.x + (b.x.x - a.x.x) * t
    xy = a.x.y + (b.x.y - a.x.y) * t
    xz = a.x.z + (b.x.z - a.x.z) * t
    yx = a.y.x + (b.y.x - a.y.x) * t
    yy = a.y.y + (b.y.y - a.y.y) * t
    yz = a.y.z + (b.y.z - a.y.z) * t
    zx = a.z.x + (b.z.x - a.z.x) * t
    zy = a.z.y + (b.z.y - a.z.y) * t
    zz = a.z.z + (b.z.z - a.z.z) * t
  }
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

  mat3.lerp = lerp;
})(globalThis.hg);
