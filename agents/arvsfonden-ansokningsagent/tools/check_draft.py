#!/usr/bin/env python3
"""Check character-limited answer blocks in an Arvsfonden draft.

An answer block looks like:

    <!-- ANSWER_START q2 MAX:500 -->
    Text to count
    <!-- ANSWER_END q2 -->

Only the text between the markers is counted. Leading and trailing blank
lines are ignored. Markdown syntax inside the block is counted as written,
so keep answer blocks as plain text.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

START_RE = re.compile(
    r"<!--\s*ANSWER_START\s+(?P<key>[A-Za-z0-9]+)\s+MAX:(?P<max>\d+)\s*-->"
)


def extract_blocks(text: str) -> list[dict[str, object]]:
    blocks: list[dict[str, object]] = []
    for match in START_RE.finditer(text):
        key = match.group("key")
        limit = int(match.group("max"))
        end_re = re.compile(rf"<!--\s*ANSWER_END\s+{re.escape(key)}\s*-->")
        end = end_re.search(text, match.end())
        if end is None:
            blocks.append(
                {
                    "key": key,
                    "max": limit,
                    "count": None,
                    "status": "MISSING_END",
                }
            )
            continue
        body = text[match.end() : end.start()].strip()
        count = len(body)
        blocks.append(
            {
                "key": key,
                "max": limit,
                "count": count,
                "status": "OK" if count <= limit else "OVER",
            }
        )
    return blocks


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("path", type=Path, help="path to the draft Markdown file")
    parser.add_argument("--json", action="store_true", help="emit JSON")
    args = parser.parse_args()

    try:
        text = args.path.read_text(encoding="utf-8")
    except OSError as exc:
        print(f"Cannot read {args.path}: {exc}", file=sys.stderr)
        return 2

    blocks = extract_blocks(text)
    if not blocks:
        print(f"No answer blocks found in {args.path}", file=sys.stderr)
        return 2

    failed = [b for b in blocks if b["status"] != "OK"]
    if args.json:
        print(json.dumps({"file": str(args.path), "blocks": blocks}, ensure_ascii=False, indent=2))
    else:
        print(f"Draft: {args.path}")
        print(f"{'KEY':<14}{'COUNT':>7}{'MAX':>7}  STATUS")
        for block in blocks:
            count = block["count"]
            print(
                f"{str(block['key']):<14}"
                f"{str(count):>7}"
                f"{str(block['max']):>7}  {block['status']}"
            )
        print("RESULT:", "FAIL" if failed else "PASS")

    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
