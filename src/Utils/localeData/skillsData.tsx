import { CgAppleWatch, CgScreen, CgServer } from "react-icons/cg";
import TabContent from "../../Components/tabContent";

export const skillsTab: { tabName: string; tabIcon: React.ReactNode }[] = [
  { tabName: "Frontend", tabIcon: <CgScreen size={20} /> },
  { tabName: "Backend", tabIcon: <CgServer size={20} /> },
  { tabName: "Softwares", tabIcon: <CgAppleWatch size={20} /> },
];
export const skillsTabContent = {
  0: <TabContent />,
  1: "tab2",
  2: "tab3",
};
