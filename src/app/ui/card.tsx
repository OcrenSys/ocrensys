'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { TProjectItem } from '../lib/definitions';
import {
  Card as Content,
  CardHeader,
  CardFooter,
  Image,
  Button,
} from '@nextui-org/react';
import { AngularIcon } from './svgs/angularicon';
import Chip from './chip';

const Card = ({ project }: any) => {
  const { title, image, url }: TProjectItem = project;

  const techs = [
    {
      label: 'Ionic',
      icon: <AngularIcon size={18} />,
    },

    {
      label: 'Angular',
      icon: <FontAwesomeIcon className="text-sm" icon={faArrowRight} />,
    },
    {
      label: 'Redux',
      icon: <AngularIcon size={18} />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.3, 0.2, 0.5],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 30,
          restDelta: 0.01,
        },
      }}
      className="w-full mb-8"
    >
      <Content
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 border-1 border-white"
      >
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full object-cover w-10 h-10 bg-black"
              src={image}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/90">{title}</p>
            </div>
          </div>
        </CardFooter>
      </Content>
    </motion.div>
  );
};

export default Card;
