import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';

it('renders vertical layout by default', () => {
  const { container } = render(
    <Stack spacing="100">
      <span>Item</span>
    </Stack>
  );

  const wrapper = container.firstChild;

  expect(wrapper).toHaveClass('flex-col');
  expect(wrapper).toHaveStyle({ gap: '16px' });
});

it('renders horizontal layout when vertical is false', () => {
  const { container } = render(
    <Stack spacing="150" vertical={false}>
      <span>Item</span>
    </Stack>
  );

  const wrapper = container.firstChild;

  expect(wrapper).toHaveClass('flex-row');
  expect(wrapper).toHaveStyle({ gap: '24px' });
});
