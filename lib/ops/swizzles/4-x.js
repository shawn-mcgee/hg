/**
 * @file Four-component xyzw swizzles starting with x, with explicit dispatchers and trusted specializations.
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
 * Selects a.x, a.x, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxxx.__v__(a, out)
  }
  throw new Error(`[xxxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxxy.__v__(a, out)
  }
  throw new Error(`[xxxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxxz.__v__(a, out)
  }
  throw new Error(`[xxxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxxw.__v__(a, out)
  }
  throw new Error(`[xxxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxyx.__v__(a, out)
  }
  throw new Error(`[xxyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxyy.__v__(a, out)
  }
  throw new Error(`[xxyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxyz.__v__(a, out)
  }
  throw new Error(`[xxyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxyw.__v__(a, out)
  }
  throw new Error(`[xxyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxzx.__v__(a, out)
  }
  throw new Error(`[xxzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxzy.__v__(a, out)
  }
  throw new Error(`[xxzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxzz.__v__(a, out)
  }
  throw new Error(`[xxzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxzw.__v__(a, out)
  }
  throw new Error(`[xxzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxwx.__v__(a, out)
  }
  throw new Error(`[xxwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxwy.__v__(a, out)
  }
  throw new Error(`[xxwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxwz.__v__(a, out)
  }
  throw new Error(`[xxwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.x, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xxww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xxww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xxww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xxww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xxww.__v__(a, out)
  }
  throw new Error(`[xxww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyxx.__v__(a, out)
  }
  throw new Error(`[xyxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyxy.__v__(a, out)
  }
  throw new Error(`[xyxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyxz.__v__(a, out)
  }
  throw new Error(`[xyxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyxw.__v__(a, out)
  }
  throw new Error(`[xyxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyyx.__v__(a, out)
  }
  throw new Error(`[xyyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyyy.__v__(a, out)
  }
  throw new Error(`[xyyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyyz.__v__(a, out)
  }
  throw new Error(`[xyyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyyw.__v__(a, out)
  }
  throw new Error(`[xyyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyzx.__v__(a, out)
  }
  throw new Error(`[xyzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyzy.__v__(a, out)
  }
  throw new Error(`[xyzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyzz.__v__(a, out)
  }
  throw new Error(`[xyzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyzw.__v__(a, out)
  }
  throw new Error(`[xyzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xywx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xywx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xywx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xywx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xywx.__v__(a, out)
  }
  throw new Error(`[xywx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xywy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xywy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xywy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xywy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xywy.__v__(a, out)
  }
  throw new Error(`[xywy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xywz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xywz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xywz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xywz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xywz.__v__(a, out)
  }
  throw new Error(`[xywz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xyww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xyww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xyww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xyww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xyww.__v__(a, out)
  }
  throw new Error(`[xyww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzxx.__v__(a, out)
  }
  throw new Error(`[xzxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzxy.__v__(a, out)
  }
  throw new Error(`[xzxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzxz.__v__(a, out)
  }
  throw new Error(`[xzxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzxw.__v__(a, out)
  }
  throw new Error(`[xzxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzyx.__v__(a, out)
  }
  throw new Error(`[xzyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzyy.__v__(a, out)
  }
  throw new Error(`[xzyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzyz.__v__(a, out)
  }
  throw new Error(`[xzyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzyw.__v__(a, out)
  }
  throw new Error(`[xzyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzzx.__v__(a, out)
  }
  throw new Error(`[xzzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzzy.__v__(a, out)
  }
  throw new Error(`[xzzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzzz.__v__(a, out)
  }
  throw new Error(`[xzzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzzw.__v__(a, out)
  }
  throw new Error(`[xzzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzwx.__v__(a, out)
  }
  throw new Error(`[xzwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzwy.__v__(a, out)
  }
  throw new Error(`[xzwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzwz.__v__(a, out)
  }
  throw new Error(`[xzwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xzww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xzww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xzww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xzww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xzww.__v__(a, out)
  }
  throw new Error(`[xzww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwxx.__v__(a, out)
  }
  throw new Error(`[xwxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwxy.__v__(a, out)
  }
  throw new Error(`[xwxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwxz.__v__(a, out)
  }
  throw new Error(`[xwxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwxw.__v__(a, out)
  }
  throw new Error(`[xwxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwyx.__v__(a, out)
  }
  throw new Error(`[xwyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwyy.__v__(a, out)
  }
  throw new Error(`[xwyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwyz.__v__(a, out)
  }
  throw new Error(`[xwyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwyw.__v__(a, out)
  }
  throw new Error(`[xwyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwzx.__v__(a, out)
  }
  throw new Error(`[xwzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwzy.__v__(a, out)
  }
  throw new Error(`[xwzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwzz.__v__(a, out)
  }
  throw new Error(`[xwzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwzw.__v__(a, out)
  }
  throw new Error(`[xwzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwwx.__v__(a, out)
  }
  throw new Error(`[xwwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwwy.__v__(a, out)
  }
  throw new Error(`[xwwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwwz.__v__(a, out)
  }
  throw new Error(`[xwwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xwww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xwww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xwww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xwww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xwww.__v__(a, out)
  }
  throw new Error(`[xwww] Cannot swizzle ${ta}`);
}

  Object.assign(hg, {
    xxxx, xxxy, xxxz, xxxw, xxyx, xxyy, xxyz, xxyw, xxzx, xxzy, xxzz, xxzw,
    xxwx, xxwy, xxwz, xxww, xyxx, xyxy, xyxz, xyxw, xyyx, xyyy, xyyz, xyyw,
    xyzx, xyzy, xyzz, xyzw, xywx, xywy, xywz, xyww, xzxx, xzxy, xzxz, xzxw,
    xzyx, xzyy, xzyz, xzyw, xzzx, xzzy, xzzz, xzzw, xzwx, xzwy, xzwz, xzww,
    xwxx, xwxy, xwxz, xwxw, xwyx, xwyy, xwyz, xwyw, xwzx, xwzy, xwzz, xwzw,
    xwwx, xwwy, xwwz, xwww
  });
})(globalThis.hg);
