// Sidebar.js
'use client';

import React from 'react';
import Link from 'next/link';
import { HelpCircle, Info, Phone, Book, Rocket, TrendingUp } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { href: "/sandbox", label: "Sanbox", icon: <Book /> },
        { href: "/moonshots", label: "Moonshots", icon: <Info /> },
        { href: "/storytime", label: "Story Line", icon: <HelpCircle /> },
        { href: "/Contact", label: "Contact Us", icon: <Phone /> },
        { href: "/innovate", label: "Innovate", icon: <Rocket /> },
        { href: "/growth", label: "Growth", icon: <TrendingUp /> },
    ];

    return (
        <aside
            className="hidden lg:flex fixed left-0 top-0 h-full bg-black text-white shadow-lg p-4 z-50"
            style={{ width: '60px', marginTop: '6rem' }}>
            <div className="flex flex-col space-y-8 items-center mt-20">
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href} className="group relative flex items-center justify-center hover:text-blue-300 transition duration-200">
                        <div className="p-2 rounded-full group-hover:bg-white/20 transition duration-300">
                            {item.icon}
                        </div>
                        <span className="absolute left-16 whitespace-nowrap bg-gray-900 text-white text-sm font-medium rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
