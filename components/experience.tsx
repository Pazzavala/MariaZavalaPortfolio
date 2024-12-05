import Image from 'next/image';
import { Timeline } from '@/components/ui/timeline';
import kztudiozLLC from '@/public/kztudiozLLC.png';
import { experiences } from '@/lib/data';

interface TimelineEntry {
   title: string;
   icon: React.ReactNode;
   content: React.ReactNode;
}

export default function Experience() {
   let data: TimelineEntry[] = experiences.map((experience) => ({
      title: experience.year,
      icon: (
         <Image
            src={experience.logo}
            alt={experience.company}
            className='object-cover'
         />
      ),
      content: (
         <div className='bg-card/30 p-4 rounded-lg'>
            <p className='text-accent-foreground/90 text-lg md:text-xl font-bold'>
               {experience.title}
            </p>
            <p className='text-sm text-accent-foreground/60'>{experience.company}</p>
            <p className='text-xs mb-4 text-accent-foreground/60'>
               {experience.timePeriod}
            </p>

            <div className=''>
               {' '}
               <p className='text-accent-foreground/70 text-sm md:text-base font-medium mb-8'>
                  {experience.description}
               </p>
            </div>
         </div>
      ),
   }));

   return (
      <div className='w-full'>
         <Timeline data={data} />
      </div>
   );
}
