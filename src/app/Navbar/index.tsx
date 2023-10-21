import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import LOGO from "../../../public/logotipo/logotipo white.png";
import Image from "next/image";

export default function NavbarComponent() {
  const menu = [
    { title: "Inicio", url: "/" },
    { title: "Portafolo", url: "/" },
    { title: "Contacto", url: "/" },
  ];

  return (
    <Navbar shouldHideOnScroll className="border-b-1">
      <NavbarBrand>
        <Image src={LOGO} height={30} alt="logo" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menu.map(({ title, url }, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={url}>
              {title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
