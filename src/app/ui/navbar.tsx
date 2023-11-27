'use client';
import React, { ReactElement } from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  Link,
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

interface IMenu {
  title: string;
  url: string;
  icon: ReactElement<any, any>;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const [currentMenuItem, setIsCurrentMenuItem] =
    React.useState<string>('Home');

  const menu: IMenu[] = [
    {
      title: 'Home',
      url: '#Home',
      icon: <FontAwesomeIcon className="text-white" icon={faHouse} />,
    },
    {
      title: 'About',
      url: '#About',
      icon: <FontAwesomeIcon className="text-white" icon={faCode} />,
    },
    {
      title: 'Projects',
      url: '#Projects',
      icon: <FontAwesomeIcon className="text-white" icon={faCode} />,
    },
    {
      title: 'Contact',
      url: '#Contact',
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
        {menu.map(({ title, url }, index) => (
          <NavbarItem
            isActive={IsActive(title)}
            key={index}
            className={clsx('text-end')}
          >
            <Link
              href={url}
              onPress={() => setIsCurrentMenuItem(title)}
              className={clsx('text-foreground')}
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
                  href={url}
                  title={title}
                  currentMenuItem={currentMenuItem}
                  setIsCurrentMenuItem={setIsCurrentMenuItem}
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
const MobileNavLink = ({
  title,
  href,
  currentMenuItem,
  setIsCurrentMenuItem,
  setIsMenuOpen,
}: any) => {
  const handlePress = (title: string) => {
    setIsCurrentMenuItem(title);
    setIsMenuOpen(false);
  };

  return (
    <motion.div variants={mobileLinkVars}>
      <Link
        // color={title === currentMenuItem ? 'primary' : 'foreground'}
        className={clsx(
          montserrat.className,
          'text-center text-foreground text-5xl font-semi-bold  my-4',
        )}
        href={href}
        onPress={() => handlePress(title)}
      >
        {title}
      </Link>
    </motion.div>
  );
};
