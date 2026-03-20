import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

it('renders the selected semantic element', () => {
  render(<Typography type="pageTitle">Heading</Typography>);

  const element = screen.getByRole('heading', { level: 1 });

  expect(element.tagName).toBe('H1');
  expect(element).toHaveTextContent('Heading');
});

it('renders the note type with the note sizing classes', () => {
  render(<Typography type="note">Note text</Typography>);

  expect(screen.getByText('Note text')).toHaveClass('text-sm', 'leading-5');
});

it('applies the primary variant by default', () => {
  render(<Typography type="text">Primary text</Typography>);

  expect(screen.getByText('Primary text')).toHaveClass('text-page-text');
});

it('applies the secondary variant', () => {
  render(
    <Typography type="text" variant="secondary">
      Secondary text
    </Typography>
  );

  expect(screen.getByText('Secondary text')).toHaveClass('text-page-muted');
});

it('applies the tertiary variant', () => {
  render(
    <Typography type="text" variant="tertiary">
      Tertiary text
    </Typography>
  );

  expect(screen.getByText('Tertiary text')).toHaveClass('text-slate-500');
});
