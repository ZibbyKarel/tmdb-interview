import { render, screen } from '@testing-library/react';
import { Button } from './Button';

it('renders a primary button by default', () => {
  render(<Button>Continue</Button>);

  expect(screen.getByRole('button', { name: 'Continue' })).toHaveClass(
    'bg-page-accent/14',
    'border-page-accent/20'
  );
});

it('renders the secondary variant', () => {
  render(<Button variant="secondary">Secondary</Button>);

  expect(screen.getByRole('button', { name: 'Secondary' })).toHaveClass(
    'bg-white/40',
    'border-card-border'
  );
});

it('renders the tertiary variant', () => {
  render(<Button variant="tertiary">Tertiary</Button>);

  expect(screen.getByRole('button', { name: 'Tertiary' })).toHaveClass(
    'bg-transparent',
    'border-transparent',
    'text-page-muted'
  );
});

it('stretches to the full width of the parent container when requested', () => {
  render(<Button fullWidth>Full width</Button>);

  expect(screen.getByRole('button', { name: 'Full width' })).toHaveClass(
    'w-full'
  );
});

it('renders as a link when href is provided', () => {
  render(<Button href="/movies/603">Movie detail</Button>);

  expect(screen.getByRole('link', { name: 'Movie detail' })).toHaveAttribute(
    'href',
    '/movies/603'
  );
});
