import { useClasses } from '@ds';
import type * as React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

export interface SurfaceCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const SurfaceCard: React.FC<SurfaceCardProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = useClasses(
    'w-full max-w-3xl rounded-[28px] border border-card-border bg-card-bg p-8 shadow-hero backdrop-blur-[18px] sm:p-12',
    className
  );

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};
