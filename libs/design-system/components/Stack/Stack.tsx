import type { FC, HTMLAttributes, ReactNode } from 'react';
import { getSpacingInPx, useClasses } from '../../utils';
import { Spacing } from '../../types/spacing';

export enum StackDataTestIds {
  Wrapper = 'stack-wrapper',
}

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  spacing: Spacing;
  vertical?: boolean;
}

export const Stack: FC<StackProps> = ({
  children,
  className,
  spacing,
  vertical = true,
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
      data-testid={StackDataTestIds.Wrapper}
      style={{ ...style, gap: getSpacingInPx(spacing) }}
      {...props}
    >
      {children}
    </div>
  );
};
