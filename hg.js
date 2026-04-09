const Version = {
  new(moniker, major, minor, patch) {
    return {
      moniker: moniker ?? "hg",
      major  : major   ??   0,
      minor  : minor   ??   0,
      patch  : patch   ??   0,
    }
  },

  toString(a) {
    return `${a.moniker} ${a.major}.${a.minor}.${a.patch}`
  },

  compare(a, b) {
    let k;
    if ((k = a.major - b.major) !== 0) return k;
    if ((k = a.minor - b.minor) !== 0) return k;
    if ((k = a.patch - b.patch) !== 0) return k;
    return 0;
  },
}

const VERSION = Version.new("hg", 0, 1, 0)

const Vector = {
  __get__: {
    x(a, x=0) { return typeof a === "number" ? a : a[0] ?? x },
    y(a, y=0) { return typeof a === "number" ? a : a[1] ?? y },
    z(a, z=0) { return typeof a === "number" ? a : a[2] ?? z },
    w(a, w=0) { return typeof a === "number" ? a : a[3] ?? w },
    n(a) { return typeof a === "number" ? 1 : a.length ?? 0 },
  },
  
  __set__: {
    x(a, x) { return typeof a === "number" ? x : (a[0] = x) },
    y(a, y) { return typeof a === "number" ? y : (a[1] = y) },
    z(a, z) { return typeof a === "number" ? z : (a[2] = z) },
    w(a, w) { return typeof a === "number" ? w : (a[3] = w) },
  },

  x(a, x) { return x === undefined ? Vector.__get__.x(a) : Vector.__set__.x(a, x) },
  y(a, y) { return y === undefined ? Vector.__get__.y(a) : Vector.__set__.y(a, y) },
  z(a, z) { return z === undefined ? Vector.__get__.z(a) : Vector.__set__.z(a, z) },
  w(a, w) { return w === undefined ? Vector.__get__.w(a) : Vector.__set__.w(a, w) },
}

const Vector2 = {
  new(x, y) {
    return (
      y === undefined
    ) ? [x ??= 0, x     ]
      : [x ??  0, y ?? 0]
  },

  toString(a) {
    const x = Vector.__get__.x(a)
    const y = Vector.__get__.y(a)
    return `vec2(${x}, ${y})`
  },

  add(a, b) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const xb = Vector.__get__.x(b)
    const yb = Vector.__get__.y(b)
    return Vector2.new(xa + xb, ya + yb)
  },

  sub(a, b) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const xb = Vector.__get__.x(b)
    const yb = Vector.__get__.y(b)
    return Vector2.new(xa - xb, ya - yb)
  },

  mul(a, b) {
    const xa = Vector.__get__.x(a, 1)
    const ya = Vector.__get__.y(a, 1)
    const xb = Vector.__get__.x(b, 1)
    const yb = Vector.__get__.y(b, 1)
    return Vector2.new(xa * xb, ya * yb)
  },

  div(a, b) {
    const xa = Vector.__get__.x(a, 1)
    const ya = Vector.__get__.y(a, 1)
    const xb = Vector.__get__.x(b, 1)
    const yb = Vector.__get__.y(b, 1)
    return Vector2.new(xa / xb, ya / yb)
  },

  mod(a, b) {
    const xa = Vector.__get__.x(a, 1)
    const ya = Vector.__get__.y(a, 1)
    const xb = Vector.__get__.x(b, 1)
    const yb = Vector.__get__.y(b, 1)
    return Vector2.new(xa % xb, ya % yb)
  },

  dot(a, b=a) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const xb = Vector.__get__.x(b)
    const yb = Vector.__get__.y(b)
    return xa * xb + ya * yb
  },

  len(a) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    return Math.sqrt(xa * xa + ya * ya)
  }
}

const Vector3 = {
  new(x, y, z) {
    return (
      y === undefined &&
      z === undefined
    ) ? [x ??= 0, x     , x     ]
      : [x ??  0, y ?? 0, z ?? 0]
  },

  toString(a) {
    const x = Vector.__get__.x(a)
    const y = Vector.__get__.y(a)
    const z = Vector.__get__.z(a)
    return `vec3(${x}, ${y}, ${z})`
  },

  add(a, b) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const za = Vector.__get__.z(a)
    const xb = Vector.__get__.x(b)
    const yb = Vector.__get__.y(b)
    const zb = Vector.__get__.z(b)
    return Vector3.new(xa + xb, ya + yb, za + zb)
  },

  sub(a, b) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const za = Vector.__get__.z(a)
    const xb = Vector.__get__.x(b)
    const yb = Vector.__get__.y(b)
    const zb = Vector.__get__.z(b)
    return Vector3.new(xa - xb, ya - yb, za - zb)
  },

  mul(a, b) {
    const xa = Vector.__get__.x(a, 1)
    const ya = Vector.__get__.y(a, 1)
    const za = Vector.__get__.z(a, 1)
    const xb = Vector.__get__.x(b, 1)
    const yb = Vector.__get__.y(b, 1)
    const zb = Vector.__get__.z(b, 1)
    return Vector3.new(xa * xb, ya * yb, za * zb)
  },

  div(a, b) {
    const xa = Vector.__get__.x(a, 1)
    const ya = Vector.__get__.y(a, 1)
    const za = Vector.__get__.z(a, 1)
    const xb = Vector.__get__.x(b, 1)
    const yb = Vector.__get__.y(b, 1)
    const zb = Vector.__get__.z(b, 1)
    return Vector3.new(xa / xb, ya / yb, za / zb)
  },

  mod(a, b) {
    const xa = Vector.__get__.x(a, 1)
    const ya = Vector.__get__.y(a, 1)
    const za = Vector.__get__.z(a, 1)
    const xb = Vector.__get__.x(b, 1)
    const yb = Vector.__get__.y(b, 1)
    const zb = Vector.__get__.z(b, 1)
    return Vector3.new(xa % xb, ya % yb, za % zb)
  },

  dot(a, b=a) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const za = Vector.__get__.z(a)
    const xb = Vector.__get__.x(b)
    const yb = Vector.__get__.y(b)
    const zb = Vector.__get__.z(b)
    return xa * xb + ya * yb + za * zb
  },

  len(a) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const za = Vector.__get__.z(a)
    return Math.sqrt(xa * xa + ya * ya + za * za)
  }
}

const Vector4 = {
  new(x, y, z, w) {
    return (
      y === undefined &&
      z === undefined &&
      w === undefined
    ) ? [x ??= 0, x     , x     , x     ]
      : [x ??  0, y ?? 0, z ?? 0, w ?? 0]
  },

  toString(a) {
    const x = Vector.__get__.x(a)
    const y = Vector.__get__.y(a)
    const z = Vector.__get__.z(a)
    const w = Vector.__get__.w(a)
    return `vec4(${x}, ${y}, ${z}, ${w})`
  },

  add(a, b) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const za = Vector.__get__.z(a)
    const wa = Vector.__get__.w(a)
    const xb = Vector.__get__.x(b)
    const yb = Vector.__get__.y(b)
    const zb = Vector.__get__.z(b)
    const wb = Vector.__get__.w(b)
    return Vector4.new(xa + xb, ya + yb, za + zb, wa + wb)
  },

  sub(a, b) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const za = Vector.__get__.z(a)
    const wa = Vector.__get__.w(a)
    const xb = Vector.__get__.x(b)
    const yb = Vector.__get__.y(b)
    const zb = Vector.__get__.z(b)
    const wb = Vector.__get__.w(b)
    return Vector4.new(xa - xb, ya - yb, za - zb, wa - wb)
  },

  mul(a, b) {
    const xa = Vector.__get__.x(a, 1)
    const ya = Vector.__get__.y(a, 1)
    const za = Vector.__get__.z(a, 1)
    const wa = Vector.__get__.w(a, 1)
    const xb = Vector.__get__.x(b, 1)
    const yb = Vector.__get__.y(b, 1)
    const zb = Vector.__get__.z(b, 1)
    const wb = Vector.__get__.w(b, 1)
    return Vector4.new(xa * xb, ya * yb, za * zb, wa * wb)
  },

  div(a, b) {
    const xa = Vector.__get__.x(a, 1)
    const ya = Vector.__get__.y(a, 1)
    const za = Vector.__get__.z(a, 1)
    const wa = Vector.__get__.w(a, 1)
    const xb = Vector.__get__.x(b, 1)
    const yb = Vector.__get__.y(b, 1)
    const zb = Vector.__get__.z(b, 1)
    const wb = Vector.__get__.w(b, 1)
    return Vector4.new(xa / xb, ya / yb, za / zb, wa / wb)
  },

  mod(a, b) {
    const xa = Vector.__get__.x(a, 1)
    const ya = Vector.__get__.y(a, 1)
    const za = Vector.__get__.z(a, 1)
    const wa = Vector.__get__.w(a, 1)
    const xb = Vector.__get__.x(b, 1)
    const yb = Vector.__get__.y(b, 1)
    const zb = Vector.__get__.z(b, 1)
    const wb = Vector.__get__.w(b, 1)
    return Vector4.new(xa % xb, ya % yb, za % zb, wa % wb)
  },

  dot(a, b=a) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const za = Vector.__get__.z(a)
    const wa = Vector.__get__.w(a)
    const xb = Vector.__get__.x(b)
    const yb = Vector.__get__.y(b)
    const zb = Vector.__get__.z(b)
    const wb = Vector.__get__.w(b)
    return xa * xb + ya * yb + za * zb + wa * wb
  },

  len(a) {
    const xa = Vector.__get__.x(a)
    const ya = Vector.__get__.y(a)
    const za = Vector.__get__.z(a)
    const wa = Vector.__get__.w(a)
    return Math.sqrt(xa * xa + ya * ya + za * za + wa * wa)
  }
}

const Id = {
  __table__: { },

  /**@param {string} [id] */
  acquire(what, id) {
    id  ??= Id.__unique__()
    if (id in Id.__table__)
      throw new Error(`[Id.acquire] item with id '${id}' already exists.`)
    Id.__table__[id] = what
    return id
  },

  resolve(id) {
    if (!(id in Id.__table__))
      throw new Error(`[Id.resolve] item with id '${id}' does not exist.`)
    return Id.__table__[id]
  },

  release(id) {
    if (!(id in Id.__table__))
      throw new Error(`[Id.release] item with id '${id}' does not exist.`)
    const what = Id.__table__[id]
    delete Id.__table__[id]
    return what
  },

  __unique__() {
    let id = crypto.randomUUID()
    while (id in Id.__table__) 
        id = crypto.randomUUID()
    return id
  }
}

const Event = {
  __scheduled__: [ ],
  __listeners__: { },

  on  (when, then, defer=true ) {
    const a = { is: "event:on"  , when, then: Id.acquire(then) }
    if (defer) Event.__queue__(a)
    else       Event.__flush__(a)
  },

  off (when, then, defer=true) {
    const a = { is: "event:off" , when, then }
    if (defer) Event.__queue__(a)
    else       Event.__flush__(a)
  },

  emit(when, what, defer=true) {
    const a = { is: "event:emit", when, what }
    if (defer) Event.__queue__(a)
    else       Event.__flush__(a)
  },  

  once(then) {
    return (what, { self, when }) => {
      then(what, { self, when })
      Event.deafen(when, self, false)
    }
  },

  poll() {
    Event.__scheduled__.splice(0).forEach(
      a => Event.__flush__(a)
    )
  },

  __queue__(a) {
    Event.__scheduled__.push(a)
  },

  __flush__(a) {
    switch (a.is) {
      case "event:on"  : return Event.__on__  (a);
      case "event:off" : return Event.__off__ (a);
      case "event:emit": return Event.__emit__(a);
      default: throw new Error(`[Event.__flush__] unknown action '${a.is}'.`)
    }
  },

  __on__  ({ when, then }) {
    const list = Event.__requireListeners__(when)
    if (list.includes(then))
      throw new Error(`[Event.__on__] listener of type '${when}' with id '${then}' already exists.`)
    list.push(then)
  },

  __off__ ({ when, then }) {
    const list = Event.__requestListeners__(when)
    if (!list?.includes(then))
      throw new Error(`[Event.__off__] listener of type '${when}' with id '${then}' does not exist.`)
    Id.release(list.splice(list.indexOf(then), 1)[0])
  },

  __emit__({ when, what }) {
    Event.__requestListeners__(when)?.forEach(self => {
      Id.resolve(self)(what, { self, when })
    })
  },

  __requestListeners__(when) {
    return Event.__listeners__[when]
  },

  __requireListeners__(when) {
    let list = Event.__listeners__[when]
    if (!list) Event.__listeners__[when] = (
      list = []
    )
    return list
  }
}

const Scene = {
  new({
    onAttach,
    onDetach,
    onUpdate,
    onRender,

    onKeyUp    ,
    onKeyDown  ,
    onMouseUp  ,
    onMouseDown,
    onMouseMove,
    onWheelMove,
  }) {
    const scene = { }
    if (onAttach   ) scene.onAttach    = Id.acquire(onAttach   )
    if (onDetach   ) scene.onDetach    = Id.acquire(onDetach   )
    if (onUpdate   ) scene.onUpdate    = Id.acquire(onUpdate   )
    if (onRender   ) scene.onRender    = Id.acquire(onRender   )
    if (onKeyUp    ) scene.onKeyUp     = Id.acquire(onKeyUp    )
    if (onKeyDown  ) scene.onKeyDown   = Id.acquire(onKeyDown  )
    if (onMouseUp  ) scene.onMouseUp   = Id.acquire(onMouseUp  )
    if (onMouseDown) scene.onMouseDown = Id.acquire(onMouseDown)
    if (onMouseMove) scene.onMouseMove = Id.acquire(onMouseMove)
    if (onWheelMove) scene.onWheelMove = Id.acquire(onWheelMove)

    return scene
  },

  __update__(scene, c) {
    if (scene?.onUpdate) Id.resolve(scene.onUpdate)(c)
  },

  __render__(scene, c) {
    if (scene?.onRender) Id.resolve(scene.onRender)(c)
  },

  __attach__(scene, c) {
    if (scene?.onAttach) Id.resolve(scene.onAttach)(c)
  },

  __detach__(scene, c) {
    if (scene?.onDetach) Id.resolve(scene.onDetach)(c)
  },

  __keyUp__    (scene, k) {
    if (scene?.onKeyUp) Id.resolve(scene.onKeyUp)(k)
  },

  __keyDown__  (scene, k) {
    if (scene?.onKeyDown) Id.resolve(scene.onKeyDown)(k)
  },

  __mouseUp__  (scene, m) {
    if (scene?.onMouseUp) Id.resolve(scene.onMouseUp)(m)
  },

  __mouseDown__(scene, m) {
    if (scene?.onMouseDown) Id.resolve(scene.onMouseDown)(m)
  },

  __mouseMove__(scene, m) {
    if (scene?.onMouseMove) Id.resolve(scene.onMouseMove)(m)
  },

  __mouseWheel__(scene, m) {
    if (scene?.onMouseWheel) Id.resolve(scene.onMouseWheel)(m)
  },
}



const Stage = {
  setup(o) {
    if (Stage.__stage__) throw new Error(`[Stage.setup] stage is already configured.`)

    const configureWidth             = o?.w   ?? 0
    const configureHeight            = o?.h   ?? 0
    const configureFramesPerSecond   = o?.fps ?? 0
    const configureLogicalBackground = o?.lbg ?? o?.bg ?? "black"
    const configureVirtualBackground = o?.vbg ?? o?.bg ?? "white"
    const configureImageSmoothing    = o?.is
    const configureScaleIncrement    = o?.si

    let logicalCanvasElement;
    
    switch (typeof o?.c) {
      case "object"   : logicalCanvasElement =                         o.c ; break;
      case "string"   : logicalCanvasElement = document.getElementById(o.c); break;
      case "undefined": {
        logicalCanvasElement = document.createElement("canvas")
          logicalCanvasElement.style.position = "absolute"
          logicalCanvasElement.style.top      = "0px"
          logicalCanvasElement.style.left     = "0px"
          logicalCanvasElement.style.width    = "100dvw"
          logicalCanvasElement.style.height   = "100dvh"
        document.body.appendChild(logicalCanvasElement)
      }
    }

    const virtualCanvasElement = new OffscreenCanvas(
      configureWidth  || logicalCanvasElement.width,
      configureHeight || logicalCanvasElement.height
    )
    const logicalCanvasContext = logicalCanvasElement.getContext("2d")
    const virtualCanvasContext = virtualCanvasElement.getContext("2d")

    // image smoothing
    logicalCanvasContext.imageSmoothingEnabled = !!configureImageSmoothing
    virtualCanvasContext.imageSmoothingEnabled = !!configureImageSmoothing
    if (!!configureImageSmoothing) {
      logicalCanvasContext.imageSmoothingQuality = configureImageSmoothing
      virtualCanvasContext.imageSmoothingQuality = configureImageSmoothing
    }

    // scale increment
    let scale = Math.min(
      logicalCanvasElement.width  / virtualCanvasElement.width,
      logicalCanvasElement.height / virtualCanvasElement.height
    )
    if (configureScaleIncrement)
      scale = Math.max(configureScaleIncrement, Math.floor(scale / configureScaleIncrement) * configureScaleIncrement)

    const stage = {
      configureWidth            ,
      configureHeight           ,
      configureFramesPerSecond  ,
      configureLogicalBackground,
      configureVirtualBackground,
      configureImageSmoothing   ,
      configureScaleIncrement   ,

      logicalCanvasElement: Id.acquire(logicalCanvasElement),
      virtualCanvasElement: Id.acquire(virtualCanvasElement),
      logicalCanvasContext: Id.acquire(logicalCanvasContext),
      virtualCanvasContext: Id.acquire(virtualCanvasContext),
      scale,
    }

    new ResizeObserver(Stage.__resize__).observe(logicalCanvasElement)

    Event.on("stage:change", Stage.__onChange__)
    Event.on("stage:resize", Stage.__onResize__)

    window.onblur                      = () => Event.emit("native:blur")
    window.onkeyup                     = ke => Event.emit("native:keyup"    , ke)
    window.onkeydown                   = ke => Event.emit("native:keydown"  , ke)
    logicalCanvasElement.onmouseup     = me => Event.emit("native:mouseup"  , me)
    logicalCanvasElement.onmousedown   = me => Event.emit("native:mousedown", me)
    logicalCanvasElement.onmousemove   = me => Event.emit("native:mousemove", me)
    logicalCanvasElement.oncontextmenu = me => me.preventDefault()

    requestAnimationFrame(
      t0 => requestAnimationFrame(
        t1 => requestAnimationFrame(
          t2 => Stage.__animate__(t0, t1, t2))))

    return Stage.__stage__ = stage
  },

  logicalToVirtual([x, y]) {
    const [lw, lh] = Stage.getLogicalSize()
    const [vw, vh] = Stage.getVirtualSize()
    const scale    = Stage.__stage__.scale
    return Vector2.new(
      (x - lw / 2) / scale + vw / 2,
      (y - lh / 2) / scale + vh / 2
    )
  },

  virtualToLogical([x, y]) {
    const [lw, lh] = Stage.getLogicalSize()
    const [vw, vh] = Stage.getVirtualSize()
    const scale    = Stage.__stage__.scale
    return Vector2.new(
      (x - vw / 2) * scale + lw / 2,
      (y - vh / 2) * scale + lh / 2
    )
  },

  getLogicalSize() {
    const logicalCanvas = Id.resolve(Stage.__stage__.logicalCanvasElement)
    return Vector2.new(
      logicalCanvas.width, 
      logicalCanvas.height
    )
  },

  getVirtualSize() {
    const virtualCanvas = Id.resolve(Stage.__stage__.virtualCanvasElement)
    return Vector2.new(
      virtualCanvas.width, 
      virtualCanvas.height
    )
  },

  cue(scene) {
    Event.emit("stage:change", scene)
  },

  __resize__() {
    const logicalCanvas = Id.resolve(Stage.__stage__.logicalCanvasElement)
    Event.emit("stage:resize", Vector2.new(
      logicalCanvas.getBoundingClientRect().width,
      logicalCanvas.getBoundingClientRect().height
    ))
  },

  __update__(t, dt) {
    Event.poll()

    const [lw, lh] = Stage.getLogicalSize()
    const [vw, vh] = Stage.getVirtualSize()
    const scale    = Stage.__stage__.scale

    Scene.__update__(Stage.__stage__.scene, {
      lw, lh, vw, vh, t, dt, w: vw, h: vh, scale
    })
  },

  __render__(t, dt) {
    const h = Id.resolve(Stage.__stage__.logicalCanvasContext)
    const g = Id.resolve(Stage.__stage__.virtualCanvasContext)

    const [lw, lh] = Stage.getLogicalSize()
    const [vw, vh] = Stage.getVirtualSize()
    const scale    = Stage.__stage__.scale

    h.resetTransform()
    h.fillStyle = Stage.__stage__.configureLogicalBackground
    h.fillRect(0, 0, lw, lh)

    g.resetTransform()
    g.fillStyle = Stage.__stage__.configureVirtualBackground
    g.fillRect(0, 0, vw, vh)


    Scene.__render__(Stage.__stage__.scene, {
      lw, lh, vw, vh, t, dt, w: vw, h: vh, scale, g
    })

    h.translate(
      lw / 2 - vw / 2 * scale,
      lh / 2 - vh / 2 * scale
    )
    h.scale(scale, scale)
    h.drawImage(g.canvas, 0, 0)
  },

  __animate__(t0, t1, t2) {
    const t  = (t2 - t0) / 1000
    const dt = (t2 - t1) / 1000

    Stage.__update__(t, dt)
    Stage.__render__(t, dt)

    requestAnimationFrame(t3 => Stage.__animate__(t0, t2, t3))
  },

  __onChange__(scene) {
    Scene.__detach__(Stage.__stage__.scene)
    Stage.__stage__.scene = scene
    Scene.__attach__(Stage.__stage__.scene)
  },

  __onResize__([w,h]) {
    // release resources
    Id.release(Stage.__stage__.virtualCanvasElement)
    Id.release(Stage.__stage__.logicalCanvasContext)
    Id.release(Stage.__stage__.virtualCanvasContext)

    const logicalCanvasElement = Id.resolve(Stage.__stage__.logicalCanvasElement)
    logicalCanvasElement.width  = w
    logicalCanvasElement.height = h

    const virtualCanvasElement = new OffscreenCanvas(
      Stage.__stage__.configureWidth  || logicalCanvasElement.width,
      Stage.__stage__.configureHeight || logicalCanvasElement.height
    )

    const logicalCanvasContext = logicalCanvasElement.getContext("2d")
    const virtualCanvasContext = virtualCanvasElement.getContext("2d")

    // image smoothing
    logicalCanvasContext.imageSmoothingEnabled = !!Stage.__stage__.configureImageSmoothing
    virtualCanvasContext.imageSmoothingEnabled = !!Stage.__stage__.configureImageSmoothing
    if (!!Stage.__stage__.configureImageSmoothing) {
      logicalCanvasContext.imageSmoothingQuality = Stage.__stage__.configureImageSmoothing
      virtualCanvasContext.imageSmoothingQuality = Stage.__stage__.configureImageSmoothing
    }

    // scale increment
    let scale = Math.min(
      logicalCanvasElement.width  / virtualCanvasElement.width,
      logicalCanvasElement.height / virtualCanvasElement.height
    )
    if (Stage.__stage__.configureScaleIncrement)
      scale = Math.max(Stage.__stage__.configureScaleIncrement, Math.floor(scale / Stage.__stage__.configureScaleIncrement) * Stage.__stage__.configureScaleIncrement)

    // update instance
    Stage.__stage__.virtualCanvasElement = Id.acquire(virtualCanvasElement)
    Stage.__stage__.logicalCanvasContext = Id.acquire(logicalCanvasContext)
    Stage.__stage__.virtualCanvasContext = Id.acquire(virtualCanvasContext)
    Stage.__stage__.scale                = scale
  }
}

const Keyboard = {
  __keys__: { },

  isKeyUp  (k) {
    return  !Keyboard.__keys__[k]
  },

  isKeyDown(k) {
    return !!Keyboard.__keys__[k]
  },

  __keyUp__  (ke) {
    if (Keyboard.isKeyDown(ke.key)) {
      Keyboard.__keys__[ke.key] = false
      Event.emit("keyboard:keyup", ke.key, false)
    }
  },

  __keyDown__(ke) {
    if (Keyboard.isKeyUp(ke.key)) {
      Keyboard.__keys__[ke.key] = true
      Event.emit("keyboard:keydown", ke.key, false)
    } 
  },  

  __blur__() {
    Object.entries(Keyboard.__keys__).forEach(([key, isDown]) => {
      if (isDown) {
        Keyboard.__keys__[key] = false
        Event.emit("keyboard:keyup", key, false)
      }
    })
  }
}


Event.on("native:keyup"    , Keyboard.__keyUp__  )
Event.on("native:keydown"  , Keyboard.__keyDown__)
Event.on("keyboard:keyup"  , k  => Scene.__keyUp__  (Stage.__stage__.scene, k))
Event.on("keyboard:keydown", k  => Scene.__keyDown__(Stage.__stage__.scene, k))

const Mouse = {
  __buttons__: { },  
  __logical__: Vector2.new(),
  __virtual__: Vector2.new(),

  getLogicalMouse() {
    return Mouse.__logical__
  },

  getVirtualMouse() {
    return Mouse.__virtual__
  },

  isButtonUp  (b) {
    return  !Mouse.__buttons__[b]
  },

  isButtonDown(b) {
    return !!Mouse.__buttons__[b]
  },

  __mouseUp__  (me) {
    Mouse.__virtual__ = Stage.logicalToVirtual(Mouse.__logical__ = Vector2.new(
      me.offsetX, 
      me.offsetY
    ))

    if (Mouse.isButtonDown(me.button)) {
      Mouse.__buttons__[me.button] = false
      Event.emit("mouse:mouseup", me.button, false)
    }
  },

  __mouseDown__(me) {
    Mouse.__virtual__ = Stage.logicalToVirtual(Mouse.__logical__ = Vector2.new(
      me.offsetX, 
      me.offsetY
    ))

    if (Mouse.isButtonUp(me.button)) {
      Mouse.__buttons__[me.button] = true
      Event.emit("mouse:mousedown", me.button, false)
    }
  },

  __mouseMove__(me) {
    Mouse.__virtual__ = Stage.logicalToVirtual(Mouse.__logical__ = Vector2.new(
      me.offsetX, 
      me.offsetY
    ))

    Event.emit("mouse:mousemove", Mouse.__virtual__, false)
  },

  __blur__() {
    Object.entries(Mouse.__buttons__).forEach(([button, isDown]) => {
      if (isDown) {
        Mouse.__buttons__[button] = false
        Event.emit("mouse:mouseup", button, false)
      }
    })
  }
}

const Asset = {
  __cache__: { },

  new(is, where, id) {
    return { is, where, id }
  },

  Image(where, id) {
    return Asset.new("asset:image", where, id)
  },

  Audio(where, id) {
    return Asset.new("asset:audio", where, id)
  },

  Text(where, id) {
    return Asset.new("asset:text", where, id)
  },

  Blob(where, id) {
    return Asset.new("asset:blob", where, id)
  },

  Json(where, id) {
    return Asset.new("asset:json", where, id)
  },

  async loadImage(a) {
    return new Promise((res, rej) => {
      const image = new Image()
      image.onerror = () => rej(                       )
      image.onload  = () => res(Id.acquire(image, a.id))
      image.src = a.where
    })
  },

  async loadAudio(a) {
    return new Promise((res, rej) => {
      const audio = new Audio()
      audio.onerror = () => rej(                       )
      audio.onload  = () => res(Id.acquire(audio, a.id))
      audio.src = a.where
    })
  },

  async loadText(a) {
    return new Promise((res, rej) => {
      fetch(a.where).then(r => r.text()).then(t => res(Id.acquire(t, a.id)))
    })
  },

  async loadBlob(a) {
    return new Promise((res, rej) => {
      fetch(a.where).then(r => r.blob()).then(b => res(Id.acquire(b, a.id)))
    })
  },

  async loadJson(a) {
    return new Promise((res, rej) => {
      fetch(a.where).then(r => r.json()).then(j => res(Id.acquire(j, a.id)))
    })
  },

  load(a) {
    switch (a.is) {
      case "asset:image": return Asset.loadImage(a);
      case "asset:audio": return Asset.loadAudio(a);
      case "asset:text" : return Asset.loadText(a);
      case "asset:blob" : return Asset.loadBlob(a);
      case "asset:json" : return Asset.loadJson(a);
      default: throw new Error(`[Asset.load] unknown asset type '${a.is}'.`)
    }
  },

  loadAll(...a) {
    return Promise.all(a.map(Asset.load))
  }
}

const Atlas = {
  __cache__: new Map(),

  new(image, rows, cols) {
    return {
      image, rows, cols
    }
  },

  from(id, rows, cols) {
    return Atlas.new(Id.resolve(id), rows, cols)
  },

  draw({g}, a, i, {x, y, w, h, flip, flop, color}={}) {

    g.save()

    i ??= 0

    let row = Math.floor(i / a.cols)
    let col = Math.floor(i % a.cols)

    let sw = Math.floor(a.image.width  / a.cols)
    let sh = Math.floor(a.image.height / a.rows)
    let sx = col * sw
    let sy = row * sh

    let dw = w ?? sw
    let dh = h ?? sh
    let dx = x ?? 0
    let dy = y ?? 0

    g.translate(dx, dy)
    if (flip) { g.translate(dw, 0); g.scale(-1, 1) }
    if (flop) { g.translate(0, dh); g.scale(1, -1) }

    let image = a.image

    if (color) {
      const c = new OffscreenCanvas(a.image.width, a.image.height)
      const g = c.getContext("2d")

      g.drawImage(a.image, 0, 0)

      g.globalCompositeOperation = "source-in"
      g.fillStyle = color
      g.fillRect(0, 0, a.image.width, a.image.height)

      image = c
    }

    g.drawImage(
      image,
      sx, sy, sw, sh,
       0,  0, dw, dh
    )
    g.restore()
  },

  paint(a, p) {
    const canvas = new OffscreenCanvas(a.image.width, a.image.height)

    const context = canvas.getContext("2d")

    const data = context.getImageData(0, 0, a.image.width, a.image.height)
  }
}


Event.on("native:mouseup"  , Mouse.__mouseUp__  )
Event.on("native:mousedown", Mouse.__mouseDown__)
Event.on("native:mousemove", Mouse.__mouseMove__)
Event.on("mouse:mouseup"   , b  => Scene.__mouseUp__  (Stage.__stage__.scene, b))
Event.on("mouse:mousedown" , b  => Scene.__mouseDown__(Stage.__stage__.scene, b))
Event.on("mouse:mousemove" , v  => Scene.__mouseMove__(Stage.__stage__.scene, v))

Event.on("native:blur", () => {
  Keyboard.__blur__()
  Mouse   .__blur__()
})

const hg = {
  Version,
  VERSION,

  Vector ,
  Vector2,
  Vector3,
  Vector4,

  Id,
  Event,
  Scene,
  Stage,

  Keyboard,
  Mouse   ,

  Asset,
  Atlas,

  // alias

  vec2: Vector2.new,
  vec3: Vector3.new,
  vec4: Vector4.new,
  id  : Id.acquire,
  on  : Event.on  ,
  off : Event.off ,
  emit: Event.emit,
  once: Event.once,

  setup: Stage.setup,
  cue  : Stage.cue  ,

  loadImage: Asset.loadImage,
  loadAudio: Asset.loadAudio,
  loadText : Asset.loadText ,
  loadBlob : Asset.loadBlob ,
  loadJson : Asset.loadJson ,
  load     : Asset.load     ,
  loadAll  : Asset.loadAll  ,

  image: Asset.Image,
  audio: Asset.Audio,
  text : Asset.Text ,
  blob : Asset.Blob ,
  json : Asset.Json ,

}