'use client';
import React, { ReactElement, useEffect } from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
} from '@nextui-org/react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { montserrat } from './fonts';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

interface IMenu {
  title: string;
  url: string;
  offset: number;
  icon: ReactElement<any, any>;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [currentMenuItem, setCurrentMenuItem] = React.useState<string>('home');

  const menu: IMenu[] = [
    {
      title: 'Home',
      url: 'home',
      offset: -100,
      icon: <FontAwesomeIcon className="text-white" icon={faHouse} />,
    },
    {
      title: 'About',
      url: 'about',
      offset: 0,
      icon: <FontAwesomeIcon className="text-white" icon={faCode} />,
    },
    {
      title: 'Projects',
      url: 'projects',
      offset: 0,
      icon: <FontAwesomeIcon className="text-white" icon={faCode} />,
    },
    {
      title: 'Contact',
      url: 'contact',
      offset: 0,
      icon: <FontAwesomeIcon className="text-white" icon={faEnvelope} />,
    },
  ];

  const IsActive = (title: string): boolean | undefined => {
    return title === currentMenuItem;
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  useEffect(() => {
    Events.scrollEvent.register('end', (to: any, element: any) => {
      setCurrentMenuItem(to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Nav
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred
      shouldHideOnScroll
      classNames={{
        base: 'backdrop-blur flex-none transition-colors duration-500 lg:z-50  bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent',
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <div className="h-14 w-2/5 md:w-4/12 relative">
            <Image
              fill
              className=" flex-grow basis-[100%] object-cover"
              src={'/logotipo/ltw.svg'}
              alt="logo"
            />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menu.map(({ title, url, offset }, index) => (
          <NavbarItem key={index} className={clsx('text-end')} isActive={IsActive(url)}>
            <Link
              to={url}
              spy={true}
              smooth={true}
              offset={offset}
              delay={300}
              duration={500}
              spyThrottle={300}
              className={clsx('text-foreground  cursor-pointer')}
            >
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
          className="flex flex-col h-full justify-center items-center gap-4 "
        >
          {menu.map(({ title, url }: IMenu, index: number) => {
            return (
              <NavbarItem key={index} className="overflow-hidden h-[100px]">
                <MobileNavLink
                  url={url}
                  title={title}
                  IsActive={IsActive}
                  setIsMenuOpen={setIsMenuOpen}
                />
              </NavbarItem>
            );
          })}
        </motion.div>
      </NavbarMenu>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
    </Nav>
  );
};
export default Navbar;

/* ******************************************** */
/* ******************************************** */

const mobileLinkVars = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, url, IsActive, setIsMenuOpen }: any) => {
  return (
    <motion.div variants={mobileLinkVars}>
      <Link
        activeClass={clsx(IsActive(url) ? 'active' : '')}
        to={url}
        spy={true}
        smooth={true}
        offset={-100}
        delay={300}
        duration={500}
        spyThrottle={300}
        onClick={() => setIsMenuOpen(false)}
        className={clsx(
          montserrat.className,
          'text-center text-foreground text-5xl font-semi-bold  my-4',
          {'font-bold':  IsActive(url)}
        )}
      >
        {title}
      </Link>
    </motion.div>
  );
};
