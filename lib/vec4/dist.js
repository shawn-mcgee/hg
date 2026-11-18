/**
 * @file vec4.dist: Computes Euclidean distance using Math.hypot.
 * Loads after hg.js and lib/types.js; the namespace fixes computation dimension.
 */
/**
 * Registers the typed operation without exposing implementation names.
 * @private
 * @param {hgNamespace} hg - Shared namespace.
 * @returns {void} Adds one operation to the constructor namespace.
 */
(function(hg) {
  const { __num__, __vec2__, __vec3__, __vec4__, __mat2__, __mat3__, __mat4__, type, num, vec2, vec3, vec4, mat2, mat3, mat4 } = hg.__core__;

/**
 * Computes Euclidean distance using Math.hypot.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 *
 * @function dist
 * @memberof hg.vec4
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @param {number|hgVector} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function dist(a, b) {
  if (arguments.length < 2 || arguments.length > 2) throw new Error(`[vec4.dist] Expected 2 to 2 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return dist.__nn__(a, b)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return dist.__nv__(a, b)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return dist.__vn__(a, b)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return dist.__vv__(a, b)
      } break;
  }
  throw new Error(`[vec4.dist] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes Euclidean distance using Math.hypot.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __nn__
 * @memberof hg.vec4.dist
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dist.__nn__ = function(a, b) {
  const ax = a
  const ay = a
  const az = a
  const aw = a
  const bx = b
  const by = b
  const bz = b
  const bw = b
  const dx = ax - bx
  const dy = ay - by
  const dz = az - bz
  const dw = aw - bw
  return Math.hypot(dx, dy, dz, dw)
}

/**
 * Computes Euclidean distance using Math.hypot.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __nv__
 * @memberof hg.vec4.dist
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dist.__nv__ = function(a, b) {
  const ax = a
  const ay = a
  const az = a
  const aw = a
  const bx = b.x
  const by = b.y
  const bz = (b.z ?? 0)
  const bw = (b.w ?? 0)
  const dx = ax - bx
  const dy = ay - by
  const dz = az - bz
  const dw = aw - bw
  return Math.hypot(dx, dy, dz, dw)
}

/**
 * Computes Euclidean distance using Math.hypot.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __vn__
 * @memberof hg.vec4.dist
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dist.__vn__ = function(a, b) {
  const ax = a.x
  const ay = a.y
  const az = (a.z ?? 0)
  const aw = (a.w ?? 0)
  const bx = b
  const by = b
  const bz = b
  const bw = b
  const dx = ax - bx
  const dy = ay - by
  const dz = az - bz
  const dw = aw - bw
  return Math.hypot(dx, dy, dz, dw)
}

/**
 * Computes Euclidean distance using Math.hypot.
 * Computes in 4 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __vv__
 * @memberof hg.vec4.dist
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dist.__vv__ = function(a, b) {
  const ax = a.x
  const ay = a.y
  const az = (a.z ?? 0)
  const aw = (a.w ?? 0)
  const bx = b.x
  const by = b.y
  const bz = (b.z ?? 0)
  const bw = (b.w ?? 0)
  const dx = ax - bx
  const dy = ay - by
  const dz = az - bz
  const dw = aw - bw
  return Math.hypot(dx, dy, dz, dw)
}

  vec4.dist = dist;
})(globalThis.hg);
