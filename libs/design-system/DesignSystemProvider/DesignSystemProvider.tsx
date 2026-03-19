import '../styles.css';

import type * as React from 'react';
import type { PropsWithChildren } from 'react';
import { useClasses, useTheme } from '../utils';
import type { ProviderTheme } from '../utils';

export interface DesignSystemProviderProps extends PropsWithChildren {
  theme?: ProviderTheme;
}

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({
  children,
  theme = 'dark',
}) => {
  const resolvedTheme = useTheme(theme);
  const classes = useClasses(
    'designSystemProvider',
    `designSystemProvider--${resolvedTheme}`
  );

  return <div className={classes}>{children}</div>;
};
