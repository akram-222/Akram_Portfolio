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
      className={`flex items-center w-full h-full text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5`}
    >
      {!isDark ? <BsSun size={30} /> : <BsMoon size={30} />}
      <div className="block sm:hidden xl:block ml-3">
        <div className="text-sm font-bold text-white">Convert mode to :</div>
        <div className="text-sm  text-left">
          {localStorage.getItem("color-theme")} mode
        </div>
      </div>
    </button>
  );
};

export default ThemeSwitcherBtn;
