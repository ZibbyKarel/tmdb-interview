# React Components

## File Organization

- Export exactly one React component from each component file.
- Keep one component per file.
- When a component needs companion files, create a directory with the same name as the component.
- Put the main component file inside that directory.

## Component Declaration

- Prefer `const` component declarations over `function` declarations.
- Type components as `React.FC`.
- Name the props type `<ComponentName>Props`.
- Export the props type from the component file.

## Test IDs

- Add `data-testid` attributes only when tests exist for that component.
- Store `data-testid` values in an enum named `<ComponentName>DataTestIds`.
- Use `data-testid` only on meaningful nested elements.
- Do not create a `data-testid` enum when the component would only have a wrapper test id.
- Do not add a wrapper-only `data-testid`.

## Styles

- Build new components from design-system primitives first instead of assembling bespoke Tailwind-based UI in app code.
- Do not use `className` on design-system components unless the local rules explicitly allow it.
- Do not overwrite a design-system component's look by adding custom classes to the parent component.
- When the needed building block does not exist in the design system, stop and decide whether the right fix is:
  - to add a reusable component to the design system
  - or to implement the UI locally for that one use case
- Do not silently invent a new app-level primitive when that design decision has not been made yet.

## Example

```tsx
export enum MyComponentDataTestIds {
  Title = 'my-component-title',
  Description = 'my-component-description',
}

export interface MyComponentProps {
  title: string;
  description: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  description,
}) => (
  <div>
    <h1 data-testid={MyComponentDataTestIds.Title}>{title}</h1>
    <p data-testid={MyComponentDataTestIds.Description}>{description}</p>
  </div>
);
```
