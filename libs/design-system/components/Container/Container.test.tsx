import { render, screen } from '@testing-library/react';
import { Container } from './Container';

it('renders begin alignment by default', () => {
  const { container } = render(
    <Container padding="100">
      <span>Item</span>
    </Container>
  );

  const wrapper = container.firstChild;

  expect(wrapper).toHaveClass('items-start');
  expect(wrapper).toHaveStyle({ padding: '16px' });
  expect(screen.getByText('Item')).toBeInTheDocument();
});

it('renders center alignment when requested', () => {
  const { container } = render(
    <Container align="center" padding="150">
      <span>Item</span>
    </Container>
  );

  const wrapper = container.firstChild;

  expect(wrapper).toHaveClass('items-center');
  expect(wrapper).toHaveStyle({ padding: '24px' });
});

it('renders end alignment when requested', () => {
  const { container } = render(
    <Container align="end" padding="200">
      <span>Item</span>
    </Container>
  );

  expect(container.firstChild).toHaveClass('items-end');
});
