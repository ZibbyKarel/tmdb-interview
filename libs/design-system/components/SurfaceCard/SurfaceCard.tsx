import { useClasses } from '@ds';
import type * as React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

export interface SurfaceCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  droppedShaddow?: boolean;
  showBorder?: boolean;
}

export const SurfaceCard: React.FC<SurfaceCardProps> = ({
  children,
  className,
  droppedShaddow = false,
  showBorder = false,
  ...props
}) => {
  const classes = useClasses(
    'w-full max-w-3xl overflow-hidden rounded-[28px] border bg-card-bg backdrop-blur-[18px] transition-colors duration-200 ease-out',
    showBorder ? 'border-card-border' : 'border-transparent',
    droppedShaddow ? 'shadow-hero' : undefined,
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
