import { contactInfo } from '@/lib/data';
import Link from 'next/link';

export default function Contact() {
   return (
      <section className='w-full my-10 px-4 sm:px-0'>
         <h2 className=' text-3xl text-center md:text-start text-accent-foreground/80'>
            Send me a message!
         </h2>
         <div className='flex justify-center items-center md:justify-start md:items-start'>
            {contactInfo.map((platform, index) => (
               <Link
                  href={platform.link}
                  key={index}
                  className='my-8 mr-10 flex flex-col justify-center items-center'
               >
                  <platform.icon color={platform.color} size={50} className='mb-3' />
                  <p>On {platform.name}</p>
               </Link>
            ))}
         </div>
      </section>
   );
}
