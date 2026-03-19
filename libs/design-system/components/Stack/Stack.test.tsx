import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';

it('renders horizontal layout by default', () => {
  const { container } = render(
    <Stack spacing="100">
      <span>Item</span>
    </Stack>
  );

  const wrapper = container.firstChild;

  expect(wrapper).toHaveClass('flex-row');
  expect(wrapper).toHaveStyle({ gap: '16px' });
});

it('renders vertical layout when vertical is true', () => {
  const { container } = render(
    <Stack spacing="150" vertical>
      <span>Item</span>
    </Stack>
  );

  const wrapper = container.firstChild;

  expect(wrapper).toHaveClass('flex-col');
  expect(wrapper).toHaveStyle({ gap: '24px' });
});
