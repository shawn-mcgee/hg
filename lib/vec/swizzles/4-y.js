/**
 * @file Unified vector swizzle group 4-y; absent or nullish members read as zero.
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
 * Selects y, x, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxxx.__v__(a, out)
  }
  throw new Error(`[vec.yxxx] Expected a number or vector`);
}

/**
 * Selects yxxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxxx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxxx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = a.x ?? 0
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxxy.__v__(a, out)
  }
  throw new Error(`[vec.yxxy] Expected a number or vector`);
}

/**
 * Selects yxxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxxy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxxy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = a.x ?? 0
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxxz.__v__(a, out)
  }
  throw new Error(`[vec.yxxz] Expected a number or vector`);
}

/**
 * Selects yxxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxxz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxxz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = a.x ?? 0
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxxw.__v__(a, out)
  }
  throw new Error(`[vec.yxxw] Expected a number or vector`);
}

/**
 * Selects yxxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxxw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxxw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = a.x ?? 0
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxyx.__v__(a, out)
  }
  throw new Error(`[vec.yxyx] Expected a number or vector`);
}

/**
 * Selects yxyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxyx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxyx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = a.y ?? 0
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxyy.__v__(a, out)
  }
  throw new Error(`[vec.yxyy] Expected a number or vector`);
}

/**
 * Selects yxyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxyy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxyy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = a.y ?? 0
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxyz.__v__(a, out)
  }
  throw new Error(`[vec.yxyz] Expected a number or vector`);
}

/**
 * Selects yxyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxyz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxyz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = a.y ?? 0
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxyw.__v__(a, out)
  }
  throw new Error(`[vec.yxyw] Expected a number or vector`);
}

/**
 * Selects yxyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxyw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxyw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = a.y ?? 0
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxzx.__v__(a, out)
  }
  throw new Error(`[vec.yxzx] Expected a number or vector`);
}

/**
 * Selects yxzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxzx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxzx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = (a.z ?? 0)
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxzy.__v__(a, out)
  }
  throw new Error(`[vec.yxzy] Expected a number or vector`);
}

/**
 * Selects yxzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxzy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxzy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = (a.z ?? 0)
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxzz.__v__(a, out)
  }
  throw new Error(`[vec.yxzz] Expected a number or vector`);
}

/**
 * Selects yxzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxzz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxzz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = (a.z ?? 0)
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxzw.__v__(a, out)
  }
  throw new Error(`[vec.yxzw] Expected a number or vector`);
}

/**
 * Selects yxzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxzw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxzw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = (a.z ?? 0)
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxwx.__v__(a, out)
  }
  throw new Error(`[vec.yxwx] Expected a number or vector`);
}

/**
 * Selects yxwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxwx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxwx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = (a.w ?? 0)
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxwy.__v__(a, out)
  }
  throw new Error(`[vec.yxwy] Expected a number or vector`);
}

/**
 * Selects yxwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxwy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxwy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = (a.w ?? 0)
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxwz.__v__(a, out)
  }
  throw new Error(`[vec.yxwz] Expected a number or vector`);
}

/**
 * Selects yxwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxwz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxwz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = (a.w ?? 0)
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, x, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxww.__v__(a, out)
  }
  throw new Error(`[vec.yxww] Expected a number or vector`);
}

/**
 * Selects yxww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxww.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yxww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yxww.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = (a.w ?? 0)
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyxx.__v__(a, out)
  }
  throw new Error(`[vec.yyxx] Expected a number or vector`);
}

/**
 * Selects yyxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyxx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyxx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = a.x ?? 0
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyxy.__v__(a, out)
  }
  throw new Error(`[vec.yyxy] Expected a number or vector`);
}

/**
 * Selects yyxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyxy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyxy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = a.x ?? 0
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyxz.__v__(a, out)
  }
  throw new Error(`[vec.yyxz] Expected a number or vector`);
}

/**
 * Selects yyxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyxz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyxz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = a.x ?? 0
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyxw.__v__(a, out)
  }
  throw new Error(`[vec.yyxw] Expected a number or vector`);
}

/**
 * Selects yyxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyxw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyxw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = a.x ?? 0
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyyx.__v__(a, out)
  }
  throw new Error(`[vec.yyyx] Expected a number or vector`);
}

/**
 * Selects yyyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyyx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyyx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = a.y ?? 0
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyyy.__v__(a, out)
  }
  throw new Error(`[vec.yyyy] Expected a number or vector`);
}

/**
 * Selects yyyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyyy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyyy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = a.y ?? 0
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyyz.__v__(a, out)
  }
  throw new Error(`[vec.yyyz] Expected a number or vector`);
}

/**
 * Selects yyyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyyz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyyz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = a.y ?? 0
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyyw.__v__(a, out)
  }
  throw new Error(`[vec.yyyw] Expected a number or vector`);
}

/**
 * Selects yyyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyyw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyyw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = a.y ?? 0
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyzx.__v__(a, out)
  }
  throw new Error(`[vec.yyzx] Expected a number or vector`);
}

/**
 * Selects yyzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyzx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyzx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = (a.z ?? 0)
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyzy.__v__(a, out)
  }
  throw new Error(`[vec.yyzy] Expected a number or vector`);
}

/**
 * Selects yyzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyzy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyzy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = (a.z ?? 0)
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyzz.__v__(a, out)
  }
  throw new Error(`[vec.yyzz] Expected a number or vector`);
}

/**
 * Selects yyzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyzz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyzz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = (a.z ?? 0)
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyzw.__v__(a, out)
  }
  throw new Error(`[vec.yyzw] Expected a number or vector`);
}

/**
 * Selects yyzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyzw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyzw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = (a.z ?? 0)
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yywx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yywx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yywx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yywx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yywx.__v__(a, out)
  }
  throw new Error(`[vec.yywx] Expected a number or vector`);
}

/**
 * Selects yywx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yywx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yywx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yywx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yywx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yywx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = (a.w ?? 0)
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yywy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yywy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yywy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yywy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yywy.__v__(a, out)
  }
  throw new Error(`[vec.yywy] Expected a number or vector`);
}

/**
 * Selects yywy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yywy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yywy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yywy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yywy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yywy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = (a.w ?? 0)
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yywz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yywz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yywz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yywz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yywz.__v__(a, out)
  }
  throw new Error(`[vec.yywz] Expected a number or vector`);
}

/**
 * Selects yywz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yywz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yywz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yywz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yywz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yywz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = (a.w ?? 0)
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, y, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyww.__v__(a, out)
  }
  throw new Error(`[vec.yyww] Expected a number or vector`);
}

/**
 * Selects yyww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyww.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yyww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yyww.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = (a.w ?? 0)
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzxx.__v__(a, out)
  }
  throw new Error(`[vec.yzxx] Expected a number or vector`);
}

/**
 * Selects yzxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzxx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzxx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = a.x ?? 0
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzxy.__v__(a, out)
  }
  throw new Error(`[vec.yzxy] Expected a number or vector`);
}

/**
 * Selects yzxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzxy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzxy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = a.x ?? 0
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzxz.__v__(a, out)
  }
  throw new Error(`[vec.yzxz] Expected a number or vector`);
}

/**
 * Selects yzxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzxz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzxz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = a.x ?? 0
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzxw.__v__(a, out)
  }
  throw new Error(`[vec.yzxw] Expected a number or vector`);
}

/**
 * Selects yzxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzxw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzxw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = a.x ?? 0
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzyx.__v__(a, out)
  }
  throw new Error(`[vec.yzyx] Expected a number or vector`);
}

/**
 * Selects yzyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzyx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzyx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = a.y ?? 0
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzyy.__v__(a, out)
  }
  throw new Error(`[vec.yzyy] Expected a number or vector`);
}

/**
 * Selects yzyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzyy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzyy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = a.y ?? 0
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzyz.__v__(a, out)
  }
  throw new Error(`[vec.yzyz] Expected a number or vector`);
}

/**
 * Selects yzyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzyz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzyz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = a.y ?? 0
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzyw.__v__(a, out)
  }
  throw new Error(`[vec.yzyw] Expected a number or vector`);
}

/**
 * Selects yzyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzyw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzyw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = a.y ?? 0
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzzx.__v__(a, out)
  }
  throw new Error(`[vec.yzzx] Expected a number or vector`);
}

/**
 * Selects yzzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzzx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzzx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = (a.z ?? 0)
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzzy.__v__(a, out)
  }
  throw new Error(`[vec.yzzy] Expected a number or vector`);
}

/**
 * Selects yzzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzzy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzzy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = (a.z ?? 0)
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzzz.__v__(a, out)
  }
  throw new Error(`[vec.yzzz] Expected a number or vector`);
}

/**
 * Selects yzzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzzz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzzz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = (a.z ?? 0)
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzzw.__v__(a, out)
  }
  throw new Error(`[vec.yzzw] Expected a number or vector`);
}

/**
 * Selects yzzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzzw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzzw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = (a.z ?? 0)
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzwx.__v__(a, out)
  }
  throw new Error(`[vec.yzwx] Expected a number or vector`);
}

/**
 * Selects yzwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzwx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzwx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = (a.w ?? 0)
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzwy.__v__(a, out)
  }
  throw new Error(`[vec.yzwy] Expected a number or vector`);
}

/**
 * Selects yzwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzwy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzwy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = (a.w ?? 0)
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzwz.__v__(a, out)
  }
  throw new Error(`[vec.yzwz] Expected a number or vector`);
}

/**
 * Selects yzwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzwz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzwz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = (a.w ?? 0)
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, z, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzww.__v__(a, out)
  }
  throw new Error(`[vec.yzww] Expected a number or vector`);
}

/**
 * Selects yzww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzww.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects yzww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
yzww.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = (a.w ?? 0)
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywxx.__v__(a, out)
  }
  throw new Error(`[vec.ywxx] Expected a number or vector`);
}

/**
 * Selects ywxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywxx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywxx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = a.x ?? 0
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywxy.__v__(a, out)
  }
  throw new Error(`[vec.ywxy] Expected a number or vector`);
}

/**
 * Selects ywxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywxy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywxy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = a.x ?? 0
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywxz.__v__(a, out)
  }
  throw new Error(`[vec.ywxz] Expected a number or vector`);
}

/**
 * Selects ywxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywxz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywxz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = a.x ?? 0
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywxw.__v__(a, out)
  }
  throw new Error(`[vec.ywxw] Expected a number or vector`);
}

/**
 * Selects ywxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywxw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywxw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = a.x ?? 0
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywyx.__v__(a, out)
  }
  throw new Error(`[vec.ywyx] Expected a number or vector`);
}

/**
 * Selects ywyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywyx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywyx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = a.y ?? 0
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywyy.__v__(a, out)
  }
  throw new Error(`[vec.ywyy] Expected a number or vector`);
}

/**
 * Selects ywyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywyy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywyy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = a.y ?? 0
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywyz.__v__(a, out)
  }
  throw new Error(`[vec.ywyz] Expected a number or vector`);
}

/**
 * Selects ywyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywyz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywyz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = a.y ?? 0
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywyw.__v__(a, out)
  }
  throw new Error(`[vec.ywyw] Expected a number or vector`);
}

/**
 * Selects ywyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywyw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywyw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = a.y ?? 0
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywzx.__v__(a, out)
  }
  throw new Error(`[vec.ywzx] Expected a number or vector`);
}

/**
 * Selects ywzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywzx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywzx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = (a.z ?? 0)
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywzy.__v__(a, out)
  }
  throw new Error(`[vec.ywzy] Expected a number or vector`);
}

/**
 * Selects ywzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywzy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywzy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = (a.z ?? 0)
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywzz.__v__(a, out)
  }
  throw new Error(`[vec.ywzz] Expected a number or vector`);
}

/**
 * Selects ywzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywzz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywzz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = (a.z ?? 0)
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywzw.__v__(a, out)
  }
  throw new Error(`[vec.ywzw] Expected a number or vector`);
}

/**
 * Selects ywzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywzw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywzw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = (a.z ?? 0)
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywwx.__v__(a, out)
  }
  throw new Error(`[vec.ywwx] Expected a number or vector`);
}

/**
 * Selects ywwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywwx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywwx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = (a.w ?? 0)
  const w = a.x ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywwy.__v__(a, out)
  }
  throw new Error(`[vec.ywwy] Expected a number or vector`);
}

/**
 * Selects ywwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywwy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywwy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = (a.w ?? 0)
  const w = a.y ?? 0
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywwz.__v__(a, out)
  }
  throw new Error(`[vec.ywwz] Expected a number or vector`);
}

/**
 * Selects ywwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywwz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywwz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = (a.w ?? 0)
  const w = (a.z ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects y, w, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywww.__v__(a, out)
  }
  throw new Error(`[vec.ywww] Expected a number or vector`);
}

/**
 * Selects ywww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywww.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  const w = a
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/**
 * Selects ywww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
ywww.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = (a.w ?? 0)
  const w = (a.w ?? 0)
  if (out === undefined) return vec4.__new__(x, y, z, w)
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

  vec.yxxx = yxxx;
  vec.yxxy = yxxy;
  vec.yxxz = yxxz;
  vec.yxxw = yxxw;
  vec.yxyx = yxyx;
  vec.yxyy = yxyy;
  vec.yxyz = yxyz;
  vec.yxyw = yxyw;
  vec.yxzx = yxzx;
  vec.yxzy = yxzy;
  vec.yxzz = yxzz;
  vec.yxzw = yxzw;
  vec.yxwx = yxwx;
  vec.yxwy = yxwy;
  vec.yxwz = yxwz;
  vec.yxww = yxww;
  vec.yyxx = yyxx;
  vec.yyxy = yyxy;
  vec.yyxz = yyxz;
  vec.yyxw = yyxw;
  vec.yyyx = yyyx;
  vec.yyyy = yyyy;
  vec.yyyz = yyyz;
  vec.yyyw = yyyw;
  vec.yyzx = yyzx;
  vec.yyzy = yyzy;
  vec.yyzz = yyzz;
  vec.yyzw = yyzw;
  vec.yywx = yywx;
  vec.yywy = yywy;
  vec.yywz = yywz;
  vec.yyww = yyww;
  vec.yzxx = yzxx;
  vec.yzxy = yzxy;
  vec.yzxz = yzxz;
  vec.yzxw = yzxw;
  vec.yzyx = yzyx;
  vec.yzyy = yzyy;
  vec.yzyz = yzyz;
  vec.yzyw = yzyw;
  vec.yzzx = yzzx;
  vec.yzzy = yzzy;
  vec.yzzz = yzzz;
  vec.yzzw = yzzw;
  vec.yzwx = yzwx;
  vec.yzwy = yzwy;
  vec.yzwz = yzwz;
  vec.yzww = yzww;
  vec.ywxx = ywxx;
  vec.ywxy = ywxy;
  vec.ywxz = ywxz;
  vec.ywxw = ywxw;
  vec.ywyx = ywyx;
  vec.ywyy = ywyy;
  vec.ywyz = ywyz;
  vec.ywyw = ywyw;
  vec.ywzx = ywzx;
  vec.ywzy = ywzy;
  vec.ywzz = ywzz;
  vec.ywzw = ywzw;
  vec.ywwx = ywwx;
  vec.ywwy = ywwy;
  vec.ywwz = ywwz;
  vec.ywww = ywww;
})(globalThis.hg);
