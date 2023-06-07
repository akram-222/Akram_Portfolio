import { useState } from "react";
import { config, useSpring, animated } from "react-spring";
import MenuItem from "./MenuItem";
import sidebarItems from "./SidebarItems";
import logo from "../assests/a.png";
import ThemeSwitcherBtn from "./themeSwitcherBtn";
import { BsXCircle } from "react-icons/bs";
function Sidebar({ onSidebarHide, showSidebar }) {
  const [selected, setSelected] = useState("0");
  const { dashOffset, indicatorWidth, precentage } = useSpring({
    dashOffset: 26.015,
    indicatorWidth: 70,
    precentage: 77,
    from: { dashOffset: 113.113, indicatorWidth: 0, precentage: 0 },
    config: config.molasses,
  });

  return (
    <div
      className={`
        fixed inset-y-0 left-0 bg-gray-200 border-r border-gray-300 dark:border-transparent dark:bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10
        ${showSidebar ? "flex" : "hidden"}
      `}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 border-b border-gray-400/50">
          <img
            src={logo}
            className="border border-gray-600/20 rounded mix-blend-lighten"
            alt="logo"
          />
          <div className="hidden ml-2 xl:block font-bold text-xl dark:text-white">
            Akram Ashraf A.
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <button onClick={onSidebarHide} type="button" className={`sm:hidden`}>
            <BsXCircle size={20} />
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        <div className="w-full p-3 h-24 sm:h-20 xl:h-24 hidden sm:block flex-shrink-0">
          <ThemeSwitcherBtn />
        </div>

        {sidebarItems[0].map((i) => (
          <MenuItem key={i.id} item={i} onClick={setSelected} />
        ))}
        <div className="mt-8 mb-0 font-bold px-3 block sm:hidden xl:block">
          SHORTCUTS
        </div>
        {sidebarItems[1].map((i) => (
          <MenuItem key={i.id} item={i} onClick={setSelected} />
        ))}
        <div className="flex-grow" />
        <div className="w-full p-3 h-28 hidden sm:block sm:h-20 xl:h-32">
          <div
            className="rounded-xl w-full h-full px-3 sm:px-0 xl:px-3 overflow-hidden"
            style={{
              backgroundImage:
                "url('https://assets.codepen.io/3685267/res-react-dash-usage-card.svg')",
            }}
          >
            <div className="block sm:hidden xl:block pt-3">
              <div className="font-bold text-gray-300 text-sm">Used Space</div>
              <div className="text-gray-500 text-xs">
                Admin updated 09:12 am November 08,2020
              </div>
              <animated.div className="text-right text-gray-400 text-xs">
                {precentage.to((i) => `${Math.round(i)}%`)}
              </animated.div>
              <div className="w-full text-gray-300">
                <svg
                  viewBox="0 0 100 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="5"
                    y1="5.25"
                    x2="95"
                    y2="5.25"
                    stroke="#3C3C3C"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <animated.line
                    x1="5"
                    y1="5.25"
                    x2={indicatorWidth}
                    y2="5.25"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="hidden sm:block xl:hidden ">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" fill="#2C2C2D" />
                <path
                  d="M 28 28 m 0, -18 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
                  stroke="#3C3C3C"
                  strokeWidth="6"
                />
                <animated.path
                  d="M 28 28 m 0, -18 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeDasharray="113.113"
                  strokeDashoffset={dashOffset}
                  strokeWidth="6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
