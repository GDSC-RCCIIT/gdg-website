import React from "react";
import { quickLinks, siteMap, links } from "@/constant/footer/data";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assests/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-around bg-slate-800 text-gray-300 pt-6">
        <div className="font-bold text-2xl text-center">
          <h1 className="text-center">GDSC RCCIIT</h1>
          <Image src={logo} className="w-44 py-4" />
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="flex flex-col gap-2 py-2 text-sm">
            {quickLinks?.map((link) => (
              <Link href={link.href} key={link.name}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Site Map</h3>
          <ul className="flex flex-col gap-2 py-2 text-sm">
            {siteMap?.map((link) => (
              <Link href={link.href} key={link.name}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Links</h3>
          <ul className="flex flex-col gap-2 py-2 text-sm">
            {links?.map((link) => (
              <Link href={link.href} key={link.name}>
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </footer>
      <div className="bg-slate-800 text-gray-300 text-center pt-14 pb-4 text-sm">
        Copyright 2024 @GDG-RCCIIT
      </div>
    </>
  );
};

export default Footer;
