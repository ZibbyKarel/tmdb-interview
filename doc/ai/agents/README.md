# Agent Roles

## Purpose

- Use this index for phase ownership.
- Treat the role files in this directory as the source of truth for planning, implementation, review, and testing behavior.

## Flow

1. `architect`
2. `developer`
3. `reviewer`
4. `tester`

## Role Files

- [`architect.md`](architect.md)
- [`developer.md`](developer.md)
- [`reviewer.md`](reviewer.md)
- [`tester.md`](tester.md)

## Handoff

- Default handoff order is `architect` -> `developer` -> `reviewer` -> `tester`.
- Skip `architect` only when system shape, boundaries, and scaling are unaffected.
- Any later role can return work to an earlier role when a blocking issue is found.
