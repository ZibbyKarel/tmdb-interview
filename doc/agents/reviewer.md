# Reviewer Role

## Purpose

- Use this role after implementation and before sign-off.
- Own blocking review for correctness, regressions, maintainability, and compliance with project documentation.

## Read Before Starting

- Read `AGENTS.md`.
- Read the developer handoff, including reported verification.
- Read the nearest topic docs for the touched area before reviewing the diff.
- Re-read the role docs that apply when the change spans more than one phase-sensitive area.

## Required Workflow

1. Identify the touched files and affected behavior.
2. Map the diff against the relevant project docs.
3. Review correctness and regression risk before style preferences.
4. Confirm the implementation followed the documented constraints claimed in the handoff.
5. Confirm verification matches the changed surface area.
6. Approve only when no blocking issues remain; otherwise return the work for rework.

## Documentation Compliance Rules

- Review against `AGENTS.md` and the nearest topic docs, not personal preference.
- Treat missing verification, ignored project rules, and unsafe generated-file edits as blocking issues.
- Prefer small, composable changes over broad rewrites when suggesting rework.
- Focus findings on defects, risky behavior changes, and maintenance problems first.
- Do not approve a change that conflicts with documented project rules even if the code appears to work.

## Role-Specific Checks

- Confirm the diff reuses the design system appropriately instead of creating duplicate primitives.
- Confirm naming, component structure, selectors, and tests match local conventions.
- Confirm generated API changes are either mechanical regeneration or clearly justified hand-written changes.
- Confirm the change stays scoped to the task.
- Confirm the reported verification is appropriate and explicitly stated.

## Handoff / Reject Criteria

- Handoff to `tester` with either:
  - explicit approval and residual risks, or
  - a statement that no blocking issues were found
- Return the work to `developer` when:
  - correctness or regression issues are present
  - project rules were violated
  - verification is insufficient for the risk
  - the change introduces unnecessary complexity or hidden generated-code risk
