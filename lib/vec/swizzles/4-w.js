/**
 * @file Unified vector swizzle group 4-w; absent or nullish members read as zero.
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
 * Selects w, x, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxxx.__v__(a, out)
  }
  throw new Error(`[vec.wxxx] Expected a number or vector`);
}

/**
 * Selects wxxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxxx.__n__ = function(a, out) {
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
 * Selects wxxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxxx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxxy.__v__(a, out)
  }
  throw new Error(`[vec.wxxy] Expected a number or vector`);
}

/**
 * Selects wxxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxxy.__n__ = function(a, out) {
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
 * Selects wxxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxxy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxxz.__v__(a, out)
  }
  throw new Error(`[vec.wxxz] Expected a number or vector`);
}

/**
 * Selects wxxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxxz.__n__ = function(a, out) {
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
 * Selects wxxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxxz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxxw.__v__(a, out)
  }
  throw new Error(`[vec.wxxw] Expected a number or vector`);
}

/**
 * Selects wxxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxxw.__n__ = function(a, out) {
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
 * Selects wxxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxxw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxyx.__v__(a, out)
  }
  throw new Error(`[vec.wxyx] Expected a number or vector`);
}

/**
 * Selects wxyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxyx.__n__ = function(a, out) {
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
 * Selects wxyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxyx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxyy.__v__(a, out)
  }
  throw new Error(`[vec.wxyy] Expected a number or vector`);
}

/**
 * Selects wxyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxyy.__n__ = function(a, out) {
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
 * Selects wxyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxyy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxyz.__v__(a, out)
  }
  throw new Error(`[vec.wxyz] Expected a number or vector`);
}

/**
 * Selects wxyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxyz.__n__ = function(a, out) {
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
 * Selects wxyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxyz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxyw.__v__(a, out)
  }
  throw new Error(`[vec.wxyw] Expected a number or vector`);
}

/**
 * Selects wxyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxyw.__n__ = function(a, out) {
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
 * Selects wxyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxyw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxzx.__v__(a, out)
  }
  throw new Error(`[vec.wxzx] Expected a number or vector`);
}

/**
 * Selects wxzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxzx.__n__ = function(a, out) {
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
 * Selects wxzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxzx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxzy.__v__(a, out)
  }
  throw new Error(`[vec.wxzy] Expected a number or vector`);
}

/**
 * Selects wxzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxzy.__n__ = function(a, out) {
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
 * Selects wxzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxzy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxzz.__v__(a, out)
  }
  throw new Error(`[vec.wxzz] Expected a number or vector`);
}

/**
 * Selects wxzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxzz.__n__ = function(a, out) {
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
 * Selects wxzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxzz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxzw.__v__(a, out)
  }
  throw new Error(`[vec.wxzw] Expected a number or vector`);
}

/**
 * Selects wxzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxzw.__n__ = function(a, out) {
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
 * Selects wxzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxzw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxwx.__v__(a, out)
  }
  throw new Error(`[vec.wxwx] Expected a number or vector`);
}

/**
 * Selects wxwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxwx.__n__ = function(a, out) {
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
 * Selects wxwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxwx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxwy.__v__(a, out)
  }
  throw new Error(`[vec.wxwy] Expected a number or vector`);
}

/**
 * Selects wxwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxwy.__n__ = function(a, out) {
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
 * Selects wxwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxwy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxwz.__v__(a, out)
  }
  throw new Error(`[vec.wxwz] Expected a number or vector`);
}

/**
 * Selects wxwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxwz.__n__ = function(a, out) {
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
 * Selects wxwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxwz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, x, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxww.__v__(a, out)
  }
  throw new Error(`[vec.wxww] Expected a number or vector`);
}

/**
 * Selects wxww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxww.__n__ = function(a, out) {
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
 * Selects wxww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wxww.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyxx.__v__(a, out)
  }
  throw new Error(`[vec.wyxx] Expected a number or vector`);
}

/**
 * Selects wyxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyxx.__n__ = function(a, out) {
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
 * Selects wyxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyxx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyxy.__v__(a, out)
  }
  throw new Error(`[vec.wyxy] Expected a number or vector`);
}

/**
 * Selects wyxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyxy.__n__ = function(a, out) {
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
 * Selects wyxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyxy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyxz.__v__(a, out)
  }
  throw new Error(`[vec.wyxz] Expected a number or vector`);
}

/**
 * Selects wyxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyxz.__n__ = function(a, out) {
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
 * Selects wyxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyxz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyxw.__v__(a, out)
  }
  throw new Error(`[vec.wyxw] Expected a number or vector`);
}

/**
 * Selects wyxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyxw.__n__ = function(a, out) {
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
 * Selects wyxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyxw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyyx.__v__(a, out)
  }
  throw new Error(`[vec.wyyx] Expected a number or vector`);
}

/**
 * Selects wyyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyyx.__n__ = function(a, out) {
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
 * Selects wyyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyyx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyyy.__v__(a, out)
  }
  throw new Error(`[vec.wyyy] Expected a number or vector`);
}

/**
 * Selects wyyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyyy.__n__ = function(a, out) {
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
 * Selects wyyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyyy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyyz.__v__(a, out)
  }
  throw new Error(`[vec.wyyz] Expected a number or vector`);
}

/**
 * Selects wyyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyyz.__n__ = function(a, out) {
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
 * Selects wyyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyyz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyyw.__v__(a, out)
  }
  throw new Error(`[vec.wyyw] Expected a number or vector`);
}

/**
 * Selects wyyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyyw.__n__ = function(a, out) {
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
 * Selects wyyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyyw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyzx.__v__(a, out)
  }
  throw new Error(`[vec.wyzx] Expected a number or vector`);
}

/**
 * Selects wyzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyzx.__n__ = function(a, out) {
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
 * Selects wyzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyzx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyzy.__v__(a, out)
  }
  throw new Error(`[vec.wyzy] Expected a number or vector`);
}

/**
 * Selects wyzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyzy.__n__ = function(a, out) {
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
 * Selects wyzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyzy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyzz.__v__(a, out)
  }
  throw new Error(`[vec.wyzz] Expected a number or vector`);
}

/**
 * Selects wyzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyzz.__n__ = function(a, out) {
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
 * Selects wyzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyzz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyzw.__v__(a, out)
  }
  throw new Error(`[vec.wyzw] Expected a number or vector`);
}

/**
 * Selects wyzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyzw.__n__ = function(a, out) {
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
 * Selects wyzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyzw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wywx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wywx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wywx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wywx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wywx.__v__(a, out)
  }
  throw new Error(`[vec.wywx] Expected a number or vector`);
}

/**
 * Selects wywx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wywx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wywx.__n__ = function(a, out) {
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
 * Selects wywx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wywx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wywx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wywy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wywy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wywy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wywy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wywy.__v__(a, out)
  }
  throw new Error(`[vec.wywy] Expected a number or vector`);
}

/**
 * Selects wywy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wywy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wywy.__n__ = function(a, out) {
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
 * Selects wywy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wywy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wywy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wywz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wywz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wywz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wywz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wywz.__v__(a, out)
  }
  throw new Error(`[vec.wywz] Expected a number or vector`);
}

/**
 * Selects wywz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wywz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wywz.__n__ = function(a, out) {
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
 * Selects wywz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wywz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wywz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, y, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyww.__v__(a, out)
  }
  throw new Error(`[vec.wyww] Expected a number or vector`);
}

/**
 * Selects wyww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyww.__n__ = function(a, out) {
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
 * Selects wyww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wyww.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzxx.__v__(a, out)
  }
  throw new Error(`[vec.wzxx] Expected a number or vector`);
}

/**
 * Selects wzxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzxx.__n__ = function(a, out) {
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
 * Selects wzxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzxx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzxy.__v__(a, out)
  }
  throw new Error(`[vec.wzxy] Expected a number or vector`);
}

/**
 * Selects wzxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzxy.__n__ = function(a, out) {
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
 * Selects wzxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzxy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzxz.__v__(a, out)
  }
  throw new Error(`[vec.wzxz] Expected a number or vector`);
}

/**
 * Selects wzxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzxz.__n__ = function(a, out) {
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
 * Selects wzxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzxz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzxw.__v__(a, out)
  }
  throw new Error(`[vec.wzxw] Expected a number or vector`);
}

/**
 * Selects wzxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzxw.__n__ = function(a, out) {
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
 * Selects wzxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzxw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzyx.__v__(a, out)
  }
  throw new Error(`[vec.wzyx] Expected a number or vector`);
}

/**
 * Selects wzyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzyx.__n__ = function(a, out) {
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
 * Selects wzyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzyx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzyy.__v__(a, out)
  }
  throw new Error(`[vec.wzyy] Expected a number or vector`);
}

/**
 * Selects wzyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzyy.__n__ = function(a, out) {
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
 * Selects wzyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzyy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzyz.__v__(a, out)
  }
  throw new Error(`[vec.wzyz] Expected a number or vector`);
}

/**
 * Selects wzyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzyz.__n__ = function(a, out) {
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
 * Selects wzyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzyz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzyw.__v__(a, out)
  }
  throw new Error(`[vec.wzyw] Expected a number or vector`);
}

/**
 * Selects wzyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzyw.__n__ = function(a, out) {
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
 * Selects wzyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzyw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzzx.__v__(a, out)
  }
  throw new Error(`[vec.wzzx] Expected a number or vector`);
}

/**
 * Selects wzzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzzx.__n__ = function(a, out) {
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
 * Selects wzzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzzx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzzy.__v__(a, out)
  }
  throw new Error(`[vec.wzzy] Expected a number or vector`);
}

/**
 * Selects wzzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzzy.__n__ = function(a, out) {
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
 * Selects wzzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzzy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzzz.__v__(a, out)
  }
  throw new Error(`[vec.wzzz] Expected a number or vector`);
}

/**
 * Selects wzzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzzz.__n__ = function(a, out) {
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
 * Selects wzzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzzz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzzw.__v__(a, out)
  }
  throw new Error(`[vec.wzzw] Expected a number or vector`);
}

/**
 * Selects wzzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzzw.__n__ = function(a, out) {
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
 * Selects wzzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzzw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzwx.__v__(a, out)
  }
  throw new Error(`[vec.wzwx] Expected a number or vector`);
}

/**
 * Selects wzwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzwx.__n__ = function(a, out) {
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
 * Selects wzwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzwx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzwy.__v__(a, out)
  }
  throw new Error(`[vec.wzwy] Expected a number or vector`);
}

/**
 * Selects wzwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzwy.__n__ = function(a, out) {
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
 * Selects wzwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzwy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzwz.__v__(a, out)
  }
  throw new Error(`[vec.wzwz] Expected a number or vector`);
}

/**
 * Selects wzwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzwz.__n__ = function(a, out) {
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
 * Selects wzwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzwz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, z, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzww.__v__(a, out)
  }
  throw new Error(`[vec.wzww] Expected a number or vector`);
}

/**
 * Selects wzww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzww.__n__ = function(a, out) {
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
 * Selects wzww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wzww.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwxx.__v__(a, out)
  }
  throw new Error(`[vec.wwxx] Expected a number or vector`);
}

/**
 * Selects wwxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwxx.__n__ = function(a, out) {
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
 * Selects wwxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwxx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwxy.__v__(a, out)
  }
  throw new Error(`[vec.wwxy] Expected a number or vector`);
}

/**
 * Selects wwxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwxy.__n__ = function(a, out) {
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
 * Selects wwxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwxy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwxz.__v__(a, out)
  }
  throw new Error(`[vec.wwxz] Expected a number or vector`);
}

/**
 * Selects wwxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwxz.__n__ = function(a, out) {
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
 * Selects wwxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwxz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwxw.__v__(a, out)
  }
  throw new Error(`[vec.wwxw] Expected a number or vector`);
}

/**
 * Selects wwxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwxw.__n__ = function(a, out) {
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
 * Selects wwxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwxw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwyx.__v__(a, out)
  }
  throw new Error(`[vec.wwyx] Expected a number or vector`);
}

/**
 * Selects wwyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwyx.__n__ = function(a, out) {
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
 * Selects wwyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwyx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwyy.__v__(a, out)
  }
  throw new Error(`[vec.wwyy] Expected a number or vector`);
}

/**
 * Selects wwyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwyy.__n__ = function(a, out) {
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
 * Selects wwyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwyy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwyz.__v__(a, out)
  }
  throw new Error(`[vec.wwyz] Expected a number or vector`);
}

/**
 * Selects wwyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwyz.__n__ = function(a, out) {
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
 * Selects wwyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwyz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwyw.__v__(a, out)
  }
  throw new Error(`[vec.wwyw] Expected a number or vector`);
}

/**
 * Selects wwyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwyw.__n__ = function(a, out) {
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
 * Selects wwyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwyw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwzx.__v__(a, out)
  }
  throw new Error(`[vec.wwzx] Expected a number or vector`);
}

/**
 * Selects wwzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwzx.__n__ = function(a, out) {
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
 * Selects wwzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwzx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwzy.__v__(a, out)
  }
  throw new Error(`[vec.wwzy] Expected a number or vector`);
}

/**
 * Selects wwzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwzy.__n__ = function(a, out) {
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
 * Selects wwzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwzy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwzz.__v__(a, out)
  }
  throw new Error(`[vec.wwzz] Expected a number or vector`);
}

/**
 * Selects wwzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwzz.__n__ = function(a, out) {
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
 * Selects wwzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwzz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwzw.__v__(a, out)
  }
  throw new Error(`[vec.wwzw] Expected a number or vector`);
}

/**
 * Selects wwzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwzw.__n__ = function(a, out) {
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
 * Selects wwzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwzw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwwx.__v__(a, out)
  }
  throw new Error(`[vec.wwwx] Expected a number or vector`);
}

/**
 * Selects wwwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwwx.__n__ = function(a, out) {
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
 * Selects wwwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwwx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwwy.__v__(a, out)
  }
  throw new Error(`[vec.wwwy] Expected a number or vector`);
}

/**
 * Selects wwwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwwy.__n__ = function(a, out) {
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
 * Selects wwwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwwy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwwz.__v__(a, out)
  }
  throw new Error(`[vec.wwwz] Expected a number or vector`);
}

/**
 * Selects wwwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwwz.__n__ = function(a, out) {
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
 * Selects wwwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwwz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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
 * Selects w, w, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec4} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec4} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwww.__v__(a, out)
  }
  throw new Error(`[vec.wwww] Expected a number or vector`);
}

/**
 * Selects wwww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwww.__n__ = function(a, out) {
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
 * Selects wwww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec4} [out] - Optional matching destination.
 * @returns {hgVec4} Selected scalar or fresh/reused result.
 */
wwww.__v__ = function(a, out) {
  const x = (a.w ?? 0)
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

  vec.wxxx = wxxx;
  vec.wxxy = wxxy;
  vec.wxxz = wxxz;
  vec.wxxw = wxxw;
  vec.wxyx = wxyx;
  vec.wxyy = wxyy;
  vec.wxyz = wxyz;
  vec.wxyw = wxyw;
  vec.wxzx = wxzx;
  vec.wxzy = wxzy;
  vec.wxzz = wxzz;
  vec.wxzw = wxzw;
  vec.wxwx = wxwx;
  vec.wxwy = wxwy;
  vec.wxwz = wxwz;
  vec.wxww = wxww;
  vec.wyxx = wyxx;
  vec.wyxy = wyxy;
  vec.wyxz = wyxz;
  vec.wyxw = wyxw;
  vec.wyyx = wyyx;
  vec.wyyy = wyyy;
  vec.wyyz = wyyz;
  vec.wyyw = wyyw;
  vec.wyzx = wyzx;
  vec.wyzy = wyzy;
  vec.wyzz = wyzz;
  vec.wyzw = wyzw;
  vec.wywx = wywx;
  vec.wywy = wywy;
  vec.wywz = wywz;
  vec.wyww = wyww;
  vec.wzxx = wzxx;
  vec.wzxy = wzxy;
  vec.wzxz = wzxz;
  vec.wzxw = wzxw;
  vec.wzyx = wzyx;
  vec.wzyy = wzyy;
  vec.wzyz = wzyz;
  vec.wzyw = wzyw;
  vec.wzzx = wzzx;
  vec.wzzy = wzzy;
  vec.wzzz = wzzz;
  vec.wzzw = wzzw;
  vec.wzwx = wzwx;
  vec.wzwy = wzwy;
  vec.wzwz = wzwz;
  vec.wzww = wzww;
  vec.wwxx = wwxx;
  vec.wwxy = wwxy;
  vec.wwxz = wwxz;
  vec.wwxw = wwxw;
  vec.wwyx = wwyx;
  vec.wwyy = wwyy;
  vec.wwyz = wwyz;
  vec.wwyw = wwyw;
  vec.wwzx = wwzx;
  vec.wwzy = wwzy;
  vec.wwzz = wwzz;
  vec.wwzw = wwzw;
  vec.wwwx = wwwx;
  vec.wwwy = wwwy;
  vec.wwwz = wwwz;
  vec.wwww = wwww;
})(globalThis.hg);
