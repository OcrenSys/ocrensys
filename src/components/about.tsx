"use client";
import Typed from "react-typed";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faMedium } from "@fortawesome/free-brands-svg-icons/faMedium";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { TAbout } from "@/core/types/about.type";

type TProps = { data: unknown };

const About = (props: TProps) => {
  const { hi, roles, description, skills, getInTouch, image, social }: TAbout =
    props.data as TAbout;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: (i: number) => ({ opacity: 1, delay: i * 0.1 }),
  };

  const redirectTo = (url: string) => window.open(url);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="mt-10 mb-10 md:mb-auto">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 custom={1} variants={item} className="text-5xl font-bold text-center md:text-left lg:text-left xl:text-left">
            {hi || ""}
          </motion.h1>
          <motion.h2
            custom={2}
            variants={item}
            className="text-2xl font-medium mt-2 text-primary-50 text-center md:text-left lg:text-left xl:text-left"
          >
            {roles || ""}{" "}
            <Typed
              strings={skills || []}
              typeSpeed={150}
              backSpeed={60}
              cursorChar="_"
              loop
            />
          </motion.h2>
          <motion.p custom={3} variants={item} className="mt-6 text-lg text-center md:text-left lg:text-left xl:text-left">
            {description}
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            className="mt-4 flex justify-center md:justify-start lg:justify-start xl:justify-start"
          >
            <Link href={"/contact"}>
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
        </motion.div>
      </div>
      <div className="flex content-center align-middle justify-center md:justify-end">
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{
            ease: "linear",
            duration: 0.5,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <Image
            src={`${image}`}
            height={200}
            width={400}
            className="object-contain h-[400px]"
            alt="logo"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default About;
