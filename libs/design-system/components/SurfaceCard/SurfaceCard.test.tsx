import { render, screen } from '@testing-library/react';
import { SurfaceCard } from './SurfaceCard';

it('renders wrapper and children', () => {
  const { container } = render(
    <SurfaceCard>
      <span>Card content</span>
    </SurfaceCard>
  );

  const surfaceCard = container.firstElementChild;

  expect(surfaceCard).toBeInTheDocument();
  expect(screen.getByText('Card content')).toBeInTheDocument();
  expect(surfaceCard).toHaveClass('border', 'border-transparent');
});

it('applies the optional shadow class', () => {
  const { container } = render(
    <SurfaceCard droppedShaddow>
      <span>Card content</span>
    </SurfaceCard>
  );

  const surfaceCard = container.firstElementChild;

  expect(surfaceCard).toHaveClass('shadow-hero');
});

it('applies the optional border classes', () => {
  const { container } = render(
    <SurfaceCard showBorder>
      <span>Card content</span>
    </SurfaceCard>
  );

  expect(container.firstElementChild).toHaveClass(
    'border',
    'border-card-border'
  );
});
