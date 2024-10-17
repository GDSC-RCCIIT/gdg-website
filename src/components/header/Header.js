import React from "react";
import { headerLinks } from "@/constant/header/data";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-slate-800 p-4 font-bold text-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-between md:justify-around">
        {/* Logo */}
        <div className="w-24 mb-4 md:mb-0">
          <Image src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
          {headerLinks?.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-white transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
