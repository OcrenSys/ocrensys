'use client';
import React, { ReactElement } from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { montserrat, ubuntu } from './fonts';

const Navbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  interface IMenu {
    title: string;
    url: string;
    icon: ReactElement<any, any>;
  }

  const menu: IMenu[] = [
    {
      title: 'Home',
      url: '#About',
      icon: <FontAwesomeIcon className="text-white" icon={faHouse} />,
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

  const background =
    'backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent';
  return (
    <Nav
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className={clsx(
        background,
        'border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10',
      )}
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
        {menu.map(({ title, url, icon }, index) => (
          <NavbarMenuItem
            key={index}
            className={clsx('text-end')}
          >
            <Link
              className={clsx('text-white')}
              href={url}
            >
              {title}
            </Link>
          </NavbarMenuItem>
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
              <div key={index} className="overflow-hidden">
                <MobileNavLink title={title} href={url} />
              </div>
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
const MobileNavLink = ({ title, href }: any) => {
  return (
    <motion.div variants={mobileLinkVars}>
      <Link
        className={clsx(
          montserrat.className,
          'text-center text-white text-5xl font-semi-bold  my-4',
        )}
        href={href}
      >
        {title}
      </Link>
    </motion.div>
  );
};
