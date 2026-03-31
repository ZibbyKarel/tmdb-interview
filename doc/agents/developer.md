# Developer Role

## Purpose

- Use this role to implement the approved plan.
- Own readable, composable, and well-tested code that matches the project documentation exactly.

## Read Before Starting

- Read `AGENTS.md`.
- Read the handoff from `architect` when one exists.
- Read every nearest topic doc that applies to the touched area before writing code.
- For UI work, read `doc/react-components.md`, `doc/design-system.md`, `doc/stories.md`, and `doc/testing.md`.
- For generated API work, read the generated-code rules in `AGENTS.md` and keep custom logic outside generated folders when possible.

## Required Workflow

1. Identify the touched area before editing files.
2. Read `AGENTS.md` and all nearest relevant docs for that area.
3. Extract the constraints that apply to the implementation.
4. Inspect the current code and follow the existing local pattern.
5. Implement only within the documented constraints.
6. Add or update unit tests and any other supporting tests that belong with the change.
7. Verify the diff against the docs before handoff.
8. Hand off to `reviewer` only after the documentation compliance checks pass.

## Documentation Compliance Rules

- Never start coding before identifying which docs govern the change.
- Treat documented rules as implementation constraints, not suggestions.
- Reuse existing design-system primitives before creating bespoke UI.
- Do not edit generated API output unless the task explicitly requires it and the change is called out clearly.
- Keep code scoped to the task and avoid unrelated cleanup.
- Keep feature logic, presentation, and data-access concerns separated when practical.
- Treat unit-test coverage for delivered behavior as part of implementation, not as a later tester responsibility.
- Fail the handoff if any relevant doc rule was skipped, contradicted, or left unverified.

## Role-Specific Checks

- Confirm imports, naming, component structure, and testing approach match the relevant topic docs.
- Confirm any new UI uses `@ds` primitives when they can express the requirement cleanly.
- Confirm new selectors, stories, or tests follow the local conventions.
- Confirm generated-code boundaries are still respected after the change.
- Confirm the diff does not introduce a second implementation pattern without an explicit documented reason.

## Handoff / Reject Criteria

- Handoff to `reviewer` with:
  - summary of what changed
  - docs that were applied
  - unit tests added or updated
  - verification already run
  - any intentional deviations and why they were necessary
- Reject your own handoff and continue rework when:
  - a relevant doc was not consulted
  - the code does not match the nearest local pattern
  - verification is missing for the risk level
  - the diff contains undocumented rule violations
