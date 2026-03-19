import { useClasses } from '@ds';
import type * as React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

export interface SurfaceCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  droppedShaddow?: boolean;
}

export const SurfaceCard: React.FC<SurfaceCardProps> = ({
  children,
  className,
  droppedShaddow = false,
  ...props
}) => {
  const classes = useClasses(
    'w-full max-w-3xl rounded-[28px] border border-card-border bg-card-bg backdrop-blur-[18px]',
    droppedShaddow ? 'shadow-hero' : undefined,
    className
  );

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};
