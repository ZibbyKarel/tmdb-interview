import { render, screen } from '@testing-library/react';
import {
  DesignSystemProvider,
  DesignSystemProviderDataTestIds,
} from './DesignSystemProvider';

it('renders children inside the provider wrapper', () => {
  render(
    <DesignSystemProvider>
      <span>Content</span>
    </DesignSystemProvider>
  );

  expect(
    screen.getByTestId(DesignSystemProviderDataTestIds.Wrapper)
  ).toBeInTheDocument();
  expect(screen.getByText('Content')).toBeInTheDocument();
});
