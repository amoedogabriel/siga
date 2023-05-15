import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from './ui/pages/login';

const container = document.getElementById('main');

const root = createRoot(container);
root.render(
  <StrictMode>
    <Login />
  </StrictMode>
);
