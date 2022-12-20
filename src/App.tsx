import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import NotFoundRoute from "./Pages/404";
import Projects from "./Pages/Projects";
import Dashboard from "./Pages/Dashboard";
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
        {/* <ScreenLayout> */}
        <div className="flex w-full">
          <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
            .
          </div>
          <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
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
              <Route
                path="/projects"
                element={
                  <Projects
                    onSidebarHide={() => {
                      onSetShowSidebar(true);
                    }}
                  />
                }
              />
              <Route path="/*"
              element = {<NotFoundRoute />} />
            </Routes>
          </div>
        </div>

        {/* </ScreenLayout> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
