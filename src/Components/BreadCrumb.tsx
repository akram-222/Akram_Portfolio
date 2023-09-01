import { TbLayoutSidebarLeftExpand,TbBrandLinkedin,TbLayoutSidebarRightExpand,TbBrandTwitter,TbBrandFacebook } from "react-icons/tb";
import {useState,useContext} from 'react';
import {useLocation} from "react-router-dom";
import SocialShareButton from "./socialShareButton"
import {SidebarContext } from "../Contexts/sidebarContext";
// import {ShareSocial} from 'react-share-social' 

const BreadCrumb = () => {
  const location = useLocation();
  const currentRoute = location.pathname.slice(1, location.pathname.length);
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    
    <nav
      className="flex border border-gray-600/50 mb-3 py-1 px-3 rounded hidden sm:block"
      aria-label="Breadcrumb"
    >
      <ol className="flex sticky top-0 p-1 gap-2 w-full space-x-1 md:space-x-3">
        <li onClick={toggleSidebar} className="cursor-pointer inline-flex items-center font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          {isSidebarOpen ?<TbLayoutSidebarRightExpand size={23} />:<TbLayoutSidebarLeftExpand size={23} />}
        </li>
        <li className="mr-2 dark:text-gray-400 text-sm font-bold flex items-center border-l-2 pl-2">
Share this page on         </li>
        <li className="ml-0 cursor-pointer inline-flex font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
       <SocialShareButton url={currentRoute} platform='https://twitter.com/intent/tweet?url='>
        <TbBrandTwitter size="25"/>
        </SocialShareButton>
    </li>
    <li className="ml-0 cursor-pointer inline-flex font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <SocialShareButton url={currentRoute} platform='https://www.linkedin.com/shareArticle?mini=true&url='>
        <TbBrandLinkedin size="25"/>
        </SocialShareButton>
    </li>
    <li className="ml-0 cursor-pointer inline-flex font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <SocialShareButton url={currentRoute} platform='https://www.facebook.com/sharer/sharer.php?u='>
        <TbBrandFacebook size="23"/>
        </SocialShareButton>
    </li>
      </ol>
    </nav>
  );
};
export default BreadCrumb;
