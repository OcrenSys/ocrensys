'use client';
import React, { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import FadeAnimation from './fadeAnimation';
import Link from 'next/link';

const PorjectDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const count = useMotionValue<number>(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate<number>(count, 7, { duration: 2 });

    return animation.stop;
  }, [count]);

  return (
    <FadeAnimation>
      <h1 className="max-w-md text-white text-6xl text-center md:text-left lg:text-left xl:text-left font-semibold my-8">
       {title}
      </h1>
      <p className="text-xl md:text-xl font-light text-center md:text-justify md:text-clip mt-6 mb-16">
        {description}
      </p>
      <Link href={'#contact'}>
        <Button
          className="w-auto mr-4"
          radius="full"
          color="primary"
          variant="shadow"
        >
          {'View all projects'}
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Link>
    </FadeAnimation>
  );
};

export default PorjectDescription;
