/**
 * @file 3-component xyzw swizzles, with explicit dispatchers and trusted specializations.
 * Scalar selections return a number. Longer selections allocate a matching vector or reuse out.
 * Source components are captured before writes, including repeated/reordered in-place selections.
 * Typed namespace methods must be registered first; this file only dispatches to them.
 */

/**
 * Registers this file's public API on the shared namespace without leaking local names.
 * @private
 * @param {hgNamespace} hg - Namespace initialized by hg.js.
 * @returns {void} Attaches constructors or operations to hg.
 */
(function(hg) {
  const { type, __num__, __vec2__, __vec3__, __vec4__ } = hg.__core__;
  const { vec } = hg;

/**
 * Selects a.x, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxx.__v__(a, out)
  }
  throw new Error(`[xxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxy.__v__(a, out)
  }
  throw new Error(`[xxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxz.__v__(a, out)
  }
  throw new Error(`[xxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxw.__v__(a, out)
  }
  throw new Error(`[xxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyx.__v__(a, out)
  }
  throw new Error(`[xyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyy.__v__(a, out)
  }
  throw new Error(`[xyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyz.__v__(a, out)
  }
  throw new Error(`[xyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyw.__v__(a, out)
  }
  throw new Error(`[xyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzx.__v__(a, out)
  }
  throw new Error(`[xzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzy.__v__(a, out)
  }
  throw new Error(`[xzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzz.__v__(a, out)
  }
  throw new Error(`[xzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzw.__v__(a, out)
  }
  throw new Error(`[xzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwx.__v__(a, out)
  }
  throw new Error(`[xwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwy.__v__(a, out)
  }
  throw new Error(`[xwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwz.__v__(a, out)
  }
  throw new Error(`[xwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xww.__v__(a, out)
  }
  throw new Error(`[xww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxx.__v__(a, out)
  }
  throw new Error(`[yxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxy.__v__(a, out)
  }
  throw new Error(`[yxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxz.__v__(a, out)
  }
  throw new Error(`[yxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxw.__v__(a, out)
  }
  throw new Error(`[yxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyx.__v__(a, out)
  }
  throw new Error(`[yyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyy.__v__(a, out)
  }
  throw new Error(`[yyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyz.__v__(a, out)
  }
  throw new Error(`[yyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyw.__v__(a, out)
  }
  throw new Error(`[yyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzx.__v__(a, out)
  }
  throw new Error(`[yzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzy.__v__(a, out)
  }
  throw new Error(`[yzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzz.__v__(a, out)
  }
  throw new Error(`[yzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzw.__v__(a, out)
  }
  throw new Error(`[yzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywx.__v__(a, out)
  }
  throw new Error(`[ywx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywy.__v__(a, out)
  }
  throw new Error(`[ywy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywz.__v__(a, out)
  }
  throw new Error(`[ywz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yww.__v__(a, out)
  }
  throw new Error(`[yww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxx.__v__(a, out)
  }
  throw new Error(`[zxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxy.__v__(a, out)
  }
  throw new Error(`[zxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxz.__v__(a, out)
  }
  throw new Error(`[zxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxw.__v__(a, out)
  }
  throw new Error(`[zxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyx.__v__(a, out)
  }
  throw new Error(`[zyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyy.__v__(a, out)
  }
  throw new Error(`[zyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyz.__v__(a, out)
  }
  throw new Error(`[zyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyw.__v__(a, out)
  }
  throw new Error(`[zyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzx.__v__(a, out)
  }
  throw new Error(`[zzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzy.__v__(a, out)
  }
  throw new Error(`[zzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzz.__v__(a, out)
  }
  throw new Error(`[zzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzw.__v__(a, out)
  }
  throw new Error(`[zzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwx.__v__(a, out)
  }
  throw new Error(`[zwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwy.__v__(a, out)
  }
  throw new Error(`[zwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwz.__v__(a, out)
  }
  throw new Error(`[zwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zww.__v__(a, out)
  }
  throw new Error(`[zww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxx.__v__(a, out)
  }
  throw new Error(`[wxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxy.__v__(a, out)
  }
  throw new Error(`[wxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxz.__v__(a, out)
  }
  throw new Error(`[wxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxw.__v__(a, out)
  }
  throw new Error(`[wxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyx.__v__(a, out)
  }
  throw new Error(`[wyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyy.__v__(a, out)
  }
  throw new Error(`[wyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyz.__v__(a, out)
  }
  throw new Error(`[wyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyw.__v__(a, out)
  }
  throw new Error(`[wyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzx.__v__(a, out)
  }
  throw new Error(`[wzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzy.__v__(a, out)
  }
  throw new Error(`[wzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzz.__v__(a, out)
  }
  throw new Error(`[wzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzw.__v__(a, out)
  }
  throw new Error(`[wzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwx.__v__(a, out)
  }
  throw new Error(`[wwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwy.__v__(a, out)
  }
  throw new Error(`[wwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwz.__v__(a, out)
  }
  throw new Error(`[wwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function www
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec3} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec3} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function www(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[www] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.www.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.www.__v__(a, out)
  }
  throw new Error(`[www] Cannot swizzle ${ta}`);
}

  Object.assign(hg, {
    xxx, xxy, xxz, xxw, xyx, xyy, xyz, xyw, xzx, xzy, xzz, xzw,
    xwx, xwy, xwz, xww, yxx, yxy, yxz, yxw, yyx, yyy, yyz, yyw,
    yzx, yzy, yzz, yzw, ywx, ywy, ywz, yww, zxx, zxy, zxz, zxw,
    zyx, zyy, zyz, zyw, zzx, zzy, zzz, zzw, zwx, zwy, zwz, zww,
    wxx, wxy, wxz, wxw, wyx, wyy, wyz, wyw, wzx, wzy, wzz, wzw,
    wwx, wwy, wwz, www
  });
})(globalThis.hg);
