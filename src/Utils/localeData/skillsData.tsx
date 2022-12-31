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
  SiRedux,
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
  { skillIcon: <SiReact size={18} color="#61DBFB" />, skillName: "React" },
  { skillIcon: <SiRedux size={18} color="#764abc" />, skillName: "Redux" },
  {
    skillIcon: <SiReactrouter size={18} color="#fff" />,
    skillName: "React-Router",
  },
  {
    skillIcon: <SiTypescript size={18} color="#007acc" />,
    skillName: "Typescript",
  },
  {
    skillIcon: <SiJavascript size={18} color="#F0DB4F" />,
    skillName: "Javascript",
  },
  { skillIcon: <SiSass size={18} color="#CD6799" />, skillName: "Sass" },
  { skillIcon: <SiCss3 size={18} color="#4285F4" />, skillName: "Css3" },
  {
    skillIcon: <SiTailwindcss size={18} color="#15b8c5" />,
    skillName: "Tailwind",
  },
  {
    skillIcon: <SiBootstrap size={18} color="#6d11ee" />,
    skillName: "Bootstrap",
  },
  { skillIcon: <SiHtml5 size={18} color="#dd4b25" />, skillName: "HTML5" },
];

export const backendSkillsList: {
  skillIcon: React.ReactNode;
  skillName: string;
}[] = [
  {
    skillIcon: <SiFirebase size={18} color="#f7c428" />,
    skillName: "Firebase",
  },
];

export const softwareSkillsList: {
  skillIcon: React.ReactNode;
  skillName: string;
}[] = [
  { skillIcon: <SiPostman size={18} color="#f76935" />, skillName: "Postman" },
  { skillIcon: <SiGit size={18} color="#e94e31" />, skillName: "Git" },
  { skillIcon: <SiGithub size={18} color="#161414" />, skillName: "Github" },
];

export const skillsTabContent = {
  0: <TabContent list={frontendSkillsList} />,
  1: <TabContent list={backendSkillsList} />,
  2: <TabContent list={softwareSkillsList} />,
};
