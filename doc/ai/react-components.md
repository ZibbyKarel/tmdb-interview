# React Components

## File Structure

- Export one React component per component file.
- Keep one component per file.
- When companion files are needed, create a directory named after the component.
- Put the main component file inside that directory.

## Component Shape

- Prefer `const` component declarations.
- Type components as `React.FC`.
- Name props types `<ComponentName>Props`.
- Export the props type from the component file.

## Test IDs

- Add `data-testid` only when tests exist for that component.
- Store test ids in an enum named `<ComponentName>DataTestIds`.
- Put test ids on meaningful nested elements.
- Do not create a wrapper-only `data-testid`.
- Do not add a `data-testid` enum when the only target would be the wrapper.

## Styling

- Build app components from design-system primitives first.
- Do not generate bespoke Tailwind-only component structure when the design system can express the UI.
- Do not add custom class names to design-system components unless the local rules explicitly allow it.
- Do not override a design-system component's appearance from the parent component.
- If the needed design-system primitive does not exist, ask whether to:
  - create it in the design system
  - or implement the UI locally in the generated component
- Do not choose between those two paths silently.
