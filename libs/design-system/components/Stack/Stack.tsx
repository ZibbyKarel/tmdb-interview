import type * as React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import type { Spacing } from '../../types/spacing';
import { getSpacingInPx, useClasses } from '../../utils';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  spacing?: Spacing;
  vertical?: boolean;
}

export const Stack: React.FC<StackProps> = ({
  children,
  className,
  spacing = '0',
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
