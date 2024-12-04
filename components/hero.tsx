'use client';
import React from 'react';
import Image from 'next/image';
import heroImg from '@/public/HeroImg.png';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
   return (
      <div className='w-full flex flex-col items-center justify-center text-accent-foreground/80'>
         <h1 className='my-2 self-start'>Maria</h1>
         <div className='relative flex justify-between'>
            {/* applying gradient to text className='text-transparent bg-gradient-to-r from-purple-300 to-yellow-100 bg-clip-text' */}
            <div className='absolute -bottom-12'>
               <h3 className='text-3xl sm:text-7xl'>I'm a</h3>
               <h3 className='text-primary-foreground/80 text-3xl sm:text-7xl'>
                  <TypeAnimation
                     sequence={[
                        `Frontend Developer`,
                        1000,
                        `Creative Thinker`,
                        1000,
                        `Full-stack Developer`,
                        1000,
                     ]}
                     wrapper='span'
                     speed={50}
                     repeat={Infinity}
                  />
               </h3>
            </div>

            <div className='mb-10 flex justify-center'>
               <Image src={heroImg} alt='Me AI' width={800} height={800} />
            </div>
         </div>

         <h1 className='mt-16 self-end text-right'>Zavala</h1>

         {/* <p className='my-2 p-2 text-center bg-white/30 rounded-lg'>
            Innovation meets precision, coding with passion, solving with brilliance
            - ready to tackle tomorrow's challenges as the future starts here.
         </p> */}
      </div>
   );
}
