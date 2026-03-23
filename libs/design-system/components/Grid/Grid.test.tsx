import { render } from '@testing-library/react';
import { Grid } from './Grid';

it('renders the detail layout', () => {
  const { container } = render(
    <Grid layout="detail" spacing="200">
      <span>Item</span>
    </Grid>
  );

  expect(container.firstChild).toHaveClass(
    'grid',
    'grid-cols-1',
    'lg:grid-cols-[320px_minmax(0,1fr)]',
    'gap-8'
  );
});

it('renders the two column layout by default', () => {
  const { container } = render(
    <Grid>
      <span>Item</span>
    </Grid>
  );

  expect(container.firstChild).toHaveClass('grid-cols-1', 'sm:grid-cols-2');
});

it('renders the three column layout', () => {
  const { container } = render(
    <Grid layout="threeColumns">
      <span>Item</span>
    </Grid>
  );

  expect(container.firstChild).toHaveClass(
    'grid-cols-1',
    'md:grid-cols-2',
    'xl:grid-cols-3'
  );
});
