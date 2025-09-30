import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This is the crucial line that loads all the styles
import App from './App.jsx'; // This points to your main app component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);