"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import FromSub from "../FromSub";
import DarkModeButton from "../theme/DarkModeButton";
import MobileDrawer from "../MobileDrawer";

const Header = () => {
  return (
    <Navbar
      isBordered
      isBlurred
      height={85}
      className="">
      <NavbarBrand className="text-2xl md:text-3xl font-bold">
        GetUsers
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center">
        <NavbarItem>
          <DarkModeButton />
        </NavbarItem>
        <NavbarItem>
          <FromSub />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="sm:hidden flex"
        justify="end">
        <NavbarItem>
          <DarkModeButton />
        </NavbarItem>
        <NavbarItem>
          <MobileDrawer />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
