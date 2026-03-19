import { render, screen } from '@testing-library/react';
import { SurfaceCard } from './SurfaceCard';

it('renders wrapper and children', () => {
  const { container } = render(
    <SurfaceCard>
      <span>Card content</span>
    </SurfaceCard>
  );

  expect(container.querySelector('section')).toBeInTheDocument();
  expect(screen.getByText('Card content')).toBeInTheDocument();
});
