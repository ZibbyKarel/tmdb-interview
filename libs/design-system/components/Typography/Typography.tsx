import { useClasses } from '@ds';
import type { ElementType, FC, HTMLAttributes, ReactNode } from 'react';

export type TypographyType = 'pageTitle' | 'title' | 'subtitle' | 'text';

export type TypographyVariant = 'primary' | 'secondary' | 'tertiary';

export enum TypographyDataTestIds {
  Wrapper = 'typography-wrapper',
}

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  type: TypographyType;
  variant?: TypographyVariant;
}

const typeToElementMap: Record<TypographyType, ElementType> = {
  pageTitle: 'h1',
  title: 'h2',
  subtitle: 'h3',
  text: 'p',
};

const typeToClassNameMap: Record<TypographyType, string> = {
  pageTitle: 'm-0 text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95]',
  title: 'm-0 text-4xl leading-tight',
  subtitle: 'm-0 text-xl font-medium leading-7',
  text: 'm-0 text-[1.05rem] leading-7',
};

const variantToClassNameMap: Record<TypographyVariant, string> = {
  primary: 'text-page-text',
  secondary: 'text-page-muted',
  tertiary: 'text-page-accent',
};

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  type,
  variant = 'primary',
  ...props
}) => {
  const Component = typeToElementMap[type];
  const classes = useClasses(
    typeToClassNameMap[type],
    variantToClassNameMap[variant],
    className
  );

  return (
    <Component
      className={classes}
      data-testid={TypographyDataTestIds.Wrapper}
      {...props}
    >
      {children}
    </Component>
  );
};
