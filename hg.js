/**
 * @file Browser namespace bootstrap. Load once before lib/types.js and component scripts.
 * Re-executing this source resets globalThis.hg. Consumers normally load dist/hg.js instead.
 */




// Load this namespace first, followed by lib/types.js and the desired components.
/**
 * Public browser namespace. Load once before types and operations.
 * @namespace hg
 */
globalThis.hg = {};
