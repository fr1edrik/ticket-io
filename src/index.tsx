import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from './next-i18next.config';
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>
);
