import type * as React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import type { Spacing } from '../../types';
import { useClasses } from '../../utils';

export type GridLayout = 'detail' | 'twoColumns' | 'threeColumns';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  layout?: GridLayout;
  spacing?: Spacing;
}

const layoutToClassNameMap: Record<GridLayout, string> = {
  detail: 'grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]',
  twoColumns: 'grid-cols-1 sm:grid-cols-2',
  threeColumns: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
};

const spacingToClassNameMap: Record<Spacing, string> = {
  '0': 'gap-0',
  '25': 'gap-1',
  '50': 'gap-2',
  '75': 'gap-3',
  '100': 'gap-4',
  '125': 'gap-5',
  '150': 'gap-6',
  '175': 'gap-7',
  '200': 'gap-8',
  '225': 'gap-9',
  '250': 'gap-10',
  '275': 'gap-11',
  '300': 'gap-12',
  '325': 'gap-13',
  '350': 'gap-14',
  '375': 'gap-15',
  '400': 'gap-16',
  '425': 'gap-17',
  '450': 'gap-18',
  '475': 'gap-19',
  '500': 'gap-20',
};

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  layout = 'twoColumns',
  spacing = '100',
  ...props
}) => {
  const classes = useClasses(
    'grid',
    layoutToClassNameMap[layout],
    spacingToClassNameMap[spacing],
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
