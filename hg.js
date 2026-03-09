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

const Vector = {
  /** @type {0} */
  X: 0,
  /** @type {1} */
  Y: 1,
  /** @type {2} */
  Z: 2,
  /** @type {3} */
  W: 3,

  __get__: {
    /** @param {hgVectorLike} a */
    x(a) { return typeof a === "number" ? a : a[Vector.X] ?? 0 },
    /** @param {hgVectorLike} a */
    y(a) { return typeof a === "number" ? a : a[Vector.Y] ?? 0 },
    /** @param {hgVectorLike} a */
    z(a) { return typeof a === "number" ? a : a[Vector.Z] ?? 0 },
    /** @param {hgVectorLike} a */
    w(a) { return typeof a === "number" ? a : a[Vector.W] ?? 0 },
    /** @param {hgVectorLike} a */
    n(a) { return typeof a === "number" ? 1 : a.length ?? 0 },
  },

  __set__: {
    /** 
     * @param {hgVectorLike} a 
     * @param {number} x
     */
    x(a, x) { return typeof a === "number" ? x : (a[Vector.X] = x) },
    /** 
     * @param {hgVectorLike} a 
     * @param {number} y
     */
    y(a, y) { return typeof a === "number" ? y : (a[Vector.Y] = y) },
    /** 
     * @param {hgVectorLike} a 
     * @param {number} z
     */
    z(a, z) { return typeof a === "number" ? z : (a[Vector.Z] = z) },
    /** 
     * @param {hgVectorLike} a 
     * @param {number} w
     */
    w(a, w) { return typeof a === "number" ? w : (a[Vector.W] = w) },
  },

  /**
   * @param {hgVectorLike} a
   * @param {number} [x]
   */
  x(a, x) { return x === undefined ? Vector.__get__.x(a) : Vector.__set__.x(a, x) },
  /**
   * @param {hgVectorLike} a
   * @param {number} [y]
   */
  y(a, y) { return y === undefined ? Vector.__get__.y(a) : Vector.__set__.y(a, y) },
  /**
   * @param {hgVectorLike} a
   * @param {number} [z]
   */
  z(a, z) { return z === undefined ? Vector.__get__.z(a) : Vector.__set__.z(a, z) },
  /**
   * @param {hgVectorLike} a
   * @param {number} [w]
   */
  w(a, w) { return w === undefined ? Vector.__get__.w(a) : Vector.__set__.w(a, w) },
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
 * @template T
 * @typedef {string & { __kind__: T }} hgId
*/

const Id = {
  /** @type {Record<hgId<any>, any>} */
  __table__: { },

  /**
   * @template T
   * @param {T} what
   * @param {string} [id]
   */
  acquire(what, id) {
    id ??= Id.__uniqueId__()
    if (id in Id.__table__)
      throw new Error(`[Id.acquire] item with id '${id}' already exists.`)
    Id.__table__[id] = what
    return id
  },

  /**
   * @template T
   * @param {hgId<T>} id
   * @returns {T}
   */
  resolve(id) {
    if (!(id in Id.__table__))
      throw new Error(`[Id.resolve] item with id '${id}' does not exist.`)
    return Id.__table__[id]
  },

  /**
   * @template T
   * @param {hgId<T>} id
   */
  release(id) {
    if (!(id in Id.__table__))
      throw new Error(`[Id.release] item with id '${id}' does not exist.`)
    delete Id.__table__[id]
  },

  __uniqueId__() {
    let id = crypto.randomUUID()
    while (id in Id.__table__) 
        id = crypto.randomUUID()
    return id
  }
}

const LISTEN   = "__listen__"
const DEAFEN   = "__deafen__"
const DISPATCH = "__dispatch__"
/**
 * @template T
 * @typedef {(what: T, context: hgEventContext<T>) => void} hgEventHandler
 */

/**
 * @template T
 * @typedef {hgEventHandler<T>[]} hgEventHandlers
 */

/**
 * @typedef hgEventNode
 * @property {Record<string, hgEventHandlers<any>>} handlers
 * @property {Record<string, hgEventNode>         } children
 */

/**
 * @typedef hgEventTree
 * @property {hgEventNode         } root
 * @property {hgEventAction<any>[]} pending
 */

/**
 * @template T
 * @typedef hgEventContext
 * @property {hgEventTree            } tree
 * @property {hgEventNode            } node
 * @property {string                 } path
 * @property {string                 } when
 * @property {hgId<hgEventHandler<T>>} self
 */

/**
 * @template T
 * @typedef hgEventAction__Listen__
 * @property {typeof LISTEN          } action
 * @property {string                 } path
 * @property {string                 } when
 * @property {hgId<hgEventHandler<T>>} then
 */

/**
 * @template T
 * @typedef hgEventAction__Deafen__
 * @property {typeof DEAFEN          } action
 * @property {string                 } path
 * @property {string                 } when
 * @property {hgId<hgEventHandler<T>>} then
 */

/**
 * @template T
 * @typedef hgEventAction__Dispatch__
 * @property {typeof DISPATCH} action
 * @property {string         } path
 * @property {string         } when
 * @property {T              } what
 */

/**
 * @template T
 * @typedef {hgEventAction__Listen__<T> | hgEventAction__Deafen__<T> | hgEventAction__Dispatch__<T>} hgEventAction
 */

const Event = {

  Node: {
    /** @returns {hgEventNode} */
    new() {
      return {
        handlers: { },
        children: { },
      }
    },

    /**
     * @param {hgEventNode | undefined} root
     * @param {string                 } path
     */
    __requestNode__(root, path) {
      for (let part of path.split("/")) {
        let node = root?.children?.[part]
        if (!node) return
        root = node
      }
      return root
    },

    /**
     * 
     * @param {hgEventNode} root 
     * @param {string     } path 
     */
    __requireNode__(root, path) {
      for (let part of path.split("/")) {
        let node = root.children[part]
        if (!node) root.children[part] = (
          node = Event.Node.new()
        )
        root = node
      }
      return root
    },

    /**
     * @param {hgEventNode | undefined} root 
     * @param {string                 } when 
     */
    __requestHandlers__(root, when) {
      let list = root?.handlers?.[when]
      if (!list) return
      return list
    },

    /**
     * @param {hgEventNode} root 
     * @param {string     } when 
     */
    __requireHandlers__(root, when) {
      let list = root.handlers[when]
      if (!list) root.handlers[when] = (
        list = [ ]
      )
      return list
    },

    __releaseNode__(root) {


    },
  },

  Tree: {
    /** @returns {hgEventTree} */
    new() {
      return {
        root: Event.Node.new(),
        pending: [ ],
      }
    },

    /**
     * @template T
     * @param {hgEventTree      } tree
     * @param {string           } when 
     * @param {hgEventHandler<T>} then
     * @param {{path ?: string, defer?: boolean}}
     */
    listen(tree, when, then, {path, defer}={}) {

    },

    /**
     * @template T
     * @param {hgEventTree            } tree
     * @param {string                 } when 
     * @param {hgId<hgEventHandler<T>>} then
     * @param {{path ?: string, defer?: boolean}}
     */
    deafen(tree, when, then, {path, defer}={}) {

    },

    /**
     * @template T
     * @param {hgEventTree} tree
     * @param {string     } when
     * @param {T          } what
     * @param {{path ?: string, defer?: boolean}}
     */
    dispatch(tree, when, what, {path, defer}={}) {

    },

    /** @param {hgEventTree} tree */
    poll(tree) {
      tree.pending.splice(0).forEach(
        a => Event.__flush__(tree, a)
      )
    },

    /** 
     * @param {hgEventTree       } tree
     * @param {hgEventAction<any>} a
     */
    __queue__(tree, a) {
      tree.pending.push(a)
    },

    /** 
     * @param {hgEventTree       } tree
     * @param {hgEventAction<any>} a
     */
    __flush__(tree, a) {
      switch (a.action) {
        case LISTEN  : Event.__onListen__  (tree, a); break;
        case DEAFEN  : Event.__onDeafen__  (tree, a); break;
        case DISPATCH: Event.__onDispatch__(tree, a); break;
        default: throw new Error(`[Event.flush] unknown action '${a.action}'.`)
      }
    },

    /** 
     * @param {hgEventTree                 } tree
     * @param {hgEventAction__Listen__<any>}
     */
    __onListen__  (tree, a) {
      const node = Event.Node.__requireNode__(tree.root, a.path)
      const list = Event.Node.__requireHandlers__(node , a.when)
      if (list.includes(a.then))
        console.warn(`[Event.listen] handler with id '${a.then}' already exists.`)
      list.push(a.then)
    },

    /** 
     * @param {hgEventTree                 } tree
     * @param {hgEventAction__Deafen__<any>} a
     */
    __onDeafen__  (tree, a) {
      

    },

    /** 
     * @param {hgEventTree                   } tree
     * @param {hgEventAction__Dispatch__<any>} a
     */
    __onDispatch__(tree, a) {

    }
  },
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








const hg = {
  Version,
  VERSION,

  Vector ,
  Vector2,
  Vector3,
  Vector4,

  Id,
  Event,
  Stage,
}

window.hg = hg