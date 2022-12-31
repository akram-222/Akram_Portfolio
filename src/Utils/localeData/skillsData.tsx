import { CgAppleWatch, CgScreen, CgServer } from "react-icons/cg";
import { TbBrandJavascript } from "react-icons/tb";
import TabContent from "../../Components/tabContent";

export const skillsTab: { tabName: string; tabIcon: React.ReactNode }[] = [
  { tabName: "Frontend", tabIcon: <CgScreen size={20} /> },
  { tabName: "Backend", tabIcon: <CgServer size={20} /> },
  { tabName: "Softwares", tabIcon: <CgAppleWatch size={20} /> },
];

export const frontendSkillsList: {
  skillIcon: React.ReactNode;
  skillName: string;
}[] = [{ skillIcon: <TbBrandJavascript />, skillName: "Javascript" }];

export const skillsTabContent = {
  0: <TabContent list={frontendSkillsList} />,
  1: "tab2",
  2: "tab3",
};
