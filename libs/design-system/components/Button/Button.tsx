import { Typography, useClasses } from '@ds';
import type * as React from 'react';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface BaseButtonProps {
  children: ReactNode;
  fullWidth?: boolean;
  variant?: ButtonVariant;
}

export interface ButtonElementProps
  extends
    BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: undefined;
}

export interface ButtonLinkProps
  extends
    BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  href: string;
}

export type ButtonProps = ButtonElementProps | ButtonLinkProps;

const variantToClassNameMap: Record<ButtonVariant, string> = {
  primary:
    'border-page-accent/20 bg-page-accent/14 text-page-text hover:border-page-accent/30 hover:bg-page-accent/20',
  secondary:
    'border-card-border bg-white/40 text-page-text hover:border-page-accent/20 hover:bg-white/55',
  tertiary:
    'border-transparent bg-transparent text-page-muted hover:bg-white/35 hover:text-page-text',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fullWidth = false,
  href,
  variant = 'primary',
  ...props
}) => {
  const classes = useClasses(
    'inline-flex rounded-2xl border px-5 py-3 text-sm font-semibold transition-colors duration-200 ease-out cursor-pointer',
    fullWidth ? 'w-full' : undefined,
    variantToClassNameMap[variant],
    className
  );

  const label = (
    <Typography className="text-inherit" type="note">
      {children}
    </Typography>
  );

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={(props as ButtonHTMLAttributes<HTMLButtonElement>).type ?? 'button'}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {label}
    </button>
  );
};
