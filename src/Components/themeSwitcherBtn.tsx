// import { BsMoon, BsSun } from "react-icons/bs";
// import { useState, useEffect } from "react";
// import Alert from "./Alert";
// const ThemeSwitcherBtn = () => {
//   const [isDark, setMode] = useState(true);
//   const [isHidden, setIsHidden] = useState(true);
//   const changeMode = () => {
//     if (
//       localStorage.getItem("color-theme") === "dark" ||
//       (!("color-theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       localStorage.setItem("color-theme", "light");
//       document.documentElement.classList.add("dark");
//       setMode(false);
//       setIsHidden(true);
//     } else {
//       localStorage.setItem("color-theme", "dark");
//       document.documentElement.classList.remove("dark");
//       setMode(true);
//       setIsHidden(false);
//     }
//   };
//   useEffect(() => {
//     if (
//       localStorage.getItem("color-theme") === "dark" ||
//       (!("color-theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       setMode(true);
//       changeMode();
//     } else {
//       setMode(false);
//       changeMode();
//     }
//   }, []);
//   return (
//     <>
//       <div className="bg-blue-600 dark:bg-gray-700/20 shadow-xl dark:shadow-sm rounded-full xl:rounded-xl w-full flex items-center justify-start sm:justify-center xl:justify-start">
//         <button
//           onClick={() => changeMode()}
//           type="button"
//           className={`flex items-center justify-center xl:justify-start w-full h-full dark:text-gray-400 text-sm p-2.5`}
//         >
//           {!isDark ? (
//             <BsSun size={30} className="animate-fade-in-top text-white" />
//           ) : (
//             <BsMoon size={30} className="animate-fade-in-top text-white" />
//           )}
//           <div className="block sm:hidden xl:block ml-3">
//             <div className="text-sm font-bold text-white">
//               Convert mode to :
//             </div>
//             <div className="text-sm text-left text-gray-400">
//               {localStorage.getItem("color-theme") || "light"} mode
//             </div>
//           </div>
//         </button>
//       </div>{" "}
//       <Alert
//         changeMode={changeMode}
//         isHidden={isHidden}
//         setIsHidden={setIsHidden}
//         msg="Light mode is still being developed."
//         detailedMsg="We advised utilising dark mode at this time since light mode is currently under development and might hurt your eyes."
//       />
//     </>
//   );
// };

// export default ThemeSwitcherBtn;
import { BsMoon, BsSun } from "react-icons/bs";
import { useState, useEffect } from "react";
import Alert from "./Alert";

const setDarkMode = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  }
};

const ThemeSwitcherBtn = () => {
  const [isDark, setMode] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("color-theme") || "light"
  );

  const toggleMode = () => {
    setMode(!isDark);
    setIsHidden(!isHidden);
    setDarkMode(!isDark);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme =
      localStorage.getItem("color-theme") === "dark" || prefersDarkMode;

    setMode(initialTheme);
    setDarkMode(initialTheme);
  }, []);

  return (
    <>
      <div
        className={`bg-blue-600 dark:bg-gray-700/20 shadow-xl dark:shadow-sm rounded-full xl:rounded-xl w-full flex items-center justify-start sm:justify-center xl:justify-start`}
      >
        <button
          onClick={toggleMode}
          type="button"
          className={`flex items-center justify-center xl:justify-start w-full h-full dark:text-gray-400 text-sm p-2.5`}
        >
          {isDark ? (
            <BsMoon size={30} className="animate-fade-in-top text-white" />
          ) : (
            <BsSun size={30} className="animate-fade-in-top text-white" />
          )}
          <div className="block sm:hidden xl:block ml-3">
            <div className="text-sm font-bold text-white">
              Convert mode to :
            </div>
            <div className="text-sm text-left text-gray-400">
              {themeMode} mode
            </div>
          </div>
        </button>
      </div>
      <Alert
        changeMode={toggleMode}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        msg="Light mode is still being developed."
        detailedMsg="We advised utilising dark mode at this time since light mode is currently under development and might hurt your eyes."
      />
    </>
  );
};

export default ThemeSwitcherBtn;
