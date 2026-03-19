import { render, screen } from '@testing-library/react';
import { DesignSystemProvider } from './DesignSystemProvider';

it('renders children inside the provider wrapper', () => {
  const { container } = render(
    <DesignSystemProvider>
      <span>Content</span>
    </DesignSystemProvider>
  );

  expect(container.firstChild).toHaveClass('designSystemProvider');
  expect(screen.getByText('Content')).toBeInTheDocument();
});
