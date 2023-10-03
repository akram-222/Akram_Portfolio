import 'dynamic-import-polyfill';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DevBlogsContextProvider } from "./Contexts/DEVAPIContext";
import "./index.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <DevBlogsContextProvider>
        <App />
      </DevBlogsContextProvider>
  </React.StrictMode>
);
