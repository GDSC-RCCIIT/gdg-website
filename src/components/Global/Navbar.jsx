'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/app/images/gdsc-logo.png'
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleNav = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };


  return (
    <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          {/* Left Section with Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3" onClick={closeAll}>
              <div className="relative h-8 w-8 sm:h-10 sm:w-10">
                <Image
                  src={Logo}
                  className="rounded-lg"
                  alt="GDSC RCCIIT Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-gray-900 whitespace-nowrap">
                  GDSC RCCIIT
                </span>
                <span className="hidden sm:block text-xs text-gray-600 whitespace-nowrap">
                  Kolkata, West Bengal
                </span>
              </div>
            </Link>
          </div>

          {/* Center Navigation Items */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-6">
            <NavItem
              type="dropdown"
              label="Projects & Events"
              isOpen={openDropdown === 'projects'}
              onToggle={() => handleDropdownToggle('projects')}
              items={[
                { href: '/Projects', label: 'Projects' },
                { href: '/Hackathon', label: 'Hackathons' },
                { href: '/Events', label: 'Events' }
              ]}
              closeAll={closeAll}
            />
            
            <Link href="/About" className="nav-link">
              About GDSC
            </Link>

            <NavItem
              type="dropdown"
              label="Resources & FAQ"
              isOpen={openDropdown === 'resources'}
              onToggle={() => handleDropdownToggle('resources')}
              items={[
                { href: '/TechToolkits', label: 'Tech Toolkits Hub' },
                { href: '/TeamsGallery', label: 'Teams & Gallery' },
                { href: '/FAQsForum', label: 'FAQ & Forum' },
                { href: '/Resources', label: 'Resources' },
                { href: '/localdev', label: 'Connect To Local Dev' }
              ]}
              closeAll={closeAll}
            />

            <Link href="/GeminiAI" className="nav-link">
              Gemini AI
            </Link>

            <NavItem
              type="dropdown"
              label="Careers"
              isOpen={openDropdown === 'careers'}
              onToggle={() => handleDropdownToggle('careers')}
              items={[
                { href: '/careers', label: 'Careers' },
                { href: '/Stories-Achievements', label: 'Stories & Achievements' }
              ]}
              closeAll={closeAll}
            />
          </div>

          {/* Right Section with Auth Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/SignUp">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                Join GDSC
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800/50 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeAll}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="relative h-8 w-8">
              <Image
                src={Logo}
                className="rounded-lg"
                alt="GDSC RCCIIT Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="font-bold text-gray-900">GDSC RCCIIT</span>
          </div>
          <button
            onClick={closeAll}
            className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-4 py-6 space-y-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
          <MobileNavItem
            label="Projects & Events"
            isOpen={openDropdown === 'projects'}
            onToggle={() => handleDropdownToggle('projects')}
            items={[
              { href: '/Projects', label: 'Projects', desc: 'All projects developed by GDSC' },
              { href: '/Hackathon', label: 'Hackathons', desc: 'All hackathons currently ongoing, planned and placed.' },
              { href: '/Events', label: 'Events', desc: 'Join us on our events or partner with us.' }
            ]}
            closeMenu={closeAll}
          />

          <Link href="/About" className="block text-base font-medium text-gray-900 hover:text-blue-600" onClick={closeAll}>
            About GDSC
          </Link>

          <MobileNavItem
            label="Resources & FAQ"
            isOpen={openDropdown === 'resources'}
            onToggle={() => handleDropdownToggle('resources')}
            items={[
              { href: '/TechToolkits', label: 'Tech Toolkits Hub', desc: 'Beginners guide to GiEntryDoor.',},
              { href: '/TeamsGallery', label: 'Teams & Gallery', desc: 'Meet our team and moments.' },
              { href: '/FAQsForum', label: 'FAQ & Forum', desc: 'Got any questions???' },
              { href: '/Resources', label: 'Resources', desc: 'A resource guide to different roadmaps' },
              { href: '/localdev', label: 'Connect To Local Dev', desc: 'Connect with out developers' }
            ]}
            closeMenu={closeAll}
          />

          <Link href="/GeminiAI" className="block text-base font-medium text-gray-900 hover:text-blue-600" onClick={closeAll}>
            Gemini AI
          </Link>

          <MobileNavItem
            label="Careers"
            isOpen={openDropdown === 'careers'}
            onToggle={() => handleDropdownToggle('careers')}
            items={[
              { href: '/careers', label: 'Careers', desc: 'Looking for a place in our community!' },
              { href: '/Stories-Achievements', label: 'Stories & Achievements', desc: 'What makes us who we are!' }
            ]}
            closeMenu={closeAll}
          />

          <div className="pt-4">
            <Link href="/SignUp" onClick={closeAll}>
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors duration-200">
                Join GDSC
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop Navigation Item Component
const NavItem = ({ type, label, isOpen, onToggle, items, closeAll }) => {
  if (type === 'dropdown') {
    return (
      <div className="relative">
        <button
          onClick={onToggle}
          className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          <span>{label}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute gap-1.5 top-full left-1/2 -translate-x-1/2 w-80 mt-2 py-2 px-4 bg-white rounded-lg shadow-lg border border-gray-100">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 border border-black rounded-md z-20  mb-2 font-bold text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                onClick={closeAll}
              >
                {item.label}
                <p className='text-xs text-gray-600'>{item.desc}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
  return null;
};

// Mobile Navigation Item Component
const MobileNavItem = ({ label, isOpen, onToggle, items, closeMenu }) => {
  return (
    <div className="space-y-2">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-base font-medium text-gray-900 hover:text-blue-600"
      >
        <span>{label}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm text-gray-600 hover:text-blue-600 py-2"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;