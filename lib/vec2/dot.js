/**
 * @file vec2.dot: Computes a scalar dot product in the namespace dimension.
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
 * Computes a scalar dot product in the namespace dimension.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * The public one-argument form computes the self dot product.
 *
 * @function dot
 * @memberof hg.vec2
 * @static
 * @param {number|hgVector} a - Operand projected into the namespace dimension.
 * @param {number|hgVector} [b=a] - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 * @throws {Error} If arity, operands, dimensions, or factor are unsupported.
 */
function dot(a, b = a) {
  if (arguments.length < 1 || arguments.length > 2) throw new Error(`[vec2.dot] Expected 1 to 2 arguments`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __num__:
      switch(tb) {
        case __num__:
          return dot.__nn__(a, b)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return dot.__nv__(a, b)
      } break;
    case __vec2__:
    case __vec3__:
    case __vec4__:
      switch(tb) {
        case __num__:
          return dot.__vn__(a, b)
        case __vec2__:
        case __vec3__:
        case __vec4__:
          return dot.__vv__(a, b)
      } break;
  }
  throw new Error(`[vec2.dot] Unsupported operand types or matrix dimensions`);
}

/**
 * Computes a scalar dot product in the namespace dimension.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The public one-argument form computes the self dot product.
 *
 * @function __nn__
 * @memberof hg.vec2.dot
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dot.__nn__ = function(a, b) {
  const ax = a
  const ay = a
  const bx = b
  const by = b
  return ax * bx + ay * by
}

/**
 * Computes a scalar dot product in the namespace dimension.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The public one-argument form computes the self dot product.
 *
 * @function __nv__
 * @memberof hg.vec2.dot
 * @static
 * @param {number} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dot.__nv__ = function(a, b) {
  const ax = a
  const ay = a
  const bx = b.x
  const by = b.y
  return ax * bx + ay * by
}

/**
 * Computes a scalar dot product in the namespace dimension.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The public one-argument form computes the self dot product.
 *
 * @function __vn__
 * @memberof hg.vec2.dot
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {number} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dot.__vn__ = function(a, b) {
  const ax = a.x
  const ay = a.y
  const bx = b
  const by = b
  return ax * bx + ay * by
}

/**
 * Computes a scalar dot product in the namespace dimension.
 * Computes in 2 dimensions: numbers splat; vectors of any dimension are padded with zero or truncated.
 * Trusted operand-category specialization; skips arity and operand-type validation.
 * The public one-argument form computes the self dot product.
 *
 * @function __vv__
 * @memberof hg.vec2.dot
 * @static
 * @param {hgVector} a - Operand projected into the namespace dimension.
 * @param {hgVector} b - Operand projected into the namespace dimension.
 * @returns {number} Computed scalar.
 */
dot.__vv__ = function(a, b) {
  const ax = a.x
  const ay = a.y
  const bx = b.x
  const by = b.y
  return ax * bx + ay * by
}

  vec2.dot = dot;
})(globalThis.hg);
