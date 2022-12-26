import { AiFillPieChart } from "react-icons/ai";
import {
  BsFillGearFill,
  BsStars,
  BsTagsFill,
  BsVectorPen,
} from "react-icons/bs";
import { FaFeatherAlt } from "react-icons/fa";

const sidebarItems = [
  [
    {
      id: "0",
      title: "Dashboard",
      notifications: false,
      icon: <AiFillPieChart size={30} className="dark:text-yellow-500" />,
      color: "dark:bg-yellow-900",
    },
    {
      id: "1",
      title: "Projects",
      notifications: false,
      icon: <FaFeatherAlt size={30} className="dark:text-lime-500" />,
      color: "dark:bg-lime-900",
    },
    {
      id: "2",
      title: "Blog",
      notifications: false,
      icon: <BsVectorPen size={30} className="dark:text-teal-500" />,
      color: "dark:bg-teal-900",
    },
  ],
  [
    {
      id: "3",
      title: "Skills",
      notifications: false,
      icon: <BsStars size={30} className="dark:text-indigo-500" />,
      color: "dark:bg-indigo-900",
    },
    {
      id: "4",
      title: "Status",
      notifications: false,
      icon: <BsTagsFill size={30} className="dark:text-blue-500" />,
      color: "dark:bg-blue-900",
    },
    {
      id: "5",
      title: "Settings",
      notifications: false,
      icon: <BsFillGearFill size={30} className="dark:text-purple-500" />,
      color: "dark:bg-purple-900",
    },
  ],
];

export default sidebarItems;
