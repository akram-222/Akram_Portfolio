import { IoIosMore } from "react-icons/io";
import ProjectItem from "./projectItem";

const Skelton = ({ className, number }) => {
  return (
    <>
      {new Array(number).fill("").map((item, index) => (
        <tr key={index} className="animate-pulse">
          <td className="sm:p-7 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
            <div className="flex items-center h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </td>
          <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500">
            <div className="flex items-center h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </td>
         
        </tr>
      ))}
    </>
  );
};

export default Skelton;
