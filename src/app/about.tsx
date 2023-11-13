'use client';
import Typed from 'react-typed';
import Image from 'next/image';
import Link from 'next/link';

import { motion, animate } from 'framer-motion';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ANIMATE, TInformation } from './lib/definitions';
import { InformationData as data } from './lib/palceholder_data';
import clsx from 'clsx';
import FadeAnimation from './ui/fadeAnimation';
import { ubuntu } from './ui/fonts';

const About = () => {
  const {
    hi,
    roles,
    description,
    skills,
    getInTouch,
    image,
    social,
  }: TInformation = data as TInformation;

  const redirectTo = (url: string) => window.open(url);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="mt-10 mb-10 md:mb-auto">
        <FadeAnimation animate={ANIMATE.IN}>
          <div></div>
          <div className="flex justify-center mx-auto mb-16 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]  md:hidden relative">
            <Image
              src={`${image}`}
              fill
              className="object-cover object-top  p-1 rounded-full ring-2 ring-gray-300 dark:ring-white"
              alt="logo"
            />
          </div>
        </FadeAnimation>

        <FadeAnimation animate={ANIMATE.LEFT_TO_RIGHT}>
          <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left lg:text-left xl:text-left">
            {hi || ''}
          </h1>
          <h2
            className={
              'text-2xl md:text-5xl font-medium mt-2 text-white text-center md:text-left lg:text-left xl:text-left'
            }
          >
            {roles || ''}{' '}
            <Typed
              className={clsx(
                ubuntu.className,
                'text-2xl md:text-5xl font-extrabold mt-2 text-white text-center md:text-left lg:text-left xl:text-left',
              )}
              strings={skills || []}
              typeSpeed={100}
              backSpeed={100}
              cursorChar="_"
              loop
            />
          </h2>
          <p
            className={clsx(
              'text-xl md:text-2xl font-light text-center md:text-left lg:text-left xl:text-left mt-6 mb-2',
            )}
          >
            {description}
          </p>
        </FadeAnimation>

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0,
          }}
          className="mt-4 flex justify-center md:justify-start lg:justify-start xl:justify-start"
        >
          {/* <FadeAnimation animate={ANIMATE.LEFT_TO_RIGHT}> */}
          <Link href={'#contact'}>
            <Button
              className="w-auto mr-4"
              radius="full"
              color="primary"
              variant="solid"
            >
              {getInTouch}
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>

          <Button
            className="bg-[#000000] mr-4"
            isIconOnly
            radius="full"
            variant="solid"
            aria-label="medium"
            onClick={() => redirectTo(social.medium)}
          >
            <FontAwesomeIcon icon={faMedium} />
          </Button>

          <Button
            className="bg-[#000000] mr-4"
            isIconOnly
            radius="full"
            variant="solid"
            aria-label="github"
            onClick={() => redirectTo(social.github)}
          >
            <FontAwesomeIcon icon={faGithub} />
          </Button>

          <Button
            className="bg-[#0077B5] mr-4"
            isIconOnly
            radius="full"
            variant="solid"
            aria-label="linkedin"
            onClick={() => redirectTo(social.likedIn)}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>
        </motion.div>
        {/* </FadeAnimation> */}
      </div>
      <div className="hidden content-center align-middle justify-center md:justify-end md:flex">
        <FadeAnimation animate={ANIMATE.IN}>
          <div></div>
          <Image
            src={`${image}`}
            height={200}
            width={400}
            className="object-contain h-[400px]"
            alt="logo"
          />
        </FadeAnimation>
      </div>
    </div>
  );
};
export default About;
