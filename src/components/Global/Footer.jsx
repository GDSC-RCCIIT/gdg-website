import React from "react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram as Instagram } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaGithub as Github } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 via-purple-900 to-gray-900 py-12 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/Logo.svg" className="h-12 w-auto" alt="Logo" />
              <span className="text-3xl font-extrabold text-white tracking-wider">
                GDG-RCCIIT
              </span>
            </Link>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-8">
            {/* Resources */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold uppercase tracking-wide mb-6">
                Resources
              </h2>
              <ul className="space-y-4 text-center">
                <li>
                  <a
                    href="https://flowbite.com/"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    Location
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    About GDG
                  </a>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    How to Apply
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    Who can apply?
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold uppercase tracking-wide mb-6">
                Follow Us
              </h2>
              <ul className="space-y-4 text-center">
                <li>
                  <Link
                    href="https://github.com/"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com/"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    Whatsapp
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold uppercase tracking-wide mb-6">
                Legal
              </h2>
              <ul className="space-y-4 text-center">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    Rules & Regulations
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter and Social Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-lg font-semibold uppercase tracking-wide mb-6">
                Stay Updated
              </h2>

              {/* Newsletter Form */}
              <div className="flex justify-center w-full">
                <div className="max-w-sm min-w-[200px] w-full">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full pl-3 pr-10 py-2 bg-white text-black placeholder:text-gray-400 text-sm border border-gray-400 rounded-md transition duration-300 ease focus:outline-none focus:border-gray-500 shadow-md"
                      placeholder="someone@example.com"
                    />
                    {/* SVG Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute w-5 h-5 top-2.5 right-3 text-gray-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h2 className="text-lg font-semibold uppercase tracking-wide mt-6 mb-2">
                Socials
              </h2>
              <div className="flex gap-4">
                <SocialLink
                  href="https://gmail.com/"
                  icon={<FiMail size={20} className="hover:text-blue-500" />}
                />
                <SocialLink
                  href="https://instagram.com/"
                  icon={<Instagram size={20} className="hover:text-pink-500" />}
                />
                <SocialLink
                  href="https://twitter.com/"
                  icon={<FaXTwitter size={20} className="hover:text-blue-400" />}
                />
                <SocialLink
                  href="https://linkedin.com/"
                  icon={<Linkedin size={20} className="hover:text-blue-600" />}
                />
                <SocialLink
                  href="https://github.com/"
                  icon={<Github size={20} className="hover:text-gray-500" />}
                />
                <SocialLink
                  href="https://github.com/"
                  icon={<FaWhatsapp size={20} className="hover:text-green-500" />}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-300">
            © 2024 GDG-RCCIIT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <Link
    href={href}
    className="text-gray-500 transition-all duration-300 transform hover:scale-110"
  >
    {icon}
  </Link>
);

export default Footer;
