import { render, screen } from '@testing-library/react';
import { Typography, TypographyDataTestIds } from './Typography';

it('renders the selected semantic element', () => {
  render(<Typography type="pageTitle">Heading</Typography>);

  const element = screen.getByTestId(TypographyDataTestIds.Wrapper);

  expect(element.tagName).toBe('H1');
  expect(element).toHaveTextContent('Heading');
});
