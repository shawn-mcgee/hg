/**
 * @typedef hgVersion
 * @property {string} moniker
 * @property {number} major
 * @property {number} minor
 * @property {number} patch
 */

const Version = {
  /**
   * @param {Partial<hgVersion>}
   * @returns {hgVersion}
   */
  new({
    moniker,
    major,
    minor,
    patch,
  }) {
    return {
      moniker: moniker ?? "hg",
      major  : major   ??   0,
      minor  : minor   ??   0,
      patch  : patch   ??   0,
    }
  },

  /** @param {hgVersion} */
  toString({ moniker, major, minor, patch }) {
    return `${moniker} ${major}.${minor}.${patch}`
  },

  /**
   * @param {hgVersion} a 
   * @param {hgVersion} b 
   */
  compare(a, b) {
    let k;
    if ((k = a.major - b.major) !== 0) return k;
    if ((k = a.minor - b.minor) !== 0) return k;
    return a.patch - b.patch;
  },
}

const VERSION = Version.new({
  moniker: "hg",
  major  : 0,
  minor  : 1,
  patch  : 0,
})

/**
 * @typedef {number | number[]} hgVectorLike
 */

const X = 0;
const Y = 1;
const Z = 2;
const W = 3;

const Vector__get__ = {
  /** @param {hgVectorLike} a */
  x(a) { return typeof a === "number" ? a : a[X] ?? 0 },
  /** @param {hgVectorLike} a */
  y(a) { return typeof a === "number" ? a : a[Y] ?? 0 },
  /** @param {hgVectorLike} a */
  z(a) { return typeof a === "number" ? a : a[Z] ?? 0 },
  /** @param {hgVectorLike} a */
  w(a) { return typeof a === "number" ? a : a[W] ?? 0 },
  /** @param {hgVectorLike} a */
  n(a) { return typeof a === "number" ? 1 : a.length ?? 0 },
}

const Vector__set__ = {
  /** 
   * @param {hgVectorLike} a 
   * @param {number} x
   */
  x(a, x) { return typeof a === "number" ? x : (a[X] = x) },
  /** 
   * @param {hgVectorLike} a 
   * @param {number} y
   */
  y(a, y) { return typeof a === "number" ? y : (a[Y] = y) },
  /** 
   * @param {hgVectorLike} a 
   * @param {number} z
   */
  z(a, z) { return typeof a === "number" ? z : (a[Z] = z) },
  /** 
   * @param {hgVectorLike} a 
   * @param {number} w
   */
  w(a, w) { return typeof a === "number" ? w : (a[W] = w) },
}

const Vector = {
  __get__: Vector__get__,
  __set__: Vector__set__,
  /**
   * @param {hgVectorLike} a
   * @param {number} [x]
   */
  x(a, x) { return x === undefined ? Vector__get__.x(a) : Vector__set__.x(a, x) },
  /**
   * @param {hgVectorLike} a
   * @param {number} [y]
   */
  y(a, y) { return y === undefined ? Vector__get__.y(a) : Vector__set__.y(a, y) },
  /**
   * @param {hgVectorLike} a
   * @param {number} [z]
   */
  z(a, z) { return z === undefined ? Vector__get__.z(a) : Vector__set__.z(a, z) },
  /**
   * @param {hgVectorLike} a
   * @param {number} [w]
   */
  w(a, w) { return w === undefined ? Vector__get__.w(a) : Vector__set__.w(a, w) },
}

/** @typedef {[number, number]} hgVector2 */

const Vector2 = {
  /**
   * @param {number} [x]
   * @param {number} [y]
   * @returns {hgVector2}
   */
  new(x, y) {
    return (
      y === undefined
    ) ? [
      x ??= 0,
      x
    ] : [
      x ?? 0,
      y ?? 0
    ]
  },

  /** @param {hgVectorLike} a */
  toString(a) {
    const x = Vector__get__.x(a)
    const y = Vector__get__.y(a)
    return `vec2(${x}, ${y})`
  }
}

/** @typedef {[number, number, number]} hgVector3 */

const Vector3 = {
  /**
   * @param {number} [x]
   * @param {number} [y]
   * @param {number} [z]
   * @returns {hgVector3}
   */
  new(x, y, z) {
    return (
      y === undefined &&
      z === undefined
    ) ? [
      x ??= 0,
      x,
      x
    ] : [
      x ?? 0,
      y ?? 0,
      z ?? 0
    ]
  },

  /** @param {hgVectorLike} a */
  toString(a) {
    const x = Vector__get__.x(a)
    const y = Vector__get__.y(a)
    const z = Vector__get__.z(a)
    return `vec3(${x}, ${y}, ${z})`
  }
}

/** @typedef {[number, number, number, number]} hgVector4 */

const Vector4 = {
  /**
   * @param {number} [x]
   * @param {number} [y]
   * @param {number} [z]
   * @param {number} [w]
   * @returns {hgVector4}
   */
  new(x, y, z, w) {
    return (
      y === undefined &&
      z === undefined &&
      w === undefined
    ) ? [
      x ??= 0,
      x,
      x,
      x
    ] : [
      x ?? 0,
      y ?? 0,
      z ?? 0,
      w ?? 0
    ]
  },

  /** @param {hgVectorLike} a */
  toString(a) {
    const x = Vector__get__.x(a)
    const y = Vector__get__.y(a)
    const z = Vector__get__.z(a)
    const w = Vector__get__.w(a)
    return `vec4(${x}, ${y}, ${z}, ${w})`
  }
}



const hg = {
  Version,
  VERSION,

  Vector ,
  Vector2,
  Vector3,
  Vector4,
}

window.hg = hg