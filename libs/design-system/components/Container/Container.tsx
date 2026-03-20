import type * as React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import type { PaddingProps } from '../../types';
import { useClasses, usePaddingProps } from '../../utils';

export type ContainerAlign = 'begin' | 'center' | 'end';

export interface ContainerProps
  extends
    React.PropsWithChildren,
    HTMLAttributes<HTMLDivElement>,
    PaddingProps {
  align?: ContainerAlign;
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
  const paddingProps = usePaddingProps(padding);

  return (
    <div className={classes} style={{ ...style, ...paddingProps }} {...props}>
      {children}
    </div>
  );
};
