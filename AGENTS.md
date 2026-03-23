# Project Instructions

Use this file as the entry point for project-specific rules.

## How To Use This Documentation

- Start with the quick rules in this file.
- Open the linked files in `doc/` for the full version of each rule set.
- When rules overlap, prefer the more specific rule from the relevant document.

## Documentation Index

- [`doc/formatting.md`](doc/formatting.md)
- [`doc/file-naming.md`](doc/file-naming.md)
- [`doc/react-components.md`](doc/react-components.md)
- [`doc/stories.md`](doc/stories.md)
- [`doc/testing.md`](doc/testing.md)
- [`doc/design-system.md`](doc/design-system.md)
- [`doc/ai/frontend-workflow.md`](doc/ai/frontend-workflow.md)
- [`doc/ai/api-regeneration.md`](doc/ai/api-regeneration.md)
- [`doc/ai/verification.md`](doc/ai/verification.md)
- [`doc/ai/review-checklist.md`](doc/ai/review-checklist.md)

## Quick Rules

- Keep design-system icons under `libs/design-system/components/icons`.
- Do not add per-icon tests or per-icon stories.
- Document icons through a single shared icons story.
- Prefer existing design-system primitives from `@ds` when building app UI.
- Treat `libs/data-access/src/api` as generated code. Change generator inputs and config instead of hand-editing generated output unless the task explicitly requires a generated-file patch.
- Keep changes scoped. Avoid unrelated cleanup while working on a targeted task.

## Workspace Shape

- `apps/client-web` contains the main React and Vite application.
- `libs/design-system` contains shared UI primitives, stories, tests, theming, and icons.
- `libs/data-access` contains the generated TMDB API client and query hooks.
- `libs/internationalization` contains small shared formatting helpers.

## Working Style

- Read the closest local conventions before editing files in an unfamiliar area.
- Prefer extending the existing app patterns over introducing a second approach.
- For UI work, compose with design-system components first and only fall back to custom markup when the design system does not provide the needed building blocks.
- Keep generated and hand-written concerns separate so API regeneration stays safe.

## Generated Code Boundaries

- Consider `api-doc.json`, `orval.config.ts`, and `libs/data-access/src/api/**` part of the API generation flow.
- When API behavior needs to change, prefer updating generator inputs, wrapper utilities, or consumer code before editing generated files directly.
- If generated files must change, call that out clearly and preserve regeneration expectations in the surrounding docs or code comments.

## Verification

- Run verification steps that match the surface area you changed.
- For general code changes, start with `npm run test`.
- For app changes, also verify the app still builds with `npx nx build client-web`.
- For design-system component changes, verify tests and stories expectations described in `doc/design-system.md` and `doc/stories.md`.
- Format changed files before finishing, following `doc/formatting.md`.

## Review Focus

- Look first for regressions, missing verification, and violations of local conventions.
- Check whether changes accidentally bypass the design system, break generated-code boundaries, or add unnecessary complexity.
- Prefer small, composable follow-up suggestions over broad rewrites.
