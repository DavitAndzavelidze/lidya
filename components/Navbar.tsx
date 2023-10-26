"use client";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="flexBetween max-container pt-5 px-6 text-[20px] relative lg:px-3 z-30">
      <p className="font-bold text-[24px] uppercase">Lidya</p>
      <nav>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="block lg:hidden">
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            onClick={toggleMobileMenu}
            className="inline-block cursor-pointer lg:hidden"
          />
          <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
