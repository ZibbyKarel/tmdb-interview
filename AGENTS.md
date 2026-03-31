# Project Instructions

Use this file as the entry point for project-specific rules.

## How To Use This Documentation

- Start with the quick rules in this file.
- Open the linked files in `doc/` for the full version of each rule set.
- Use `doc/ai/` as the AI-facing version of documentation and keep it in sync with the human-facing `doc/` files.
- When rules overlap, prefer the more specific rule from the relevant document.

## Documentation Maintenance

- Generate project content in English unless the task explicitly asks for another language.
- Keep `doc/*.md` files human-readable.
- Keep `doc/ai/*.md` files atomic and optimized for AI agents.
- When updating a human rule document in `doc/`, update the paired file in `doc/ai/` in the same change.
- When adding a new rule document in `doc/`, add an AI companion in `doc/ai/`.
- Keep topic names aligned between human and AI documentation whenever possible.

## Documentation Index

- [`doc/formatting.md`](doc/formatting.md)
- [`doc/file-naming.md`](doc/file-naming.md)
- [`doc/agents/README.md`](doc/agents/README.md)
- [`doc/agents/architect.md`](doc/agents/architect.md)
- [`doc/agents/developer.md`](doc/agents/developer.md)
- [`doc/agents/reviewer.md`](doc/agents/reviewer.md)
- [`doc/agents/tester.md`](doc/agents/tester.md)
- [`doc/react-components.md`](doc/react-components.md)
- [`doc/stories.md`](doc/stories.md)
- [`doc/testing.md`](doc/testing.md)
- [`doc/design-system.md`](doc/design-system.md)
- [`doc/ai/README.md`](doc/ai/README.md)
- [`doc/ai/agents/README.md`](doc/ai/agents/README.md)
- [`doc/ai/agents/architect.md`](doc/ai/agents/architect.md)
- [`doc/ai/agents/developer.md`](doc/ai/agents/developer.md)
- [`doc/ai/agents/reviewer.md`](doc/ai/agents/reviewer.md)
- [`doc/ai/agents/tester.md`](doc/ai/agents/tester.md)
- [`doc/ai/formatting.md`](doc/ai/formatting.md)
- [`doc/ai/file-naming.md`](doc/ai/file-naming.md)
- [`doc/ai/react-components.md`](doc/ai/react-components.md)
- [`doc/ai/stories.md`](doc/ai/stories.md)
- [`doc/ai/testing.md`](doc/ai/testing.md)
- [`doc/ai/design-system.md`](doc/ai/design-system.md)
- [`doc/ai/frontend-workflow.md`](doc/ai/frontend-workflow.md)
- [`doc/ai/api-regeneration.md`](doc/ai/api-regeneration.md)

## Quick Rules

- Split agent work into four roles: `architect`, `developer`, `reviewer`, and `tester`.
- Treat `doc/agents/*` and `doc/ai/agents/*` as the source of truth for phase-specific agent behavior.
- Start with the role file that matches the current phase and follow its workflow before handing work forward.
- Keep design-system icons under `libs/design-system/components/icons`.
- Do not add per-icon tests or per-icon stories.
- Document icons through a single shared icons story.
- Prefer existing design-system primitives from `@ds` when building app UI.
- When generating a component, do not build bespoke Tailwind UI first if the design system can express it.
- If the needed design-system primitive does not exist, ask whether to create it in the design system or implement it locally.
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
- If a missing design-system building block creates a real choice between reusable and local UI, pause and ask which direction to take before generating the component.
- Keep generated and hand-written concerns separate so API regeneration stays safe.

## Generated Code Boundaries

- Consider `api-doc.json`, `orval.config.ts`, and `libs/data-access/src/api/**` part of the API generation flow.
- When API behavior needs to change, prefer updating generator inputs, wrapper utilities, or consumer code before editing generated files directly.
- If generated files must change, call that out clearly and preserve regeneration expectations in the surrounding docs or code comments.

## Verification And Review

- Follow the role-specific verification and review gates in `doc/agents/` or `doc/ai/agents/`.
- Choose verification steps that match the changed surface area and keep them aligned with `doc/testing.md`, `doc/design-system.md`, and `doc/stories.md`.
- Format changed files before finishing, following `doc/formatting.md`.
