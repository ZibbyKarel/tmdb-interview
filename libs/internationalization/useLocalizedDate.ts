import { useCallback } from 'react';

export const useLocalizedDate = (): ((date: string) => string) =>
  useCallback((date: string): string => {
    const [year, month, day] = date.split('-').map(Number);

    if (!year || !month || !day) {
      return date;
    }

    return new Intl.DateTimeFormat(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(year, month - 1, day));
  }, []);
