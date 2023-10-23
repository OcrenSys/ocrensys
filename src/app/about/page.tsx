import Typed from "react-typed";
import Image from "next/image";
import PICTURE from "../../../public/images/picture.png";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faMedium } from "@fortawesome/free-brands-svg-icons/faMedium";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const About = () => {
  const linkedInUrl = String(process.env.URL_LINKEDIN);
  const mediumUrl = String(process.env.URL_MEDIUM);
  const githubUrl = String(process.env.URL_GITHUB);

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="mt-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 custom={1} variants={item} className="text-5xl font-bold">
            {"HI!, I'm Jairo"}
          </motion.h1>
          <motion.h2
            custom={2}
            variants={item}
            className="text-2xl font-medium mt-2 text-primary-50"
          >
            {"Software developer using"}{" "}
            <Typed
              strings={["Angular", "React", "NestJS"]}
              typeSpeed={150}
              backSpeed={60}
              cursorChar="_"
              loop
            />
          </motion.h2>
          <motion.p custom={3} variants={item} className="mt-6 text-lg">
            {
              "I'm a highly skilled software developer with over five years of experience, driven by a deep passion for achieving both personal and professional growth."
            }
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
            className="mt-4 flex flex-wrap"
          >
            <Button
              className="w-auto mr-4"
              radius="full"
              color="primary"
              variant="solid"
            >
              Get In Touch
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>

            <a href={mediumUrl} target="_blank">
              <Button
                className="bg-[#000000] mr-4"
                isIconOnly
                radius="full"
                variant="solid"
                aria-label="github"
              >
                <FontAwesomeIcon icon={faMedium} />
              </Button>
            </a>

            <a href={githubUrl} target="_blank">
              <Button
                className="bg-[#000000] mr-4"
                isIconOnly
                radius="full"
                variant="solid"
                aria-label="github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </a>

            <a href={linkedInUrl} target="_blank">
              <Button
                className="bg-[#0077B5] mr-4"
                isIconOnly
                radius="full"
                variant="solid"
                aria-label="linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex content-center  align-middle  justify-center">
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
            src={PICTURE}
            height={400}
            className="h-max object-contain"
            alt="logo"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
