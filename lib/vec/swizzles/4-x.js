/**
 * @file Unified vector swizzle group 4-x; absent or nullish members read as zero.
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
 * Selects x, x, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxxx.__v__(a, out)
  }
  throw new Error(`[vec.xxxx] Expected a number or vector`);
}

/**
 * Selects xxxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxxx.__n__ = function(a, out) {
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
 * Selects xxxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxxx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxxy.__v__(a, out)
  }
  throw new Error(`[vec.xxxy] Expected a number or vector`);
}

/**
 * Selects xxxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxxy.__n__ = function(a, out) {
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
 * Selects xxxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxxy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxxz.__v__(a, out)
  }
  throw new Error(`[vec.xxxz] Expected a number or vector`);
}

/**
 * Selects xxxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxxz.__n__ = function(a, out) {
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
 * Selects xxxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxxz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxxw.__v__(a, out)
  }
  throw new Error(`[vec.xxxw] Expected a number or vector`);
}

/**
 * Selects xxxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxxw.__n__ = function(a, out) {
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
 * Selects xxxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxxw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxyx.__v__(a, out)
  }
  throw new Error(`[vec.xxyx] Expected a number or vector`);
}

/**
 * Selects xxyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxyx.__n__ = function(a, out) {
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
 * Selects xxyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxyx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxyy.__v__(a, out)
  }
  throw new Error(`[vec.xxyy] Expected a number or vector`);
}

/**
 * Selects xxyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxyy.__n__ = function(a, out) {
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
 * Selects xxyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxyy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxyz.__v__(a, out)
  }
  throw new Error(`[vec.xxyz] Expected a number or vector`);
}

/**
 * Selects xxyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxyz.__n__ = function(a, out) {
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
 * Selects xxyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxyz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxyw.__v__(a, out)
  }
  throw new Error(`[vec.xxyw] Expected a number or vector`);
}

/**
 * Selects xxyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxyw.__n__ = function(a, out) {
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
 * Selects xxyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxyw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxzx.__v__(a, out)
  }
  throw new Error(`[vec.xxzx] Expected a number or vector`);
}

/**
 * Selects xxzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxzx.__n__ = function(a, out) {
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
 * Selects xxzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxzx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxzy.__v__(a, out)
  }
  throw new Error(`[vec.xxzy] Expected a number or vector`);
}

/**
 * Selects xxzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxzy.__n__ = function(a, out) {
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
 * Selects xxzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxzy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxzz.__v__(a, out)
  }
  throw new Error(`[vec.xxzz] Expected a number or vector`);
}

/**
 * Selects xxzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxzz.__n__ = function(a, out) {
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
 * Selects xxzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxzz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxzw.__v__(a, out)
  }
  throw new Error(`[vec.xxzw] Expected a number or vector`);
}

/**
 * Selects xxzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxzw.__n__ = function(a, out) {
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
 * Selects xxzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxzw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxwx.__v__(a, out)
  }
  throw new Error(`[vec.xxwx] Expected a number or vector`);
}

/**
 * Selects xxwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxwx.__n__ = function(a, out) {
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
 * Selects xxwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxwx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxwy.__v__(a, out)
  }
  throw new Error(`[vec.xxwy] Expected a number or vector`);
}

/**
 * Selects xxwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxwy.__n__ = function(a, out) {
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
 * Selects xxwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxwy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxwz.__v__(a, out)
  }
  throw new Error(`[vec.xxwz] Expected a number or vector`);
}

/**
 * Selects xxwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxwz.__n__ = function(a, out) {
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
 * Selects xxwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxwz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, x, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxww.__v__(a, out)
  }
  throw new Error(`[vec.xxww] Expected a number or vector`);
}

/**
 * Selects xxww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxww.__n__ = function(a, out) {
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
 * Selects xxww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xxww.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyxx.__v__(a, out)
  }
  throw new Error(`[vec.xyxx] Expected a number or vector`);
}

/**
 * Selects xyxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyxx.__n__ = function(a, out) {
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
 * Selects xyxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyxx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyxy.__v__(a, out)
  }
  throw new Error(`[vec.xyxy] Expected a number or vector`);
}

/**
 * Selects xyxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyxy.__n__ = function(a, out) {
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
 * Selects xyxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyxy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyxz.__v__(a, out)
  }
  throw new Error(`[vec.xyxz] Expected a number or vector`);
}

/**
 * Selects xyxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyxz.__n__ = function(a, out) {
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
 * Selects xyxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyxz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyxw.__v__(a, out)
  }
  throw new Error(`[vec.xyxw] Expected a number or vector`);
}

/**
 * Selects xyxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyxw.__n__ = function(a, out) {
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
 * Selects xyxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyxw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyyx.__v__(a, out)
  }
  throw new Error(`[vec.xyyx] Expected a number or vector`);
}

/**
 * Selects xyyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyyx.__n__ = function(a, out) {
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
 * Selects xyyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyyx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyyy.__v__(a, out)
  }
  throw new Error(`[vec.xyyy] Expected a number or vector`);
}

/**
 * Selects xyyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyyy.__n__ = function(a, out) {
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
 * Selects xyyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyyy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyyz.__v__(a, out)
  }
  throw new Error(`[vec.xyyz] Expected a number or vector`);
}

/**
 * Selects xyyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyyz.__n__ = function(a, out) {
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
 * Selects xyyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyyz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyyw.__v__(a, out)
  }
  throw new Error(`[vec.xyyw] Expected a number or vector`);
}

/**
 * Selects xyyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyyw.__n__ = function(a, out) {
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
 * Selects xyyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyyw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyzx.__v__(a, out)
  }
  throw new Error(`[vec.xyzx] Expected a number or vector`);
}

/**
 * Selects xyzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyzx.__n__ = function(a, out) {
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
 * Selects xyzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyzx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyzy.__v__(a, out)
  }
  throw new Error(`[vec.xyzy] Expected a number or vector`);
}

/**
 * Selects xyzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyzy.__n__ = function(a, out) {
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
 * Selects xyzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyzy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyzz.__v__(a, out)
  }
  throw new Error(`[vec.xyzz] Expected a number or vector`);
}

/**
 * Selects xyzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyzz.__n__ = function(a, out) {
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
 * Selects xyzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyzz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyzw.__v__(a, out)
  }
  throw new Error(`[vec.xyzw] Expected a number or vector`);
}

/**
 * Selects xyzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyzw.__n__ = function(a, out) {
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
 * Selects xyzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyzw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xywx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xywx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xywx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xywx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xywx.__v__(a, out)
  }
  throw new Error(`[vec.xywx] Expected a number or vector`);
}

/**
 * Selects xywx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xywx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xywx.__n__ = function(a, out) {
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
 * Selects xywx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xywx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xywx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xywy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xywy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xywy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xywy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xywy.__v__(a, out)
  }
  throw new Error(`[vec.xywy] Expected a number or vector`);
}

/**
 * Selects xywy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xywy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xywy.__n__ = function(a, out) {
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
 * Selects xywy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xywy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xywy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xywz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xywz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xywz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xywz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xywz.__v__(a, out)
  }
  throw new Error(`[vec.xywz] Expected a number or vector`);
}

/**
 * Selects xywz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xywz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xywz.__n__ = function(a, out) {
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
 * Selects xywz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xywz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xywz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, y, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyww.__v__(a, out)
  }
  throw new Error(`[vec.xyww] Expected a number or vector`);
}

/**
 * Selects xyww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyww.__n__ = function(a, out) {
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
 * Selects xyww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xyww.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzxx.__v__(a, out)
  }
  throw new Error(`[vec.xzxx] Expected a number or vector`);
}

/**
 * Selects xzxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzxx.__n__ = function(a, out) {
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
 * Selects xzxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzxx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzxy.__v__(a, out)
  }
  throw new Error(`[vec.xzxy] Expected a number or vector`);
}

/**
 * Selects xzxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzxy.__n__ = function(a, out) {
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
 * Selects xzxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzxy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzxz.__v__(a, out)
  }
  throw new Error(`[vec.xzxz] Expected a number or vector`);
}

/**
 * Selects xzxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzxz.__n__ = function(a, out) {
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
 * Selects xzxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzxz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzxw.__v__(a, out)
  }
  throw new Error(`[vec.xzxw] Expected a number or vector`);
}

/**
 * Selects xzxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzxw.__n__ = function(a, out) {
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
 * Selects xzxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzxw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzyx.__v__(a, out)
  }
  throw new Error(`[vec.xzyx] Expected a number or vector`);
}

/**
 * Selects xzyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzyx.__n__ = function(a, out) {
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
 * Selects xzyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzyx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzyy.__v__(a, out)
  }
  throw new Error(`[vec.xzyy] Expected a number or vector`);
}

/**
 * Selects xzyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzyy.__n__ = function(a, out) {
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
 * Selects xzyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzyy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzyz.__v__(a, out)
  }
  throw new Error(`[vec.xzyz] Expected a number or vector`);
}

/**
 * Selects xzyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzyz.__n__ = function(a, out) {
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
 * Selects xzyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzyz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzyw.__v__(a, out)
  }
  throw new Error(`[vec.xzyw] Expected a number or vector`);
}

/**
 * Selects xzyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzyw.__n__ = function(a, out) {
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
 * Selects xzyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzyw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzzx.__v__(a, out)
  }
  throw new Error(`[vec.xzzx] Expected a number or vector`);
}

/**
 * Selects xzzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzzx.__n__ = function(a, out) {
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
 * Selects xzzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzzx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzzy.__v__(a, out)
  }
  throw new Error(`[vec.xzzy] Expected a number or vector`);
}

/**
 * Selects xzzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzzy.__n__ = function(a, out) {
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
 * Selects xzzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzzy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzzz.__v__(a, out)
  }
  throw new Error(`[vec.xzzz] Expected a number or vector`);
}

/**
 * Selects xzzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzzz.__n__ = function(a, out) {
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
 * Selects xzzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzzz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzzw.__v__(a, out)
  }
  throw new Error(`[vec.xzzw] Expected a number or vector`);
}

/**
 * Selects xzzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzzw.__n__ = function(a, out) {
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
 * Selects xzzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzzw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzwx.__v__(a, out)
  }
  throw new Error(`[vec.xzwx] Expected a number or vector`);
}

/**
 * Selects xzwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzwx.__n__ = function(a, out) {
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
 * Selects xzwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzwx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzwy.__v__(a, out)
  }
  throw new Error(`[vec.xzwy] Expected a number or vector`);
}

/**
 * Selects xzwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzwy.__n__ = function(a, out) {
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
 * Selects xzwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzwy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzwz.__v__(a, out)
  }
  throw new Error(`[vec.xzwz] Expected a number or vector`);
}

/**
 * Selects xzwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzwz.__n__ = function(a, out) {
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
 * Selects xzwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzwz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, z, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzww.__v__(a, out)
  }
  throw new Error(`[vec.xzww] Expected a number or vector`);
}

/**
 * Selects xzww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzww.__n__ = function(a, out) {
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
 * Selects xzww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xzww.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwxx.__v__(a, out)
  }
  throw new Error(`[vec.xwxx] Expected a number or vector`);
}

/**
 * Selects xwxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwxx.__n__ = function(a, out) {
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
 * Selects xwxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwxx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwxy.__v__(a, out)
  }
  throw new Error(`[vec.xwxy] Expected a number or vector`);
}

/**
 * Selects xwxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwxy.__n__ = function(a, out) {
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
 * Selects xwxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwxy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwxz.__v__(a, out)
  }
  throw new Error(`[vec.xwxz] Expected a number or vector`);
}

/**
 * Selects xwxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwxz.__n__ = function(a, out) {
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
 * Selects xwxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwxz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwxw.__v__(a, out)
  }
  throw new Error(`[vec.xwxw] Expected a number or vector`);
}

/**
 * Selects xwxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwxw.__n__ = function(a, out) {
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
 * Selects xwxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwxw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwyx.__v__(a, out)
  }
  throw new Error(`[vec.xwyx] Expected a number or vector`);
}

/**
 * Selects xwyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwyx.__n__ = function(a, out) {
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
 * Selects xwyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwyx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwyy.__v__(a, out)
  }
  throw new Error(`[vec.xwyy] Expected a number or vector`);
}

/**
 * Selects xwyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwyy.__n__ = function(a, out) {
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
 * Selects xwyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwyy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwyz.__v__(a, out)
  }
  throw new Error(`[vec.xwyz] Expected a number or vector`);
}

/**
 * Selects xwyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwyz.__n__ = function(a, out) {
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
 * Selects xwyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwyz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwyw.__v__(a, out)
  }
  throw new Error(`[vec.xwyw] Expected a number or vector`);
}

/**
 * Selects xwyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwyw.__n__ = function(a, out) {
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
 * Selects xwyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwyw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwzx.__v__(a, out)
  }
  throw new Error(`[vec.xwzx] Expected a number or vector`);
}

/**
 * Selects xwzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwzx.__n__ = function(a, out) {
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
 * Selects xwzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwzx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwzy.__v__(a, out)
  }
  throw new Error(`[vec.xwzy] Expected a number or vector`);
}

/**
 * Selects xwzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwzy.__n__ = function(a, out) {
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
 * Selects xwzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwzy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwzz.__v__(a, out)
  }
  throw new Error(`[vec.xwzz] Expected a number or vector`);
}

/**
 * Selects xwzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwzz.__n__ = function(a, out) {
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
 * Selects xwzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwzz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwzw.__v__(a, out)
  }
  throw new Error(`[vec.xwzw] Expected a number or vector`);
}

/**
 * Selects xwzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwzw.__n__ = function(a, out) {
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
 * Selects xwzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwzw.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwwx.__v__(a, out)
  }
  throw new Error(`[vec.xwwx] Expected a number or vector`);
}

/**
 * Selects xwwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwwx.__n__ = function(a, out) {
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
 * Selects xwwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwwx.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwwy.__v__(a, out)
  }
  throw new Error(`[vec.xwwy] Expected a number or vector`);
}

/**
 * Selects xwwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwwy.__n__ = function(a, out) {
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
 * Selects xwwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwwy.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwwz.__v__(a, out)
  }
  throw new Error(`[vec.xwwz] Expected a number or vector`);
}

/**
 * Selects xwwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwwz.__n__ = function(a, out) {
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
 * Selects xwwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwwz.__v__ = function(a, out) {
  const x = a.x ?? 0
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
 * Selects x, w, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwww.__v__(a, out)
  }
  throw new Error(`[vec.xwww] Expected a number or vector`);
}

/**
 * Selects xwww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwww.__n__ = function(a, out) {
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
 * Selects xwww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
xwww.__v__ = function(a, out) {
  const x = a.x ?? 0
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

  vec.xxxx = xxxx;
  vec.xxxy = xxxy;
  vec.xxxz = xxxz;
  vec.xxxw = xxxw;
  vec.xxyx = xxyx;
  vec.xxyy = xxyy;
  vec.xxyz = xxyz;
  vec.xxyw = xxyw;
  vec.xxzx = xxzx;
  vec.xxzy = xxzy;
  vec.xxzz = xxzz;
  vec.xxzw = xxzw;
  vec.xxwx = xxwx;
  vec.xxwy = xxwy;
  vec.xxwz = xxwz;
  vec.xxww = xxww;
  vec.xyxx = xyxx;
  vec.xyxy = xyxy;
  vec.xyxz = xyxz;
  vec.xyxw = xyxw;
  vec.xyyx = xyyx;
  vec.xyyy = xyyy;
  vec.xyyz = xyyz;
  vec.xyyw = xyyw;
  vec.xyzx = xyzx;
  vec.xyzy = xyzy;
  vec.xyzz = xyzz;
  vec.xyzw = xyzw;
  vec.xywx = xywx;
  vec.xywy = xywy;
  vec.xywz = xywz;
  vec.xyww = xyww;
  vec.xzxx = xzxx;
  vec.xzxy = xzxy;
  vec.xzxz = xzxz;
  vec.xzxw = xzxw;
  vec.xzyx = xzyx;
  vec.xzyy = xzyy;
  vec.xzyz = xzyz;
  vec.xzyw = xzyw;
  vec.xzzx = xzzx;
  vec.xzzy = xzzy;
  vec.xzzz = xzzz;
  vec.xzzw = xzzw;
  vec.xzwx = xzwx;
  vec.xzwy = xzwy;
  vec.xzwz = xzwz;
  vec.xzww = xzww;
  vec.xwxx = xwxx;
  vec.xwxy = xwxy;
  vec.xwxz = xwxz;
  vec.xwxw = xwxw;
  vec.xwyx = xwyx;
  vec.xwyy = xwyy;
  vec.xwyz = xwyz;
  vec.xwyw = xwyw;
  vec.xwzx = xwzx;
  vec.xwzy = xwzy;
  vec.xwzz = xwzz;
  vec.xwzw = xwzw;
  vec.xwwx = xwwx;
  vec.xwwy = xwwy;
  vec.xwwz = xwwz;
  vec.xwww = xwww;
})(globalThis.hg);
