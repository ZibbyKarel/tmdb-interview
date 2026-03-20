import { useClasses } from '@ds';
import type * as React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ToggleProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  offIcon: ReactNode;
  onIcon: ReactNode;
  pressed: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  className,
  offIcon,
  onClick,
  onIcon,
  pressed,
  type = 'button',
  ...props
}) => {
  const classes = useClasses(
    'relative inline-flex h-10 w-[84px] cursor-pointer items-center rounded-full border text-page-text transition-colors duration-200 ease-out hover:border-page-accent/30',
    pressed
      ? 'border-page-accent/40 bg-page-accent/14'
      : 'border-card-border bg-white/40',
    className
  );
  const thumbClasses = useClasses(
    'absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out',
    pressed ? 'translate-x-11' : 'translate-x-0'
  );
  const offIconClasses = useClasses(
    'flex h-7 w-7 items-center justify-center transition-colors duration-200 ease-out',
    pressed ? 'text-page-muted' : 'text-page-text'
  );
  const onIconClasses = useClasses(
    'flex h-7 w-7 items-center justify-center transition-colors duration-200 ease-out',
    pressed ? 'text-slate-950' : 'text-page-muted'
  );

  return (
    <button
      aria-pressed={pressed}
      className={classes}
      onClick={onClick}
      type={type}
      {...props}
    >
      <span className={thumbClasses} />
      <span
        aria-hidden="true"
        className="relative z-10 flex w-full items-center justify-between px-1 text-page-muted"
      >
        <span className={offIconClasses}>{offIcon}</span>
        <span className={onIconClasses}>{onIcon}</span>
      </span>
    </button>
  );
};
