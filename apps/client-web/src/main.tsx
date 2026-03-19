import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './routing';
import { RouterProvider } from '@tanstack/react-router';
import { QueryProvider } from './app/QueryProvider';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </React.StrictMode>
);
