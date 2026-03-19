import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryProvider } from './app/react-query-provider';
import { router } from './routing';
import { RouterProvider } from '@tanstack/react-router';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={router} />;
    </ReactQueryProvider>
  </React.StrictMode>
);
