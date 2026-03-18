import type { HTMLAttributes, ReactNode } from 'react';

type PageShellProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function PageShell({
  children,
  className,
  ...props
}: PageShellProps) {
  const classes = ['grid min-h-screen place-items-center px-6 py-10', className]
    .filter(Boolean)
    .join(' ');

  return (
    <main className={classes} {...props}>
      {children}
    </main>
  );
}
