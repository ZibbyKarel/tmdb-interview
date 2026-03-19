import { render, screen } from '@testing-library/react';
import { DesignSystemProvider } from './DesignSystemProvider';

const createMatchMedia = (matches: boolean) => {
  return () =>
    ({
      matches,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }) as unknown as MediaQueryList;
};

it('renders children inside the provider wrapper', () => {
  const { container } = render(
    <DesignSystemProvider>
      <span>Content</span>
    </DesignSystemProvider>
  );

  expect(container.firstChild).toHaveClass('designSystemProvider');
  expect(container.firstChild).toHaveClass('designSystemProvider--dark');
  expect(screen.getByText('Content')).toBeInTheDocument();
});

it('applies the light theme class when requested', () => {
  const { container } = render(
    <DesignSystemProvider theme="light">
      <span>Content</span>
    </DesignSystemProvider>
  );

  expect(container.firstChild).toHaveClass('designSystemProvider--light');
});

it('applies the dark theme when system preference is dark', () => {
  window.matchMedia = createMatchMedia(true);

  const { container } = render(
    <DesignSystemProvider theme="system">
      <span>Content</span>
    </DesignSystemProvider>
  );

  expect(container.firstChild).toHaveClass('designSystemProvider--dark');
});

it('applies the light theme when system preference is light', () => {
  window.matchMedia = createMatchMedia(false);

  const { container } = render(
    <DesignSystemProvider theme="system">
      <span>Content</span>
    </DesignSystemProvider>
  );

  expect(container.firstChild).toHaveClass('designSystemProvider--light');
});
