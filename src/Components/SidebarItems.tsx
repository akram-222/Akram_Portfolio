import { AiFillPieChart } from "react-icons/ai";
import listPng from "../assests/sidebar/list/list.png";
import {
  BsFillGearFill,
  BsStars,
  BsTagsFill,
  BsVectorPen,
  BsTerminal
} from "react-icons/bs";
import { FaFeatherAlt } from "react-icons/fa";

const sidebarItems = [
  [
    {
      id: "0",
      title: "Dashboard",
      notifications: false,
      icon: (
        <AiFillPieChart
          size={30}
          className="text-yellow-400 dark:text-yellow-400"
        />
      ),
      bgColor: "bg-yellow-900 dark:bg-yellow-900",
      textColor: "text-yellow-900 dark:text-yellow-900",
    },
    {
      id: "1",
      title: "Projects",
      notifications: false,
      icon: (
        <img src={listPng} className="w-30" alt="projects list"/>
      ),
      bgColor: "bg-lime-900 dark:bg-lime-900",
      textColor: "text-lime-900 dark:text-lime-900",
    },
    {
      id: "2",
      title: "Blog",
      notifications: false,
      icon: (
        <BsVectorPen size={30} className="text-teal-400 dark:text-teal-400" />
      ),
      bgColor: "bg-teal-900 dark:bg-teal-900",
      textColor: "text-teal-900 dark:text-teal-900",
    },
  ],
  [
    {
      id: "3",
      title: "About",
      notifications: false,
      icon: (
        <BsStars size={30} className="text-indigo-400 dark:text-indigo-400" />
      ),
      bgColor: "bg-indigo-900 dark:bg-indigo-900",
      textColor: "text-indigo-900 dark:text-indigo-900",
    },
    {
      id: "4",
      title: "Status",
      notifications: false,
      icon: (
        <BsTagsFill size={30} className="text-blue-400 dark:text-blue-400" />
      ),
      bgColor: "animate-pulse-zoomout bg-blue-900 dark:bg-blue-900",
      textColor: "text-blue-900 dark:text-blue-900",
    },
    {
      id: "5",
      title: "Settings",
      notifications: false,
      icon: (
        <BsFillGearFill
          size={30}
          className="text-purple-400 dark:text-purple-400"
        />
      ),
      bgColor: "bg-purple-900 dark:bg-purple-900",
      textColor: "text-purple-900 dark:text-purple-900",
    },
    {
      id: "6",
      title: "Terminal",
      notifications: 'new',
      icon: (
        <BsTerminal
          size={30}
          className="text-purple-400 dark:text-purple-400"
        />
      ),
      bgColor: "bg-purple-900 dark:bg-purple-900",
      textColor: "text-purple-900 dark:text-purple-900",
    },
  ],
];

export default sidebarItems;
