/**
 * @file vec3.neg: Negates each component.
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
 * Negates each component.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function neg
 * @memberof hg.vec3
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function neg(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec3.neg] Expected 1 to 2 arguments`);
  const ta = type(a)
  switch(ta) {
    case __num__:
      return neg.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__:
      return neg.__v__(a, out)
  }
  throw new Error(`[vec3.neg] Unsupported operand types or matrix dimensions`);
}

/**
 * Negates each component.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __n__
 * @memberof hg.vec3.neg
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
neg.__n__ = function(a, out) {
  const x = -a
  const y = -a
  const z = -a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Negates each component.
 * Computes in 3 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * Optional out must match the result shape. All components are captured before output writes.
 * Matrix destinations retain their independent writable column objects.
 *
 * @function __v__
 * @memberof hg.vec3.neg
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVec3} [out] - Reusable destination; may alias compatible inputs.
 * @returns {hgVec3} Fresh result or the supplied destination.
 */
neg.__v__ = function(a, out) {
  const x = -a.x
  const y = -a.y
  const z = -(a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

  vec3.neg = neg;
})(globalThis.hg);
