import type * as React from 'react';
import type { HTMLAttributes } from 'react';

export interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {}

export const Placeholder: React.FC<PlaceholderProps> = ({ ...props }) => (
  <div
    {...props}
    className="absolute inset-0 h-full w-full animate-pulse bg-slate-200/80"
  />
);
