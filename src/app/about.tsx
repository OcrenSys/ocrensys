'use client';
import { TAbout, THome } from './lib/definitions';
import { AboutData } from './lib/palceholder_data';

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <div className="flex content-center items-center justify-center md:justify-end">
        about{' '}
      </div>

      <div className="md:col-span-2 lg: col-span-2 my-8 md:my-0 lg:my-8 md:mb-auto">
        me
      </div>
    </div>
  );
};
export default About;
