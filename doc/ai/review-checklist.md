# Review Checklist

## Purpose

- Use this guide when reviewing a change or preparing one for handoff.

## Primary Review Questions

- Does the change follow the nearest local conventions in `AGENTS.md` and `doc/`?
- Does it reuse the design system appropriately instead of creating duplicate primitives?
- Does it respect generated-code boundaries around `libs/data-access/src/api`?
- Is the change scoped to the task, or does it include unrelated cleanup?
- Are tests or verification steps appropriate for the risk of the change?

## Frontend Review Points

- Check component file organization and naming.
- Check props naming and `React.FC` usage against `doc/react-components.md`.
- Check whether `data-testid` usage matches the project rules.
- Check whether custom classes are bypassing or fighting design-system components.

## Generated API Review Points

- Distinguish between mechanical regeneration output and real behavioral changes.
- Confirm that consumer code changes happen in stable hand-written layers when possible.
- Watch for edits that will be lost the next time the client is regenerated.

## Verification Review Points

- Confirm the reported commands match the affected area.
- Prefer explicit mention of what was or was not run.
- Call out residual risk when verification is partial.

## Good Outcomes

- Small diffs with a clear reason.
- Reuse of existing patterns.
- Mechanical changes clearly separated from hand-written logic.
- Straightforward follow-up steps when future work is needed.
