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

it('applies the optional shadow class', () => {
  const { container } = render(
    <SurfaceCard droppedShaddow>
      <span>Card content</span>
    </SurfaceCard>
  );

  const section = container.querySelector('section');

  expect(section).toHaveClass('shadow-hero');
});
