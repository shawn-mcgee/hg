/**
 * @file Four-component xyzw swizzles starting with y, with explicit dispatchers and trusted specializations.
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
 * Selects a.y, a.x, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxxx.__v__(a, out)
  }
  throw new Error(`[yxxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxxy.__v__(a, out)
  }
  throw new Error(`[yxxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxxz.__v__(a, out)
  }
  throw new Error(`[yxxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxxw.__v__(a, out)
  }
  throw new Error(`[yxxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxyx.__v__(a, out)
  }
  throw new Error(`[yxyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxyy.__v__(a, out)
  }
  throw new Error(`[yxyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxyz.__v__(a, out)
  }
  throw new Error(`[yxyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxyw.__v__(a, out)
  }
  throw new Error(`[yxyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxzx.__v__(a, out)
  }
  throw new Error(`[yxzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxzy.__v__(a, out)
  }
  throw new Error(`[yxzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxzz.__v__(a, out)
  }
  throw new Error(`[yxzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxzw.__v__(a, out)
  }
  throw new Error(`[yxzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxwx.__v__(a, out)
  }
  throw new Error(`[yxwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxwy.__v__(a, out)
  }
  throw new Error(`[yxwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxwz.__v__(a, out)
  }
  throw new Error(`[yxwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yxww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yxww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yxww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yxww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yxww.__v__(a, out)
  }
  throw new Error(`[yxww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyxx.__v__(a, out)
  }
  throw new Error(`[yyxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyxy.__v__(a, out)
  }
  throw new Error(`[yyxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyxz.__v__(a, out)
  }
  throw new Error(`[yyxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyxw.__v__(a, out)
  }
  throw new Error(`[yyxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyyx.__v__(a, out)
  }
  throw new Error(`[yyyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyyy.__v__(a, out)
  }
  throw new Error(`[yyyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyyz.__v__(a, out)
  }
  throw new Error(`[yyyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyyw.__v__(a, out)
  }
  throw new Error(`[yyyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyzx.__v__(a, out)
  }
  throw new Error(`[yyzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyzy.__v__(a, out)
  }
  throw new Error(`[yyzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyzz.__v__(a, out)
  }
  throw new Error(`[yyzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyzw.__v__(a, out)
  }
  throw new Error(`[yyzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yywx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yywx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yywx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yywx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yywx.__v__(a, out)
  }
  throw new Error(`[yywx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yywy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yywy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yywy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yywy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yywy.__v__(a, out)
  }
  throw new Error(`[yywy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yywz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yywz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yywz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yywz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yywz.__v__(a, out)
  }
  throw new Error(`[yywz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yyww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yyww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yyww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yyww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yyww.__v__(a, out)
  }
  throw new Error(`[yyww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzxx.__v__(a, out)
  }
  throw new Error(`[yzxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzxy.__v__(a, out)
  }
  throw new Error(`[yzxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzxz.__v__(a, out)
  }
  throw new Error(`[yzxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzxw.__v__(a, out)
  }
  throw new Error(`[yzxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzyx.__v__(a, out)
  }
  throw new Error(`[yzyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzyy.__v__(a, out)
  }
  throw new Error(`[yzyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzyz.__v__(a, out)
  }
  throw new Error(`[yzyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzyw.__v__(a, out)
  }
  throw new Error(`[yzyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzzx.__v__(a, out)
  }
  throw new Error(`[yzzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzzy.__v__(a, out)
  }
  throw new Error(`[yzzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzzz.__v__(a, out)
  }
  throw new Error(`[yzzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzzw.__v__(a, out)
  }
  throw new Error(`[yzzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzwx.__v__(a, out)
  }
  throw new Error(`[yzwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzwy.__v__(a, out)
  }
  throw new Error(`[yzwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzwz.__v__(a, out)
  }
  throw new Error(`[yzwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yzww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yzww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yzww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yzww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yzww.__v__(a, out)
  }
  throw new Error(`[yzww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywxx.__v__(a, out)
  }
  throw new Error(`[ywxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywxy.__v__(a, out)
  }
  throw new Error(`[ywxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywxz.__v__(a, out)
  }
  throw new Error(`[ywxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywxw.__v__(a, out)
  }
  throw new Error(`[ywxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywyx.__v__(a, out)
  }
  throw new Error(`[ywyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywyy.__v__(a, out)
  }
  throw new Error(`[ywyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywyz.__v__(a, out)
  }
  throw new Error(`[ywyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywyw.__v__(a, out)
  }
  throw new Error(`[ywyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywzx.__v__(a, out)
  }
  throw new Error(`[ywzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywzy.__v__(a, out)
  }
  throw new Error(`[ywzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywzz.__v__(a, out)
  }
  throw new Error(`[ywzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywzw.__v__(a, out)
  }
  throw new Error(`[ywzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywwx.__v__(a, out)
  }
  throw new Error(`[ywwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywwy.__v__(a, out)
  }
  throw new Error(`[ywwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywwz.__v__(a, out)
  }
  throw new Error(`[ywwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ywww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ywww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ywww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ywww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ywww.__v__(a, out)
  }
  throw new Error(`[ywww] Cannot swizzle ${ta}`);
}

  Object.assign(hg, {
    yxxx, yxxy, yxxz, yxxw, yxyx, yxyy, yxyz, yxyw, yxzx, yxzy, yxzz, yxzw,
    yxwx, yxwy, yxwz, yxww, yyxx, yyxy, yyxz, yyxw, yyyx, yyyy, yyyz, yyyw,
    yyzx, yyzy, yyzz, yyzw, yywx, yywy, yywz, yyww, yzxx, yzxy, yzxz, yzxw,
    yzyx, yzyy, yzyz, yzyw, yzzx, yzzy, yzzz, yzzw, yzwx, yzwy, yzwz, yzww,
    ywxx, ywxy, ywxz, ywxw, ywyx, ywyy, ywyz, ywyw, ywzx, ywzy, ywzz, ywzw,
    ywwx, ywwy, ywwz, ywww
  });
})(globalThis.hg);
