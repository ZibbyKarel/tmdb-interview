import type { ProviderTheme, Theme } from '@ds';
import { createContext, useContext } from 'react';

export interface AppThemeContextValue {
  resolvedTheme: Theme;
  theme: ProviderTheme;
  toggleTheme: () => void;
}

export const AppThemeContext = createContext<AppThemeContextValue | null>(null);

export const useAppTheme = (): AppThemeContextValue => {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }

  return context;
};
