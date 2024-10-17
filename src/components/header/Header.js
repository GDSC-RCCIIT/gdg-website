import React from "react";
import { headerLinks } from "@/constant/header/data";
import logo from "@/assests/logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = (link) => {
  return (
    <header className="bg-slate-800 p-4 font-bold text-gray-300">
      <div className="flex items-center justify-around">
        <div className="w-24">
          <Image src={logo} />
        </div>
        <ul className="flex flex-row justify-center items-center gap-12">
          {headerLinks?.map((link) => (
            <Link href={link.href} key={link.name} className="gap-12">
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
