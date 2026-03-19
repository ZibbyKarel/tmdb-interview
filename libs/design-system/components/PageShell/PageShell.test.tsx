import { render, screen } from '@testing-library/react';
import { PageShell, PageShellDataTestIds } from './PageShell';

it('renders wrapper and children', () => {
  render(
    <PageShell>
      <span>Content</span>
    </PageShell>
  );

  expect(screen.getByTestId(PageShellDataTestIds.Wrapper)).toBeInTheDocument();
  expect(screen.getByText('Content')).toBeInTheDocument();
});
