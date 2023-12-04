'use client';
import { ANIMATE, TAbout } from '../app/lib/definitions';
import { AboutData } from '../app/lib/palceholder_data';
import FadeAnimation from './ui/fadeAnimation';
import { Listbox, ListboxItem, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';

const About = () => {
  const { title, description, imageLg, skills } = AboutData as TAbout;

  const container = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const variant = {
    initial: {
      y: '10vh',
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <div className="flex content-center items-center justify-center md:justify-end">
        <FadeAnimation animate={ANIMATE.IN}>
          <div></div>
          <Image
            src={`${imageLg}`}
            height={300}
            width={400}
            className="object-contain h-[400px]"
            alt="logo"
          />
        </FadeAnimation>
      </div>

      <div className="md:col-span-2 lg: col-span-2 my-8 md:my-0 lg:my-8 md:mb-auto">
        <FadeAnimation>
          <h1 className="max-w-md text-white text-6xl text-center md:text-left lg:text-left xl:text-left font-semibold my-8">
            {title}
          </h1>
          <p className="text-xl md:text-xl font-light text-center md:text-justify md:text-clip mt-6 mb-8">
            {description}
          </p>
        </FadeAnimation>

        <div className="w-full px-1 py-2 rounded-small">
          <motion.div variants={container} initial="initial" whileInView="open">
            <Listbox
              classNames={{
                base: 'w-full',
                list: '',
              }}
              items={skills}
              label="Assigned to"
              variant="flat"
            >
              {(item) => (
                <ListboxItem key={item.id!} textValue={item.title}>
                  <motion.div
                    variants={variant}
                    className="flex gap-2 items-center"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4">
                        <Image
                          className="rounded-full object-cover"
                          height={30}
                          width={30}
                          src={item.icon!}
                          alt={item.title}
                        />
                        <div className="font-medium dark:text-white">
                          <div>{item.title}</div>
                        </div>
                      </div>
                      <span className="text-small whitespace-normal text-ellipsis text-default-400 mt-1">
                        {item.description}
                      </span>
                    </div>
                  </motion.div>
                </ListboxItem>
              )}
            </Listbox>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default About;
