import React from 'react';
import { skills } from '@/lib/data';

export default function Skills() {
   return (
      <div className='flex flex-wrap justify-center gap-4 mb-16'>
         {skills.map((skill, index) => (
            <div
               key={index}
               className='bg-card/80 flex flex-col justify-center items-center text-center md:m-2 p-3 md:p-6 rounded-xl hover:scale-110 shadow-md hover:shadow-lg transition-shadow duration-300'
            >
               <skill.icon
                  color={skill.color}
                  size={50}
                  className='mb-3 size-7 md:size-14'
               />
               <p className='text-base md:text-xl font-medium md:font-semibold text-secondary-foreground'>
                  {skill.name}
               </p>
            </div>
         ))}
      </div>
   );
}
