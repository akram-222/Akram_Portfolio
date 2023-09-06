import { BsMoon, BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";
import Alert from "./Alert";
const ThemeSwitcherBtn = () => {
  const [isDark, setMode] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const changeMode = () => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.add("dark");
      setMode(false);
      setIsHidden(true);
    } else {
      localStorage.setItem("color-theme", "dark");
      document.documentElement.classList.remove("dark");
      setMode(true);
      setIsHidden(false);
    }
  };
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode(true);
      changeMode();
    } else {
      setMode(false);
      changeMode();
    }
  }, []);
  return (
    <>
      <div className="bg-blue-600 w-12 h-12 lg:w-full flex-nowrap dark:bg-gray-700/20 shadow-xl dark:shadow-sm rounded-full xl:rounded-xl flex items-center justify-start sm:justify-center xl:justify-start">
        <button
          onClick={() => changeMode()}
          type="button"
          className={`flex flex-nowrap items-center justify-center xl:justify-start w-full h-full dark:text-gray-400 text-sm p-2.5`}
        >
          {!isDark ? (
            <BsSun size={30} className="w-7 h-7 xl:w-8 xl:h-8 animate-fade-in-top text-white" />
          ) : (
            <BsMoon size={30} className="w-7 h-7 xl:w-8 xl:h-8 animate-fade-in-top text-white" />
          )}
          <div className="block sm:hidden xl:block ml-3 flex flex-shrink-0">
            <div className="text-sm font-bold text-white">
              Convert mode to :
            </div>
            <div className="text-sm text-left text-gray-400">
              {localStorage.getItem("color-theme") || "light"} mode
            </div>
          </div>
        </button>
      </div>{" "}
      <Alert
        changeMode={changeMode}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        msg="Light mode is still being developed."
        detailedMsg="We advised utilising dark mode at this time since light mode is currently under development and might hurt your eyes."
      />
    </>
  );
};

export default ThemeSwitcherBtn;
