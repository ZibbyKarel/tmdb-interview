import {
  DesignSystemProvider,
  useTheme,
  type ProviderTheme,
  type Theme,
} from '@ds';
import type * as React from 'react';
import { useEffect, useState } from 'react';
import { AppThemeContext } from './appTheme';

const themeStorageKey = 'client-web-theme';

const getStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return null;
};

export interface AppThemeProviderProps extends React.PropsWithChildren {}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const [themeOverride, setThemeOverride] = useState<Theme | null>(
    getStoredTheme
  );
  const theme: ProviderTheme = themeOverride ?? 'system';
  const resolvedTheme = useTheme(theme);

  useEffect(() => {
    if (!themeOverride) {
      window.localStorage.removeItem(themeStorageKey);
      return;
    }

    window.localStorage.setItem(themeStorageKey, themeOverride);
  }, [themeOverride]);

  const toggleTheme = () => {
    setThemeOverride(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppThemeContext.Provider value={{ resolvedTheme, theme, toggleTheme }}>
      <DesignSystemProvider theme={theme}>{children}</DesignSystemProvider>
    </AppThemeContext.Provider>
  );
};
