import Image from 'next/image';
import mariaZavala from '@/public/MariaZavala.jpg';

export default function About() {
   return (
      <section className='w-full my-24 md:px-0'>
         <div className='flex justify-center items-center my-4 p-4 md:p-8 bg-card/30 backdrop-blur-sm rounded-lg'>
            <div className='p-2 flex-[2] text-center md:text-left text-accent-foreground/80'>
               <h2 className='text-3xl font-bold md:text-5xl '>About Me</h2>
               <h3 className='text-lg md:text-2xl py-4'>
                  <span className='text-primary-foreground'>
                     University of Minnesota
                  </span>
                  <span className='text-sm md:text-base'>
                     <br />| Bachelor's Degree in{' '}
                  </span>
                  <span className='text-primary-foreground'>Computer Science</span>.
               </h3>
               <div className='flex mb-4 w-full justify-center items-center md:hidden rounded-lg overflow-hidden'>
                  <Image
                     src={mariaZavala}
                     alt='Maria Zavala'
                     className='object-cover w-full h-full'
                     width={0}
                     height={0}
                  />
               </div>
               <p className='py-4 md:text-xl md:mr-6 leading-relaxed'>
                  Hey there! I'm a recent Computer Science graduate from the
                  University of Minnesota Twin Cities, passionate about diving into
                  the world of web development. My tech stack revolves around MERN
                  (MongoDB, Express, React, Node.js), and I'm all about creating
                  slick, full-stack applications. With an insatiable curiosity for AI
                  technologies, I'm ready to start my professional journey and make a
                  meaningful impact in tech.
               </p>
            </div>
            <div className='flex-[1] hidden md:block rounded-2xl h-[28rem] w-96 overflow-hidden'>
               <Image
                  src={mariaZavala}
                  alt='Maria Zavala'
                  className='object-cover w-full h-full'
                  width={0}
                  height={0}
               />
            </div>
         </div>
      </section>
   );
}
