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
      category: 'Full Stack Engineering',
      Title: 'E-Commerce Website | Kztudioz LLC',
      description:
         'As the lead full-stack developer at Kztudioz LLC, I design and implement scalable web solutions with a focus on seamless authentication, payment integrations, and efficient database management. Leveraging technologies like Clerk, Stripe, and MongoDB, I ensure the delivery of user-centric, high-performance platforms.',
      src: '/kztudiozPhone2.png',
      link: 'https://kztudioz.vercel.app/',
   },
   {
      category: 'Software Engineering',
      Title: 'MiniMed™ 780G System | Medtronic',
      description:
         'At Medtronic, I contributed to advancing healthcare technology by developing software solutions that optimized device performance and data accuracy. I collaborated cross-functionally to implement innovative tools that enhanced user experiences and streamlined operational workflows. My work emphasized quality, compliance, and impactful innovation in the medical technology space.',
      src: '/medtronicDevice.png',
      link: 'https://www.medtronicdiabetes.com/products/minimed-780g-insulin-pump-system',
   },
   {
      category: 'Software Testing',
      Title: 'GnuCash | Android',
      description:
         'Developed and tested the GNUCash Android app using diverse software testing techniques, including unit testing, system testing, and UI testing. Applied black-box and white-box testing methods such as partition testing, combinatorial testing, and model-based testing while leveraging tools like JUnit, Mockito, and JaCoCo. Gained hands-on experience in ensuring software quality through rigorous testing practices and advanced frameworks like EvoSuite and Randoop.',
      src: '/gnuCashApp.png',
      link: 'https://github.com/codinguser/gnucash-android',
      note: 'Please note: The linked app repository is not a personal development project. It is a reference to the software we tested as part of my project.',
   },
   {
      category: 'Game Development',
      Title: 'Space Minesweeper',
      description:
         'Developed a 2D space-themed Minesweeper game using TypeScript and GopherGfx, incorporating parallax effects, game update loops, and event handling. Designed and implemented gameplay mechanics, including star and mine movement, laser spawning, and collision detection using advanced graphics techniques. Gained experience in building interactive applications, debugging, and deploying projects on GitHub Pages.',
      src: '/spaceGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-1-Pazzavala/',
   },
   {
      category: 'Game Development',
      Title: 'Hole in the Ground',
      description:
         'Developed a 3D physics-based game inspired by Donut County using TypeScript and GopherGfx, allowing players to control a growing hole that swallows objects based on rigid body dynamics. Implemented realistic yet simplified physics concepts, including collision detection, gravity, velocity updates, and boundary constraints, to create engaging gameplay. Designed a custom game scene with interactive challenges, showcasing creativity and advanced 3D graphics programming techniques.',
      src: '/ballGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-2-Pazzavala/',
   },
   {
      category: 'Game Development',
      Title: 'Earthquake Visualization',
      description:
         'The Earthquake Visualization project is an interactive application that maps earthquake data from 1905 to 2007 onto both a 2D map and a 3D globe. Using geospatial data from NASA and the USGS, the program visualizes earthquake locations, magnitudes, and timeframes, allowing users to seamlessly morph between map and globe views. This project highlights core graphics programming concepts, including 3D mesh creation, texture mapping, and animations, offering a dynamic way to explore natural phenomena.',
      src: '/globeGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-3-Pazzavala/',
   },
   {
      category: 'Game Development',
      Title: 'So You Think Ants Can Dance',
      description:
         'So You Think Ants Can Dance utilized motion capture data from the Carnegie Mellon Motion Capture Database to bring animated characters to life. By composing transformations in a hierarchical scene graph, I scaled, rotated, and translated basic shapes to create complex characters and integrated motion capture data to produce smooth, looping animations and dynamic motion overlays. This project also honed my skills in reading and extending sophisticated computer graphics code, enabling lifelike character animations and choreography in interactive scenes.',
      src: '/antGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-4-Pazzavala/',
   },
   {
      category: 'Game Development',
      Title: 'Artistic Rendering',
      description:
         'In this computer graphics project, I implemented advanced GLSL shaders to create artistic rendering techniques including cartoon-style shading with silhouette outlines and normal mapping for enhanced surface texture detail. By developing vertex and fragment shaders, I demonstrated skills in manipulating per-pixel lighting, transforming geometric vertices, and using texture lookups to create sophisticated visual effects similar to those used in video games like The Legend of Zelda: Breath of the Wild. The project involved complex graphics programming techniques such as calculating lighting intensities, creating two-pass rendering approaches, and transforming coordinates between different spaces to achieve realistic and stylized rendering effects.',
      src: '/renderingGame.png',
      link: 'https://csci-4611-spring-2024.github.io/assignment-5-Pazzavala/',
   },
   {
      category: 'Game Development',
      Title: 'A World Made of Drawings',
      description:
         'A World Made of Drawings inspired by the children\'s book "Harold and the Purple Crayon," I developed an interactive 3D drawing application that allows users to create and modify a virtual world through intuitive mouse-based interactions. The project involved implementing complex graphics algorithms for drawing strokes in the sky, creating billboards, dynamically reshaping terrain, and adjusting camera height based on ground elevation, demonstrating advanced skills in mesh manipulation, ray casting, and coordinate space transformations. By following a research paper\'s approach to non-photorealistic rendering, I created a playful and innovative system that translates 2D mouse strokes into 3D modeling operations, showcasing the creative potential of computer graphics techniques.',
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
