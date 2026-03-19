import { getSpacingInPx, useClasses } from '@ds';
import type * as React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import type { Spacing } from '../../types';

export interface SurfaceCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  droppedShaddow?: boolean;
  padding: Spacing;
}

export const SurfaceCard: React.FC<SurfaceCardProps> = ({
  children,
  className,
  droppedShaddow = false,
  padding,
  style,
  ...props
}) => {
  const classes = useClasses(
    'w-full max-w-3xl rounded-[28px] border border-card-border bg-card-bg backdrop-blur-[18px]',
    droppedShaddow ? 'shadow-hero' : undefined,
    className
  );

  return (
    <section
      className={classes}
      style={{ ...style, padding: getSpacingInPx(padding) }}
      {...props}
    >
      {children}
    </section>
  );
};
