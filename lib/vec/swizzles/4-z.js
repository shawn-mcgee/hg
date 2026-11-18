/**
 * @file Unified vector swizzle group 4-z; absent or nullish members read as zero.
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
 * Selects z, x, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxxx.__v__(a, out)
  }
  throw new Error(`[vec.zxxx] Expected a number or vector`);
}

/**
 * Selects zxxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxxx.__n__ = function(a, out) {
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
 * Selects zxxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxxx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxxy.__v__(a, out)
  }
  throw new Error(`[vec.zxxy] Expected a number or vector`);
}

/**
 * Selects zxxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxxy.__n__ = function(a, out) {
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
 * Selects zxxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxxy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxxz.__v__(a, out)
  }
  throw new Error(`[vec.zxxz] Expected a number or vector`);
}

/**
 * Selects zxxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxxz.__n__ = function(a, out) {
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
 * Selects zxxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxxz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxxw.__v__(a, out)
  }
  throw new Error(`[vec.zxxw] Expected a number or vector`);
}

/**
 * Selects zxxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxxw.__n__ = function(a, out) {
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
 * Selects zxxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxxw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxyx.__v__(a, out)
  }
  throw new Error(`[vec.zxyx] Expected a number or vector`);
}

/**
 * Selects zxyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxyx.__n__ = function(a, out) {
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
 * Selects zxyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxyx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxyy.__v__(a, out)
  }
  throw new Error(`[vec.zxyy] Expected a number or vector`);
}

/**
 * Selects zxyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxyy.__n__ = function(a, out) {
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
 * Selects zxyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxyy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxyz.__v__(a, out)
  }
  throw new Error(`[vec.zxyz] Expected a number or vector`);
}

/**
 * Selects zxyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxyz.__n__ = function(a, out) {
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
 * Selects zxyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxyz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxyw.__v__(a, out)
  }
  throw new Error(`[vec.zxyw] Expected a number or vector`);
}

/**
 * Selects zxyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxyw.__n__ = function(a, out) {
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
 * Selects zxyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxyw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxzx.__v__(a, out)
  }
  throw new Error(`[vec.zxzx] Expected a number or vector`);
}

/**
 * Selects zxzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxzx.__n__ = function(a, out) {
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
 * Selects zxzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxzx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxzy.__v__(a, out)
  }
  throw new Error(`[vec.zxzy] Expected a number or vector`);
}

/**
 * Selects zxzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxzy.__n__ = function(a, out) {
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
 * Selects zxzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxzy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxzz.__v__(a, out)
  }
  throw new Error(`[vec.zxzz] Expected a number or vector`);
}

/**
 * Selects zxzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxzz.__n__ = function(a, out) {
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
 * Selects zxzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxzz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxzw.__v__(a, out)
  }
  throw new Error(`[vec.zxzw] Expected a number or vector`);
}

/**
 * Selects zxzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxzw.__n__ = function(a, out) {
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
 * Selects zxzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxzw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxwx.__v__(a, out)
  }
  throw new Error(`[vec.zxwx] Expected a number or vector`);
}

/**
 * Selects zxwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxwx.__n__ = function(a, out) {
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
 * Selects zxwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxwx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxwy.__v__(a, out)
  }
  throw new Error(`[vec.zxwy] Expected a number or vector`);
}

/**
 * Selects zxwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxwy.__n__ = function(a, out) {
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
 * Selects zxwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxwy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxwz.__v__(a, out)
  }
  throw new Error(`[vec.zxwz] Expected a number or vector`);
}

/**
 * Selects zxwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxwz.__n__ = function(a, out) {
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
 * Selects zxwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxwz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, x, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxww.__v__(a, out)
  }
  throw new Error(`[vec.zxww] Expected a number or vector`);
}

/**
 * Selects zxww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxww.__n__ = function(a, out) {
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
 * Selects zxww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zxww.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyxx.__v__(a, out)
  }
  throw new Error(`[vec.zyxx] Expected a number or vector`);
}

/**
 * Selects zyxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyxx.__n__ = function(a, out) {
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
 * Selects zyxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyxx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyxy.__v__(a, out)
  }
  throw new Error(`[vec.zyxy] Expected a number or vector`);
}

/**
 * Selects zyxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyxy.__n__ = function(a, out) {
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
 * Selects zyxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyxy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyxz.__v__(a, out)
  }
  throw new Error(`[vec.zyxz] Expected a number or vector`);
}

/**
 * Selects zyxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyxz.__n__ = function(a, out) {
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
 * Selects zyxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyxz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyxw.__v__(a, out)
  }
  throw new Error(`[vec.zyxw] Expected a number or vector`);
}

/**
 * Selects zyxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyxw.__n__ = function(a, out) {
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
 * Selects zyxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyxw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyyx.__v__(a, out)
  }
  throw new Error(`[vec.zyyx] Expected a number or vector`);
}

/**
 * Selects zyyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyyx.__n__ = function(a, out) {
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
 * Selects zyyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyyx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyyy.__v__(a, out)
  }
  throw new Error(`[vec.zyyy] Expected a number or vector`);
}

/**
 * Selects zyyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyyy.__n__ = function(a, out) {
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
 * Selects zyyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyyy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyyz.__v__(a, out)
  }
  throw new Error(`[vec.zyyz] Expected a number or vector`);
}

/**
 * Selects zyyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyyz.__n__ = function(a, out) {
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
 * Selects zyyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyyz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyyw.__v__(a, out)
  }
  throw new Error(`[vec.zyyw] Expected a number or vector`);
}

/**
 * Selects zyyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyyw.__n__ = function(a, out) {
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
 * Selects zyyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyyw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyzx.__v__(a, out)
  }
  throw new Error(`[vec.zyzx] Expected a number or vector`);
}

/**
 * Selects zyzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyzx.__n__ = function(a, out) {
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
 * Selects zyzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyzx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyzy.__v__(a, out)
  }
  throw new Error(`[vec.zyzy] Expected a number or vector`);
}

/**
 * Selects zyzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyzy.__n__ = function(a, out) {
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
 * Selects zyzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyzy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyzz.__v__(a, out)
  }
  throw new Error(`[vec.zyzz] Expected a number or vector`);
}

/**
 * Selects zyzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyzz.__n__ = function(a, out) {
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
 * Selects zyzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyzz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyzw.__v__(a, out)
  }
  throw new Error(`[vec.zyzw] Expected a number or vector`);
}

/**
 * Selects zyzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyzw.__n__ = function(a, out) {
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
 * Selects zyzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyzw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zywx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zywx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zywx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zywx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zywx.__v__(a, out)
  }
  throw new Error(`[vec.zywx] Expected a number or vector`);
}

/**
 * Selects zywx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zywx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zywx.__n__ = function(a, out) {
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
 * Selects zywx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zywx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zywx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zywy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zywy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zywy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zywy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zywy.__v__(a, out)
  }
  throw new Error(`[vec.zywy] Expected a number or vector`);
}

/**
 * Selects zywy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zywy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zywy.__n__ = function(a, out) {
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
 * Selects zywy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zywy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zywy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zywz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zywz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zywz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zywz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zywz.__v__(a, out)
  }
  throw new Error(`[vec.zywz] Expected a number or vector`);
}

/**
 * Selects zywz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zywz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zywz.__n__ = function(a, out) {
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
 * Selects zywz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zywz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zywz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, y, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyww.__v__(a, out)
  }
  throw new Error(`[vec.zyww] Expected a number or vector`);
}

/**
 * Selects zyww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyww.__n__ = function(a, out) {
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
 * Selects zyww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zyww.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzxx.__v__(a, out)
  }
  throw new Error(`[vec.zzxx] Expected a number or vector`);
}

/**
 * Selects zzxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzxx.__n__ = function(a, out) {
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
 * Selects zzxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzxx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzxy.__v__(a, out)
  }
  throw new Error(`[vec.zzxy] Expected a number or vector`);
}

/**
 * Selects zzxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzxy.__n__ = function(a, out) {
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
 * Selects zzxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzxy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzxz.__v__(a, out)
  }
  throw new Error(`[vec.zzxz] Expected a number or vector`);
}

/**
 * Selects zzxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzxz.__n__ = function(a, out) {
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
 * Selects zzxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzxz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzxw.__v__(a, out)
  }
  throw new Error(`[vec.zzxw] Expected a number or vector`);
}

/**
 * Selects zzxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzxw.__n__ = function(a, out) {
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
 * Selects zzxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzxw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzyx.__v__(a, out)
  }
  throw new Error(`[vec.zzyx] Expected a number or vector`);
}

/**
 * Selects zzyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzyx.__n__ = function(a, out) {
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
 * Selects zzyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzyx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzyy.__v__(a, out)
  }
  throw new Error(`[vec.zzyy] Expected a number or vector`);
}

/**
 * Selects zzyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzyy.__n__ = function(a, out) {
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
 * Selects zzyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzyy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzyz.__v__(a, out)
  }
  throw new Error(`[vec.zzyz] Expected a number or vector`);
}

/**
 * Selects zzyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzyz.__n__ = function(a, out) {
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
 * Selects zzyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzyz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzyw.__v__(a, out)
  }
  throw new Error(`[vec.zzyw] Expected a number or vector`);
}

/**
 * Selects zzyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzyw.__n__ = function(a, out) {
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
 * Selects zzyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzyw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzzx.__v__(a, out)
  }
  throw new Error(`[vec.zzzx] Expected a number or vector`);
}

/**
 * Selects zzzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzzx.__n__ = function(a, out) {
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
 * Selects zzzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzzx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzzy.__v__(a, out)
  }
  throw new Error(`[vec.zzzy] Expected a number or vector`);
}

/**
 * Selects zzzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzzy.__n__ = function(a, out) {
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
 * Selects zzzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzzy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzzz.__v__(a, out)
  }
  throw new Error(`[vec.zzzz] Expected a number or vector`);
}

/**
 * Selects zzzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzzz.__n__ = function(a, out) {
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
 * Selects zzzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzzz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzzw.__v__(a, out)
  }
  throw new Error(`[vec.zzzw] Expected a number or vector`);
}

/**
 * Selects zzzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzzw.__n__ = function(a, out) {
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
 * Selects zzzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzzw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzwx.__v__(a, out)
  }
  throw new Error(`[vec.zzwx] Expected a number or vector`);
}

/**
 * Selects zzwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzwx.__n__ = function(a, out) {
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
 * Selects zzwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzwx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzwy.__v__(a, out)
  }
  throw new Error(`[vec.zzwy] Expected a number or vector`);
}

/**
 * Selects zzwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzwy.__n__ = function(a, out) {
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
 * Selects zzwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzwy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzwz.__v__(a, out)
  }
  throw new Error(`[vec.zzwz] Expected a number or vector`);
}

/**
 * Selects zzwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzwz.__n__ = function(a, out) {
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
 * Selects zzwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzwz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, z, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzww.__v__(a, out)
  }
  throw new Error(`[vec.zzww] Expected a number or vector`);
}

/**
 * Selects zzww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzww.__n__ = function(a, out) {
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
 * Selects zzww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zzww.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwxx.__v__(a, out)
  }
  throw new Error(`[vec.zwxx] Expected a number or vector`);
}

/**
 * Selects zwxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwxx.__n__ = function(a, out) {
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
 * Selects zwxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwxx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwxy.__v__(a, out)
  }
  throw new Error(`[vec.zwxy] Expected a number or vector`);
}

/**
 * Selects zwxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwxy.__n__ = function(a, out) {
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
 * Selects zwxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwxy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwxz.__v__(a, out)
  }
  throw new Error(`[vec.zwxz] Expected a number or vector`);
}

/**
 * Selects zwxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwxz.__n__ = function(a, out) {
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
 * Selects zwxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwxz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwxw.__v__(a, out)
  }
  throw new Error(`[vec.zwxw] Expected a number or vector`);
}

/**
 * Selects zwxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwxw.__n__ = function(a, out) {
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
 * Selects zwxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwxw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwyx.__v__(a, out)
  }
  throw new Error(`[vec.zwyx] Expected a number or vector`);
}

/**
 * Selects zwyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwyx.__n__ = function(a, out) {
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
 * Selects zwyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwyx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwyy.__v__(a, out)
  }
  throw new Error(`[vec.zwyy] Expected a number or vector`);
}

/**
 * Selects zwyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwyy.__n__ = function(a, out) {
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
 * Selects zwyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwyy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwyz.__v__(a, out)
  }
  throw new Error(`[vec.zwyz] Expected a number or vector`);
}

/**
 * Selects zwyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwyz.__n__ = function(a, out) {
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
 * Selects zwyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwyz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwyw.__v__(a, out)
  }
  throw new Error(`[vec.zwyw] Expected a number or vector`);
}

/**
 * Selects zwyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwyw.__n__ = function(a, out) {
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
 * Selects zwyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwyw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwzx.__v__(a, out)
  }
  throw new Error(`[vec.zwzx] Expected a number or vector`);
}

/**
 * Selects zwzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwzx.__n__ = function(a, out) {
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
 * Selects zwzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwzx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwzy.__v__(a, out)
  }
  throw new Error(`[vec.zwzy] Expected a number or vector`);
}

/**
 * Selects zwzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwzy.__n__ = function(a, out) {
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
 * Selects zwzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwzy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwzz.__v__(a, out)
  }
  throw new Error(`[vec.zwzz] Expected a number or vector`);
}

/**
 * Selects zwzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwzz.__n__ = function(a, out) {
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
 * Selects zwzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwzz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwzw.__v__(a, out)
  }
  throw new Error(`[vec.zwzw] Expected a number or vector`);
}

/**
 * Selects zwzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwzw.__n__ = function(a, out) {
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
 * Selects zwzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwzw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwwx.__v__(a, out)
  }
  throw new Error(`[vec.zwwx] Expected a number or vector`);
}

/**
 * Selects zwwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwwx.__n__ = function(a, out) {
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
 * Selects zwwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwwx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwwy.__v__(a, out)
  }
  throw new Error(`[vec.zwwy] Expected a number or vector`);
}

/**
 * Selects zwwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwwy.__n__ = function(a, out) {
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
 * Selects zwwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwwy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwwz.__v__(a, out)
  }
  throw new Error(`[vec.zwwz] Expected a number or vector`);
}

/**
 * Selects zwwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwwz.__n__ = function(a, out) {
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
 * Selects zwwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwwz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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
 * Selects z, w, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwww.__v__(a, out)
  }
  throw new Error(`[vec.zwww] Expected a number or vector`);
}

/**
 * Selects zwww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwww.__n__ = function(a, out) {
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
 * Selects zwww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
zwww.__v__ = function(a, out) {
  const x = (a.z ?? 0)
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

  vec.zxxx = zxxx;
  vec.zxxy = zxxy;
  vec.zxxz = zxxz;
  vec.zxxw = zxxw;
  vec.zxyx = zxyx;
  vec.zxyy = zxyy;
  vec.zxyz = zxyz;
  vec.zxyw = zxyw;
  vec.zxzx = zxzx;
  vec.zxzy = zxzy;
  vec.zxzz = zxzz;
  vec.zxzw = zxzw;
  vec.zxwx = zxwx;
  vec.zxwy = zxwy;
  vec.zxwz = zxwz;
  vec.zxww = zxww;
  vec.zyxx = zyxx;
  vec.zyxy = zyxy;
  vec.zyxz = zyxz;
  vec.zyxw = zyxw;
  vec.zyyx = zyyx;
  vec.zyyy = zyyy;
  vec.zyyz = zyyz;
  vec.zyyw = zyyw;
  vec.zyzx = zyzx;
  vec.zyzy = zyzy;
  vec.zyzz = zyzz;
  vec.zyzw = zyzw;
  vec.zywx = zywx;
  vec.zywy = zywy;
  vec.zywz = zywz;
  vec.zyww = zyww;
  vec.zzxx = zzxx;
  vec.zzxy = zzxy;
  vec.zzxz = zzxz;
  vec.zzxw = zzxw;
  vec.zzyx = zzyx;
  vec.zzyy = zzyy;
  vec.zzyz = zzyz;
  vec.zzyw = zzyw;
  vec.zzzx = zzzx;
  vec.zzzy = zzzy;
  vec.zzzz = zzzz;
  vec.zzzw = zzzw;
  vec.zzwx = zzwx;
  vec.zzwy = zzwy;
  vec.zzwz = zzwz;
  vec.zzww = zzww;
  vec.zwxx = zwxx;
  vec.zwxy = zwxy;
  vec.zwxz = zwxz;
  vec.zwxw = zwxw;
  vec.zwyx = zwyx;
  vec.zwyy = zwyy;
  vec.zwyz = zwyz;
  vec.zwyw = zwyw;
  vec.zwzx = zwzx;
  vec.zwzy = zwzy;
  vec.zwzz = zwzz;
  vec.zwzw = zwzw;
  vec.zwwx = zwwx;
  vec.zwwy = zwwy;
  vec.zwwz = zwwz;
  vec.zwww = zwww;
})(globalThis.hg);
