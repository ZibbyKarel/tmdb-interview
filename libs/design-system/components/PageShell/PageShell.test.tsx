import { render, screen } from '@testing-library/react';
import { PageShell } from './PageShell';

it('renders wrapper and children', () => {
  const { container } = render(
    <PageShell>
      <span>Content</span>
    </PageShell>
  );

  expect(container.querySelector('main')).toBeInTheDocument();
  expect(screen.getByText('Content')).toBeInTheDocument();
});
