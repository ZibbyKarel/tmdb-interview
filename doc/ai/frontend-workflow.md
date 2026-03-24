# Frontend Workflow

## Purpose

- Use this guide when changing app UI, routes, page composition, or shared React components.

## Read First

- Start with `AGENTS.md`.
- Then read `doc/react-components.md`.
- Read `doc/design-system.md` when touching `libs/design-system`.
- Read `doc/stories.md` before adding stories.
- Read `doc/testing.md` before adding or updating tests.

## Default Workflow

- Inspect the existing component or page before proposing a new pattern.
- Reuse `@ds` primitives whenever they can express the UI cleanly.
- Keep one component per file and follow the component naming and props conventions from `doc/react-components.md`.
- Prefer local, incremental changes over cross-workspace refactors.
- Keep route wiring, page data loading, and presentational concerns separated when possible.

## App UI Guidance

- Build app-level UI from design-system primitives first.
- Do not override design-system appearance indirectly with heavy parent styling when a design-system component should own that presentation.
- Match the surrounding layout and spacing patterns before introducing new ones.
- Add `data-testid` attributes only when tests exist and follow the naming rules in `doc/react-components.md`.
- When a page or component story needs backend data, prefer Storybook-level MSW handlers over custom mocked hooks.
- Reuse payloads from `libs/data-access/mocks` when they match the scenario.
- Use generated handlers plus `withMockResponses` for story-specific backend behavior.

## Design-System Guidance

- Treat `libs/design-system` as the source of shared UI building blocks.
- Add tests for every design-system component.
- Add stories for design-system components only when stories are explicitly requested.
- Keep icon work inside `libs/design-system/components/icons` and continue using a single shared icons story.

## Common Traps

- Do not introduce app-specific styling into reusable design-system components unless the component is intentionally being generalized.
- Do not create duplicate UI primitives in app code when a similar design-system component already exists.
- Do not add stories by default for app components unless the task explicitly asks for them.

## Suggested Verification

- Run `npm run test` after meaningful UI changes.
- Run `npx nx build client-web` for page, route, layout, or app-shell changes.
- If design-system components changed, verify the affected tests and story files still match project conventions.
