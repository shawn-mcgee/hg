# HG

Browser-first numeric, vector, matrix, string, and list operations. Operations belong to the
constructor namespace that selects their computation dimension. A standalone
browser bundle is included; consumers need no module system or build tools.

## Browser

```html
<script src="dist/hg.js"></script>
<script>
  const { num, vec2, vec3, mat4 } = hg;
  const out = vec2();

  num.add(2, 3);                           // 5
  vec2.add(2, 3, out);                     // <5, 5>, reuses out
  vec2.dot(2, 3);                          // 12
  vec3.dot(2, 3);                          // 18
  vec2.add(hg.vec4(1, 2, 3, 4), 10);       // <11, 12>
  vec3.add(vec2(1, 2), 10);                 // <11, 12, 10>
  vec3.xform(mat4(1), vec3(2, 3, 4));       // <2, 3, 4>
</script>
```

`dist/hg.js` loads the complete API into `window.hg` without fetching additional
scripts. `index.html` demonstrates this single-script setup.

## Dimension rules

Vector namespaces `vec2`, `vec3`, and `vec4` accept scalars and any vector dimension:

- Numbers splat across the namespace dimension.
- Shorter vectors pad with zero; longer vectors truncate.
- Vector-valued arithmetic returns the namespace's vector type.
- Reductions such as `vec2.dot`, `vec2.mag`, and `vec2.dist` return numbers computed
  in that namespace's dimension.
- `dot(a)` means `dot(a, a)`.
- `vec2.hom` returns a `vec3`, and `vec3.hom` returns a `vec4`.
- Swizzles and component accessors live on the dimension-independent `vec` namespace.

Matrix namespaces `mat2`, `mat3`, and `mat4` accept matching-size matrices and
scalar/matrix combinations. Scalar pairs use `num`; matrix operations do not
implicitly resize matrices. Existing scalar broadcast and scaling semantics are
preserved. Vector-valued matrix products belong to a vector namespace.

## Operations and dispatched children

`vec2.add(a, b, out)` dispatches by operand category, independent of vector size:

```js
vec2.add.__nn__(2, 3);             // number + number -> vec2
vec2.add.__nv__(2, hg.vec4(3));    // number + vector -> vec2
vec2.add.__vn__(hg.vec3(2), 3);    // vector + number -> vec2
vec2.add.__vv__(hg.vec3(2), hg.vec4(3));
```

Here `n` means number and `v` means any vector. Trusted children skip operand and
arity checks. Vector unary methods have `__n__` and `__v__` children. Matrix
methods use `m` for a matching-size matrix, such as `mat3.mul.__mm__`.
Homogeneous transform children use `mh` for a matrix one dimension larger, such
as `vec2.xform.__mhv__` and `vec2.xform.__vmh__`.

| Namespace operations | Behavior |
| --- | --- |
| `num.add/sub/mul/div/mod` | Ordinary scalar arithmetic. |
| `vecN.add/sub/hmul/hdiv/mod/lerp` | Fixed-dimension component arithmetic, with scalar splatting. |
| `vecN.dot/mag/mag2/dist/dist2` | Scalar reductions in the namespace dimension. |
| `vecN.norm/neg/inv` | Normalize, negate, or take component reciprocals. Zero normalizes to zero. |
| `vec3.cross` | Right-handed cross product after projecting both operands to three dimensions. |
| `vec2.hom`, `vec3.hom` | Append a homogeneous coordinate of one. |
| `vecN.mul` | Scale vectors or multiply projected row/column vectors and matching matrices. |
| `vecN.xform` | Also accepts a matrix one dimension larger: append 1, multiply, and truncate. |
| `vecN.div` | Divide by a number or right-multiply a projected vector by a matrix inverse. |
| `matN.add/sub/hmul/hdiv/mod/lerp` | Matching-size component arithmetic or scalar/matrix combinations. |
| `matN.mul/div/xform` | Matrix multiplication, right-inverse division, or scalar scaling. |
| `matN.det/trans/inv/neg` | Determinant, transpose, algebraic inverse, and negation. |

Vector-vector products use `hmul` for Hadamard multiplication or `dot` for a scalar
result. `mul` does not silently replace those operations. `lerp` accepts an
unclamped numeric factor. Matrix division follows `a * inverse(b)`; singular
inverses throw before output writes. `xform` truncates without perspective division.

## Modulo

`mod` is component-wise modulo whose nonzero result has the divisor's sign:

```js
hg.num.mod(-1, 5);                     // 4
hg.num.mod(1, -5);                     // -4
hg.vec2.mod(hg.vec2(-1, 7), 5);         // <4, 2>
hg.mod(hg.vec2(-1, 7), 5, out);         // same result, reuses out
```

This differs from JavaScript `%` for operands with opposite signs. Zero divisors
or non-finite operands produce `NaN`; exact multiples return positive zero.
Vector namespaces apply scalar splatting and dimension projection, while matrix
namespaces apply modulo to each entry of matching-size matrices or scalar/matrix
pairs. Optional outputs and trusted children use the same conventions as other
component arithmetic. The scalar kernel uses remainder plus sign correction to
avoid overflowing an intermediate quotient.

## Concatenation

`cat(a, b)` joins two strings or shallowly concatenates two lists in operand order:

```js
hg.str.cat('hello', ' world');          // 'hello world'
hg.list.cat([1, 2], [3, [4]]);          // [1, 2, 3, [4]]
hg.cat('a', 'b');                      // 'ab'
hg.cat([1], [2]);                      // [1, 2]
```

List results are fresh arrays; inputs are unchanged, sparse slots are preserved,
and nested arrays/objects retain their identities. There is no recursive
flattening or implicit conversion. Public calls require exactly two strings or
two lists; mixed string/list operands are rejected. Trusted children are
`str.cat.__ss__` and `list.cat.__ll__`. Top-level `cat` dispatches directly to them
and has no children of its own.

## Unified vector accessors

Swizzles live only on `hg.vec`, not on `vec2`, `vec3`, or `vec4`:

```js
const { vec, vec2, vec3, vec4 } = hg;
vec.x(vec2(2, 3));                  // 2
vec.z(vec2(2, 3));                  // 0
vec.w(vec3(2, 3, 5));               // 0
vec.xyzw(vec2(2, 3));               // <2, 3, 0, 0>
vec.xx(vec3(2, 3, 5));              // <2, 2>
vec.zw(vec2(2, 3));                 // <0, 0>
vec.xx(3);                         // <3, 3> (scalar splat)
const out = vec4();
vec.wzyx(vec2(2, 3), out);          // <0, 0, 3, 2>, returns out
const point = vec2(2, 3);
vec.yx(point, point);              // safe in-place reorder -> <3, 2>
```

All 340 `xyzw` selections of length one through four are available. Missing or
nullish members default to zero; present values such as `NaN` are retained.
Single-component accessors return a number. Longer swizzles return a `vec2`,
`vec3`, or `vec4` according to selection length, with an optional matching output.
The shared implementations expose trusted `__n__` and `__v__` children.

## Output reuse

Vector/matrix results accept an optional final output object of the exact result
shape. Existing components are captured before writes, allowing compatible
in-place use. Matrix destinations keep their independent column objects.

```js
hg.vec3.add(a, b, a);
hg.mat4.inv(matrix, matrix);
hg.vec.yx(point, point);
```

`__new__` constructors always create a fresh value from exact trusted components;
they never accept output objects. Matrix `__new__` retains supplied column vectors.
Scalar reductions do not accept output arguments.

## Top-level operations API

The existing `hg.add`, `hg.mul`, `hg.dot`, and other top-level functions remain
available. They are thin dispatchers into the typed implementations, preserving
their original dimensional promotion and supported operand combinations.
Top-level `hg.dot` still requires vectors; `hg.vec2.dot` additionally accepts numbers.
Top-level swizzles match `hg.vec` exactly: all vector dimensions are accepted,
missing components default to zero, and numbers splat.
Top-level functions have no dispatched children: `hg.add.__v2v2__` does not exist.
Instead, `hg.add(a, b)` directly selects a typed child such as
`hg.vec2.add.__vv__(a, b)`. Trusted calls always use a type namespace.

## Development

Edit the type-owned source files, then run `npm run build` to regenerate
`dist/hg.js`. The dependency-free builder uses the ordered paths in
`scripts/files.json`. `npm test` rebuilds and runs both compatibility and typed
API tests.

For source debugging, load `hg.js`, `lib/types.js`, then only the typed operation
files needed. Compatibility dispatchers require the typed methods they reference
and are loaded last in the full bundle. Do not edit the generated bundle directly.

## Documentation and files

Every source function has JSDoc with lowercase `hg` typedef names. Shared vector,
matrix, and operand typedefs remain in `lib/types.js`. `jsconfig.json` groups the
source files into one editor project and excludes the generated bundle to avoid
duplicate typedefs.

- `hg.js`: browser namespace initialization.
- `lib/types.js`: representations, constructors, predicates, conversions, and shared typedefs.
- `lib/num/`: scalar operations.
- `lib/str/`, `lib/list/`: string and list concatenation.
- `lib/vec2/`, `lib/vec3/`, `lib/vec4/`: dimension-owned arithmetic operations.
- `lib/vec/index.js`, `lib/vec/swizzles/`: shared component accessors and swizzles.
- `lib/mat2/`, `lib/mat3/`, `lib/mat4/`: matching-size matrix operations.
- `lib/ops/`: backward-compatible top-level dispatchers and swizzles.
- `dist/hg.js`: complete standalone browser bundle.
- `scripts/build.cjs`, `scripts/files.json`: build tool and ordered source manifest.
- `hg.test.cjs`: compatibility, arithmetic, aliasing, and loading checks.
- `hg.typed.test.cjs`: dimension projection, typed dispatch, and allocation checks.

Run `npm test` to build and test, or
`node --test hg.test.cjs hg.typed.test.cjs` to test the existing bundle.
