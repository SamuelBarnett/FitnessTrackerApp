import React from 'react';
import ReactDOM from 'react-dom/client';
import './client/styles/index.css';
import App from './client/components/App.js';
import reportWebVitals from './reportWebVitals.js';
// import Goals from './client/pages/goals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);