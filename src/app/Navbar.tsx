import React, { ReactElement } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import LOGO from "../../public/logotipo/ltw.png";

export default function NavbarComponent() {
  interface IMenu {
    title: string;
    url: string;
    icon: ReactElement<any, any>;
  }
  const menu: IMenu[] = [
    {
      title: "Home",
      url: "/",
      icon: <FontAwesomeIcon className="text-white" icon={faHouse} />,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: <FontAwesomeIcon className="text-white" icon={faCode} />,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: <FontAwesomeIcon className="text-white" icon={faEnvelope} />,
    },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% | border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10"
    >
      <NavbarBrand>
        <Image className="w-auto" src={LOGO} height={30} alt="logo" />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menu.map(({ title, url, icon }, index) => (
          <NavbarItem key={index}>
            <Link className="text-white" href={url}>{title}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
