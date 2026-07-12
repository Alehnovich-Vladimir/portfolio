import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider, ThemeProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
