import { BsMoon, BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";
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
    <button
      onClick={() => changeMode()}
      type="button"
      className={`flex items-center h-full dark:text-gray-400 text-sm p-2.5`}
    >
      {!isDark ? <BsSun size={30} className="text-white"/> : <BsMoon size={30} className="text-white"/>}
      <div className="block sm:hidden xl:block ml-3">
        <div className="text-sm font-bold text-white">Convert mode to :</div>
        <div className="text-sm  text-left text-gray-400">
          {localStorage.getItem("color-theme")} mode
        </div>
      </div>
    </button>
  );
};

export default ThemeSwitcherBtn;
