import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { ReactQueryProvider } from './app/react-query-provider';
import './styles.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </React.StrictMode>
);
