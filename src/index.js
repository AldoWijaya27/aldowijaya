import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PortoApp from './PortoApp';
import './styles/responsive.css';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PortoApp />
  </BrowserRouter>
);
