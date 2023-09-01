import React, { useState,useEffect,useContext } from "react";
import {Link} from 'react-router-dom'
import { config, useSpring, animated } from "react-spring";
import {SidebarContext} from "../Contexts/sidebarContext"
import MenuItem from "./MenuItem";
import sidebarItems from "./SidebarItems";
import logo from "../assests/a.png";
import ThemeSwitcherBtn from "./themeSwitcherBtn";
import { BsXCircle } from "react-icons/bs";
function Sidebar() {
  const [selected, setSelected] = useState("0");
  const { dashOffset, indicatorWidth, precentage } = useSpring({
    dashOffset: 26.015,
    indicatorWidth: 70,
    precentage: 77,
    from: { dashOffset: 113.113, indicatorWidth: 0, precentage: 0 },
    config: config.molasses,
  });
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  
  return (
    <div
      className={`
      sm:block flex-shrink-0 inset-y-0 hidden left-0 bg-gray-200 flex-nowrap transition-all duration-500  border-r border-gray-300 dark:border-transparent dark:bg-card  flex-col z-10
      ${isSidebarOpen ?  "sm:w-20 xl:w-60 opacity-100":"w-0 opacity-0"}
        `}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <Link to="./about" className="flex flex-nowrap items-center h-full sm:justify-center xl:justify-start p-2 border-b border-gray-400/50">
          <img
            src={logo}
            className="w-[40px] mix-blend-difference dark:mix-blend-unset"
            alt="logo"
          />
          <div className="hidden whitespace-nowrap ml-2 xl:block font-bold text-xl dark:text-white">
            Akram Ashraf A.
          </div>
          <div className="flex-grow sm:hidden xl:block" />
         
        </Link>
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
      </div> 
    </div>

    // <div className={`${isSidebarOpen ? "sm:w-20 xl:w-60":""} w-0 transition-all duration-500 sm:block flex-shrink-0`}>
    // <div
    //   className={`
    //   sm:block flex-shrink-0 inset-y-0 hidden left-0 bg-gray-200 flex-nowrap transition-all duration-500  border-r border-gray-300 dark:border-transparent dark:bg-card  flex-col z-10
    //   ${isSidebarOpen ?  "sm:w-20 xl:w-60 opacity-100":"w-0 opacity-0"}
    //     `}
    // >
    //   <div className="flex-shrink-0 overflow-hidden p-2">
    //     <Link to="./about" className="flex flex-nowrap items-center h-full sm:justify-center xl:justify-start p-2 border-b border-gray-400/50">
    //       <img
    //         src={logo}
    //         className="w-[40px] mix-blend-difference dark:mix-blend-unset"
    //         alt="logo"
    //       />
    //       <div className="hidden whitespace-nowrap ml-2 xl:block font-bold text-xl dark:text-white">
    //         Akram Ashraf A.
    //       </div>
    //       <div className="flex-grow sm:hidden xl:block" />
         
    //     </Link>
    //   </div>
    //   <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
    //     <div className="w-full p-3 h-24 sm:h-20 xl:h-24 hidden sm:block flex-shrink-0">
    //       <ThemeSwitcherBtn />
    //     </div>

    //     {sidebarItems[0].map((i) => (
    //       <MenuItem key={i.id} item={i} onClick={setSelected} />
    //     ))}
    //     <div className="mt-8 mb-0 font-bold px-3 block sm:hidden xl:block">
    //       SHORTCUTS
    //     </div>
    //     {sidebarItems[1].map((i) => (
    //       <MenuItem key={i.id} item={i} onClick={setSelected} />
    //     ))}
    //   </div> 
    // </div>

  );
}

export default Sidebar;
