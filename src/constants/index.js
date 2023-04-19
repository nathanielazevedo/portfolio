import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  creative_mines,
  spark,
  ibanban,
  jobit,
  earth,
  threejs,
  gpt,
} from "../assets";

const test = "test";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Open Source Contributor",
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Creative Mines",
    icon: creative_mines,
    iconBg: "black",
    date: "November 2021 - March 2023",
    points: [
      "Developed and maintained scalable, high-performance web applications using React and TypeScript, resulting in a type-safe codebase.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Created reusable UI components and integrated them with backend APIs, resulting in streamlined development processes and reduced time to market for new products.",
      "Conducted code reviews and provided feedback to other developers, helping to maintain code quality and adhere to best practices for React and TypeScript development.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Spark Business Works",
    icon: spark,
    iconBg: "black",
    date: "April 2021 - October 2021",
    points: [
      "Led and directed 4 software teams to successfully deliver projects on time and within budget, utilizing Agile methodologies to promote collaboration and effective communication.",

      "Wrote high-quality, scalable, and efficient code in PHP, leveraging frameworks such as Laravel and CodeIgniter to build robust web applications and APIs.",

      "Mentored and coached team members on best practices in software development, including code reviews, testing, and deployment strategies, to ensure code quality and maintainability.",

      "Collaborated with cross-functional teams including product managers, designers, and stakeholders to understand project requirements and ensure the development of solutions that met business needs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nate does.",
    name: "Asif Lundstrom",
    designation: "Attorney",
    company: "Foundry Law",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Nate is an incredible teammate and will add hard work, technical ability and skills to any team he joins.",
    name: "Jake Northey",
    designation: "CEO",
    company: "Creative Mines",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Nate is a skilled software engineer and a great mentor. It was an honor to work with him.",
    name: "Lohane Diogo",
    designation: "Web Developer",
    company: "Youx Group",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ibanban",
    description:
      "Web-based platform that teaches Mandarin with mini games. Over 300 mandarin words and 4 pure HTML, CSS, JS mini games. Learn Mandarin, play games.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: ibanban,
    source_code_link: "https://github.com/nathanielazevedo/ibanban",
    live_link: "https://nathanielazevedo.github.io/ibanban/",
  },
  {
    name: "Sociopedia",
    description:
      "Full-Stack Facebook mock website. Includes authentication and authorization. Image uploading and redux perist with JWT's. Make and account and post!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/nathanielazevedo/social-client",
    live_link: "https://nathanielazevedo.github.io/social-client/",
  },
  {
    name: "Geo",
    description:
      "Full-Stack Location tracking website. Click the button and watch your location light up on the Earth.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "postgesql",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: earth,
    source_code_link: "https://github.com/nathanielazevedo/geo_front",
    live_link: "https://nathanielazevedo.github.io/geo_front/",
  },
  {
    name: "GPT-Helper",
    description:
      "This is a simple web app that uses the GPT-4 API to generate text. It is a simple way to get started with the GPT-4 API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "GPT-API",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/nathanielazevedo/gpt_front",
    live_link: "https://nathanielazevedo.github.io/gpt_front/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
