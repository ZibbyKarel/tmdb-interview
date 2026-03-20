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

- primary use components from design-system to build more complex components
- do not use classNames when using design-system components
- do not overwrite design-system component's look by adding custom classes to parent component

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
