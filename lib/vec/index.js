/**
 * @file Unified dimension-independent vector accessor namespace.
 * Load after hg.js and lib/types.js, before the shared swizzle groups.
 */

/**
 * Accessors for any vector dimension. Missing or nullish components read as zero.
 * Swizzles of length two through four return matching vectors and accept optional outputs.
 * @namespace hg.vec
 */
globalThis.hg.vec = {};
