import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DevBlogsContextProvider } from "./Contexts/DEVAPIContext";
import { GITHUBOCTOKITAPICONTEXT } from "./Contexts/OCTOKITAPIContext";
import "./index.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GITHUBOCTOKITAPICONTEXT per_page={6}>
      <DevBlogsContextProvider>
        <App />
      </DevBlogsContextProvider>
    </GITHUBOCTOKITAPICONTEXT>
  </React.StrictMode>
);
