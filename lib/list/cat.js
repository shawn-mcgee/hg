/**
 * @file Shallow list concatenation and its trusted list/list specialization.
 * Load after hg.js and lib/types.js. Registers hg.list.cat.
 */

/**
 * Registers list concatenation on the list constructor namespace.
 * @private
 * @param {hgNamespace} hg - Shared library namespace.
 * @returns {void} Attaches list.cat.
 */
(function(hg) {
  const { __list__, type, list } = hg.__core__;

/**
 * Concatenates two lists into a fresh list without mutating either operand.
 * Uses Array.concat semantics: nested lists and objects retain their identities,
 * and sparse slots remain sparse. No recursive flattening or element cloning occurs.
 * @function cat
 * @memberof hg.list
 * @static
 * @param {hgList} a - Left list.
 * @param {hgList} b - Right list.
 * @returns {hgList} Fresh list containing a's elements followed by b's elements.
 * @throws {Error} If exactly two list operands are not supplied.
 * @example
 * hg.list.cat([1, 2], [3, [4]]); // [1, 2, 3, [4]]
 */
function cat(a, b) {
  if (arguments.length !== 2) throw new Error(`[list.cat] Expected 2 arguments, received ${arguments.length} instead`);
  if (type(a) === __list__ && type(b) === __list__) return cat.__ll__(a, b);
  throw new Error(`[list.cat] Expected two lists`);
}

/**
 * Concatenates trusted lists without operand checks, flattening, or conversion.
 * @function __ll__
 * @memberof hg.list.cat
 * @static
 * @param {hgList} a - Left list.
 * @param {hgList} b - Right list.
 * @returns {hgList} Fresh shallow concatenation, preserving nested references and sparse slots.
 */
cat.__ll__ = function(a, b) {
  return a.concat(b)
}

  list.cat = cat;
})(globalThis.hg);
