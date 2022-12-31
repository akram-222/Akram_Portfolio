import { CgAppleWatch, CgScreen, CgServer } from "react-icons/cg";
import {
  SiBootstrap,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import TabContent from "../../Components/tabContent";

export const skillsTab: { tabName: string; tabIcon: React.ReactNode }[] = [
  { tabName: "Frontend", tabIcon: <CgScreen size={20} /> },
  { tabName: "Backend", tabIcon: <CgServer size={20} /> },
  { tabName: "Softwares", tabIcon: <CgAppleWatch size={20} /> },
];

export const frontendSkillsList: {
  skillIcon: React.ReactNode;
  skillName: string;
}[] = [
  { skillIcon: <SiReact />, skillName: "React" },
  { skillIcon: <SiTypescript />, skillName: "Typescript" },
  { skillIcon: <SiJavascript />, skillName: "Javascript" },
  { skillIcon: <SiReactrouter />, skillName: "React-Router" },
  { skillIcon: <SiSass />, skillName: "Sass" },
  { skillIcon: <SiCss3 />, skillName: "Css3" },
  { skillIcon: <SiTailwindcss />, skillName: "Tailwind" },
  { skillIcon: <SiBootstrap />, skillName: "Bootstrap" },
  { skillIcon: <SiHtml5 />, skillName: "HTML5" },
];

export const backendSkillsList: {
  skillIcon: React.ReactNode;
  skillName: string;
}[] = [{ skillIcon: <SiFirebase />, skillName: "Firebase" }];

export const softwareSkillsList: {
  skillIcon: React.ReactNode;
  skillName: string;
}[] = [
  { skillIcon: <SiPostman />, skillName: "Postman" },
  { skillIcon: <SiGit />, skillName: "Git" },
  { skillIcon: <SiGithub />, skillName: "Github" },
];

export const skillsTabContent = {
  0: <TabContent list={frontendSkillsList} />,
  1: <TabContent list={backendSkillsList} />,
  2: <TabContent list={softwareSkillsList} />,
};
