import { BsMoon, BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";
import Alert from "./Alert";
const ThemeSwitcherBtn = () => {
  const [isDark, setMode] = useState(true);
  const changeMode = () => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.add("dark");
      setMode(false);
    } else {
      localStorage.setItem("color-theme", "dark");
      document.documentElement.classList.remove("dark");

      setMode(true);
    }
  };
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode(true);
    } else {
      setMode(false);
    }
  }, []);
  return (
    <>
      <div className="bg-blue-600  dark:bg-gray-700/20 shadow-xl dark:shadow-sm rounded-full xl:rounded-xl w-full flex items-center justify-start sm:justify-center xl:justify-start">
        <button
          onClick={() => changeMode()}
          type="button"
          className={`flex items-center h-full dark:text-gray-400 text-sm p-2.5`}
        >
          {!isDark ? (
            <BsSun size={30} className="text-white" />
          ) : (
            <BsMoon size={30} className="text-white" />
          )}
          <div className="block sm:hidden xl:block ml-3">
            <div className="text-sm font-bold text-white">
              Convert mode to :
            </div>
            <div className="text-sm  text-left text-gray-400">
              {localStorage.getItem("color-theme")} mode
            </div>
          </div>
        </button>
      </div>
      {isDark ? (
        <Alert
          msg="Light mode is still being developed."
          detailedMsg="We advised utilising dark mode at this time since light mode is currently under development and might cause eye sickness."
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ThemeSwitcherBtn;
