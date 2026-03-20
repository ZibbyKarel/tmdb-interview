import type { Spacing } from './spacing';

export type Padding =
  | Spacing
  | [Spacing, Spacing]
  | [Spacing, Spacing, Spacing, Spacing];

export interface PaddingProps {
  padding?: Padding;
}
