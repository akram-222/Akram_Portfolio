import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import NotFoundRoute from "./Pages/404";
import Projects from "./Pages/Projects";
import Dashboard from "./Pages/Dashboard";
import Status from "./Pages/Status";
import Search from "./Pages/Search";
import Tooltip from "./Components/Tooltip";
import RepoDetails from "./Pages/RepoDetails";
import SplashScreen from "./Components/splashScreen";
import Blog from "./Pages/blog";
import { DevBlogsContextProvider } from "./Contexts/DEVAPIContext";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Terminal from "./Components/cmd/terminal";
const App = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [isTimeout, setIsTimeOut] = useState(false);
  const [theme, setTheme] = useState("dark");
  const themeVars =
    theme === "dark"
      ? {
          app: { backgroundColor: "#333444" },
          terminal: { boxShadow: "0 2px 5px #111" },
          window: { backgroundColor: "#222345", color: "#F4F4F4" },
          field: {
            backgroundColor: "#222333",
            color: "#F4F4F4",
            fontWeight: "normal",
          },
          cursor: { animation: "1.02s blink-dark step-end infinite" },
        }
      : {
          app: { backgroundColor: "#ACA9BB" },
          terminal: { boxShadow: "0 2px 5px #33333375" },
          window: { backgroundColor: "#5F5C6D", color: "#E3E3E3" },
          field: {
            backgroundColor: "#E3E3E3",
            color: "#474554",
            fontWeight: "bold",
          },
          cursor: { animation: "1.02s blink-light step-end infinite" },
        };
  useEffect(() => {
    setTimeout(() => {
      setIsTimeOut(true);
    }, 6000);
  }, []);
  // useEffect(() => {
  //   if (
  //     localStorage.getItem("color-theme") === "dark" ||
  //     (!("color-theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("color-theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);
  return (
    <DevBlogsContextProvider>
      <div className="flex bg-white dark:bg-gray-900/10">
        <Tooltip />
        {isTimeout ? null : <SplashScreen />}
        {/* <SplashScreen/> */}
        <BrowserRouter>
          <Sidebar
            onSidebarHide={() => {
              onSetShowSidebar(false);
            }}
            showSidebar={showSidebar}
          />
          <div className="flex min-h-screen w-full">
            <div className="w-full hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
              .
            </div>
            <div className="bg-1 p-2 relative flex-grow flex flex-wrap">
              <Routes>
                {isLogging ? (
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
                ) : null}
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
                <Route
                  path="projects/:repoName"
                  element={
                    <RepoDetails
                      onSidebarHide={() => {
                        onSetShowSidebar(true);
                      }}
                    />
                  }
                />
                <Route
                  path="/search"
                  element={
                    <Search
                      onSidebarHide={() => {
                        onSetShowSidebar(true);
                      }}
                    />
                  }
                />
                {["/", "/about"].map((route, i) => {
                  return (
                    <Route
                      key={i}
                      path={route}
                      element={
                        <About
                          onSidebarHide={() => {
                            onSetShowSidebar(true);
                          }}
                        />
                      }
                    />
                  );
                })}
                <Route
                  path="/status"
                  element={
                    <Status
                      onSidebarHide={() => {
                        onSetShowSidebar(true);
                      }}
                    />
                  }
                />
                <Route
                  path="/blog"
                  element={
                    <Blog
                      onSidebarHide={() => {
                        onSetShowSidebar(true);
                      }}
                    />
                  }
                />
                {["/dashboard", "/signup"].map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route}
                      element={
                        <Login
                          setIsLogging={setIsLogging}
                          isLogging={isLogging}
                          onSidebarHide={() => {
                            onSetShowSidebar(true);
                          }}
                        />
                      }
                    />
                  );
                })}
                <Route path="/*" element={<NotFoundRoute />} />
                <Route
                  path="/terminal"
                  element={
                    <div
                      id="app"
                      className="flex items-center justify-center w-full"
                      style={themeVars.app}
                    >
                      <Terminal theme={themeVars} setTheme={setTheme} />
                    </div>
                  }
                />
              </Routes>
              {/* <Footer /> */}
            </div>
          </div>
        </BrowserRouter>
      </div>
    </DevBlogsContextProvider>
  );
};

export default App;
