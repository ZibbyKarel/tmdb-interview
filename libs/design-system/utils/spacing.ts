import { Spacing } from '../types/spacing';

export const getSpacingInPx = (spacing: Spacing): string =>
  `${(Number(spacing) / 25) * 4}px`;
