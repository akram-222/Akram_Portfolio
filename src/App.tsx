import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect, useContext, SyntheticEvent, TouchEventHandler } from "react";
import Sidebar from "./Components/Sidebar";
import NotFoundRoute from "./Pages/404";
import Projects from "./Pages/Projects";
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";
import Search from "./Pages/Search";
import Tooltip from "./Components/Tooltip";
import {IoReloadSharp} from "react-icons/io5";
import SplashScreen from "./Components/splashScreen";
import Blog from "./Pages/blog";
import { DevBlogsContextProvider } from "./Contexts/DEVAPIContext";
import { SidebarProvider } from "./Contexts/sidebarContext";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Terminal from "./Components/cmd/terminal";
import Navigations from "./Pages/navigations";
import Swipeable from "./Components/swipeable";
import { BsEmojiSmile } from "react-icons/bs";
const App = () => {
  const [isLogging, setIsLogging] = useState(false);
  const [isTimeout, setIsTimeOut] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [swipeY, setSwipeY] = useState<boolean>(false);
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
    }, 5000);
  }, []);
  const onSwipeDown = (e) => {
    setSwipeY(true)
  }
  const onSwipeUp = (e) => { console.log('up') }
  const onSwipeLeft = (e) => { console.log('left') }
  const onSwipeRight = (e) => { console.log('right') }
  return (
    <SidebarProvider>
      <DevBlogsContextProvider>
        <div className="flex bg-white dark:bg-gray-900/10">
          <Tooltip />
          {/* {isTimeout ? null : <SplashScreen />} */}
          {/* <SplashScreen/> */}
          <BrowserRouter>

            <div className="flex h-screen w-full">

              <Sidebar />

              <div className="dark:bg-1 sm:p-2 relative flex-grow overflow-auto flex flex-wrap">
                <div className={`${swipeY ? "" : "hidden"} gap-2 w-full flex items-center justify-center dark:bg-gray-700/20 py-1`}>
                  <button className="animate-fade-in text-xs font-bold text-red-400 border rounded dark:border-[#353535] dark:bg-[#161b22] px-2 py-1 flex items-center justify-center" onClick={() => window.location.reload()}>Reload <IoReloadSharp className="ml-2" size={16} /></button>
                  <button className="animate-fade-in text-xs font-bold border rounded dark:border-[#353535]  px-2 py-1 flex items-center justify-center" onClick={() => setSwipeY(false)}>Keep <BsEmojiSmile className="ml-2" size={16} /></button>
                  
                  </div>
                <Swipeable onSwipeTop={e => onSwipeUp(e)} onSwipeDown={e => onSwipeDown(e)} onSwipeLeft={e => onSwipeLeft(e)} onSwipeRight={(e) => onSwipeRight(e)} >
                  <Routes>
                    {isLogging ? (
                      <Route
                        path="/dashboard"
                        element={
                          <Dashboard

                          />
                        }
                      />
                    ) : null}
                    <Route
                      path="/projects"
                      element={
                        <Projects

                        />
                      }
                    />

                    <Route
                      path="/search"
                      element={
                        <Search

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

                            />
                          }
                        />
                      );
                    })}
                    <Route
                      path="/courses"
                      element={
                        <Courses

                        />
                      }
                    />
                    <Route
                      path="/blog"
                      element={
                        <Blog

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

                            />
                          }
                        />
                      );
                    })}
                    <Route path="/navigations" element={<Navigations />} />
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
                </Swipeable>
                {/* <Footer /> */}
              </div>
            </div>
          </BrowserRouter>
        </div>
      </DevBlogsContextProvider>
    </SidebarProvider>
  );
};

export default App;
