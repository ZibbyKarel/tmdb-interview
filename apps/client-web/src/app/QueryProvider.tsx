import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type * as React from 'react';
import type { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

export interface QueryProviderProps extends PropsWithChildren {}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
