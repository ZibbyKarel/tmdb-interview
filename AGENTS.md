## Project structure

- use camel case for file naming

## React Components

- file naming
  - name of the file is same as name of the exported component
  - each component file has exactly one component to export
  - use PascalCase for file name
- Structure of the file
  - prefer using const instead of function
  - type the component as React.FC using prop type if needed
  - props of the component has same name as component with suffix "Props"
  - props should be exported from the file
  - for testing purposes use data-testid attributes on the nested elements
  - values for data-testids are stored in enum with same name as component with suffix DataTestIds

Example:

```tsx
export enum MyComponentDataTestIds {
  Wrapper = 'my-component-wrapper',
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
  <div data-testid={MyComponentDataTestIds.Wrapper}>
    <h1 data-testid={MyComponentDataTestIds.Title}>{title}</h1>
    <p data-testid={MyComponentDataTestIds.Description}>{description}</p>
  </div>
);
```
