import { useClasses } from '@ds';
import type * as React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

export interface PageShellProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = useClasses(
    'grid min-h-screen place-items-center px-6 py-10',
    className
  );

  return (
    <main className={classes} {...props}>
      {children}
    </main>
  );
};
