"use client";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { topToBottom } from "@/utils/motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <motion.div
      variants={topToBottom}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flexBetween max-container pt-5 px-6 text-[20px] relative lg:px-3 z-30"
    >
      <p className="font-bold text-[24px] uppercase cursor-default">Lidya</p>
      <nav>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="transition-all border-b-2 border-[#f1f2f3] hover:navlink-Hover"
            >
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
    </motion.div>
  );
};

export default Navbar;
