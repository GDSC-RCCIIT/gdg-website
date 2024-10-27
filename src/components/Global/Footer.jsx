import React from "react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram as Instagram } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaGithub as Github } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { HeartIcon } from "lucide-react";

const resources = [
  { text: "Location", href: "https://www.google.com/maps/place/RCC+Institute+of+Information+Technology/@22.5592665,88.3938297,17z/data=!4m14!1m7!3m6!1s0x3a027686b848fb8d:0xed09795e4836e886!2sRCC+Institute+of+Information+Technology!8m2!3d22.5592616!4d88.3964046!16s%2Fm%2F02vtlkw!3m5!1s0x3a027686b848fb8d:0xed09795e4836e886!8m2!3d22.5592616!4d88.3964046!16s%2Fm%2F02vtlkw?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" },
  { text: "About GDG", href: "https://tailwindcss.com/" },
  { text: "How to Apply", href: "https://tailwindcss.com/" },
  { text: "Who can apply?", href: "https://tailwindcss.com/" },
];

const followUs = [
  { text: "Github", href: "https://github.com/GDSC-RCCIIT/gdg-website" },
  { text: "Instagram", href: "https://instagram.com/" },
  { text: "Twitter", href: "https://x.com/gdsc_rcciit" },
  { text: "Whatsapp", href: "https://web.whatsapp.com/" },
  { text: "LinkedIn", href: "https://www.linkedin.com/company/gdgc-rcciit/" },
];

const legal = [
  { text: "Privacy Policy", href: "/PrivacyPolicy" },
  { text: "Terms & Conditions", href: "/TermsAndConditions" },
  { text: "Rules & Regulations", href: "/RulesAndRegulations" },
];

const socialLinks = [
  { icon: <Instagram size={20} />, color: "bg-gradient-to-br from-purple-600 to-pink-500", href: "https://instagram.com/" },
  { icon: <FaXTwitter size={20} />, color: "bg-black", href: "https://x.com/gdsc_rcciit" },
  { icon: <Linkedin size={20} />, color: "bg-blue-600", href: "https://www.linkedin.com/company/gdgc-rcciit/" },
  { icon: <Github size={20} />, color: "bg-gray-800", href: "https://github.com/GDSC-RCCIIT/gdg-website" },
  { icon: <FaWhatsapp size={20} />, color: "bg-green-500", href: "https://web.whatsapp.com/" },
  { icon: <FiMail size={20} />, color: "bg-red-500", href: "mailto:contact@gdsc.com" },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Google-inspired geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute left-1/4 top-1/3 w-24 h-24 bg-green-100 rotate-45 opacity-20"></div>
        <div className="absolute right-1/3 bottom-1/4 w-32 h-32 bg-yellow-100 rounded-lg opacity-20"></div>
        <div className="absolute left-1/2 top-1/2 w-40 h-40 bg-red-100 rounded-full opacity-20"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section with enhanced styling */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <img src="/Logo.svg" className="h-14 w-auto" alt="Logo" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 bg-clip-text text-transparent">
                    GDSC
                  </span>
                  <span className="text-lg font-medium text-gray-600">RCCIIT</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-600 max-w-md">
              Join our community of student developers, designers, and innovators. Build solutions for local businesses and your community.
            </p>
          </div>

          {/* Links Sections with enhanced styling */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-8">
            <FooterSection title="Resources" links={resources} />
            <FooterSection title="Follow Us" links={followUs} />
            <FooterSection title="Legal" links={legal} />
          </div>

          {/* Social Section with embedded design */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold mb-6 text-gray-800">Connect With Us</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <SocialButton key={index} icon={link.icon} color={link.color} href={link.href} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with enhanced design */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 Google Developer Student Club - RCCIIT. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Made with</span>
              <div className="flex gap-1">
                <HeartIcon color='red' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col items-start">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 flex items-center gap-2 group"
          >
            <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"></span>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialButton = ({ href, icon, color }) => (
  <Link
    href={href}
    className={`${color} p-3 rounded-lg text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center`}
  >
    {icon}
  </Link>
);

export default Footer;
