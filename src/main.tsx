import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

const redirectPath = new URLSearchParams(window.location.search).get('p');
if (redirectPath) {
  window.history.replaceState(null, '', redirectPath);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
