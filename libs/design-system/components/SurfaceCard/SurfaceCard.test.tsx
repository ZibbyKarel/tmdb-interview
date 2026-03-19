import { render, screen } from '@testing-library/react';
import { SurfaceCard, SurfaceCardDataTestIds } from './SurfaceCard';

it('renders wrapper and children', () => {
  render(
    <SurfaceCard>
      <span>Card content</span>
    </SurfaceCard>
  );

  expect(
    screen.getByTestId(SurfaceCardDataTestIds.Wrapper)
  ).toBeInTheDocument();
  expect(screen.getByText('Card content')).toBeInTheDocument();
});
