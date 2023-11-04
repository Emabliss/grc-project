"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Certificate", path: "/certificate" },
    { name: "News", path: "/about" },
    { name: "Featured", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const openMobileNav = () => {
    setMobileNavOpen(true);
  };
  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <div className="border-t-4 border-[#c7ba70] sticky top-0 z-10 bg-white">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/companyLogo.jpg"
            alt=""
            width={100}
            height={100}
          />
        </Link>
        <div className="gap-5 text-xl hidden md:flex">
          {links.map((link) => (
            <Link
              className="hover:bg-[#c7ba70] hover:text-white p-2"
              href={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {!mobileNavOpen && (
          <GiHamburgerMenu
            className="text-2xl text-slate-500 md:hidden block"
            onClick={openMobileNav}
          />
        )}
      </div>
      <div
        className={`md:hidden flex flex-col gap-4 bg-slate-200 w-2/4 absolute top-0 h-screen pt-2 pr-2 ${
          !mobileNavOpen && "-translate-x-[400px]"
        }`}
        style={{ transition: "all ease 1s" }}
      >
        <LiaTimesSolid
          className="text-2xl text-slate-500 md:hidden block self-end"
          onClick={closeMobileNav}
        />
        {links.map((item) => (
          <Link
            className="hover:bg-amber-200 p-2 border-b-2 border-slate-300"
            href={item.path}
            key={item.name}
            onClick={closeMobileNav}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
