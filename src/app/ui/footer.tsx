'use client';
import { Button } from '@nextui-org/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { HomeData } from '../lib/palceholder_data';
import { THome } from '../lib/definitions';

const Footer = () => {
  const { social }: THome = HomeData as THome;
  const redirectTo = (url: string) => window.open(url);

  return (
    <footer className="w-full dark:bg-secondary-100 bg-secondary-100 shadow">
      <div className="w-full p-4 flex items-center justify-between">
        <span className="hidden md:flex flex-row text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Button
              className="bg-[#000000] mr-4"
              isIconOnly
              size="sm"
              radius="full"
              variant="solid"
              aria-label="medium"
              onClick={() => redirectTo(social.medium)}
            >
              <FontAwesomeIcon icon={faMedium} />
            </Button>
          </li>
          <li>
            <Button
              className="bg-[#000000] mr-4"
              isIconOnly
              size="sm"
              radius="full"
              variant="solid"
              aria-label="github"
              onClick={() => redirectTo(social.github)}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </li>
          <li>
            <Button
              className="bg-[#0077B5] mr-4"
              isIconOnly
              size="sm"
              radius="full"
              variant="solid"
              aria-label="linkedin"
              onClick={() => redirectTo(social.likedIn)}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>
          </li>
          <li>
            <Button
              className="w-auto mr-4"
              radius="full"
              size="sm"
              color="primary"
              variant="shadow"
              onClick={() => redirectTo(social.whatsApp)}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              {'Talk to me'}
            </Button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
