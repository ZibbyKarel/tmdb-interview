import './styles.css';

import type * as React from 'react';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import type { ProviderTheme } from './utils';
import { useClasses, useTheme } from './utils';

export interface DesignSystemProviderProps
  extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  theme?: ProviderTheme;
}

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({
  children,
  className,
  theme = 'dark',
  ...props
}) => {
  const resolvedTheme = useTheme(theme);
  const classes = useClasses(
    'designSystemProvider',
    `designSystemProvider--${resolvedTheme}`,
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
