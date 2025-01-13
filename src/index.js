import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing'; 
import  './utils/i18n/i18n';

Sentry.init({
  dsn: 'https://f27b253b1bc09831eb3c74ab33f84d54@o4507946067034112.ingest.de.sentry.io/4507946070048848', 
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
