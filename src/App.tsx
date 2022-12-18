import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/dashboard";
const App = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  return (
    <div className="flex">
      <BrowserRouter>
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                onSidebarHide={() => {
                  onSetShowSidebar(true);
                }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
