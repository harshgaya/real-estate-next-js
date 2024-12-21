"use client";
import Image from "next/image";
import NavItem from "./nav-item";
import ButtonRounded from "../buttons/button-rounded";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prevState) => {
      return !prevState;
    });
  }
  return (
    <nav className="flex px-5 py-5 justify-between items-center text-white relative z-20">
      <Image src={"/header/logo.png"} height={56} width={90} alt="logo home" />
      <Image
        onClick={handleOpen}
        src={"/header/menu.png"}
        height={33}
        width={55}
        alt="logo home"
        className="flex md:hidden"
      />
      {isOpen && (
        <div
          onClick={handleOpen}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] z-50 bg-customBg ${
          isOpen ? "translate-x-" : "translate-x-full"
        } transition-transform`}
      >
        <ul className="flex flex-col space-y-5 justify-start items-start pl-10 pt-10">
          <NavItem name={"Home"} />
          <NavItem name={"About Us"} />
          <NavItem name={"Other Projects"} />
          <ButtonRounded name={"Enquire Now"} />
        </ul>
      </div>
      <ul className="hidden md:flex space-x-8 justify-center items-center">
        <NavItem name={"Home"} />
        <NavItem name={"About Us"} />
        <NavItem name={"Other Projects"} />
        <ButtonRounded name={"Enquire Now"} />
      </ul>
    </nav>
  );
}
