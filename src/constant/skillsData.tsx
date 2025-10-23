import React from "react";

import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLaptopCode,
  FaMobile,
  FaPython,
  FaReact,
  FaTachometerAlt as FaGaugeHigh,
  FaTruckMoving,
  FaSearchengin,
  FaDocker,
  FaCameraRetro,
  FaComments,
  FaChartLine,
} from "react-icons/fa";

import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiPytorch,
  SiLangchain,
  SiFastapi,
  SiStreamlit,
  SiJavascript as FaSquareJs
} from "react-icons/si";
import { GiArtificialIntelligence, GiNetworkBars, GiProcessor } from "react-icons/gi";

import { GiBrain } from "react-icons/gi";
import { MdApi } from "react-icons/md";
import { TbBrandCpp } from "react-icons/tb";
import { GrOracle } from "react-icons/gr";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Databases",
    data: [
      { title: "Python", logoComponent: FaPython, color: "#3776AB" },
      { title: "C/C++", logoComponent: TbBrandCpp, color: "#00599C" },
      { title: "Java", logoComponent: FaJava, color: "#007396" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
      { title: "HTML5", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS3", logoComponent: FaCss3, color: "#1572B6" },
      { title: "MongoDB", logoComponent: SiMongodb, color: "#47A248" },
      { title: "MySQL", logoComponent: SiMysql, color: "#4479A1" },
      { title: "Oracle SQL", logoComponent: GrOracle, color: "#F80000" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    data: [
      { title: "PyTorch", logoComponent: SiPytorch, color: "#EE4C2C" },
      { title: "LangChain / LangGraph", logoComponent: SiLangchain, color: "#10A37F" },
      { title: "Transformers", logoComponent: GiBrain, color: "#8E24AA" },
      { title: "FastAPI", logoComponent: SiFastapi, color: "#009688" },
      { title: "Express.js", logoComponent: SiExpress, color: "#d4d4d8" },
      { title: "Next.js", logoComponent: SiNextdotjs, color: "#d4d4d8" },
      { title: "React", logoComponent: FaReact, color: "#61DAFB" },
      { title: "Tailwind CSS", logoComponent: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Dev Tools & Platforms",
    data: [
      { title: "Git", logoComponent: FaGitAlt, color: "#F05032" },
      { title: "GitHub", logoComponent: FaGithub, color: "#d4d4d8" },
      { title: "Docker", logoComponent: FaDocker, color: "#2496ED" },
      { title: "Vercel", logoComponent: SiVercel, color: "#d4d4d8" },
      { title: "Streamlit", logoComponent: SiStreamlit, color: "#FF4B4B" },
      { title: "Firebase", logoComponent: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Concepts & Technologies",
    data: [
      { title: "API Design", logoComponent: MdApi, color: "#5C2D91" },
      { title: "CI/CD", logoComponent: FaTruckMoving, color: "#0A66C2" },
      { title: "LSTM", logoComponent: GiBrain, color: "#FF9800" },
      { title: "Machine Learning", logoComponent: GiBrain, color: "#3F51B5" },
      { title: "Performance Optimization", logoComponent: FaGaugeHigh, color: "#388E3C" },
      { title: "Responsive Design", logoComponent: FaMobile, color: "#009688" },
      { title: "SEO Optimization", logoComponent: FaSearchengin, color: "#FF5722" },
      { title: "Software Development", logoComponent: FaLaptopCode, color: "#607D8B" },
      { title: "Generative AI", logoComponent: GiArtificialIntelligence, color: "#3F51B5" },
      { title: "Multimodal Learning", logoComponent: GiBrain, color: "#FF9800" },
      { title: "Computer Vision", logoComponent: FaCameraRetro, color: "#1E88E5" },
      { title: "Natural Language Processing", logoComponent: FaComments, color: "#5C6BC0" },
      { title: "LLMs & Agents", logoComponent: GiNetworkBars, color: "#4DB6AC" },
      { title: "Mamba SSM / Transformers", logoComponent: GiProcessor, color: "#9C27B0" },
      { title: "Data Visualization", logoComponent: FaChartLine, color: "#F44336" },
    ],
  },
];
