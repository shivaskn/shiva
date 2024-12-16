import {
  FaGithub,
  FaLinkedin,
  FaInstagram,

} from "react-icons/fa6";

import projectImage1 from "../assets/portfolio.png";
import projectImage2 from "../assets/flight.png";
import projectImage3 from "../assets/porsche.png";
import projectImage4 from "../assets/shoe.png";
import projectImage5 from "../assets/netflix.png";
import projectImage6 from "../assets/doctor.png";

import { RiReactjsLine } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SHIVAKUMAR",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate MERN stack developer with a strong focus on building robust backend systems and intuitive, responsive user interfaces. I enjoy transforming ideas into seamless web applications, delivering engaging and functional experiences using the power of MongoDB, Express, React, and Node.js.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "Flight Booking Landing Page",
    description:
      "Developed a responsive flight booking landing page using HTML , CSS, showcasing a modern and user-friendly interface. The page is optimized for various devices and ensures a seamless user experience.",
    image: projectImage2,
    githubLink: "https://flyhighly.netlify.app/#",
  },
  {
    id: 3,
    name: "Porsche Online Experience Website",
    description:
      "Developed an interactive web application titled Porsche Online Experience utilizing HTML and Bootstrap. This project showcases a visually appealing and responsive design.",
    image: projectImage3,
    githubLink: "https://porscheonline.netlify.app",
  },
  {
    id: 4,
    name: "Nike Website",
    description:
      "Designed and developed a responsive Nike landing page using React and Tailwind CSS. Focused on modern UI design principles to create an engaging and visually appealing user experience.",
    image: projectImage4,
    githubLink: "https://nikewebsites.netlify.app",
  },
  {
    id: 5,
    name: "Netflix Landing Page",
    description:
      "This project showcases a visually appealing replica of the Netflix landing page, designed using HTML and CSS. The page features a sleek and modern layout, capturing the essence of Netflix's brand identity with its dark theme, bold typography, and vibrant call-to-action buttons.",
    image: projectImage5,
    githubLink: "https://github.com/shivaskn/Netflix-landing-page",
  },
  {
    id: 6,
    name: "Doctor Appointment Booking System",
    description:
      "Developed a full-stack online doctor appointment booking system using React for the frontend, Node.js and Express for the backend, and MongoDB for database management. Integrated authentication, role-based access control, and real-time appointment scheduling features",
    image: projectImage6,
    githubLink: "https://github.com/shivaskn/Carely",
  },
];

export const BIO = [
  "Shivakumar graduated in 2024 with a B.Com in Computer Applications from Vivekananda College, Mylapore, where he developed a strong passion for MERN stack development.",
  "As a versatile MERN stack developer, Shivakumar brings a diverse skill set and in-depth expertise to his projects. His technical prowess spans foundational web technologies like HTML, CSS, and JavaScript, alongside backend tools such as Node.js and Express. He is also highly proficient in modern frameworks like React, enabling him to build dynamic and user-friendly applications.",
];

export const SKILLS = [
  {
    icon: <IoLogoHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML",
    experience: "2+ years",
  },
  {
    icon: <IoLogoCss3 className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "CSS",
    experience: "1+ years",
  },
  {
    icon: <FaJs className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: "7 Months",
  },
  {
    icon: <FaBootstrap className="text-4xl text-violet-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "8 months",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-cyan-600 lg:text-5xl" />,
    name: "Tailwind",
    experience: "7 Months",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "7 Months",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Node",
    experience: "1+ year",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express",
    experience: "1.5+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <IoLogoPython className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Python",
    experience: "8 Months",
  },
  {
    icon: <IoLogoFigma className="text-4xl text-pink-600 lg:text-5xl" />,
    name: "Figma",
    experience: "7 Months",
  },
  {
    icon: <FaVideo className="text-4xl text-orange-300 lg:text-5xl" />,
    name: "Video Editing",
    experience: "3+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "MERN Stack Development Intern",
    company: "Why Global Services",
    duration: "July 2024 - Present",
    description: [
      "Developed a responsive web application, resulting in a 40% increase in user engagement.",
      "Designed and integrated APIs, significantly enhancing the application's overall functionality.",
      "Leveraged modern JavaScript frameworks, such as React, to build dynamic user interfaces, improving interactivity and user experience.",
      "Led a cross-functional team in agile development sprints, boosting project completion rates by 20%.",
      "Managed version control and continuous integration processes using GitHub, ensuring seamless and efficient team collaboration.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Com Computer Applications",
    institution: "Ramakrishna Mission Vivekananda College",
    duration: "July 2021 - May 2024",
    description:
      "Focused on the integration of commerce and computer applications, gaining a solid foundation in programming and database management. Developed projects combining business concepts with Customer Buying perference towards hyundai cars, Acquired skills in accounting software and data analysis. Graduated with a strong academic record.",
  },
  {
    degree: "Commerce with Computer Applications (HSC)",
    institution: "R.P.C Matriculation Higher Secondary School",
    duration: "June 2018 - April 2021",
    description:
      "Studied the integration of commerce principles with computer applications, focusing on areas such as accounting software, office tools, and basic programming concepts. Gained practical knowledge in business technologies and data management. Actively participated in academic projects and extracurricular activities, strengthening my foundation in both commerce and technology. Graduated with excellent academic performance.",
  },
  
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Montfort Academy Matric. High. Secondary School",
    duration: "September 2007 - June 2018",
    description:
      "Built a strong foundation in mathematics, science, and computer fundamentals. Actively participated in school-level projects and activities that enhanced problem-solving and analytical skills. Excelled in academics and extracurricular activities, graduating with distinction.",
  },
  
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/shivaskn",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/shivakumar11/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
