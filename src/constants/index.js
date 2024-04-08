import {
  frontend,
  backend,
  booking,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  aws,
  nextjs,
  reactjs,
  reactNative,
  redux,
  tailwind,
  nodejs,
  git,
  sql,
  docker,
  postgresql,
  flutter,
  graphql,
  etihad,
  coverhunt,
  amadeus,
  dcc,
  winsoft,
  kelhel,
  microverse,
  anf,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  // {
  //   id: 'projects',
  //   title: 'Projects',
  // },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile App Developer',
    icon: booking,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'reactNative',
    icon: reactNative,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'sql',
    icon: sql,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'aws',
    icon: aws,
  },
];

const experiences = [
  {
    title: 'Sr Software Engineer',
    company_name: 'Amadeus',
    icon: amadeus,
    iconBg: '#333333',
    date: 'Oct 2021 - Present',
  },
  {
    title: 'Full Stack Develope',
    company_name: 'Winsoft Solutions',
    icon: winsoft,
    iconBg: '#333333',
    date: 'Aug 2019 - Sep 2021',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'NAAT Services',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Nov 2017 - July 2019',
  },
  {
    title: 'Jr Software Develope',
    company_name: 'AnF Solutions',
    icon: anf,
    iconBg: '#333333',
    date: 'May 2015 - July 2017',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Etihad Airlines',
    description: `This application serves a diverse user base, catering to common travelers, ticketing agents, and onboarding 
    managers. It facilitates the seamless booking of airline tickets`,
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'springboot',
        color: 'pink-text-gradient',
      },
    ],
    image: etihad,
    demo: 'https://etihad.com',
  }
];

export { services, technologies, experiences, projects };
