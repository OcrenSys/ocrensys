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

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

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

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <Nav
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% | border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10"
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
            className={clsx('text-end', { isActive: pathname === url })}
          >
            <Link
              className={clsx('text-white', { isActive: pathname === url })}
              href={url}
            >
              {title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menu.map(({ title, url, icon }, index) => (
          <motion.li
            key={index}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavbarMenuItem
              className={clsx('text-end', { isActive: pathname === url })}
            >
              <Link className="text-white text-3xl my-4 font-light" href={url}>
                {title}
              </Link>
            </NavbarMenuItem>
          </motion.li>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
    </Nav>
  );
};
export default Navbar;
