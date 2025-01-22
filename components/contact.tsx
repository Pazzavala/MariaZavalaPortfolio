import { contactInfo } from '@/lib/data';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className='w-full my-10 px-4 sm:px-0'>
      <h2 className='text-3xl md:text-5xl text-center text-accent-foreground/80'>
        Send me a message!
      </h2>
      <div className='p-8 flex justify-center items-center md:justify-start md:items-start'>
        {contactInfo.map((platform, index) => (
          <Link
            href={platform.link}
            key={index}
            className='my-8 mr-10 flex flex-col justify-center items-center'
          >
            <platform.icon
              color={platform.color}
              size={50}
              className='mb-3'
            />
            <p className='text-secondary-foreground'>On {platform.name}</p>
          </Link>
        ))}
      </div>
      {/* Google Calendar Appointment Scheduling iframe */}
      <iframe
        src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ05cUoX0dH-PlMZCbOYC2FAquqAF0vAWZ4ioOAki3RURz-b7ELd1GjxMfokUVa5pJMGsZY5kaSe?gv=true'
        style={{ border: 0 }}
        width='100%'
        height='1000'
        allowFullScreen
      ></iframe>
    </section>
  );
}
