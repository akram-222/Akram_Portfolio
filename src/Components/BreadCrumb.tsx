import {
  TbLayoutSidebarLeftExpand,
  TbBrandLinkedin,
  TbLayoutSidebarRightExpand,
  TbBrandTwitter,
  TbBrandFacebook,
} from "react-icons/tb";
import { BsFillGridFill } from "react-icons/bs";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import SocialShareButton from "./socialShareButton";
import { SidebarContext } from "../Contexts/sidebarContext";
// import {ShareSocial} from 'react-share-social'

const BreadCrumb = () => {
  const location = useLocation();
  const currentRoute = location.pathname.slice(1, location.pathname.length);
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <nav
      className="flex border border-gray-600/50 mb-3 py-1 px-3 rounded sm:block"
      aria-label="Breadcrumb"
    >
      <ol className="flex sticky top-0 p-1 gap-2 w-full md:space-x-3">
        <li
          onClick={toggleSidebar}
          className="cursor-pointer items-center font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Link to={'/navigations'}><BsFillGridFill className="sm:hidden" size={17} /></Link>
          <div className="hidden sm:inline-flex">
            {isSidebarOpen ? (
              <TbLayoutSidebarRightExpand size={23} />
            ) : (
              <TbLayoutSidebarLeftExpand size={23} />
            )}
          </div>
        </li>
        <li className="whitespace-nowrap text-xs mr-2 dark:text-gray-400 sm:text-sm font-bold flex items-center border-gray-400/50 border-l-2 pl-2">
          Share the current page on{" "}
        </li>
        <li className="ml-0 cursor-pointer inline-flex font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <SocialShareButton
            url={currentRoute}
            platform="https://twitter.com/intent/tweet?url="
          >
            <TbBrandTwitter className="sm:w-5 sm:h-5" />
          </SocialShareButton>
        </li>
        <li className="ml-0 cursor-pointer inline-flex font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <SocialShareButton
            url={currentRoute}
            platform="https://www.linkedin.com/shareArticle?mini=true&url="
          >
            <TbBrandLinkedin className="sm:w-5 sm:h-5" />
          </SocialShareButton>
        </li>
        <li className="ml-0 cursor-pointer inline-flex font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <SocialShareButton
            url={currentRoute}
            platform="https://www.facebook.com/sharer/sharer.php?u="
          >
            <TbBrandFacebook className="sm:w-5 sm:h-5" />
          </SocialShareButton>
        </li>
      </ol>
    </nav>
  );
};
export default BreadCrumb;
