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
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 8,
          stiffness: 50,
          restDelta: 0.001,
        },
      }}
      className="w-full mb-8"
    >
      <Content
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 border-1 border-white p-1"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Landing Page
          </p>
          <h4 className="text-white/90 font-medium text-xl">{title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
        <CardFooter className="opacity-0 hover:opacity-100 transition-all duration-1000 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full object-cover w-10 h-10 bg-black"
              src={image}
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/90">
                {title}
                {/* {
                  <div className="flex gap-1">
                    {techs.map(({ label, icon, index }: any) => (
                      <Chip key={index} label={label} icon={icon}></Chip>
                    ))}
                  </div>
                } */}
              </p>
            </div>
          </div>
          <Button
            size="sm"
            color="primary"
            radius="full"
            variant="shadow"
            aria-label="github"
          >
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </CardFooter>
      </Content>
    </motion.div>
  );
};

export default Card;
