"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PICTURE from "../../../public/images/img.jpg";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = (props: any) => {
  return (
    <div className="mb-8 relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <div className="relative h-56 mx-4 -mt-12 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <Image src={PICTURE} alt="img-blur-shadow" layout="fill" />
      </div>
      <div className="px-6 py-2">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          UI/UX Review Check
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

          <Button
            className="bg-[#000000] mr-4"
            isIconOnly
            radius="full"
            variant="solid"
            aria-label="github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Button>

          <Button
            className="bg-[#0077B5] mr-4"
            isIconOnly
            radius="full"
            variant="solid"
            aria-label="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
