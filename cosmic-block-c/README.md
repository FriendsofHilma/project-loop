# Cosmic Block in C — a cube of integers on the hard drive

A C11 implementation of Levels 1–5 of the Cosmic Block in which the cells are
not an in-memory array that gets saved at the end. The file **is** the cube: it
is mapped into the address space, and every read or write is a dereference of a
pointer at a computed file offset.

```
$ ./build/cosmic create demo/block.cube
created       demo/block.cube
geometry      13 x 13 x 13, 5 space(s), 2 collection(s)
cells/space   2197
cells total   21970
payload offset 4096
file bytes    28672

$ ./build/cosmic set demo/block.cube 0 0 6 7 8 9
ho=0 space=0 z=6 y=7 x=8 := 9 at file offset 5209 (0x1459)

$ ./build/cosmic peek demo/block.cube 5200 16
offset 5200 (0x1450), 16 bytes:
  00001450  00 00 00 00 00 00 00 00 00 09 00 00 00 00 00 00
                                            ^^ byte 5209, the cell
```

That byte was read from the filesystem after the mapping was closed. No export
step, no serialisation, no `fwrite` of a struct: the integer is at offset 5209.

---

## Build

Needs a C11 compiler and `make`. On Windows, [w64devkit](https://github.com/skeeto/w64devkit)
is a single self-contained download:

```bash
# add w64devkit\bin to PATH, then
cd cosmic-block-c
make          # build/cosmic.exe
make test     # build and run 87 checks
make demo     # create and fill demo/block.cube
```

On Linux or macOS the same three commands work with the system `cc`; the file
layer compiles against `mmap` instead of `MapViewOfFile`.

The build is clean under `-Wall -Wextra -Wpedantic -Wshadow -Wconversion
-Wstrict-prototypes -Wmissing-prototypes`.

## Building with Zonix

`znx`, the compiler from [Zonix](https://codeberg.org/nordlow/zonix), also
builds this project. GCC remains the supported path — `make` above is the real
build — but a second compiler is a useful check: if the offset formula were
wrong, two independent code generators would be unlikely to agree about where
cell `(0,0,6,7,8)` lives.

Status, 2026-11-19: **all five translation units compile, both binaries link,
the CLI behaves, and `test_cosmic.exe` passes 87/87 checks.**

```
$ znx -v
znx version 0.9.28rc 2026-11-18 dev@e266a07* (x86_64 Windows)
```

Nothing in `src/` or `tests/` was changed for this, and no warning was
suppressed. The source is plain C11 and the compiler is the only variable.

### Getting a working znx on Windows

There is no prebuilt znx for Windows at this commit — no tags, no release
assets — so it has to be built from source with GCC (w64devkit). That needed
five local patches to the compiler's own sources. They are scratch work on a
clone, **not** upstream fixes and not part of this repository:

1. `znx.c` — `const char * const p` → `const char *p`.
2. `znx.c` — add the missing `znx_tool_impdef` prototype under
   `#ifdef ZNX_TARGET_PE`.
3. `znxgen-d.c` — `static void pe_check_linkage` → `ST_FUNC`, with a prototype
   added in `znxgen-decl.c` (those are separate translation units here).
4. `x86_64-gen.c` — `gen_modrm_impl(..., int const r)` → `int r`; the PE TLS
   branch assigns to `r`.
5. `znxtools.c` — `quote_win32(const char * const s)` → `const char *s`; and
   stub out `znxrepl.c` on Windows, whose REPL needs `termios`, `sigaction`,
   `sigjmp_buf` and `SIGBUS`.

Two build settings decide whether it works at all:

- **`-mno-ms-bitfields`.** MinGW defaults to MSVC bitfield packing, which breaks
  the compiler's own layout asserts: `sizeof(CType)` comes out 24 instead of 16,
  `sizeof(Sym)` 88 instead of 80, `sizeof(SVal)` 64 instead of 48.
  `-mno-ms-bitfields` restores the layout those asserts were written against.
  The asserts are correct; do not relax them.
- **`-O0` when building znx itself with gcc-16.** An `-O2` build of `znx.exe`
  crashes on the first `switch` inside `sym_pop`; `-O0` (or
  `-fno-strict-aliasing`) avoids it. This affects the compiler, not this
  project: znx compiles the cube fine at `-O2`.

Build target `znx.exe libznx.dll`; plain `make` additionally wants `tdc.bat`,
which the PE build does not produce. znx also fails on its own runtime library
(`libznx1.c:489: 'r' undeclared`, `stdatomic.c:72: 'atom' undeclared`), so the
link below uses a `win32/lib/libznx1.a` containing only `crt1.o` — enough for
`_start`, which is all a program that calls `kernel32` needs.

### Compiling and linking this project

With `znx.exe` built, `$Z` pointing at its tree and `$B="$Z/win32"`:

```bash
for f in status arena cube cosmic main; do
  "$Z/znx.exe" "-B$B" "-I$Z/include" "-I$Z" -Isrc -O2 \
    -c "src/$f.c" -o "build-znx/$f.o"
done

"$Z/znx.exe" "-B$B" "-I$Z/include" "-I$Z" -O2 -o build-znx/cosmic.exe \
  build-znx/status.o build-znx/arena.o build-znx/cube.o \
  build-znx/cosmic.o build-znx/main.o \
  "C:/WINDOWS/System32/kernel32.dll"
```

The same two steps with `tests/test_cosmic.c` produce
`build-znx/test_cosmic.exe`. Passing `kernel32.dll` explicitly replaces znx's
`win32/lib/kernel32.def`, which predates `GetFileSizeEx`; without it the link
stops at `unresolved reference to 'GetFileSizeEx'`.

Results, taken from the znx-built binaries:

```
$ ./build-znx/cosmic.exe create build-znx/znx-block.cube
file bytes    28672
$ ./build-znx/cosmic.exe set build-znx/znx-block.cube 0 0 6 7 8 9
ho=0 space=0 z=6 y=7 x=8 := 9 at file offset 5209 (0x1459)
$ ./build-znx/cosmic.exe peek build-znx/znx-block.cube 5209 1
  00001459  09
$ ./build-znx/test_cosmic.exe
87/87 checks passed
```

`cosmic.exe` comes out at 26624 bytes (GCC's is 113086 — different start-up code
and section padding, not different behaviour): same byte at 5209, same 87 checks
green. `build-znx/` is gitignored.

## The layout

```
file offset   contents
0             header, 256 bytes  (magic, version, dimensions, checksum)
4096          payload
                model space (ho=0, space=0)   planes x rows x cols bytes
                model space (ho=0, space=1)
                ...
                model space (ho=1, space=4)
28672         end of file, rounded up to a 4096 boundary
```

One byte per cell, because the value alphabet is 0–9 and a `uint8_t` holds it
exactly. A model space is therefore `13 * 13 * 13 = 2197` bytes, the default
payload is `2 * 5 * 2197 = 21970` bytes, and the file is 28672 bytes — 28 KB
for the whole structure on disk, with the first cell on a page boundary.

The offset of a cell is

```
offset(ho, space, z, y, x) = 4096
                           + (ho * spaces + space) * planes * rows * cols
                           + (z * rows + y) * cols
                           + x
```

Row-major inside a model space, model spaces in collection-major order. This is
the isometry that unrolls the cube onto a one-dimensional address space: a step
of +1 in x is +1 byte, a step in y is +13 bytes, a step in z is +169 bytes. All
three axes therefore stay contiguous, which is the property that makes the
layout worth calling a cube rather than a list.

## The pointers

There is no `int cube[13][13][13]` anywhere. A model space is a pointer and
three integers:

```c
typedef struct {
  uint8_t *cells;     /* first cell, inside the mapping */
  cb_geometry geometry;
} cb_cube;

static inline uint8_t *at(cb_cube *c, uint32_t z, uint32_t y, uint32_t x) {
  return c->cells + ((size_t)z * c->geometry.rows + y) * c->geometry.cols + x;
}
```

The three levels are then pointer views of the same run of bytes:

| Level | Accessor | Result |
| --- | --- | --- |
| 1 | `cb_cube_line(cube, z, y)` | `cols` contiguous cells |
| 2 | `cb_cube_plane(cube, z)` | `rows * cols` contiguous cells |
| 3 | `cb_cube_cell(cube, z, y, x)` | one cell |
| 4 | `cb_cosmic_cube(b, ho, space)` | one 2197-byte region per model space |
| 5 | the file itself | `ho_count * spaces` model spaces |

Adjacency is pointer arithmetic, not re-indexing:

```c
uint8_t *cb_cube_neighbour(cb_cube *cube, uint32_t z, uint32_t y, uint32_t x,
                           int dz, int dy, int dx)
{
  ptrdiff_t delta = (ptrdiff_t)dz * rows * cols
                  + (ptrdiff_t)dy * cols
                  + (ptrdiff_t)dx;
  return cb_cube_cell(cube, z, y, x) + delta;   /* NULL if it leaves the cube */
}
```

`east - origin == 1`, `south - origin == 13`, `up - origin == 169`. The tests
assert those differences, so a change to the layout cannot silently pass.

## Why the file is mapped rather than read

`mmap` (POSIX) or `CreateFileMapping` + `MapViewOfFile` (Win32) gives a pointer
to the file's own pages. Three consequences that matter here:

1. **The model and the storage are the same object.** There is no copy that can
   drift, and no code path in which the cube exists only in RAM.
2. **The cube can be larger than RAM.** Level 5 on a bigger geometry is still
   only a pointer plus a page fault when you touch a plane.
3. **Other tools can see the data.** `peek`, `hexdump`, `od`, a hex editor, or
   PowerShell's `ReadAllBytes` all read the same bytes at the same offsets.

Durability is explicit: `cb_cosmic_sync` calls `FlushViewOfFile` + `FlushFileBuffers`
(or `msync(MS_SYNC)`), and the CLI calls it after every `set`, `fill`, `zero` and
`complement`. Dropping the file on the floor without syncing would still be
correct on process exit, because the mapping is shared, but relying on that is
how people lose data.

## Integrity

The header carries a magic string, a version, a byte-order marker
(`0x01020304`), the dimensions, the payload offset and length, and an FNV-1a
checksum over the header with the checksum field zeroed. Opening a file checks
all of them and also checks that the payload fits inside the file. A truncated,
truncated-by-OneDrive, foreign or hand-edited file is refused with
`CB_ERR_CORRUPT` instead of being interpreted as a cube.

`cosmic verify` rechecks the header, the file length, and every cell against
0–9. Values are validated on write (`cb_cube_set` refuses 10 and leaves the cell
untouched) and on verify.

## CLI

```
cosmic create   <file> [--planes N] [--rows N] [--cols N] [--spaces N] [--ho N]
cosmic info     <file>
cosmic get      <file> <ho> <space> <z> <y> <x>
cosmic set      <file> <ho> <space> <z> <y> <x> <value>
cosmic offset   <file> <ho> <space> <z> <y> <x>      # print the byte offset
cosmic slice    <file> <ho> <space> <z>              # print a plane
cosmic row      <file> <ho> <space> <z> <y>          # print a line
cosmic fill     <file> [seed]                        # deterministic pattern
cosmic zero     <file>
cosmic complement <file>                             # n -> 9 - n
cosmic stats    <file>                               # histogram, sum, min/max
cosmic verify   <file>
cosmic peek     <file> <offset> [count]              # raw bytes, plain stdio
```

A plane, after `fill`:

```
$ ./build/cosmic slice demo/block.cube 0 0 6
plane z=6 of collection 0, model space 0  (13 x 13)
  0 | 8 5 2 9 6 3 0 7 4 1 8 5 2
  1 | 9 6 3 0 7 4 1 8 5 2 9 6 3
  ...
 12 | 0 7 4 1 8 5 2 9 6 3 0 7 4
```

The pattern `(x*7 + y*11 + z*13 + space*3 + ho*5 + seed) % 10` uses three
pairwise-coprime strides, so each plane is a Latin-square-like sweep and the
histogram comes out exactly uniform: 2197 cells of each digit.

## Verifying that it is really on disk

```powershell
$bytes = [System.IO.File]::ReadAllBytes((Resolve-Path 'demo\block.cube'))
$bytes.Length    # 28672
$bytes[5209]     # 9
[System.Text.Encoding]::ASCII.GetString($bytes[0..6])   # CBLCUBE
```

The test suite does the same thing portably: it writes through the mapping,
closes it, then reopens the file with `fopen`/`fseek`/`fgetc` and asserts the
byte is there. If the value were only in a process buffer, that check would fail.

## Tests

`make test` — 87 checks, no framework:

- geometry arithmetic: 2197 cells per space, 21970 payload, 28672-byte file;
- the offset formula at the origin, at each axis step, and at the far corner;
- pointer identity: `cell(z,y,x) == base + index`, line and plane starts;
- neighbour deltas of 1, 13 and 169, and refusal to step off an edge;
- file size on disk, header fields, zero initialisation;
- values above 9 refused and cells left untouched;
- coordinates and collections out of range refused;
- persistence across close, plus the independent `stdio` read at byte 5209;
- the complement involution, `n -> 9 - n -> n`;
- deterministic fill, histogram covering every cell, `verify` report;
- a non-cubic geometry (3 × 4 × 5, 2 spaces, 3 collections) sized and addressed
  correctly;
- a damaged magic byte rejected as corrupt;
- a missing file reported as an I/O error.

## Relation to the TypeScript implementation

Same model, different question. The TypeScript project in `../src` is the
reference implementation: readable, tested, and the source of the paper's
figures. This one exists to answer a narrower question — can the integers be
*stored* as a cube rather than merely represented as one? — and to make the
answer inspectable with a hex editor.

Levels 7–9 remain unimplemented, as AGENTS.md requires. Level 6 is not a stored
type here either: it is the `ho_count = 2` pair of Level 5 structures, and the
complement involution `n -> 9 - n` is a transform over the value alphabet, not a
second copy of the data.

## What this is not

- **Not a database.** One process should own the file. There is no locking, and
  two writers would interleave page updates. Multi-cell updates are not
  transactional: `fill` is 21970 individual byte stores, and a crash halfway
  through leaves a half-filled cube.
- **Not byte-order portables.** The header detects a foreign endianness and
  refuses the file rather than misreading it; it does not convert.
- **Not a claim that the file is physically three-dimensional.** A filesystem
  stores a linear byte string. What is cubic here is the addressing: the offset
  map preserves adjacency along all three axes, so the cube survives the
  collapse to one dimension. Everything above that — values, hierarchy,
  complement — is the same mathematics as in the TypeScript version.
- **Not optimised.** Every access recomputes the index. The compiler strength-
  reduces the multiply-add, and for 28 KB it does not matter. It would matter at
  10⁹ cells, where the answer is a different layout (Morton order, or chunked
  pages), not a different pointer.
