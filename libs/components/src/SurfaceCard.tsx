import type { HTMLAttributes, ReactNode } from 'react';

type SurfaceCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function SurfaceCard({
  children,
  className,
  ...props
}: SurfaceCardProps) {
  const classes = [
    'w-full max-w-3xl rounded-[28px] border border-card-border bg-card-bg p-8 shadow-hero backdrop-blur-[18px] sm:p-12',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}
