'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import { projects } from '@/lib/data';
import Link from 'next/link';

export function Projects() {
   const data = projects.map((project) => ({
      category: project.category,
      title: project.Title,
      src: project.src,
      content: (
         <Content
            category={project.category}
            title={project.Title}
            description={project.description}
            src={project.src}
            link={project.link}
            note={project.note}
         />
      ),
   }));

   const cards = data.map((card, index) => (
      <Card key={card.src} card={card} index={index} />
   ));

   return (
      <div className='w-full h-full py-20'>
         <h2 className='max-w-7xl pl-4 mx-auto text-4xl md:text-5xl font-bold text-accent-foreground/80 font-sans'>
            Projects
         </h2>
         <Carousel items={cards} />
      </div>
   );
}

const Content = ({
   category,
   title,
   description,
   src,
   link,
   note,
}: {
   category: string;
   title: string;
   description: string;
   src: string;
   link: string;
   note?: string;
}) => {
   return (
      <div key={title} className='p-4 md:p-14 rounded-3xl bg-card  '>
         <p className='text-neutral-600 text-sm md:text-xl font-sans max-w-3xl mx-auto'>
            <span className='text-base md:text-2xl font-bold text-secondary-foreground'>
               {title}
               <br />
            </span>{' '}
            {description == '' ? 'Description' : description}
         </p>

         <Link
            href={link}
            className='flex flex-col md:flex-row justify-center items-center text-center md:text-start p-8 rounded-lg overflow-hidden'
         >
            <div>
               <h4 className='font-bold text-lg md:text-2xl lg:text-5xl min-h-2/3 text-accent-foreground'>
                  Access The Project Here
               </h4>
               <p className='my-2 md:my-4 md:mr-4 rounded-lg text-xs text-primary-foreground/70'>
                  {note}
               </p>
            </div>

            {/* <div className=''> */}
            <Image
               src={src}
               alt={title}
               height='500'
               width='500'
               className='md:w-1/2 md:h-1/2 h-full w-full mx-auto rounded-xl object-contain'
            />
            {/* </div> */}
         </Link>
      </div>
   );
};
