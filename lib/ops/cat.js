/**
 * @file Top-level string/list concatenation dispatcher.
 * Load after lib/str/cat.js and lib/list/cat.js; no legacy children are attached to hg.cat.
 */

/**
 * Registers the top-level concatenation operation.
 * @private
 * @param {hgNamespace} hg - Shared library namespace.
 * @returns {void} Attaches hg.cat.
 */
(function(hg) {
  const { __str__, __list__, type, str, list } = hg.__core__;

/**
 * Concatenates two strings or two lists in operand order.
 * String/list mixtures and other operand types are rejected without coercion.
 * List results are fresh shallow concatenations; neither input is mutated.
 * @function cat
 * @memberof hg
 * @static
 * @param {string|hgList} a - Left operand.
 * @param {string|hgList} b - Right operand of the same type.
 * @returns {string|hgList} Concatenated string or fresh list.
 * @throws {Error} If arity or operand types are unsupported.
 * @example
 * hg.cat('a', 'b'); // 'ab'
 * @example
 * hg.cat([1, 2], [3]); // [1, 2, 3]
 */
function cat(a, b) {
  if (arguments.length !== 2) throw new Error(`[cat] Expected 2 arguments, received ${arguments.length} instead`);
  const ta = type(a)
  const tb = type(b)
  switch(ta) {
    case __str__ : if (tb === __str__) return str.cat.__ss__(a, b); break;
    case __list__: if (tb === __list__) return list.cat.__ll__(a, b); break;
  }
  throw new Error(`[cat] Expected two strings or two lists`);
}

  hg.cat = cat;
})(globalThis.hg);
