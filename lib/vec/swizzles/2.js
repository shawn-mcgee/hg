/**
 * @file Unified vector swizzle group 2; absent or nullish members read as zero.
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
 * Selects x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xx.__v__(a, out)
  }
  throw new Error(`[vec.xx] Expected a number or vector`);
}

/**
 * Selects xx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
xx.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects xx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
xx.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = a.x ?? 0
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xy.__v__(a, out)
  }
  throw new Error(`[vec.xy] Expected a number or vector`);
}

/**
 * Selects xy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
xy.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects xy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
xy.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = a.y ?? 0
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xz.__v__(a, out)
  }
  throw new Error(`[vec.xz] Expected a number or vector`);
}

/**
 * Selects xz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
xz.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects xz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
xz.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = (a.z ?? 0)
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xw.__v__(a, out)
  }
  throw new Error(`[vec.xw] Expected a number or vector`);
}

/**
 * Selects xw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
xw.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects xw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
xw.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = (a.w ?? 0)
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yx.__v__(a, out)
  }
  throw new Error(`[vec.yx] Expected a number or vector`);
}

/**
 * Selects yx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
yx.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects yx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
yx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yy.__v__(a, out)
  }
  throw new Error(`[vec.yy] Expected a number or vector`);
}

/**
 * Selects yy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
yy.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects yy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
yy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yz.__v__(a, out)
  }
  throw new Error(`[vec.yz] Expected a number or vector`);
}

/**
 * Selects yz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
yz.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects yz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
yz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yw.__v__(a, out)
  }
  throw new Error(`[vec.yw] Expected a number or vector`);
}

/**
 * Selects yw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
yw.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects yw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
yw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zx.__v__(a, out)
  }
  throw new Error(`[vec.zx] Expected a number or vector`);
}

/**
 * Selects zx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
zx.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects zx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
zx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = a.x ?? 0
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zy.__v__(a, out)
  }
  throw new Error(`[vec.zy] Expected a number or vector`);
}

/**
 * Selects zy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
zy.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects zy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
zy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = a.y ?? 0
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zz.__v__(a, out)
  }
  throw new Error(`[vec.zz] Expected a number or vector`);
}

/**
 * Selects zz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
zz.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects zz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
zz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = (a.z ?? 0)
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zw.__v__(a, out)
  }
  throw new Error(`[vec.zw] Expected a number or vector`);
}

/**
 * Selects zw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
zw.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects zw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
zw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = (a.w ?? 0)
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wx.__v__(a, out)
  }
  throw new Error(`[vec.wx] Expected a number or vector`);
}

/**
 * Selects wx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
wx.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects wx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
wx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = a.x ?? 0
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wy.__v__(a, out)
  }
  throw new Error(`[vec.wy] Expected a number or vector`);
}

/**
 * Selects wy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
wy.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects wy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
wy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = a.y ?? 0
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wz.__v__(a, out)
  }
  throw new Error(`[vec.wz] Expected a number or vector`);
}

/**
 * Selects wz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
wz.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects wz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
wz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = (a.z ?? 0)
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec2} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec2} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ww.__v__(a, out)
  }
  throw new Error(`[vec.ww] Expected a number or vector`);
}

/**
 * Selects ww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
ww.__n__ = function(a, out) {
  const x = a
  const y = a
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

/**
 * Selects ww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec2} [out] - Optional matching destination.
 * @returns {hgVec2} Selected scalar or fresh/reused result.
 */
ww.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = (a.w ?? 0)
  if (out === undefined) return vec2.__new__(x, y)
  out.x = x
  out.y = y
  return out
}

  vec.xx = xx;
  vec.xy = xy;
  vec.xz = xz;
  vec.xw = xw;
  vec.yx = yx;
  vec.yy = yy;
  vec.yz = yz;
  vec.yw = yw;
  vec.zx = zx;
  vec.zy = zy;
  vec.zz = zz;
  vec.zw = zw;
  vec.wx = wx;
  vec.wy = wy;
  vec.wz = wz;
  vec.ww = ww;
})(globalThis.hg);
