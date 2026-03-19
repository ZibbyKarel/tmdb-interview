import { render, screen } from '@testing-library/react';
import { Stack, StackDataTestIds } from './Stack';

it('renders vertical layout by default', () => {
  render(
    <Stack spacing="100">
      <span>Item</span>
    </Stack>
  );

  const wrapper = screen.getByTestId(StackDataTestIds.Wrapper);

  expect(wrapper).toHaveClass('flex-col');
  expect(wrapper).toHaveStyle({ gap: '16px' });
});

it('renders horizontal layout when vertical is false', () => {
  render(
    <Stack spacing="150" vertical={false}>
      <span>Item</span>
    </Stack>
  );

  const wrapper = screen.getByTestId(StackDataTestIds.Wrapper);

  expect(wrapper).toHaveClass('flex-row');
  expect(wrapper).toHaveStyle({ gap: '24px' });
});
