/**
 * @file mat2.mod: Computes component-wise modulo with the divisor's sign.
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
 * @memberof hg.mat2
 * @static
 * @param {number|hgMat2} a - Operand projected into the namespace dimension.
 * @param {number|hgMat2} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @throws {Error} If arity or operand types/dimensions are unsupported.
 * @see hg.num.mod
 */
function mod(a, b, out) {
  if (arguments.length < 2 || arguments.length > 3) throw new Error(`[mat2.mod] Expected 2 to 3 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __mat2__:
          return mod.__nm__(a, b, out)
      } break;
    case __mat2__:
      switch(tb) {
        case __num__:
          return mod.__mn__(a, b, out)
        case __mat2__:
          return mod.__mm__(a, b, out)
      } break;
  }
  throw new Error(`[mat2.mod] Unsupported operand types or matrix dimensions`);
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
 * @memberof hg.mat2.mod
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgMat2} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @see hg.num.mod
 */
mod.__nm__ = function(a, b, out) {
  const xx = scalarMod(a, b.x.x)
  const xy = scalarMod(a, b.x.y)
  const yx = scalarMod(a, b.y.x)
  const yy = scalarMod(a, b.y.y)
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
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mn__
 * @memberof hg.mat2.mod
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @see hg.num.mod
 */
mod.__mn__ = function(a, b, out) {
  const xx = scalarMod(a.x.x, b)
  const xy = scalarMod(a.x.y, b)
  const yx = scalarMod(a.y.x, b)
  const yy = scalarMod(a.y.y, b)
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
 * Computes component-wise modulo with the divisor's sign.
 * Zero divisors and non-finite operands yield NaN; exact multiples return positive zero.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Matrices must match the namespace size; scalar/matrix arithmetic keeps the existing broadcast/scaling rules.
 * Scalar pairs belong to num; vector-result products belong to a vec namespace.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __mm__
 * @memberof hg.mat2.mod
 * @static
 * @param {hgMat2} a - Operand projected into the namespace dimension.
 * @param {hgMat2} b - Operand projected into the namespace dimension.
 * @param {hgMat2} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgMat2} Fresh result or the supplied destination.
 * @see hg.num.mod
 */
mod.__mm__ = function(a, b, out) {
  const xx = scalarMod(a.x.x, b.x.x)
  const xy = scalarMod(a.x.y, b.x.y)
  const yx = scalarMod(a.y.x, b.y.x)
  const yy = scalarMod(a.y.y, b.y.y)
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

  mat2.mod = mod;
})(globalThis.hg);
