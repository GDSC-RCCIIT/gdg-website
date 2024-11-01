'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

// Product Navbar Component with Tabs
const ProductsNavbar = ({ selectedTab, setSelectedTab }) => {
    const router = useRouter();

    const tabs = [
        { name: "All Products", path: "/devprod" },
        { name: "Platforms and operating systems", path: "/platforms" },
        { name: "Frameworks, IDEs and SDKs", path: "/sdk" },
        { name: "Services and integrations", path: "/services" },
        { name: "Growth and monetization", path: "/growth" },
    ];

    const handleTabClick = (tab) => {
        setSelectedTab(tab.name);
        router.push(tab.path); // Navigate to the appropriate page
    };

    return (
        <div className="bg-gray-100 border-b">
            <div className="max-w-7xl mx-auto flex gap-4 px-6 py-4 overflow-x-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(tab)}
                        className={`px-4 py-2 rounded-lg font-medium transition ${selectedTab === tab.name
                            ? "bg-[#4285F4] text-white"
                            : "bg-white text-gray-800 hover:bg-gray-200"
                            }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductsNavbar;
