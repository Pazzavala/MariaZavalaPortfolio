import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import { Projects } from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
   return (
      <div className='flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]'>
         <main className='w-full max-w-5xl flex flex-col gap-8 items-center sm:items-start'>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
         </main>
         <footer className='flex gap-6 flex-wrap items-center justify-center'></footer>
      </div>
   );
}
