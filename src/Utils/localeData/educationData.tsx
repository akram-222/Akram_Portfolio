import { FaGraduationCap } from "react-icons/fa";
import { SiUdacity } from "react-icons/si";

export const educationData: {
  university: string;
  icon: React.ReactNode;
  department: string;
  grade: string;
  note: string;
  isLatest: boolean;
  hasCertificate: boolean;
}[] = [
  {
    university: "Udacity",
    icon: <SiUdacity />,
    department: "React Development Cross-Skilling Nanodegree Program",
    grade: "Nanodegree",
    note: `To gain more coding experience, I completed Udacity's Front-End Web Development Nanodegree program`,
    isLatest: true,
    hasCertificate: true,
  },
  {
    university: "Beni-Suef University",
    icon: <FaGraduationCap />,
    department: "Bachelor's degree, Science",
    grade: "3.23/5 ( V.Good )",
    note: `Relevant Coursework: Computer Fundamentals, Web Development, Typography, Web Design,Color Theory, Database Management Systems.`,
    isLatest: false,
    hasCertificate: true,
  },
];
