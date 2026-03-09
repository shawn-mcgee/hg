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
  }={}) {
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

const Canvas = {
  get __default__() {
    const c = document.createElement("canvas")
      c.style.position = "absolute"
      c.style.top      = "0px"
      c.style.left     = "0px"
      c.style.width    = "100dvw"
      c.style.height   = "100dvh"
    document.body.appendChild(c)

    delete  Canvas.__default__
    return (Canvas.__default__ = c)
  }
}

/**
 * @typedef hgStage
 * 
 * @property {boolean               } configureDebug
 * @property {number                } configureWidth
 * @property {number                } configureHeight
 * @property {string                } configureLogicalBackground
 * @property {string                } configureVirtualBackground
 * @property {number                } [configureScaleIncrement]
 * @property {ImageSmoothingQuality } [configureImageSmoothing]
 * 
 * @property {HTMLCanvasElement                } logicalCanvasElement
 * @property {OffscreenCanvas                  } virtualCanvasElement
 * @property {CanvasRenderingContext2D         } logicalCanvasContext
 * @property {OffscreenCanvasRenderingContext2D} virtualCanvasContext
 * @property {number                           } virtualScale
 */

const Stage = {
  /** @returns {hgStage} */
  new({
    dbg, // configureDebug
    w  , // configureWidth
    h  , // configureHeight
    lbg, // configureLogicalBackground
    vbg, // configureVirtualBackground
    si , // configureScaleIncrement
    is , // configureImageSmoothing
    c  , // logicalCanvasElement
  }={}) {
    const configureDebug             = dbg ?? false
    const configureWidth             = w   ??     0
    const configureHeight            = h   ??     0
    const configureLogicalBackground = lbg ?? "black"
    const configureVirtualBackground = vbg ?? "white"
    const configureScaleIncrement    = si
    const configureImageSmoothing    = is

    /** @type {HTMLCanvasElement} */
    const logicalCanvasElement = c ?? Canvas.__default__
    const virtualCanvasElement  = new OffscreenCanvas(
      configureWidth  || logicalCanvasElement.width, 
      configureHeight || logicalCanvasElement.height
    )

    const logicalCanvasContext = logicalCanvasElement.getContext("2d")
    const virtualCanvasContext = virtualCanvasElement.getContext("2d")

    // configure scale
    let virtualScale = Math.min(
      logicalCanvasElement.width  / virtualCanvasElement.width,
      logicalCanvasElement.height / virtualCanvasElement.height
    )
    if (configureScaleIncrement)
      virtualScale = Math.floor(virtualScale / configureScaleIncrement) * configureScaleIncrement

    // configure image smoothing
    logicalCanvasContext.imageSmoothingEnabled = !!configureImageSmoothing
    virtualCanvasContext.imageSmoothingEnabled = !!configureImageSmoothing
    if (configureImageSmoothing) {
      logicalCanvasContext.imageSmoothingQuality = configureImageSmoothing
      virtualCanvasContext.imageSmoothingQuality = configureImageSmoothing
    }

    const stage = {
      configureDebug,
      configureWidth,
      configureHeight,
      configureLogicalBackground,
      configureVirtualBackground,
      configureScaleIncrement,
      configureImageSmoothing,
      logicalCanvasElement,
      virtualCanvasElement,
      logicalCanvasContext,
      virtualCanvasContext,
      virtualScale,
    }

    return stage
  },

  /** @param {hgStage} stage */
  getLogicalSize(stage) {
    return Vector2.new(
      stage.logicalCanvasElement.width,
      stage.logicalCanvasElement.height
    )
  },

  /** @param {hgStage} stage */
  getVirtualSize(stage) {
    return Vector2.new(
      stage.virtualCanvasElement.width,
      stage.virtualCanvasElement.height
    )
  },
}

/** @param {hgStage} stage */
function Stage__resize__(stage) {
  // compute new size
  const w = stage.logicalCanvasElement.getBoundingClientRect().width
  const h = stage.logicalCanvasElement.getBoundingClientRect().height
  // queue a resize
}

/** 
 * @param {hgStage} stage 
 * @param {number } t
 * @param {number } dt
 */
function Stage__update__(stage, t, dt) {

}

/** 
 * @param {hgStage} stage
 * @param {number } t
 * @param {number } dt
 */
function Stage__render__(stage, t, dt) {

}

/** 
 * @param {hgStage} stage 
 * @param {number } t0
 * @param {number } t1
 * @param {number } t2
 */
function Stage__loop__(stage, t0, t1, t2) {

}


const Event = {

}

function Event__queue__(bus, a) {

}

function Event__flush__(bus, a) {

}

function Event__onListen__  (bus, a) {

}

function Event__onDeafen__  (bus, a) {

}

function Event__onDispatch__(bus, a) {

}

const hg = {
  Version,
  VERSION,

  Vector ,
  Vector2,
  Vector3,
  Vector4,

  Stage,
}

window.hg = hg