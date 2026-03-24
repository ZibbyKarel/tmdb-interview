# Design System

## Rules

- Keep the design system under `libs/design-system`.
- Add tests for each design-system component.
- Add stories for design-system components when stories are explicitly requested.
- Keep icons under `libs/design-system/components/icons`.
- Do not add per-icon tests.
- Do not add per-icon stories.
- Use one shared story to display all icons together.
- Use design-system components as the default source of UI primitives when generating new components.
- If a required primitive is missing, ask whether to create it in `libs/design-system` or keep the implementation local to the consuming app.
