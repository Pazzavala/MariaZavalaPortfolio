'use client';
import { useMotionValueEvent, useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
   title: string;
   icon: React.ReactNode;
   content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
   const ref = useRef<HTMLDivElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);
   const [height, setHeight] = useState(0);

   useEffect(() => {
      if (ref.current) {
         const rect = ref.current.getBoundingClientRect();
         setHeight(rect.height);
      }
   }, [ref]);

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start 10%', 'end 50%'],
   });

   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

   return (
      <div className='w-full font-sans' ref={containerRef}>
         <div className='text-center md:text-left max-w-7xl mx-auto py-10 px-4'>
            <h2 className='text-3xl md:text-5xl mb-6 text-accent-foreground/80 dark:text-white max-w-4xl'>
               Experience
            </h2>
            <p className='text-accent-foreground/70 dark:text-neutral-300 text-sm md:text-xl max-w-3xl'>
               Experience in full-stack development, testing methodologies, and
               scalable application design across diverse projects and industries.
            </p>
         </div>

         <div ref={ref} className='relative max-w-7xl mx-auto pb-20'>
            {data.map((item, index) => (
               <div
                  key={index}
                  className='flex justify-start pt-10 md:pt-40 md:gap-10'
               >
                  <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
                     <div className='absolute flex items-center justify-center left-3 md:left-3 h-14 w-14 rounded-full overflow-hidden bg-white dark:bg-black'>
                        {item.icon}
                     </div>
                     <h3 className='hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-accent-foreground/80 dark:text-neutral-500 '>
                        {item.title}
                     </h3>
                  </div>

                  <div className='relative pl-20 pr-4 md:pl-0 w-full'>
                     <h3 className='md:hidden block text-2xl mb-4 text-left font-bold text-white dark:text-neutral-500'>
                        {item.title}
                     </h3>
                     {item.content}{' '}
                  </div>
               </div>
            ))}
            <div
               style={{
                  height: height + 'px',
               }}
               className='absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '
            >
               <motion.div
                  style={{
                     height: heightTransform,
                     opacity: opacityTransform,
                  }}
                  className='absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-pink-300 via-indigo-400 to-transparent from-[0%] via-[10%] rounded-full'
               />
            </div>
         </div>
      </div>
   );
};
