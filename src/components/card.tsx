"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Project } from "@/core/types/project.type";
import { motion } from "framer-motion";

type TProps = { project: Project; index: number };

const Card = ({ project, index }: TProps) => {
  const { title, description, image, url }: Project = project;

  const container = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const card = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: index * 0.5,
        delay: 0.1,
        ease: [0, 0.5, 0.2, 1.5],
      }}
      className="w-80 mb-4 relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border"
    >
      <div className="relative h-56  mx-4 -mt-12 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <Image src={`${image}`} fill className="object-cover" alt="logo" />
      </div>
      <div className="px-6 py-2">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
      </div>
      <div className="px-6 pb-4 pt-0">
        <div className="mt-4 flex flex-wrap">
          <Button
            className="mr-4 select-none bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-primary-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            radius="full"
            variant="solid"
            aria-label="github"
          >
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
