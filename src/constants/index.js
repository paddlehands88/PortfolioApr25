import {
  next,
  vite,
  postgres,
  supabase,
  prisma,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  codenation,
  hivekitchens,
  ibm,
  ico,
  manmet,
  rainbowkitchens,
  symantec,
  gamehub,
  BHUKheadline,
  netflix,
  nike,
  spotify,
  hivekitchensweb,
  rainbowkitchensweb,
  northcoders,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "PostgresSQL",
    icon: postgres,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
];

const experiences = [
  {
    title: "Junior Software Developer",
    company_name: "Northcoders - Manchester / Remote",
    icon: northcoders,
    iconBg: "#282828",
    date: "Aug 2023 - Nov 2023",
    points: [
      "Languages/Frameworks learnt: Javascript, HTML, CSS, Express, SQL, React, Jest.",
      "Test Driven Development (TDD) & paired programming and use of Object Oriented Programming (OOP).",
      "Using Node.js with Javascript and API’s to handle async programming and model-view-controller (MVC) architecture on back-end",
      "Using React to create responsive UI design with focus on aesthetics and use of colour",
    ],
  },
  {
    title: "Data Privacy Case Officer",
    company_name: "Information Commissioner's Office (ICO) - Remote",
    icon: ico,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - Apr 2022",
    points: [
      "Educated in Data Protection (DP) and General Data Protection Regulation (GDPR).",
      "Investigated DP Privacy Statements and credentials of Data Controllers as part of case assessments.",
      "Provided legal advice and resolution to both data subjects and data controllers/processors.",
    ],
  },
  {
    title: "Junior Cyber Security Analyst",
    company_name: "Code Nation - Remote",
    icon: codenation,
    iconBg: "#f8b143",
    date: "Oct 2021 - Nov 2021",
    points: [
      "Gained Level 2 Distinction Certification.",
      "Deployed LAMP (Linux, Apache, MySQL, PHP) web server on a Raspberry Pi & Penetration tested.",
      "Learnt cyber threats and common mechanisms, methods of system penetration and defence.",
      "Completed 15 courses on tryhackme.com.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Code Nation - Manchester",
    icon: codenation,
    iconBg: "#f8b143",
    date: "Feb 2020 - Mar 2020",
    points: [
      "Learnt fundamentals of HTML, CSS and Javascript combined with problem-solving and Agile methodologies",
      "Led final week project team to produce JavaScript text-based role play game playable on Google Chrome.",
      "Developed mock IT Consultancy Website using HTML, CSS and JavaScript.",
    ],
  },
  {
    title: "PGCE Secondary Math's Teacher",
    company_name: "Manchester Metropolitan University",
    icon: manmet,
    iconBg: "#FFFFFF",
    date: "Sep 2018 - Jan 2020",
    points: [
      "Learnt GCSE & A-Level Maths syllabus including Probability, Statistics & Calculas.",
    ],
  },
  {
    title: "Managing Director",
    company_name: "Hive Kitchens Ltd - Manchester",
    icon: hivekitchens,
    iconBg: "#3d3d3d",
    date: "Sep 2018 - Jan 2020",
    points: [
      "Designed and implemented website using WordPress.",
      "Designed kitchens using 3D CAD design software.",
      "Formulated bespoke Microsoft Excel pricing database system.",
    ],
  },
  {
    title: "Company Director",
    company_name: "Rainbow Kitchens Ltd - Oldham, Greater Manchester",
    icon: rainbowkitchens,
    iconBg: "#FFFFFF",
    date: "Jan 2011 - Nov 2014",
    points: [
      "Formulated and implemented web based family oriented business strategy.",
      "Designed and implemented website using WordPress.",
    ],
  },
  {
    title: "Telesales Advisor",
    company_name: "Symantec - Sydney, Australia",
    icon: symantec,
    iconBg: "#FFFFFF",
    date: "Nov 2006 - Feb 2007",
    points: [
      "Temp role abroad contacting existing customers to renew their Backup Exec support plans.",
    ],
  },
  {
    title: "Quality Assurance Offficer",
    company_name: "IBM - Portsmouth",
    icon: ibm,
    iconBg: "#FFFFFF",
    date: "Aug 2002 - Jul 2004",
    points: ["One year sandwich placement as part of Business Degree"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const ProjectHeadlineInfo = {
  name: "Ball Hockey UK",
  description:
    "MVP website for UK's Ball Hockey association. First version to demonstrate the potential of a web based platform to manage the match logistics, and provide core functionality of real-time match-events, league tables and player statistics. Designed to increase social media exposure and attract new players and teams to the sport. ",
  tags: [
    {
      name: "next.js",
      color: "blue-text-gradient",
    },
    {
      name: "PostgresSQL",
      color: "green-text-gradient",
    },
    {
      name: "React.js",
      color: "pink-text-gradient",
    },
    {
      name: "Tailwind",
      color: "blue-text-gradient",
    },
    {
      name: "Prisma",
      color: "green-text-gradient",
    },
    {
      name: "ClerkAuthentication",
      color: "pink-text-gradient",
    },
    {
      name: "Vercel",
      color: "blue-text-gradient",
    },
    {
      name: "Supabase",
      color: "green-text-gradient",
    },
    {
      name: "Typescript",
      color: "pink-text-gradient",
    },
  ],
  image: BHUKheadline,
  source_code_link: "https://github.com/paddlehands88/bhuk1",
};

const projects = [
  {
    name: "Gamehub",
    description:
      "Web based streaming platform based on the popular Twitch platform, allowing users to view and stream live gaming content. Users can follow and unfollow streamers, chat with other users, and host their own streams.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "ClerkAuthentication",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: gamehub,
    source_code_link: "https://github.com/paddlehands88/twitch-clone",
  },
  {
    name: "Netflix Clone",
    description:
      "Web application that allows users to view and stream popular movies and TV shows. Users can search for content, view trailers, and add content to their watchlist.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Next Auth",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/paddlehands88/netflix-clone",
  },
  {
    name: "Nike Clone Landing Page",
    description:
      "A clone of the Nike landing page, showcasing the latest products and promotions. A responsive webpage done to exercise my Tailwind CSS skills.",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/paddlehands88/shoe-shop",
  },
  {
    name: "Spotify Clone",
    description:
      "Web application that allows users to view and stream popular music. Users can search for content, view trailers, and add content to their playlists.",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgresSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/paddlehands88/music-app-clone",
  },
  {
    name: "Hive Kitchens",
    description:
      "Wordpress website for my kitchen company. Conceptualised the Manchester-themed website naming kitchens after Mancunian celebrities or historical figures, and graphics inspired by the Manchester Bee emblem and artists such as L.S. Lowry.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe Photoshop",
        color: "green-text-gradient",
      },
      {
        name: "Adobe Illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: hivekitchensweb,
    source_code_link:
      "https://web.archive.org/web/20161002014035/http://hivekitchens.com/",
  },
  {
    name: "Rainbow Kitchens",
    description:
      "For my first kitchen company I conceptualised the name and brand and marketing strategy. I learnt about website design and SEO, and used Adobe Photoshop to design each page.",
    tags: [
      {
        name: "J-Query",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe Photoshop",
        color: "green-text-gradient",
      },
      {
        name: "Adobe Illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: rainbowkitchensweb,
    source_code_link:
      "https://web.archive.org/web/20140817150731/http://www.rainbowkitchens.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  ProjectHeadlineInfo,
};
