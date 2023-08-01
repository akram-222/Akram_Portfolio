import { useState } from "react";
import switcher from "../Utils/minorFunctions/switcher";
import { skillsTab, skillsTabContent } from "../Utils/localeData/skillsData";
const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="">
      <h3 className="border-gray-600/30 border font-bold bg-indigo-200 text-black dark:bg-card p-2 rounded-t-lg mb-1 dark:text-gray-100">
        <span className="text-gray-400/30">#3</span> Skills List
      </h3>
      <div className="bg-white dark:bg-[#171717]" 
      style={{'height':'calc(100% - 50px)'}}>
        <ul className="flex justify-between flex-wrap text-sm font-medium text-center dark:border-b dark:border-[#353535]">
          {skillsTab?.map(({ tabName, tabIcon }, index) => (
            <li
              key={index}
              className={`w-1/3 justify-center tabMember inline-flex cursor-pointer dark:hover:text-white gap-2 p-4 ${
                !index ? "active" : ""
              }`}
              onClick={(e) => {
                switcher(e, "active", ".tabMember");
                setCurrentIndex(index);
              }}
            >
              {tabIcon}
              {tabName}
            </li>
          ))}
        </ul>
        <div className="tabContent h-48 overflow-auto">
          {skillsTabContent[currentIndex]}
        </div>
      </div>
    </div>
  );
};
export default Skills;
