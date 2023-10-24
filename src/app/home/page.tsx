"use client";
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
import { NextPageContext } from 'next'


const Home = () => {
  const redirectTo = (url: string) => window.open(url);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="mt-10">
        <div>
          <h1 className="text-5xl font-bold">{"HI!, I'm Jairo"}</h1>
          <h2 className="text-2xl font-medium mt-2 text-primary-50">
            {"Software developer using"}
            <Typed
              strings={["Angular", "React", "NestJS"]}
              typeSpeed={150}
              backSpeed={60}
              cursorChar="_"
              loop
            />
          </h2>
          <p className="mt-6 text-lg">
            {
              "I'm a highly skilled software developer with over five years of experience, driven by a deep passion for achieving both personal and professional growth."
            }
          </p>

          <div className="mt-4 flex flex-wrap">
            <Link href={"/contact"}>
              <Button
                className="w-auto mr-4"
                radius="full"
                color="primary"
                variant="solid"
              >
                Get In Touch
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Link>

            <Button
              className="bg-[#000000] mr-4"
              isIconOnly
              radius="full"
              variant="solid"
              aria-label="github"
              onClick={() => redirectTo("https://medium.com/@ocrensys")}
            >
              <FontAwesomeIcon icon={faMedium} />
            </Button>

            <Button
              className="bg-[#000000] mr-4"
              isIconOnly
              radius="full"
              variant="solid"
              aria-label="github"
              onClick={() =>
                redirectTo("https://github.com/OcrenSys?tab=repositories")
              }
            >
              <FontAwesomeIcon icon={faGithub} />
            </Button>

            <Button
              className="bg-[#0077B5] mr-4"
              isIconOnly
              radius="full"
              variant="solid"
              aria-label="linkedin"
              onClick={() =>
                redirectTo(
                  "https://www.linkedin.com/in/jairo-martinez-a14b94240/"
                )
              }
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex content-center align-middle justify-center">
        <div>
          <Image
            src={PICTURE}
            priority={true}
            className="object-contain h-unit-8xl w-auto"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async (ctx: NextPageContext) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}
export default Home;
