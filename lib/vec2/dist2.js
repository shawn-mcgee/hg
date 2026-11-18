/**
 * @file vec2.dist2: Computes squared Euclidean distance.
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
 * Computes squared Euclidean distance.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 *
 * @function dist2
 * @memberof hg.vec2
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @param {number|hgVector} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function dist2(a, b) {
  if (arguments.length < 2 || arguments.length > 2) throw new Error(`[vec2.dist2] Expected 2 to 2 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return dist2.__nn__(a, b)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return dist2.__nv__(a, b)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return dist2.__vn__(a, b)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return dist2.__vv__(a, b)
      } break;
  }
  throw new Error(`[vec2.dist2] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes squared Euclidean distance.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __nn__
 * @memberof hg.vec2.dist2
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dist2.__nn__ = function(a, b) {
  const ax = a
  const ay = a
  const bx = b
  const by = b
  const dx = ax - bx
  const dy = ay - by
  return dx * dx + dy * dy
}

/**
 * Computes squared Euclidean distance.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __nv__
 * @memberof hg.vec2.dist2
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dist2.__nv__ = function(a, b) {
  const ax = a
  const ay = a
  const bx = b.x
  const by = b.y
  const dx = ax - bx
  const dy = ay - by
  return dx * dx + dy * dy
}

/**
 * Computes squared Euclidean distance.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __vn__
 * @memberof hg.vec2.dist2
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dist2.__vn__ = function(a, b) {
  const ax = a.x
  const ay = a.y
  const bx = b
  const by = b
  const dx = ax - bx
  const dy = ay - by
  return dx * dx + dy * dy
}

/**
 * Computes squared Euclidean distance.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 *
 * @function __vv__
 * @memberof hg.vec2.dist2
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dist2.__vv__ = function(a, b) {
  const ax = a.x
  const ay = a.y
  const bx = b.x
  const by = b.y
  const dx = ax - bx
  const dy = ay - by
  return dx * dx + dy * dy
}

  vec2.dist2 = dist2;
})(globalThis.hg);
