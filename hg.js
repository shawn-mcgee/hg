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
 * @property {string                 } [when]
 * @property {hgId<hgEventHandler<T>>} [then]
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
      for (let part of path.split("/").filter(Boolean)) {
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
      for (let part of path.split("/").filter(Boolean)) {
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

    /** @param {hgEventNode} root */
    __releaseNode__(root) {
      Object.values(root.children).forEach(node => {
        Event.Node.__releaseNode__(node)
      })

      Object.values(root.handlers).forEach(list => {
        list.splice(0).forEach(id => {
          Id.release(id)
        })
      })

      root.children = { }
      root.handlers = { }
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
      /** @type {hgEventAction__Listen__<T>} */ 
      const a = { action: LISTEN, when, then: Id.acquire(then), path: path ?? "" }
      if (defer ?? true) Event.Tree.__queue__(tree, a)
      else               Event.Tree.__flush__(tree, a)
    },

    /**
     * @template T
     * @param {hgEventTree            } tree
     * @param {string                 } [when] 
     * @param {hgId<hgEventHandler<T>>} [then]
     * @param {{path ?: string, defer?: boolean}}
     */
    deafen(tree, when, then, {path, defer}={}) {
      /** @type {hgEventAction__Deafen__<T>} */ 
      const a = { action: DEAFEN, when, then, path: path ?? "" }
      if (defer ?? true) Event.Tree.__queue__(tree, a)
      else               Event.Tree.__flush__(tree, a)
    },

    /**
     * @template T
     * @param {hgEventTree} tree
     * @param {string     } when
     * @param {T          } what
     * @param {{path ?: string, defer?: boolean}}
     */
    dispatch(tree, when, what, {path, defer}={}) {
      /** @type {hgEventAction__Dispatch__<T>} */ 
      const a = { action: DISPATCH, when, what, path: path ?? "" }
      if (defer ?? true) Event.Tree.__queue__(tree, a)
      else               Event.Tree.__flush__(tree, a)
    },

    /** @param {hgEventTree} tree */
    poll(tree) {
      tree.pending.splice(0).forEach(
        a => Event.Tree.__flush__(tree, a)
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
        case LISTEN  : Event.Tree.__onListen__  (tree, a); break;
        case DEAFEN  : Event.Tree.__onDeafen__  (tree, a); break;
        case DISPATCH: Event.Tree.__onDispatch__(tree, a); break;
        default: throw new Error(`[Event.Tree.__flush__] unknown action '${a.action}'.`)
      }
    },

    /** 
     * @param {hgEventTree                 } tree
     * @param {hgEventAction__Listen__<any>}
     */
    __onListen__  (tree, a) {
      const node = Event.Node.__requireNode__(tree.root, a.path)
      const list = Event.Node.__requireHandlers__(node , a.when)
      if (list.includes(a.then)) {
        console.warn(`[Event.Tree.__onListen__] handler with id '${a.then}' already exists.`)
        return
      }
      list.push(a.then)
    },

    /** 
     * @param {hgEventTree                 } tree
     * @param {hgEventAction__Deafen__<any>} a
     */
    __onDeafen__  (tree, a) {
      // deafen one handler with a given 'when' and 'then'
             if (a.when !== undefined && a.then !== undefined) {
        const node = Event.Node.__requestNode__(tree.root, a.path)
        const list = Event.Node.__requestHandlers__(node , a.when)
        if (list?.includes(a.then))
          Id.release(list.splice(list.indexOf(a.then), 1)[0])

      // deafen all handlers for a given 'when'
      } else if(a.when !== undefined && a.then === undefined) {
        const node = Event.Node.__requestNode__(tree.root, a.path)
        const list = Event.Node.__requestHandlers__(node , a.when)
        if (list) list.splice(0).forEach(id => {
          Id.release(id)
        })
      
      // deafen all handlers for a given 'then'
      } else if(a.when === undefined && a.then !== undefined) {
        const node = Event.Node.__requestNode__(tree.root, a.path)
        if (node) Object.values(node.handlers).forEach(list => {
          if (list.includes(a.then))
            Id.release(list.splice(list.indexOf(a.then), 1)[0])
        })

      // deafen all handlers for a given 'path' recursively
      } else if(a.when === undefined && a.then === undefined) {
        const node = Event.Node.__requestNode__(tree.root, a.path)
        if (node) Event.Node.__releaseNode__(node)
      }
    },

    /** 
     * @param {hgEventTree                   } tree
     * @param {hgEventAction__Dispatch__<any>} a
     */
    __onDispatch__(tree, a) {
      const node = Event.Node.__requestNode__(tree.root, a.path)
      if (node) Event.Tree.__reDispatch__(
        tree, 
        node, 
        a.path, 
        a.when, 
        a.what
      )
    },

    /**
     * @param {hgEventTree} tree
     * @param {hgEventNode} node
     * @param {string     } path
     * @param {string     } when
     * @param {any        } what
     */
    __reDispatch__(tree, node, path, when, what) {
      Event.Node.__requestHandlers__(node, when)?.forEach(self => {
        Id.resolve(self)?.(what, {tree, node, path, when, self})
      })

      Object.entries(node.children).forEach(([part, node]) => {
        Event.Tree.__reDispatch__(
          tree, 
          node, 
          path.split("/").concat(part).join("/"), 
          when, 
          what
        )
      })
    }
  },

  /** 
   * @template T
   * @param {hgEventHandler<T>} then
   * @returns {hgEventHandler<T>} 
   */
  once(then) {
    return (what, {tree, node, path, when, self}) => {
      then(what, {tree, node, path, when, self})
      Event.Tree.deafen(tree, when, self, {path, defer: false})
    }
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
 * @property {hgId<HTMLCanvasElement>                } logicalCanvasElement
 * @property {hgId<OffscreenCanvas>                  } virtualCanvasElement
 * @property {hgId<CanvasRenderingContext2D>         } logicalCanvasContext
 * @property {hgId<OffscreenCanvasRenderingContext2D>} virtualCanvasContext
 * @property {number                                 } virtualScale
 * 
 * @property {hgEventTree} eventTree
 */

const Stage = {
  /** @type {"stage:resize"} */
  ON_RESIZE: "stage:resize",

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

    const eventTree = Event.Tree.new()

    
    const stage = {
      configureDebug,
      configureWidth,
      configureHeight,
      configureLogicalBackground,
      configureVirtualBackground,
      configureScaleIncrement,
      configureImageSmoothing,
      logicalCanvasElement: Id.acquire(logicalCanvasElement),
      virtualCanvasElement: Id.acquire(virtualCanvasElement),
      logicalCanvasContext: Id.acquire(logicalCanvasContext),
      virtualCanvasContext: Id.acquire(virtualCanvasContext),
      virtualScale,
      eventTree
    }
    
    new ResizeObserver(() => Stage.__resize__(stage)).observe(logicalCanvasElement)

    Stage.listen(stage, Stage.ON_RESIZE, (size) => Stage.__onResize__(stage, size))

    requestAnimationFrame(
      t0 => requestAnimationFrame(
        t1 => requestAnimationFrame(
          t2 => Stage.__loop__(stage, t0, t1, t2)
        )
      )
    )

    return stage
  },

  /**
   * @template T
   * @param {hgStage          } stage
   * @param {string           } when
   * @param {hgEventHandler<T>} then
   * @param {{path ?: string, defer?: boolean}}
   */
  listen(stage, when, then, {path, defer}={}) {
    Event.Tree.listen(stage.eventTree, when, then, {path, defer})
  },

  /**
   * @template T
   * @param {hgStage                } stage
   * @param {string                 } when
   * @param {hgId<hgEventHandler<T>>} then
   * @param {{path ?: string, defer?: boolean}}
   */
  deafen(stage, when, then, {path, defer}={}) {
    Event.Tree.deafen(stage.eventTree, when, then, {path, defer})
  },

  /**
   * @template T
   * @param {hgStage            } stage
   * @param {string             } when
   * @param {T                  } what
   * @param {{path ?: string, defer?: boolean}}
   */
  dispatch(stage, when, what, {path, defer}={}) {
    Event.Tree.dispatch(stage.eventTree, when, what, {path, defer})
  },

  /** @param {hgStage} stage */
  poll(stage) {
    Event.Tree.poll(stage.eventTree)
  },

  /** @param {hgStage} stage */
  getLogicalCanvasElement(stage) {
    return Id.resolve(stage.logicalCanvasElement)
  },

  /** @param {hgStage} stage */
  getVirtualCanvasElement(stage) {
    return Id.resolve(stage.virtualCanvasElement)
  },

  /** @param {hgStage} stage */
  getLogicalCanvasContext(stage) {
    return Id.resolve(stage.logicalCanvasContext)
  },

  /** @param {hgStage} stage */
  getVirtualCanvasContext(stage) {
    return Id.resolve(stage.virtualCanvasContext)
  },

  /** @param {hgStage} stage */
  getLogicalSize(stage) {
    const lce = Stage.getLogicalCanvasElement(stage)
    return Vector2.new(
      lce.width,
      lce.height
    )
  },

  /** @param {hgStage} stage */
  getVirtualSize(stage) {
    const vce = Stage.getVirtualCanvasElement(stage)
    return Vector2.new(
      vce.width,
      vce.height
    )
  },

  /** @param {hgStage} stage */
  __resize__(stage) {
    const lce = Stage.getLogicalCanvasElement(stage)
    const w   = lce.getBoundingClientRect().width
    const h   = lce.getBoundingClientRect().height
    Stage.dispatch(stage, Stage.ON_RESIZE, [w, h])
  },

  /** 
   * @param {hgStage} stage
   * @param {Vector2}
   */
  __onResize__(stage, [w, h]) {
    const lce = Stage.getLogicalCanvasElement(stage)
    lce.width  = w
    lce.height = h
    
    const vce = new OffscreenCanvas(
      stage.configureWidth  || w, 
      stage.configureHeight || h
    )
    Id.release(stage.virtualCanvasElement)
    stage.virtualCanvasElement = Id.acquire(vce)

    const lcc = lce.getContext("2d")
    const vcc = vce.getContext("2d")
    Id.release(stage.logicalCanvasContext)
    Id.release(stage.virtualCanvasContext)
    stage.logicalCanvasContext = Id.acquire(lcc)
    stage.virtualCanvasContext = Id.acquire(vcc)

    lcc.imageSmoothingEnabled = !!stage.configureImageSmoothing
    vcc.imageSmoothingEnabled = !!stage.configureImageSmoothing
    if (stage.configureImageSmoothing) {
      lcc.imageSmoothingQuality = stage.configureImageSmoothing
      vcc.imageSmoothingQuality = stage.configureImageSmoothing
    }

    stage.virtualScale = Math.min(
      lce.width  / vce.width,
      lce.height / vce.height
    )
    if (stage.configureScaleIncrement)
      stage.virtualScale = Math.floor(stage.virtualScale / stage.configureScaleIncrement) * stage.configureScaleIncrement
  },

  /** 
   * @param {hgStage} stage 
   * @param {number } t
   * @param {number } dt
   */
  __update__(stage, t, dt) {
    Stage.poll(stage)
  },

  /** 
   * @param {hgStage} stage
   * @param {number } t
   * @param {number } dt
   */
  __render__(stage, t, dt) {
    const [lw, lh] = Stage.getLogicalSize(stage)
    const [vw, vh] = Stage.getVirtualSize(stage)
    const  vs      = stage.virtualScale

    const h = Stage.getLogicalCanvasContext(stage)
    const g = Stage.getVirtualCanvasContext(stage)

    h.resetTransform()
    h.fillStyle = stage.configureLogicalBackground
    h.fillRect(0, 0, lw, lh)

    g.resetTransform()
    g.fillStyle = stage.configureVirtualBackground
    g.fillRect(0, 0, vw, vh)

    h.translate(
      (lw - vw * vs) / 2,
      (lh - vh * vs) / 2
    )
    h.scale(vs, vs)
    h.drawImage(g.canvas, 0, 0)
  },

  /** 
   * @param {hgStage} stage 
   * @param {number } t0
   * @param {number } t1
   * @param {number } t2
   */
  __loop__(stage, t0, t1, t2) {
    const t  = (t2 - t0) / 1000
    const dt = (t2 - t1) / 1000

    Stage.__update__(stage, t, dt)
    Stage.__render__(stage, t, dt)

    requestAnimationFrame(t3 => Stage.__loop__(stage, t0, t2, t3))
  },
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