import { CgAppleWatch, CgScreen, CgServer } from "react-icons/cg";
import switcher from "../Utils/minorFunctions/switcher";
const SkillsTimeLine = () => {
  const tabs: { tabName: string; tabIcon: React.ReactNode }[] = [
    { tabName: "Frontend", tabIcon: <CgScreen size={20} /> },
    { tabName: "Backend", tabIcon: <CgServer size={20} /> },
    { tabName: "Softwares", tabIcon: <CgAppleWatch size={20} /> },
  ];

  return (
    <div className="bg-white dark:bg-[#171717]">
      <div className="">
        <ul className="flex justify-between flex-wrap text-sm font-medium text-center dark:border-b dark:border-[#353535]">
          {tabs?.map(({ tabName, tabIcon }, index) => (
            <li
              className={`tabMember ${!index ? "active" : ""}`}
              onClick={(e) => switcher(e, "active", ".tabMember")}
            >
              <a
                href="#d"
                className=" inline-flex gap-2 p-4 rounded-t-lg group"
                aria-current="page"
              >
                {tabIcon}
                {tabName}
              </a>
            </li>
          ))}
        </ul>
        <div className="tabContent p-5">tab content</div>
      </div>
    </div>
  );
};
export default SkillsTimeLine;
