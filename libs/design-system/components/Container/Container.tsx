import type * as React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import type { Spacing } from '../../types';
import { getSpacingInPx, useClasses } from '../../utils';

export type ContainerAlign = 'begin' | 'center' | 'end';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  align?: ContainerAlign;
  children: ReactNode;
  padding: Spacing;
}

const alignToClassNameMap: Record<ContainerAlign, string> = {
  begin: 'items-start',
  center: 'items-center',
  end: 'items-end',
};

export const Container: React.FC<ContainerProps> = ({
  align = 'begin',
  children,
  className,
  padding,
  style,
  ...props
}) => {
  const classes = useClasses(
    'flex w-full flex-col',
    alignToClassNameMap[align],
    className
  );

  return (
    <div
      className={classes}
      style={{ ...style, padding: getSpacingInPx(padding) }}
      {...props}
    >
      {children}
    </div>
  );
};
