/**
 * @file Unified vector swizzle group 3; absent or nullish members read as zero.
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
 * Selects x, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxx.__v__(a, out)
  }
  throw new Error(`[vec.xxx] Expected a number or vector`);
}

/**
 * Selects xxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xxx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xxx.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = a.x ?? 0
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxy.__v__(a, out)
  }
  throw new Error(`[vec.xxy] Expected a number or vector`);
}

/**
 * Selects xxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xxy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xxy.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = a.x ?? 0
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxz.__v__(a, out)
  }
  throw new Error(`[vec.xxz] Expected a number or vector`);
}

/**
 * Selects xxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xxz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xxz.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = a.x ?? 0
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xxw.__v__(a, out)
  }
  throw new Error(`[vec.xxw] Expected a number or vector`);
}

/**
 * Selects xxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xxw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xxw.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = a.x ?? 0
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyx.__v__(a, out)
  }
  throw new Error(`[vec.xyx] Expected a number or vector`);
}

/**
 * Selects xyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xyx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xyx.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = a.y ?? 0
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyy.__v__(a, out)
  }
  throw new Error(`[vec.xyy] Expected a number or vector`);
}

/**
 * Selects xyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xyy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xyy.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = a.y ?? 0
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyz.__v__(a, out)
  }
  throw new Error(`[vec.xyz] Expected a number or vector`);
}

/**
 * Selects xyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xyz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xyz.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = a.y ?? 0
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xyw.__v__(a, out)
  }
  throw new Error(`[vec.xyw] Expected a number or vector`);
}

/**
 * Selects xyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xyw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xyw.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = a.y ?? 0
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzx.__v__(a, out)
  }
  throw new Error(`[vec.xzx] Expected a number or vector`);
}

/**
 * Selects xzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xzx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xzx.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = (a.z ?? 0)
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzy.__v__(a, out)
  }
  throw new Error(`[vec.xzy] Expected a number or vector`);
}

/**
 * Selects xzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xzy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xzy.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = (a.z ?? 0)
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzz.__v__(a, out)
  }
  throw new Error(`[vec.xzz] Expected a number or vector`);
}

/**
 * Selects xzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xzz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xzz.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = (a.z ?? 0)
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xzw.__v__(a, out)
  }
  throw new Error(`[vec.xzw] Expected a number or vector`);
}

/**
 * Selects xzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xzw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xzw.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = (a.z ?? 0)
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwx.__v__(a, out)
  }
  throw new Error(`[vec.xwx] Expected a number or vector`);
}

/**
 * Selects xwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xwx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xwx.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = (a.w ?? 0)
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwy.__v__(a, out)
  }
  throw new Error(`[vec.xwy] Expected a number or vector`);
}

/**
 * Selects xwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xwy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xwy.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = (a.w ?? 0)
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xwz.__v__(a, out)
  }
  throw new Error(`[vec.xwz] Expected a number or vector`);
}

/**
 * Selects xwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xwz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xwz.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = (a.w ?? 0)
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects x, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function xww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function xww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.xww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return xww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return xww.__v__(a, out)
  }
  throw new Error(`[vec.xww] Expected a number or vector`);
}

/**
 * Selects xww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.xww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xww.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects xww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.xww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
xww.__v__ = function(a, out) {
  const x = a.x ?? 0
  const y = (a.w ?? 0)
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxx.__v__(a, out)
  }
  throw new Error(`[vec.yxx] Expected a number or vector`);
}

/**
 * Selects yxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yxx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yxx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxy.__v__(a, out)
  }
  throw new Error(`[vec.yxy] Expected a number or vector`);
}

/**
 * Selects yxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yxy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yxy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxz.__v__(a, out)
  }
  throw new Error(`[vec.yxz] Expected a number or vector`);
}

/**
 * Selects yxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yxz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yxz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yxw.__v__(a, out)
  }
  throw new Error(`[vec.yxw] Expected a number or vector`);
}

/**
 * Selects yxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yxw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yxw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.x ?? 0
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyx.__v__(a, out)
  }
  throw new Error(`[vec.yyx] Expected a number or vector`);
}

/**
 * Selects yyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yyx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yyx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyy.__v__(a, out)
  }
  throw new Error(`[vec.yyy] Expected a number or vector`);
}

/**
 * Selects yyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yyy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yyy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyz.__v__(a, out)
  }
  throw new Error(`[vec.yyz] Expected a number or vector`);
}

/**
 * Selects yyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yyz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yyz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yyw.__v__(a, out)
  }
  throw new Error(`[vec.yyw] Expected a number or vector`);
}

/**
 * Selects yyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yyw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yyw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = a.y ?? 0
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzx.__v__(a, out)
  }
  throw new Error(`[vec.yzx] Expected a number or vector`);
}

/**
 * Selects yzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yzx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yzx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzy.__v__(a, out)
  }
  throw new Error(`[vec.yzy] Expected a number or vector`);
}

/**
 * Selects yzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yzy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yzy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzz.__v__(a, out)
  }
  throw new Error(`[vec.yzz] Expected a number or vector`);
}

/**
 * Selects yzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yzz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yzz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yzw.__v__(a, out)
  }
  throw new Error(`[vec.yzw] Expected a number or vector`);
}

/**
 * Selects yzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yzw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yzw.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.z ?? 0)
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywx.__v__(a, out)
  }
  throw new Error(`[vec.ywx] Expected a number or vector`);
}

/**
 * Selects ywx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
ywx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects ywx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
ywx.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywy.__v__(a, out)
  }
  throw new Error(`[vec.ywy] Expected a number or vector`);
}

/**
 * Selects ywy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
ywy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects ywy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
ywy.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function ywz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function ywz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.ywz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return ywz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return ywz.__v__(a, out)
  }
  throw new Error(`[vec.ywz] Expected a number or vector`);
}

/**
 * Selects ywz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.ywz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
ywz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects ywz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.ywz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
ywz.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects y, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function yww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function yww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.yww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return yww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return yww.__v__(a, out)
  }
  throw new Error(`[vec.yww] Expected a number or vector`);
}

/**
 * Selects yww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.yww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yww.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects yww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.yww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
yww.__v__ = function(a, out) {
  const x = a.y ?? 0
  const y = (a.w ?? 0)
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxx.__v__(a, out)
  }
  throw new Error(`[vec.zxx] Expected a number or vector`);
}

/**
 * Selects zxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zxx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zxx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = a.x ?? 0
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxy.__v__(a, out)
  }
  throw new Error(`[vec.zxy] Expected a number or vector`);
}

/**
 * Selects zxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zxy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zxy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = a.x ?? 0
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxz.__v__(a, out)
  }
  throw new Error(`[vec.zxz] Expected a number or vector`);
}

/**
 * Selects zxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zxz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zxz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = a.x ?? 0
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zxw.__v__(a, out)
  }
  throw new Error(`[vec.zxw] Expected a number or vector`);
}

/**
 * Selects zxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zxw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zxw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = a.x ?? 0
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyx.__v__(a, out)
  }
  throw new Error(`[vec.zyx] Expected a number or vector`);
}

/**
 * Selects zyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zyx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zyx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = a.y ?? 0
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyy.__v__(a, out)
  }
  throw new Error(`[vec.zyy] Expected a number or vector`);
}

/**
 * Selects zyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zyy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zyy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = a.y ?? 0
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyz.__v__(a, out)
  }
  throw new Error(`[vec.zyz] Expected a number or vector`);
}

/**
 * Selects zyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zyz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zyz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = a.y ?? 0
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zyw.__v__(a, out)
  }
  throw new Error(`[vec.zyw] Expected a number or vector`);
}

/**
 * Selects zyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zyw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zyw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = a.y ?? 0
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzx.__v__(a, out)
  }
  throw new Error(`[vec.zzx] Expected a number or vector`);
}

/**
 * Selects zzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zzx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zzx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = (a.z ?? 0)
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzy.__v__(a, out)
  }
  throw new Error(`[vec.zzy] Expected a number or vector`);
}

/**
 * Selects zzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zzy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zzy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = (a.z ?? 0)
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzz.__v__(a, out)
  }
  throw new Error(`[vec.zzz] Expected a number or vector`);
}

/**
 * Selects zzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zzz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zzz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = (a.z ?? 0)
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zzw.__v__(a, out)
  }
  throw new Error(`[vec.zzw] Expected a number or vector`);
}

/**
 * Selects zzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zzw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zzw.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = (a.z ?? 0)
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwx.__v__(a, out)
  }
  throw new Error(`[vec.zwx] Expected a number or vector`);
}

/**
 * Selects zwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zwx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zwx.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = (a.w ?? 0)
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwy.__v__(a, out)
  }
  throw new Error(`[vec.zwy] Expected a number or vector`);
}

/**
 * Selects zwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zwy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zwy.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = (a.w ?? 0)
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zwz.__v__(a, out)
  }
  throw new Error(`[vec.zwz] Expected a number or vector`);
}

/**
 * Selects zwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zwz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zwz.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = (a.w ?? 0)
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects z, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function zww
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function zww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.zww] Invalid argument count`);
  switch(type(a)) {
    case __num__: return zww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return zww.__v__(a, out)
  }
  throw new Error(`[vec.zww] Expected a number or vector`);
}

/**
 * Selects zww from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.zww
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zww.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects zww from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.zww
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
zww.__v__ = function(a, out) {
  const x = (a.z ?? 0)
  const y = (a.w ?? 0)
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, x, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxx.__v__(a, out)
  }
  throw new Error(`[vec.wxx] Expected a number or vector`);
}

/**
 * Selects wxx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wxx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wxx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wxx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = a.x ?? 0
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, x, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxy.__v__(a, out)
  }
  throw new Error(`[vec.wxy] Expected a number or vector`);
}

/**
 * Selects wxy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wxy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wxy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wxy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = a.x ?? 0
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, x, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxz.__v__(a, out)
  }
  throw new Error(`[vec.wxz] Expected a number or vector`);
}

/**
 * Selects wxz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wxz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wxz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wxz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = a.x ?? 0
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, x, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wxw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wxw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wxw.__v__(a, out)
  }
  throw new Error(`[vec.wxw] Expected a number or vector`);
}

/**
 * Selects wxw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wxw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wxw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wxw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wxw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wxw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = a.x ?? 0
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, y, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyx.__v__(a, out)
  }
  throw new Error(`[vec.wyx] Expected a number or vector`);
}

/**
 * Selects wyx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wyx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wyx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wyx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = a.y ?? 0
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, y, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyy.__v__(a, out)
  }
  throw new Error(`[vec.wyy] Expected a number or vector`);
}

/**
 * Selects wyy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wyy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wyy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wyy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = a.y ?? 0
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, y, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyz.__v__(a, out)
  }
  throw new Error(`[vec.wyz] Expected a number or vector`);
}

/**
 * Selects wyz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wyz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wyz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wyz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = a.y ?? 0
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, y, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wyw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wyw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wyw.__v__(a, out)
  }
  throw new Error(`[vec.wyw] Expected a number or vector`);
}

/**
 * Selects wyw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wyw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wyw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wyw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wyw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wyw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = a.y ?? 0
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, z, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzx.__v__(a, out)
  }
  throw new Error(`[vec.wzx] Expected a number or vector`);
}

/**
 * Selects wzx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wzx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wzx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wzx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = (a.z ?? 0)
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, z, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzy.__v__(a, out)
  }
  throw new Error(`[vec.wzy] Expected a number or vector`);
}

/**
 * Selects wzy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wzy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wzy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wzy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = (a.z ?? 0)
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, z, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzz.__v__(a, out)
  }
  throw new Error(`[vec.wzz] Expected a number or vector`);
}

/**
 * Selects wzz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wzz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wzz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wzz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = (a.z ?? 0)
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, z, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wzw
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wzw] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wzw.__v__(a, out)
  }
  throw new Error(`[vec.wzw] Expected a number or vector`);
}

/**
 * Selects wzw from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wzw
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wzw.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wzw from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wzw
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wzw.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = (a.z ?? 0)
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, w, x from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwx
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwx] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwx.__v__(a, out)
  }
  throw new Error(`[vec.wwx] Expected a number or vector`);
}

/**
 * Selects wwx from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwx
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wwx.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wwx from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwx
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wwx.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = (a.w ?? 0)
  const z = a.x ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, w, y from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwy
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwy] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwy.__v__(a, out)
  }
  throw new Error(`[vec.wwy] Expected a number or vector`);
}

/**
 * Selects wwy from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwy
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wwy.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wwy from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwy
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wwy.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = (a.w ?? 0)
  const z = a.y ?? 0
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, w, z from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function wwz
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function wwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.wwz] Invalid argument count`);
  switch(type(a)) {
    case __num__: return wwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return wwz.__v__(a, out)
  }
  throw new Error(`[vec.wwz] Expected a number or vector`);
}

/**
 * Selects wwz from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.wwz
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wwz.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects wwz from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.wwz
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
wwz.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = (a.w ?? 0)
  const z = (a.z ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects w, w, w from the source; absent or nullish components default to zero.
 * Accepts any vector dimension; numeric inputs splat across the selected components.
 * @function www
 * @memberof hg.vec
 * @static
 * @param {number|hgVector} a - Scalar or source vector.
 * @param {hgVec3} [out] - Reusable result; may alias a source of the same output shape.
 * @returns {hgVec3} Selected component or fresh/reused vector.
 * @throws {Error} If arity or operand type is unsupported.
 */
function www(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec.www] Invalid argument count`);
  switch(type(a)) {
    case __num__: return www.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return www.__v__(a, out)
  }
  throw new Error(`[vec.www] Expected a number or vector`);
}

/**
 * Selects www from a trusted number input without dimension-specific dispatch; missing components default to zero.
 * @function __n__
 * @memberof hg.vec.www
 * @static
 * @param {number} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
www.__n__ = function(a, out) {
  const x = a
  const y = a
  const z = a
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

/**
 * Selects www from a trusted hgVector input without dimension-specific dispatch; missing components default to zero.
 * @function __v__
 * @memberof hg.vec.www
 * @static
 * @param {hgVector} a - Trusted scalar or vector.
 * @param {hgVec3} [out] - Optional matching destination.
 * @returns {hgVec3} Selected scalar or fresh/reused result.
 */
www.__v__ = function(a, out) {
  const x = (a.w ?? 0)
  const y = (a.w ?? 0)
  const z = (a.w ?? 0)
  if (out === undefined) return vec3.__new__(x, y, z)
  out.x = x
  out.y = y
  out.z = z
  return out
}

  vec.xxx = xxx;
  vec.xxy = xxy;
  vec.xxz = xxz;
  vec.xxw = xxw;
  vec.xyx = xyx;
  vec.xyy = xyy;
  vec.xyz = xyz;
  vec.xyw = xyw;
  vec.xzx = xzx;
  vec.xzy = xzy;
  vec.xzz = xzz;
  vec.xzw = xzw;
  vec.xwx = xwx;
  vec.xwy = xwy;
  vec.xwz = xwz;
  vec.xww = xww;
  vec.yxx = yxx;
  vec.yxy = yxy;
  vec.yxz = yxz;
  vec.yxw = yxw;
  vec.yyx = yyx;
  vec.yyy = yyy;
  vec.yyz = yyz;
  vec.yyw = yyw;
  vec.yzx = yzx;
  vec.yzy = yzy;
  vec.yzz = yzz;
  vec.yzw = yzw;
  vec.ywx = ywx;
  vec.ywy = ywy;
  vec.ywz = ywz;
  vec.yww = yww;
  vec.zxx = zxx;
  vec.zxy = zxy;
  vec.zxz = zxz;
  vec.zxw = zxw;
  vec.zyx = zyx;
  vec.zyy = zyy;
  vec.zyz = zyz;
  vec.zyw = zyw;
  vec.zzx = zzx;
  vec.zzy = zzy;
  vec.zzz = zzz;
  vec.zzw = zzw;
  vec.zwx = zwx;
  vec.zwy = zwy;
  vec.zwz = zwz;
  vec.zww = zww;
  vec.wxx = wxx;
  vec.wxy = wxy;
  vec.wxz = wxz;
  vec.wxw = wxw;
  vec.wyx = wyx;
  vec.wyy = wyy;
  vec.wyz = wyz;
  vec.wyw = wyw;
  vec.wzx = wzx;
  vec.wzy = wzy;
  vec.wzz = wzz;
  vec.wzw = wzw;
  vec.wwx = wwx;
  vec.wwy = wwy;
  vec.wwz = wwz;
  vec.www = www;
})(globalThis.hg);
