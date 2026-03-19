import '../styles.css';

import type { FC, PropsWithChildren } from 'react';

export interface DesignSystemProviderProps extends PropsWithChildren {}

export const DesignSystemProvider: FC<DesignSystemProviderProps> = ({
  children,
}) => {
  return <div className="designSystemProvider">{children}</div>;
};
