# Agent Roles

## Purpose

- Use this index when work is split across planning, implementation, review, and testing.
- Treat the role files in this directory as the primary source of truth for phase-specific behavior.

## Role Flow

1. `architect` plans the change when feature scope, boundaries, or scalability need explicit design.
2. `developer` implements the approved direction and follows the documentation compliance workflow before handoff.
3. `reviewer` performs a blocking review against project rules and returns unsafe work for rework.
4. `tester` challenges the change with adversarial scenarios and validates delivered behavior against risk-focused scenarios.

## Role Files

- [`architect.md`](architect.md)
- [`developer.md`](developer.md)
- [`reviewer.md`](reviewer.md)
- [`tester.md`](tester.md)

## Handoff Order

- Default handoff order is `architect` -> `developer` -> `reviewer` -> `tester`.
- Skip `architect` only when the change does not affect system shape, boundaries, or scaling concerns.
- Any later role can return the work to an earlier role when a blocking issue is found.
