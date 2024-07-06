import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  C,
  Cplusplus,
  mySQL,
  bootstrap,
  Python,
  Java,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  // nodejs,
  // mongodb,
  git,
  figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  breeze,
  myPhoto,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Skills",
    title: "Skills",
  },
  {
    id: "My_services",
    title: "Services",
  },
  {
    id: "Works",
    title: "Projects",
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
    title: "UI/UX Design",
    icon: mobile,
  },
  {
    title: "Photographer",
    icon: backend,
  },
  {
    title: "App Designer",
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
    name: "C",
    icon: C,
  },
  {
    name: "C++",
    icon: Cplusplus,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "mySQL",
    icon: mySQL,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Weather Web App",
    description:
      "Web-based App where user can check there live weather report and also 3 days weather forecast. Made using Weather API and Geolocation API. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "Weather API",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Artab07?tab=repositories",
  },
  {
    name: "Event Countdown Timer",
    description:
      "A website where users and companies can put any event countdown timer and also can register themselves through it. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Artab07/CodeClauseInternship_COUNTDOWN-TIMER",
  },
  {
    name: "Face Recognition Based Attendance System",
    description:
      "An attendance sytem using camera of any institution, which provides seamless entry and attendance tracking.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS/JS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Artab07?tab=repositories",
  },
  {
    name: "Breeze The Only Meditation App You Need",
    description:
      "It's a meditation app, whre you can breeze out your stress following a healthy lifestyle with some meditation.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: breeze,
    source_code_link: "https://www.figma.com/design/N7kEBUmIWEutw3K1WXllme/Breeze-Only-Meditation-App-You-Need?node-id=1-3&t=NTFVHPP90jdyMcqm-1",
  },
];

export { services, technologies, experiences, testimonials, projects };