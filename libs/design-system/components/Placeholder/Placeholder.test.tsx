import { render } from '@testing-library/react';
import { Placeholder } from './Placeholder';

it('renders a full-size animated placeholder', () => {
  const { container } = render(<Placeholder />);

  expect(container.firstChild).toHaveClass(
    'absolute',
    'inset-0',
    'h-full',
    'w-full',
    'animate-pulse'
  );
});
