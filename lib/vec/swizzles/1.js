/**
 * @file Unified vector swizzle group 1; absent or nullish members read as zero.
 */
/**
 * Registers vector namespace selections.
 * @private
 * @param {hgNamespace} hg - Shared namespace.
 * @returns {void} Attaches swizzle methods.
 */
(function(hg) {
  const { type, __num__, __vec2__, __vec3__, __vec4__, vec2, vec3, vec4 } = hg.__core__;
  const { vec } = hg;

/**
 * Selects x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function x
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @returns {number} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function x(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[vec.x] Invalid argument count`);
  switch(type(a)) {
    case __num__: return x.__n__(a)
    case __vec2__:
    case __vec3__:
    case __vec4__: return x.__v__(a)
  }
  throw new Error(`[vec.x] Expected a number or vector`);
}

/**
 * Selects x from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.x
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @returns {number} Selected scalar or fresh/reused result.
 */
x.__n__ = function(a) {
  return a
}

/**
 * Selects x from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.x
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @returns {number} Selected scalar or fresh/reused result.
 */
x.__v__ = function(a) {
  return a.x ?? 0
}

/**
 * Selects y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function y
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @returns {number} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function y(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[vec.y] Invalid argument count`);
  switch(type(a)) {
    case __num__: return y.__n__(a)
    case __vec2__:
    case __vec3__:
    case __vec4__: return y.__v__(a)
  }
  throw new Error(`[vec.y] Expected a number or vector`);
}

/**
 * Selects y from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.y
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @returns {number} Selected scalar or fresh/reused result.
 */
y.__n__ = function(a) {
  return a
}

/**
 * Selects y from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.y
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @returns {number} Selected scalar or fresh/reused result.
 */
y.__v__ = function(a) {
  return a.y ?? 0
}

/**
 * Selects z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function z
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @returns {number} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function z(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[vec.z] Invalid argument count`);
  switch(type(a)) {
    case __num__: return z.__n__(a)
    case __vec2__:
    case __vec3__:
    case __vec4__: return z.__v__(a)
  }
  throw new Error(`[vec.z] Expected a number or vector`);
}

/**
 * Selects z from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.z
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @returns {number} Selected scalar or fresh/reused result.
 */
z.__n__ = function(a) {
  return a
}

/**
 * Selects z from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.z
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @returns {number} Selected scalar or fresh/reused result.
 */
z.__v__ = function(a) {
  return (a.z ?? 0)
}

/**
 * Selects w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function w
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @returns {number} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function w(a) {
  if (arguments.length < 1 || arguments.length > 1) throw new Error(`[vec.w] Invalid argument count`);
  switch(type(a)) {
    case __num__: return w.__n__(a)
    case __vec2__:
    case __vec3__:
    case __vec4__: return w.__v__(a)
  }
  throw new Error(`[vec.w] Expected a number or vector`);
}

/**
 * Selects w from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.w
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @returns {number} Selected scalar or fresh/reused result.
 */
w.__n__ = function(a) {
  return a
}

/**
 * Selects w from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.w
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @returns {number} Selected scalar or fresh/reused result.
 */
w.__v__ = function(a) {
  return (a.w ?? 0)
}

  vec.x = x;
  vec.y = y;
  vec.z = z;
  vec.w = w;
})(globalThis.hg);
