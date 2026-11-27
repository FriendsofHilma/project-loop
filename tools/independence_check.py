#!/usr/bin/env python3
"""Exhibit the two independence witnesses discussed in PAPER3.md, section 6.

PAPER3 claims that the Level 4 view (a memory collection) and the Level 8 view
(a temporal line) do not determine one another, on the project's own types.

Addresses follow PAPER2:  A6 = {0,1} x C5 x C4 x Z x Y x X, where the leading
{0,1} is the Level 6 component. The toy below uses C5 = C4 = 2 and X = Y = Z = 2,
so |A6| = 2*2*2*2*2*2 = 64 addresses and 2*2*2 = 8 model spaces.

Two witnesses are constructed:

  W1  same Level 4 multiset, different Level 8 sequence
      (relabel the Level 4 index C4 inside each collection)

  W2  same Level 8 sequence, different Level 4 multiset
      (agree on the path, disagree off it)

Run:  python tools/independence_check.py
"""

from __future__ import annotations

import itertools
import sys

import numpy as np

C = range(2)      # Level 6 component
C5 = range(2)     # Level 5 collection index
C4 = range(2)     # Level 4 model-space index
XYZ = range(2)

ADDRESSES = list(itertools.product(C, C5, C4, XYZ, XYZ, XYZ))
assert len(ADDRESSES) == 64


def content(seed: int) -> dict[tuple, int]:
    rng = np.random.default_rng(seed)
    values = rng.integers(0, 10, size=len(ADDRESSES))
    return {address: int(value) for address, value in zip(ADDRESSES, values)}


def model_space(block: dict[tuple, int], c: int, c5: int, c4: int) -> tuple[int, ...]:
    return tuple(
        block[address]
        for address in ADDRESSES
        if address[:3] == (c, c5, c4)
    )


def memory_multiset(block: dict[tuple, int]) -> tuple[tuple[tuple[int, ...], ...], ...]:
    """The Level 4 view.

    A collection is the multiset of its five model spaces, so the C4 label is
    forgotten. The whole view is the multiset of the four collections inside a
    Level 6 content, so the component and Level 5 labels are forgotten too.
    """
    collections = []
    for c in C:
        for c5 in C5:
            spaces = sorted(model_space(block, c, c5, c4) for c4 in C4)
            collections.append(tuple(spaces))
    return tuple(sorted(collections))


def relabel_level4(block: dict[tuple, int]) -> dict[tuple, int]:
    """Same contents, C4 labels swapped inside every collection."""
    return {
        (c, c5, 1 - c4, x, y, z): value
        for (c, c5, c4, x, y, z), value in block.items()
    }


# A four-step path that starts in Level 6 component 0 and ends in component 1.
# It changes one coordinate per step: c5, then c, then c4.
PATH = [
    (0, 0, 0, 0, 0, 0),
    (0, 1, 0, 0, 0, 0),
    (1, 1, 0, 0, 0, 0),
    (1, 1, 1, 0, 0, 0),
]


def temporal_sequence(block: dict[tuple, int], path=PATH) -> tuple[int, ...]:
    return tuple(block[address] for address in path)


def check_path() -> None:
    for first, second in zip(PATH, PATH[1:]):
        differ = [i for i, (a, b) in enumerate(zip(first, second)) if a != b]
        assert len(differ) == 1, "path takes a non-unit step"
        assert abs(first[differ[0]] - second[differ[0]]) == 1, "non-adjacent step"
    assert PATH[0][0] == 0 and PATH[-1][0] == 1, "path does not span components"


def witness_one() -> tuple[int, dict, dict]:
    check_path()
    for seed in range(10_000):
        block = content(seed)
        relabelled = relabel_level4(block)
        if memory_multiset(block) != memory_multiset(relabelled):
            continue
        if temporal_sequence(block) != temporal_sequence(relabelled):
            return seed, block, relabelled
    raise SystemExit("no witness found for W1")


def witness_two(seed: int, block: dict[tuple, int]) -> tuple[tuple, dict]:
    off_path = next(address for address in ADDRESSES if address not in PATH)
    changed = dict(block)
    changed[off_path] = (changed[off_path] + 1) % 10
    assert temporal_sequence(block) == temporal_sequence(changed)
    assert memory_multiset(block) != memory_multiset(changed)
    return off_path, changed


def main() -> int:
    seed, block, relabelled = witness_one()
    print("W1: same Level 4 multiset, different Level 8 sequence")
    print(f"    seed = {seed}")
    print(f"    tau(B)  = {temporal_sequence(block)}")
    print(f"    tau(B') = {temporal_sequence(relabelled)}")
    print(f"    multiset equal: {memory_multiset(block) == memory_multiset(relabelled)}")
    print(f"    collections in view: {len(memory_multiset(block))}")

    off_path, changed = witness_two(seed, block)
    print("\nW2: same Level 8 sequence, different Level 4 multiset")
    print(f"    changed address (not on the path): {off_path}")
    print(f"    tau(B)   = {temporal_sequence(block)}")
    print(f"    tau(B'') = {temporal_sequence(changed)}")
    print(f"    multiset equal: {memory_multiset(block) == memory_multiset(changed)}")
    print(f"    cells observed by the line: {len(PATH)} of {len(ADDRESSES)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
