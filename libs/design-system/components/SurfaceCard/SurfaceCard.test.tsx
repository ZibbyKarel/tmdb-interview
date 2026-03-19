import { render, screen } from '@testing-library/react';
import { SurfaceCard } from './SurfaceCard';

it('renders wrapper and children', () => {
  const { container } = render(
    <SurfaceCard padding="200">
      <span>Card content</span>
    </SurfaceCard>
  );

  expect(container.querySelector('section')).toBeInTheDocument();
  expect(screen.getByText('Card content')).toBeInTheDocument();
});

it('applies padding and optional shadow styles', () => {
  const { container } = render(
    <SurfaceCard droppedShaddow padding="250">
      <span>Card content</span>
    </SurfaceCard>
  );

  const section = container.querySelector('section');

  expect(section).toHaveStyle({ padding: '40px' });
  expect(section).toHaveClass('shadow-hero');
});
