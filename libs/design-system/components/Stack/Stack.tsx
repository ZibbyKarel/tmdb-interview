import type * as React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { getSpacingInPx, useClasses } from '../../utils';
import type { Spacing } from '../../types/spacing';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  spacing: Spacing;
  vertical?: boolean;
}

export const Stack: React.FC<StackProps> = ({
  children,
  className,
  spacing,
  vertical = false,
  style,
  ...props
}) => {
  const classes = useClasses(
    'flex',
    vertical ? 'flex-col' : 'flex-row',
    className
  );

  return (
    <div
      className={classes}
      style={{ ...style, gap: getSpacingInPx(spacing) }}
      {...props}
    >
      {children}
    </div>
  );
};
