import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';
import Routes from './routes/index.tsx';
import { ToasterConfig } from '@/components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToasterConfig />
    <Routes />
  </React.StrictMode>,
);
