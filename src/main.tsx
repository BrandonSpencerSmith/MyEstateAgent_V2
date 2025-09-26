import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Hydrate for SSG or render normally
const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
  // If pre-rendered content exists, hydrate
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Normal client-side rendering
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}</parameter>
