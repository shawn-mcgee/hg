/**
 * @file Four-component xyzw swizzles starting with w, with explicit dispatchers and trusted specializations.
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
 * Selects a.w, a.x, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxxx.__v__(a, out)
  }
  throw new Error(`[wxxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxxy.__v__(a, out)
  }
  throw new Error(`[wxxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxxz.__v__(a, out)
  }
  throw new Error(`[wxxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxxw.__v__(a, out)
  }
  throw new Error(`[wxxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxyx.__v__(a, out)
  }
  throw new Error(`[wxyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxyy.__v__(a, out)
  }
  throw new Error(`[wxyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxyz.__v__(a, out)
  }
  throw new Error(`[wxyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxyw.__v__(a, out)
  }
  throw new Error(`[wxyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxzx.__v__(a, out)
  }
  throw new Error(`[wxzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxzy.__v__(a, out)
  }
  throw new Error(`[wxzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxzz.__v__(a, out)
  }
  throw new Error(`[wxzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxzw.__v__(a, out)
  }
  throw new Error(`[wxzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxwx.__v__(a, out)
  }
  throw new Error(`[wxwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxwy.__v__(a, out)
  }
  throw new Error(`[wxwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxwz.__v__(a, out)
  }
  throw new Error(`[wxwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wxww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wxww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wxww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wxww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wxww.__v__(a, out)
  }
  throw new Error(`[wxww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyxx.__v__(a, out)
  }
  throw new Error(`[wyxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyxy.__v__(a, out)
  }
  throw new Error(`[wyxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyxz.__v__(a, out)
  }
  throw new Error(`[wyxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyxw.__v__(a, out)
  }
  throw new Error(`[wyxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyyx.__v__(a, out)
  }
  throw new Error(`[wyyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyyy.__v__(a, out)
  }
  throw new Error(`[wyyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyyz.__v__(a, out)
  }
  throw new Error(`[wyyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyyw.__v__(a, out)
  }
  throw new Error(`[wyyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyzx.__v__(a, out)
  }
  throw new Error(`[wyzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyzy.__v__(a, out)
  }
  throw new Error(`[wyzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyzz.__v__(a, out)
  }
  throw new Error(`[wyzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyzw.__v__(a, out)
  }
  throw new Error(`[wyzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wywx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wywx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wywx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wywx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wywx.__v__(a, out)
  }
  throw new Error(`[wywx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wywy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wywy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wywy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wywy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wywy.__v__(a, out)
  }
  throw new Error(`[wywy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wywz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wywz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wywz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wywz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wywz.__v__(a, out)
  }
  throw new Error(`[wywz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wyww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wyww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wyww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wyww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wyww.__v__(a, out)
  }
  throw new Error(`[wyww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzxx.__v__(a, out)
  }
  throw new Error(`[wzxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzxy.__v__(a, out)
  }
  throw new Error(`[wzxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzxz.__v__(a, out)
  }
  throw new Error(`[wzxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzxw.__v__(a, out)
  }
  throw new Error(`[wzxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzyx.__v__(a, out)
  }
  throw new Error(`[wzyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzyy.__v__(a, out)
  }
  throw new Error(`[wzyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzyz.__v__(a, out)
  }
  throw new Error(`[wzyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzyw.__v__(a, out)
  }
  throw new Error(`[wzyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzzx.__v__(a, out)
  }
  throw new Error(`[wzzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzzy.__v__(a, out)
  }
  throw new Error(`[wzzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzzz.__v__(a, out)
  }
  throw new Error(`[wzzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzzw.__v__(a, out)
  }
  throw new Error(`[wzzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzwx.__v__(a, out)
  }
  throw new Error(`[wzwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzwy.__v__(a, out)
  }
  throw new Error(`[wzwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzwz.__v__(a, out)
  }
  throw new Error(`[wzwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wzww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wzww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wzww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wzww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wzww.__v__(a, out)
  }
  throw new Error(`[wzww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwxx.__v__(a, out)
  }
  throw new Error(`[wwxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwxy.__v__(a, out)
  }
  throw new Error(`[wwxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwxz.__v__(a, out)
  }
  throw new Error(`[wwxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwxw.__v__(a, out)
  }
  throw new Error(`[wwxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwyx.__v__(a, out)
  }
  throw new Error(`[wwyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwyy.__v__(a, out)
  }
  throw new Error(`[wwyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwyz.__v__(a, out)
  }
  throw new Error(`[wwyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwyw.__v__(a, out)
  }
  throw new Error(`[wwyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwzx.__v__(a, out)
  }
  throw new Error(`[wwzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwzy.__v__(a, out)
  }
  throw new Error(`[wwzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwzz.__v__(a, out)
  }
  throw new Error(`[wwzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwzw.__v__(a, out)
  }
  throw new Error(`[wwzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwwx.__v__(a, out)
  }
  throw new Error(`[wwwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwwy.__v__(a, out)
  }
  throw new Error(`[wwwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwwz.__v__(a, out)
  }
  throw new Error(`[wwwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wwww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wwww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wwww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wwww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wwww.__v__(a, out)
  }
  throw new Error(`[wwww] Cannot swizzle ${ta}`);
}

  Object.assign(hg, {
    wxxx, wxxy, wxxz, wxxw, wxyx, wxyy, wxyz, wxyw, wxzx, wxzy, wxzz, wxzw,
    wxwx, wxwy, wxwz, wxww, wyxx, wyxy, wyxz, wyxw, wyyx, wyyy, wyyz, wyyw,
    wyzx, wyzy, wyzz, wyzw, wywx, wywy, wywz, wyww, wzxx, wzxy, wzxz, wzxw,
    wzyx, wzyy, wzyz, wzyw, wzzx, wzzy, wzzz, wzzw, wzwx, wzwy, wzwz, wzww,
    wwxx, wwxy, wwxz, wwxw, wwyx, wwyy, wwyz, wwyw, wwzx, wwzy, wwzz, wwzw,
    wwwx, wwwy, wwwz, wwww
  });
})(globalThis.hg);
