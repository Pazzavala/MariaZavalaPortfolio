import medtronicLogo from '@/public/medtroniclogo.jpg';
import kztudiozLogo from '@/public/kztudiozlogo.png';

export const experiences = [
   {
      title: 'Full Stack Developer',
      company: 'Kztudioz LLC',
      year: '2024',
      timePeriod: 'January 2024 - Present',
      description:
         'As the lead full-stack developer at Kztudioz LLC, I design and implement scalable web solutions with a focus on seamless authentication, payment integrations, and efficient database management. Leveraging technologies like Clerk, Stripe, and MongoDB, I ensure the delivery of user-centric, high-performance platforms.',
      logo: kztudiozLogo,
      link: 'https://kztudioz.vercel.app/',
   },
   {
      title: 'Software Engineer Intern',
      company: 'Mdtronic',
      year: '2023',
      timePeriod: 'June 2023 - August 2023',
      description:
         'At Medtronic, I contributed to advancing healthcare technology by developing software solutions that optimized device performance and data accuracy. I collaborated cross-functionally to implement innovative tools that enhanced user experiences and streamlined operational workflows. My work emphasized quality, compliance, and impactful innovation in the medical technology space.',
      logo: medtronicLogo,
   },
];

export const projects = [
   {
      category: 'Full Stack Developer',
      Title: 'E-Commerce Website | Kztudioz LLC',
      description: '',
      // As the lead full-stack developer at Kztudioz LLC, I design and implement scalable web solutions with a focus on seamless authentication, payment integrations, and efficient database management. Leveraging technologies like Clerk, Stripe, and MongoDB, I ensure the delivery of user-centric, high-performance platforms.
      src: '/kztudiozPhone2.png',
      link: 'https://kztudioz.vercel.app/',
   },
   {
      category: 'Software Engineering',
      Title: 'MiniMed™ 780G System | Mdtronic',
      description: '',
      // At Medtronic, I contributed to advancing healthcare technology by developing software solutions that optimized device performance and data accuracy. I collaborated cross-functionally to implement innovative tools that enhanced user experiences and streamlined operational workflows. My work emphasized quality, compliance, and impactful innovation in the medical technology space.
      src: '/medtronicDevice.png',
      link: 'https://www.medtronicdiabetes.com/products/minimed-780g-insulin-pump-system',
   },
   {
      category: 'Software Testing',
      Title: 'GnuCash | Android',
      description: '',
      src: '/gnuCashApp.png',
      link: '',
   },
   {
      category: 'Game Developer',
      Title: 'Space Minesweeper',
      description: '',
      src: '/spaceGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-1-Pazzavala/',
   },
   {
      category: 'Game Developer',
      Title: 'Hole in the Ground',
      description: '',
      src: '/ballGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-2-Pazzavala/',
   },
   {
      category: 'Game Developer',
      Title: 'Earthquake Visualization',
      description: '',
      src: '/globeGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-3-Pazzavala/',
   },
   {
      category: 'Game Developer',
      Title: 'So You Think Ants Can Dance',
      description: '',
      src: '/antGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-4-Pazzavala/',
   },
   {
      category: 'Game Developer',
      Title: 'Artistic Rendering',
      description: '',
      src: '/renderingGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-5-Pazzavala/',
   },
   {
      category: 'Game Developer',
      Title: 'A World Made of Drawings',
      description: '',
      src: '/haroldGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-6-Pazzavala/',
   },
];

import {
   IoLogoHtml5,
   IoLogoCss3,
   IoLogoJavascript,
   IoLogoNodejs,
   IoLogoReact,
   IoLogoGithub,
} from 'react-icons/io5';
import {
   SiMongodb,
   SiMysql,
   SiNextdotjs,
   SiTypescript,
   SiExpress,
   SiC,
   SiCplusplus,
   SiPython,
   SiTailwindcss,
   SiStripe,
   SiClerk,
} from 'react-icons/si';
import { AiOutlineJava } from 'react-icons/ai';

export const skills = [
   { name: 'HTML', icon: IoLogoHtml5, color: '#E34F26' }, // HTML (Orange)
   { name: 'CSS', icon: IoLogoCss3, color: '#1572B6' }, // CSS (Blue)
   { name: 'JavaScript', icon: IoLogoJavascript, color: '#F7DF1E' }, // JS (Yellow)
   { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }, // TS (Blue)
   { name: 'React', icon: IoLogoReact, color: '#61DAFB' }, // React (Light Blue)
   { name: 'Next.js', icon: SiNextdotjs, color: '#000000' }, // Next.js (Black)
   { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' }, // Tailwind (Teal)
   { name: 'Node.js', icon: IoLogoNodejs, color: '#68A063' }, // Node.js (Green)
   { name: 'Express', icon: SiExpress, color: '#000000' }, // Express (Black)
   { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }, // MongoDB (Green)
   { name: 'MySQL', icon: SiMysql, color: '#4479A1' }, // MySQL (Blue)
   { name: 'Java', icon: AiOutlineJava, color: '#007396' }, // Java (Blue)
   { name: 'C', icon: SiC, color: '#A8B9CC' }, // C (Light Blue)
   { name: 'C++', icon: SiCplusplus, color: '#00599C' }, // C++ (Dark Blue)
   { name: 'Python', icon: SiPython, color: '#3776AB' }, // Python (Blue)
   { name: 'GitHub', icon: IoLogoGithub, color: '#181717' }, // GitHub (Black)
   { name: 'Stripe', icon: SiStripe, color: '#635BFF' }, // Stripe (Purple)
   { name: 'Clerk', icon: SiClerk, color: '#000000' }, // Clerk (Black)
];
