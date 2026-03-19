import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export type ProviderTheme = Theme | 'system';

const getSystemTheme = (): Theme => {
  if (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  return 'light';
};

export const useTheme = (theme: ProviderTheme): Theme => {
  const [resolvedTheme, setResolvedTheme] = useState<Theme>(
    theme === 'system' ? getSystemTheme() : theme
  );

  useEffect(() => {
    if (theme !== 'system') {
      setResolvedTheme(theme);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => {
      setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    updateTheme();
    mediaQuery.addEventListener('change', updateTheme);

    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
    };
  }, [theme]);

  return resolvedTheme;
};
