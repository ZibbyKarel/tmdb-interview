import type { FC, HTMLAttributes, ReactNode } from 'react';

export enum SurfaceCardDataTestIds {
  Wrapper = 'surface-card-wrapper',
}

export interface SurfaceCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const SurfaceCard: FC<SurfaceCardProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = [
    'w-full max-w-3xl rounded-[28px] border border-card-border bg-card-bg p-8 shadow-hero backdrop-blur-[18px] sm:p-12',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      className={classes}
      data-testid={SurfaceCardDataTestIds.Wrapper}
      {...props}
    >
      {children}
    </section>
  );
};
