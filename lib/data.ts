import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Systems/Tech Support Manager | Forectec Investment Limited",
    location: "FCT, Abuja",
    description:
      "Managed aftersales service and provided comprehensive support to the company’s clients, ensuring customer satisfaction and retention.Oversaw the functionality and maintenance of all office equipment, ensuring seamless daily operations and minimal downtime.Developed and implemented schedules for periodic maintenance and service, optimizing the longevity and performance of office equipment.Conducted follow-up communications with service centres for warranty cases, providing detailed reports and updates to senior management.Actively engaged in the daily operations of the firm, contributing to strategic planning and execution of IT initiatives.Performed repairs and maintenance on defective computers, ensuring quick resolution of issues to maintain productivity.Collaborated with various departments to identify and resolve technical issues, enhancing overall operational efficiency.Trained and mentored junior staff, fostering a culture of continuous learning and technical excellence.",
    icon: React.createElement(CgWorkAlt),
    date: "current",
  },
  {
    title: "Tech Support | Exlod Techtronix Limited ",
    location: "FCT, Abuja",
    description:
      "Facilitated the sale of company products by providing detailed technical knowledge and support.Provided comprehensive aftersales support, addressing, and resolving customer issues efficiently.Assisted in identifying key business strategies to enhance client satisfaction, contributing to increased customer loyalty and repeat business.Delivered high-quality service and maintained strong client relationships through effective communication and problem-solving skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 – 2015",
  },
  {
    title: "IT trainee | Euro-American World Complex Data",
    location: "FCT, ABuja",
    description:
      "Participated in practical training on various hardware repair and maintenance, gaining hands-on experience with different types of computer systems. Performed computer repairs, including diagnosing issues, replacing faulty components, and ensuring systems were fully operational. Configured systems to meet user requirements, including setting up new hardware and software, and customizing system settings. Maintained network systems, troubleshooting connectivity issues, and ensuring stable and secure network operations. Installed and updated system applications, ensuring compatibility and optimal performance. Assisted senior technicians and engineers, gaining valuable insights into advanced IT practices and methodologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Windows",
  "macOs",
  "Cloud Platforms",
  "Backup Solutions",
  "Remote Desktop Tools: RDP,TeamViewer,AnyDesk",
  "Mysql",
  "Microsoft SQL Server",
  "PostgreSql",
  "System Monitoring: Zabbix, SolarWinds",
  "Virtualization",
  "Vulnerability Scanning ",
  "Firewalls and IDS/IPS",
  "Encryption",
  "Ticketing Systems",
  "Knowledge Base Management",
  
] as const;
