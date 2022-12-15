
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DevBlogsContextProvider } from './Contexts/DEVAPIContext';
import { GitHubReposContextProvider } from './Contexts/GitHubAPIContext';
import "./index.css"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DevBlogsContextProvider>
      <GitHubReposContextProvider>
        <App />
      </GitHubReposContextProvider>
    </DevBlogsContextProvider>
  </React.StrictMode>
);
