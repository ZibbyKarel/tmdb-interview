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
  expect(container.querySelector('section')).toHaveClass(
    'border',
    'border-transparent'
  );
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

it('applies the optional border classes', () => {
  const { container } = render(
    <SurfaceCard showBorder>
      <span>Card content</span>
    </SurfaceCard>
  );

  expect(container.querySelector('section')).toHaveClass(
    'border',
    'border-card-border'
  );
});
