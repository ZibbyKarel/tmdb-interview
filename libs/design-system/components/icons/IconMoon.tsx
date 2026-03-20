import type * as React from 'react';
import type { SVGProps } from 'react';

export interface IconMoonProps extends SVGProps<SVGSVGElement> {}

export const IconMoon: React.FC<IconMoonProps> = (props) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M15.5 3.8A7.8 7.8 0 1 0 20.2 17 8.5 8.5 0 1 1 15.5 3.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
};
