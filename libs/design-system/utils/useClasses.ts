import { useMemo } from 'react';

export const useClasses = (...classes: (string | undefined | null)[]) =>
  useMemo(() => classes.filter(Boolean).join(' '), classes);
