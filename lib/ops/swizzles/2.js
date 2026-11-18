/**
 * @file 2-component xyzw swizzles, with explicit dispatchers and trusted specializations.
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
 * Selects a.x, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xx.__v__(a, out)
  }
  throw new Error(`[xx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xy.__v__(a, out)
  }
  throw new Error(`[xy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xz.__v__(a, out)
  }
  throw new Error(`[xz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.x, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function xw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function xw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[xw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.xw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.xw.__v__(a, out)
  }
  throw new Error(`[xw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yx.__v__(a, out)
  }
  throw new Error(`[yx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yy.__v__(a, out)
  }
  throw new Error(`[yy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yz.__v__(a, out)
  }
  throw new Error(`[yz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.y, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function yw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function yw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[yw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.yw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.yw.__v__(a, out)
  }
  throw new Error(`[yw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zx.__v__(a, out)
  }
  throw new Error(`[zx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zy.__v__(a, out)
  }
  throw new Error(`[zy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zz.__v__(a, out)
  }
  throw new Error(`[zz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.z, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function zw
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function zw(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[zw] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.zw.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.zw.__v__(a, out)
  }
  throw new Error(`[zw] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.x in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wx
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wx(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wx] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wx.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wx.__v__(a, out)
  }
  throw new Error(`[wx] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.y in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wy
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wy(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wy] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wy.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wy.__v__(a, out)
  }
  throw new Error(`[wy] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.z in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function wz
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function wz(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[wz] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.wz.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.wz.__v__(a, out)
  }
  throw new Error(`[wz] Cannot swizzle ${ta}`);
}

/**
 * Selects a.w, a.w in that order as vector components.
 * Repeated axes are allowed; absent or nullish components default to zero.
 * Accepts any vector dimension and splats numeric inputs, matching hg.vec.
 *
 * @function ww
 * @memberof hg
 * @static
 * @param {number|hgVector} a - Scalar or source vector; its components are read before output writes.
 * @param {hgVec2} [out] - Matching output vector; may alias the source only when dimensions match.
 * @returns {hgVec2} Fresh vector when omitted, otherwise the supplied out object.
 * @throws {Error} If the argument count or source vector type is unsupported.
 */
function ww(a, out) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[ww] Expected 1 or 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  switch(ta) {
    case __num__ : return vec.ww.__n__(a, out)
    case __vec2__:
    case __vec3__:
    case __vec4__: return vec.ww.__v__(a, out)
  }
  throw new Error(`[ww] Cannot swizzle ${ta}`);
}

  Object.assign(hg, {
    xx, xy, xz, xw, yx, yy, yz, yw, zx, zy, zz, zw,
    wx, wy, wz, ww
  });
})(globalThis.hg);
