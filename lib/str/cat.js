/**
 * @file String concatenation and its trusted string/string specialization.
 * Load after hg.js and lib/types.js. Registers hg.str.cat.
 */

/**
 * Registers string concatenation on the string constructor namespace.
 * @private
 * @param {hgNamespace} hg - Shared library namespace.
 * @returns {void} Attaches str.cat.
 */
(function(hg) {
  const { __str__, type, str } = hg.__core__;

/**
 * Joins two strings in operand order without inserting a separator or coercing inputs.
 * @function cat
 * @memberof hg.str
 * @static
 * @param {string} a - Left string.
 * @param {string} b - Right string.
 * @returns {string} Concatenated string.
 * @throws {Error} If exactly two string operands are not supplied.
 * @example
 * hg.str.cat('hello', ' world'); // 'hello world'
 */
function cat(a, b) {
  if (arguments.length !== 2) throw new Error(`[str.cat] Expected 2 arguments, received ${arguments.length} instead`);
  if (type(a) === __str__ && type(b) === __str__) return cat.__ss__(a, b);
  throw new Error(`[str.cat] Expected two strings`);
}

/**
 * Joins trusted strings without operand or argument-count checks.
 * @function __ss__
 * @memberof hg.str.cat
 * @static
 * @param {string} a - Left string.
 * @param {string} b - Right string.
 * @returns {string} Concatenated string.
 */
cat.__ss__ = function(a, b) {
  return a + b
}

  str.cat = cat;
})(globalThis.hg);
