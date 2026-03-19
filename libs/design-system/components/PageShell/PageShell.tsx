import { useClasses } from '@ds';
import type { FC, HTMLAttributes, ReactNode } from 'react';

export enum PageShellDataTestIds {
  Wrapper = 'page-shell-wrapper',
}

export interface PageShellProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const PageShell: FC<PageShellProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = useClasses(
    'grid min-h-screen place-items-center px-6 py-10',
    className
  );

  return (
    <main
      className={classes}
      data-testid={PageShellDataTestIds.Wrapper}
      {...props}
    >
      {children}
    </main>
  );
};
