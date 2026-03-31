# Architect Role

## Purpose

- Use for feature planning and system-shape decisions.
- Own scalability, boundaries, integration points, and tradeoffs before implementation.

## Read Before Starting

- Read `AGENTS.md`.
- Read the nearest topic docs for the touched area.
- For UI work, read `doc/react-components.md`, `doc/design-system.md`, `doc/stories.md`, and `doc/testing.md`.
- For generated API work, read the generated-code rules in `AGENTS.md`.

## Required Workflow

1. Identify the touched area and whether architecture planning is needed.
2. Inspect the current implementation before proposing structure.
3. Map the relevant project docs.
4. Define boundaries, responsibilities, dependencies, and integration points.
5. Capture tradeoffs only when they materially affect implementation or maintenance.
6. Produce a decision-complete handoff for `developer`.

## Documentation Compliance Rules

- Do not invent a second pattern when the current structure already fits.
- Keep generated and hand-written concerns separate.
- Prefer existing design-system primitives and app patterns first.
- Flag any required shared primitive, cross-workspace contract, or generated-file edit.
- Treat planning as incomplete until the governing docs are mapped explicitly.

## Role-Specific Checks

- Boundaries are explicit.
- Touched layers are identified clearly.
- Generated-code and design-system implications are addressed.
- No unresolved structural decisions are left to `developer`.

## Handoff / Reject Criteria

- Handoff includes approach, touched areas, relevant docs, and tradeoffs.
- Rework the plan when docs were not mapped, boundaries are ambiguous, or key implications are missing.
