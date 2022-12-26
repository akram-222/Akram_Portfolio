import { AiFillPieChart } from "react-icons/ai";

const sidebarItems = [
  [
    {
      id: "0",
      title: "Dashboard",
      notifications: false,
      icon: <AiFillPieChart size={33} className="dark:text-yellow-500" />,
      color1: "dark:bg-yellow-900",
    },
    {
      id: "1",
      title: "Projects",
      notifications: false,
      icon: <AiFillPieChart size={33} className="dark:text-lime-500" />,
      color1: "dark:bg-lime-900",
    },
    {
      id: "2",
      title: "Blog",
      notifications: false,
      icon: <AiFillPieChart size={33} className="dark:text-teal-500" />,
      color1: "dark:bg-teal-900",
    },
  ],
  [
    {
      id: "3",
      title: "Skills",
      notifications: false,
      icon: <AiFillPieChart size={33} className="dark:text-indigo-500" />,
      color1: "dark:bg-indigo-900",
    },
    {
      id: "4",
      title: "Status",
      notifications: false,
      icon: <AiFillPieChart size={33} className="dark:text-blue-500" />,
      color1: "dark:bg-blue-900",
    },
    {
      id: "5",
      title: "Settings",
      notifications: false,
      icon: <AiFillPieChart size={33} className="dark:text-purple-500" />,
      color1: "dark:bg-purple-900",
    },
  ],
];

export default sidebarItems;
