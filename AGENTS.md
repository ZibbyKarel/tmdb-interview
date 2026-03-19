## Generating

- format generated or updated files when done via project's formatter

## Project structure

- use camel case for file naming

## React Components

### File structure

- name of the file is same as name of the exported component
- each component file has exactly one component to export
- use PascalCase for file name
- if component logic is splitted into multiple files (subcomponents/stories/tests/constants/utils/types etc.) wrap all those files into directory of same name as component and add index.ts to export stuff from component file

### Structure of the component file

- prefer using const instead of function
- type the component as React.FC using prop type if needed
- props of the component has same name as component with suffix "Props"
- props should be exported from the file
- for testing purposes use data-testid attributes on the nested elements
- values for data-testids are stored in enum with same name as component with suffix DataTestIds
- generate data-testids only when tests exists

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

### Stories

- generate stories only if asked
- each story should have Playground as default story
- story that gathers component's variants on one page called Overview
- and one story per each component variant

### Unit testing

- use Jest library with react-testing-library
- prefer using data-testids as primary way how to get element.
- do not use one describe block to wrap everything

## Design system

- stored in libs/design-system
- for each component here generate stories and tests
