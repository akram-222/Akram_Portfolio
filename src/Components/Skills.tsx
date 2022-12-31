import { useState } from "react";
import switcher from "../Utils/minorFunctions/switcher";
import {skillsTab,skillsTabContent} from "../Utils/localeData/skillsData"
const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <div className="bg-white dark:bg-[#171717]">
      <div className="">
        <ul className="flex justify-between flex-wrap text-sm font-medium text-center dark:border-b dark:border-[#353535]">
          {skillsTab?.map(({ tabName, tabIcon }, index) => (
            <li
              className={`tabMember inline-flex cursor-pointer dark:hover:text-white gap-2 p-4 ${
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
        <div className="tabContent h-48 overflow-auto">{skillsTabContent[currentIndex]}</div>
      </div>
    </div>
  );
};
export default Skills;
