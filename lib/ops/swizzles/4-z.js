/**
 * @file Four-component xyzw swizzles starting with z, with explicit dispatchers and trusted specializations.
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
 * Selects a.z, a.x, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxxx.__v__(a, out)
  }
  throw new Error(`[zxxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxxy.__v__(a, out)
  }
  throw new Error(`[zxxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxxz.__v__(a, out)
  }
  throw new Error(`[zxxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxxw.__v__(a, out)
  }
  throw new Error(`[zxxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxyx.__v__(a, out)
  }
  throw new Error(`[zxyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxyy.__v__(a, out)
  }
  throw new Error(`[zxyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxyz.__v__(a, out)
  }
  throw new Error(`[zxyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxyw.__v__(a, out)
  }
  throw new Error(`[zxyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxzx.__v__(a, out)
  }
  throw new Error(`[zxzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxzy.__v__(a, out)
  }
  throw new Error(`[zxzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxzz.__v__(a, out)
  }
  throw new Error(`[zxzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxzw.__v__(a, out)
  }
  throw new Error(`[zxzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxwx.__v__(a, out)
  }
  throw new Error(`[zxwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxwy.__v__(a, out)
  }
  throw new Error(`[zxwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxwz.__v__(a, out)
  }
  throw new Error(`[zxwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zxww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zxww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zxww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zxww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zxww.__v__(a, out)
  }
  throw new Error(`[zxww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyxx.__v__(a, out)
  }
  throw new Error(`[zyxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyxy.__v__(a, out)
  }
  throw new Error(`[zyxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyxz.__v__(a, out)
  }
  throw new Error(`[zyxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyxw.__v__(a, out)
  }
  throw new Error(`[zyxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyyx.__v__(a, out)
  }
  throw new Error(`[zyyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyyy.__v__(a, out)
  }
  throw new Error(`[zyyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyyz.__v__(a, out)
  }
  throw new Error(`[zyyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyyw.__v__(a, out)
  }
  throw new Error(`[zyyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyzx.__v__(a, out)
  }
  throw new Error(`[zyzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyzy.__v__(a, out)
  }
  throw new Error(`[zyzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyzz.__v__(a, out)
  }
  throw new Error(`[zyzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyzw.__v__(a, out)
  }
  throw new Error(`[zyzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zywx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zywx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zywx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zywx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zywx.__v__(a, out)
  }
  throw new Error(`[zywx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zywy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zywy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zywy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zywy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zywy.__v__(a, out)
  }
  throw new Error(`[zywy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zywz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zywz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zywz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zywz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zywz.__v__(a, out)
  }
  throw new Error(`[zywz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zyww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zyww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zyww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zyww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zyww.__v__(a, out)
  }
  throw new Error(`[zyww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzxx.__v__(a, out)
  }
  throw new Error(`[zzxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzxy.__v__(a, out)
  }
  throw new Error(`[zzxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzxz.__v__(a, out)
  }
  throw new Error(`[zzxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzxw.__v__(a, out)
  }
  throw new Error(`[zzxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzyx.__v__(a, out)
  }
  throw new Error(`[zzyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzyy.__v__(a, out)
  }
  throw new Error(`[zzyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzyz.__v__(a, out)
  }
  throw new Error(`[zzyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzyw.__v__(a, out)
  }
  throw new Error(`[zzyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzzx.__v__(a, out)
  }
  throw new Error(`[zzzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzzy.__v__(a, out)
  }
  throw new Error(`[zzzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzzz.__v__(a, out)
  }
  throw new Error(`[zzzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzzw.__v__(a, out)
  }
  throw new Error(`[zzzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzwx.__v__(a, out)
  }
  throw new Error(`[zzwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzwy.__v__(a, out)
  }
  throw new Error(`[zzwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzwz.__v__(a, out)
  }
  throw new Error(`[zzwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zzww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zzww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zzww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zzww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zzww.__v__(a, out)
  }
  throw new Error(`[zzww] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwxx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwxx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwxx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwxx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwxx.__v__(a, out)
  }
  throw new Error(`[zwxx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwxy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwxy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwxy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwxy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwxy.__v__(a, out)
  }
  throw new Error(`[zwxy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwxz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwxz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwxz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwxz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwxz.__v__(a, out)
  }
  throw new Error(`[zwxz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwxw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwxw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwxw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwxw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwxw.__v__(a, out)
  }
  throw new Error(`[zwxw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwyx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwyx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwyx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwyx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwyx.__v__(a, out)
  }
  throw new Error(`[zwyx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwyy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwyy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwyy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwyy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwyy.__v__(a, out)
  }
  throw new Error(`[zwyy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwyz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwyz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwyz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwyz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwyz.__v__(a, out)
  }
  throw new Error(`[zwyz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwyw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwyw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwyw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwyw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwyw.__v__(a, out)
  }
  throw new Error(`[zwyw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwzx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwzx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwzx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwzx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwzx.__v__(a, out)
  }
  throw new Error(`[zwzx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwzy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwzy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwzy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwzy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwzy.__v__(a, out)
  }
  throw new Error(`[zwzy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwzz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwzz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwzz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwzz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwzz.__v__(a, out)
  }
  throw new Error(`[zwzz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwzw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwzw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwzw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwzw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwzw.__v__(a, out)
  }
  throw new Error(`[zwzw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwwx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwwx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwwx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwwx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwwx.__v__(a, out)
  }
  throw new Error(`[zwwx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwwy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwwy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwwy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwwy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwwy.__v__(a, out)
  }
  throw new Error(`[zwwy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwwz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwwz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwwz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwwz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwwz.__v__(a, out)
  }
  throw new Error(`[zwwz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w, a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zwww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec4} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec4} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zwww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zwww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zwww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zwww.__v__(a, out)
  }
  throw new Error(`[zwww] Cannot swizzle ${ta}`);
}

  Object.assign(hg, {
    zxxx, zxxy, zxxz, zxxw, zxyx, zxyy, zxyz, zxyw, zxzx, zxzy, zxzz, zxzw,
    zxwx, zxwy, zxwz, zxww, zyxx, zyxy, zyxz, zyxw, zyyx, zyyy, zyyz, zyyw,
    zyzx, zyzy, zyzz, zyzw, zywx, zywy, zywz, zyww, zzxx, zzxy, zzxz, zzxw,
    zzyx, zzyy, zzyz, zzyw, zzzx, zzzy, zzzz, zzzw, zzwx, zzwy, zzwz, zzww,
    zwxx, zwxy, zwxz, zwxw, zwyx, zwyy, zwyz, zwyw, zwzx, zwzy, zwzz, zwzw,
    zwwx, zwwy, zwwz, zwww
  });
})(globalThis.hg);
