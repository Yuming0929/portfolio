import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import alumconnect from "@/public/alumconnect.png";
import huasu from "@/public/huasu_config.png";
import airbnb from "@/public/airbnb.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  
  
] as const;


export const projectsData = [
  {
    title: "AlumConnect",
    description: 
      
    
      "A High school alumni platform template. Display past alumni's graduation schools, majors, work fields, and contact information(user uploaded). \n login to see full function: \n username: 123 \n password: 123",
    tags: ["React", "Springboot", "MySQL", "Bootstrap","echarts", "JWT"],
    imageUrl: alumconnect,
    projectUrl: "http://106.53.83.109/"
  },
  {
    title: "3D Product Configurator",
    description:
      "A commercial project that designs for companies to visualize their products to users and provide customizable features which allow users to choose",
    tags: ["React", "TypeScript", "Three.js", "Redux"],
    imageUrl: huasu,
    projectUrl: "https://yuminghuang.xyz/huasu-configurator/#/"
  },
  {
    title: "Airbnb-like Online Reservation Platform",
    description:
      "A fully functional Airbnb-like platform. Allowing user to make reservation of other users's uploaded properties. ",
    tags: ["React","TypeScript", "Next.js", "Prisma","Zustand", "Tailwind", "MongoDB"],
    imageUrl: airbnb,
    projectUrl: "",
  },
] as const;

export const skillsData = [
  "Java",
  "SpringBoot",
  "Spring",
  "Redis",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Pytorch",
  "Framer Motion",
] as const;