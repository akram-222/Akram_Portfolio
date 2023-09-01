import { TbLayoutSidebarLeftExpand,TbLayoutSidebarRightExpand } from "react-icons/tb";
import {useState,useContext} from 'react';
import {SidebarContext } from "../Contexts/sidebarContext"
const BreadCrumb = () => {
 
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    
    <nav
      className="flex border border-gray-600/20 mb-3 py-1 px-3 rounded hidden sm:block"
      aria-label="Breadcrumb"
    >
      <ol className="flex sticky top-0 p-1 justify-between w-full items-center space-x-1 md:space-x-3">
        <li onClick={toggleSidebar} className="cursor-pointer inline-flex items-center font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          {isSidebarOpen ?<TbLayoutSidebarRightExpand size={23} />:<TbLayoutSidebarLeftExpand size={23} />}
        </li>
      </ol>
    </nav>
  );
};
export default BreadCrumb;
