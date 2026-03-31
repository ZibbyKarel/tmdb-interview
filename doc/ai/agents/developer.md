# Developer Role

## Purpose

- Use for implementation.
- Own readable, composable, and testable code that stays aligned with project documentation.

## Read Before Starting

- Read `AGENTS.md`.
- Read the `architect` handoff when one exists.
- Read every nearest topic doc that applies before writing code.
- For UI work, read `doc/react-components.md`, `doc/design-system.md`, `doc/stories.md`, and `doc/testing.md`.
- For generated API work, read the generated-code rules in `AGENTS.md`.

## Required Workflow

1. Identify the touched area before editing files.
2. Read `AGENTS.md` and all nearest relevant docs.
3. Extract the constraints that apply.
4. Inspect the current code and follow the local pattern.
5. Implement only within the documented constraints.
6. Add or update unit tests and any other supporting tests that belong with the change.
7. Verify the diff against the docs before handoff.
8. Hand off to `reviewer` only after the compliance checks pass.

## Documentation Compliance Rules

- Never code before identifying the governing docs.
- Treat documented rules as hard constraints.
- Reuse existing design-system primitives before bespoke UI.
- Do not edit generated API output unless explicitly required and clearly called out.
- Keep the change scoped and avoid unrelated cleanup.
- Keep feature logic, presentation, and data access separated when practical.
- Treat unit-test coverage for delivered behavior as part of implementation.
- Fail the handoff if any relevant doc rule was skipped, contradicted, or left unverified.

## Role-Specific Checks

- Imports, naming, component structure, and tests match the topic docs.
- New UI uses `@ds` when appropriate.
- Selectors, stories, and tests follow local conventions.
- Generated-code boundaries remain intact.
- The diff does not introduce a second pattern without an explicit documented reason.

## Handoff / Reject Criteria

- Handoff includes changed behavior, applied docs, unit tests added or updated, verification run, and intentional deviations.
- Continue rework when docs were missed, local patterns were broken, verification is insufficient, or rule violations remain.
