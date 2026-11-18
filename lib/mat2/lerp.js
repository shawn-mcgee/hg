/**
 * @file mat2.lerp: Linearly interpolates or extrapolates between operands.
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
 * @memberof hg.mat2
 * @static
 * @param {number|hgMat2} a - Operand projected into the namespace dimension.
 * @param {number|hgMat2} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function lerp(a, b, t, out) {
  if (arguments.length < 3 || arguments.length > 4) throw new Error(`[mat2.lerp] Expected 3 to 4 arguments`);
  if (typeof t !== "number") throw new Error(`[mat2.lerp] Expected numeric factor`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __mat2__:
          return lerp.__nm__(a, b, t, out)
      } break;
    case __mat2__:
      switch(tb) {
        case __num__:
          return lerp.__mn__(a, b, t, out)
        case __mat2__:
          return lerp.__mm__(a, b, t, out)
      } break;
  }
  throw new Error(`[mat2.lerp] Unsupported operand types or matrix dimensions`);
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
 * @memberof hg.mat2.lerp
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat2} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 */
lerp.__nm__ = function(a, b, t, out) {
  let xx
  let xy
  let yx
  let yy
  if (t === 0) {
    xx = a
    xy = a
    yx = a
    yy = a
  } else if (t === 1) {
    xx = b.x.x
    xy = b.x.y
    yx = b.y.x
    yy = b.y.y
  } else {
    xx = a + (b.x.x - a) * t
    xy = a + (b.x.y - a) * t
    yx = a + (b.y.x - a) * t
    yy = a + (b.y.y - a) * t
  }
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
 * Linearly interpolates or extrapolates between operands.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mn__
 * @memberof hg.mat2.lerp
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 */
lerp.__mn__ = function(a, b, t, out) {
  let xx
  let xy
  let yx
  let yy
  if (t === 0) {
    xx = a.x.x
    xy = a.x.y
    yx = a.y.x
    yy = a.y.y
  } else if (t === 1) {
    xx = b
    xy = b
    yx = b
    yy = b
  } else {
    xx = a.x.x + (b - a.x.x) * t
    xy = a.x.y + (b - a.x.y) * t
    yx = a.y.x + (b - a.y.x) * t
    yy = a.y.y + (b - a.y.y) * t
  }
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
 * Linearly interpolates or extrapolates between operands.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The numeric factor is not clamped; factors 0 and 1 copy the projected endpoint exactly.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mm__
 * @memberof hg.mat2.lerp
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @param {hgMat2} b - Operand projected into the namespace dimension.
 * @param {number} t - Interpolation factor.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 */
lerp.__mm__ = function(a, b, t, out) {
  let xx
  let xy
  let yx
  let yy
  if (t === 0) {
    xx = a.x.x
    xy = a.x.y
    yx = a.y.x
    yy = a.y.y
  } else if (t === 1) {
    xx = b.x.x
    xy = b.x.y
    yx = b.y.x
    yy = b.y.y
  } else {
    xx = a.x.x + (b.x.x - a.x.x) * t
    xy = a.x.y + (b.x.y - a.x.y) * t
    yx = a.y.x + (b.y.x - a.y.x) * t
    yy = a.y.y + (b.y.y - a.y.y) * t
  }
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

  mat2.lerp = lerp;
})(globalThis.hg);
