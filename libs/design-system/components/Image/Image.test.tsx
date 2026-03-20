import { fireEvent, render } from '@testing-library/react';
import { Image } from './Image';

it('renders the placeholder before the image loads', () => {
  const { container, getByText } = render(
    <Image alt="Poster" placeholder={<span>Loading</span>} src="/poster.jpg" />
  );

  expect(getByText('Loading')).toBeInTheDocument();
  expect(container.querySelector('img')).toHaveClass('opacity-0');
});

it('shows the image after load', () => {
  const { container, queryByText } = render(
    <Image alt="Poster" placeholder={<span>Loading</span>} src="/poster.jpg" />
  );

  const image = container.querySelector('img');

  if (!image) {
    throw new Error('Image element not found');
  }

  fireEvent.load(image);

  expect(queryByText('Loading')).not.toBeInTheDocument();
  expect(image).toHaveClass('opacity-100');
});

it('keeps the placeholder visible when the image errors', () => {
  const { container, getByText } = render(
    <Image alt="Poster" placeholder={<span>Loading</span>} src="/poster.jpg" />
  );

  const image = container.querySelector('img');

  if (!image) {
    throw new Error('Image element not found');
  }

  fireEvent.error(image);

  expect(getByText('Loading')).toBeInTheDocument();
  expect(image).toHaveClass('opacity-0');
});
