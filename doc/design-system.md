# Design System

## Location

- Keep the design system under `libs/design-system`.

## Component Requirements

- Add stories for every design-system component.
- Add tests for every design-system component.
- Keep icons under `libs/design-system/components/icons`.
- Do not add per-icon tests.
- Do not add per-icon stories.
- Add one shared story that displays all icons together.
- Treat the design system as the default source of UI primitives for generated components.
- When a needed primitive does not exist yet, decide explicitly whether to add it here or keep the UI local to the consuming app.

## Intention

- Keep design-system components documented.
- Keep design-system components verified.
- Keep reusable UI decisions centralized.
