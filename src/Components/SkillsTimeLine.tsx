import { CgAppleWatch, CgScreen, CgServer } from "react-icons/cg";
import {useState} from "react"
import switcher from "../Utils/minorFunctions/switcher";
const SkillsTimeLine = () => {
  const [currentIndex,setCurrentIndex] = useState(0)
  const tabs: { tabName: string; tabIcon: React.ReactNode }[] = [
    { tabName: "Frontend", tabIcon: <CgScreen size={20} /> },
    { tabName: "Backend", tabIcon: <CgServer size={20} /> },
    { tabName: "Softwares", tabIcon: <CgAppleWatch size={20} /> },
  ];
const tabContent = {
  0:"tab1",
  1:'tab2',
  2:'tab3',
}
  return (
    <div className="bg-white dark:bg-[#171717]">
      <div className="">
        <ul className="flex justify-between flex-wrap text-sm font-medium text-center dark:border-b dark:border-[#353535]">
          {tabs?.map(({ tabName, tabIcon }, index) => (
            <li
            
              className={`tabMember inline-flex cursor-pointer dark:hover:text-white gap-2 p-4 ${
                !index ? "active" : ""
              }`}
              onClick={(e) => {switcher(e, "active", ".tabMember");
              setCurrentIndex(index)}}
            >
              {tabIcon}
              {tabName}
            </li>
          ))}
        </ul>
        <div className="tabContent p-5">{tabContent[currentIndex]}</div>
      </div>
    </div>
  );
};
export default SkillsTimeLine;
