import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga4';

import { App } from './App.tsx';
import './styles/index.scss';

ReactGA.initialize('G-CK7H97BER3');
ReactGA.send({ hitType: 'pageview', page: '/', title: 'iamandrew.io' });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
