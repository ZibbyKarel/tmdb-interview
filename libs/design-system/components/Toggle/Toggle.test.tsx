import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from './Toggle';

const sunIcon = <svg data-testid="sun-icon" />;
const moonIcon = <svg data-testid="moon-icon" />;

it('renders a switch layout with both icons when not pressed', () => {
  const { container } = render(
    <Toggle
      aria-label="Theme toggle"
      offIcon={sunIcon}
      onIcon={moonIcon}
      pressed={false}
    />
  );

  expect(screen.getByRole('button', { name: 'Theme toggle' })).toHaveAttribute(
    'aria-pressed',
    'false'
  );
  expect(
    container.querySelector('[data-testid="sun-icon"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('[data-testid="moon-icon"]')
  ).toBeInTheDocument();
});

it('marks the toggle as pressed when on', () => {
  render(
    <Toggle
      aria-label="Theme toggle"
      offIcon={sunIcon}
      onIcon={moonIcon}
      pressed
    />
  );

  expect(screen.getByRole('button', { name: 'Theme toggle' })).toHaveAttribute(
    'aria-pressed',
    'true'
  );
});

it('calls onClick when pressed', async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(
    <Toggle
      aria-label="Theme toggle"
      offIcon={sunIcon}
      onClick={handleClick}
      onIcon={moonIcon}
      pressed={false}
    />
  );

  await user.click(screen.getByRole('button', { name: 'Theme toggle' }));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
