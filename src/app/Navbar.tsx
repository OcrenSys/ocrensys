import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import LOGO from "../../public/logotipo/ltw.png";
import Image from "next/image";

export default function NavbarComponent() {
  const menu = [
    { title: "Inicio", url: "/" },
    { title: "Portafolo", url: "/portfolio" },
    { title: "Contacto", url: "/contact" },
  ];

  return (
    <Navbar shouldHideOnScroll className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% | border-b border-slate-900/10 lg:px-8 dark:border-slate-300/10">
      <NavbarBrand>
        <Image src={LOGO} height={30} alt="logo" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menu.map(({ title, url }, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={url}>
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
