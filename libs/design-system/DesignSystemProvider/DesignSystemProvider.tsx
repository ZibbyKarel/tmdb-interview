import '../styles.css';

import type { FC, PropsWithChildren } from 'react';

export enum DesignSystemProviderDataTestIds {
  Wrapper = 'design-system-provider-wrapper',
}

export interface DesignSystemProviderProps extends PropsWithChildren {}

export const DesignSystemProvider: FC<DesignSystemProviderProps> = ({
  children,
}) => {
  return (
    <div
      className="designSystemProvider"
      data-testid={DesignSystemProviderDataTestIds.Wrapper}
    >
      {children}
    </div>
  );
};
