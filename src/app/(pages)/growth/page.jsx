'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductsNavbar from '../../../components/Global/ProductsNavbar';

// Growth and Monetization Page Component
const GrowthMonetizationPage = () => {
    const [selectedTab, setSelectedTab] = useState("Growth and monetization");

    return (
        <div className="bg-white text-black">
            {/* Use the existing ProductsNavbar component */}
            <ProductsNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-8 py-12 text-center">
                <h1 className="text-6xl font-bold leading-tight">
                    Growth and monetization
                </h1>
                <p className="text-lg mt-4">
                    Access global audiences, drive engagement, track performance, and unlock new revenue streams through our marketplaces, growth, and monetization tools.
                </p>
            </div>

            {/* Product Overview Section */}
            <div className="max-w-7xl mx-auto px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {overviewProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-center"
                        >
                            <img src={product.image} alt={product.title} className="w-20 h-20 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-600 text-lg">{product.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* All Products Section */}
            <div className="max-w-7xl mx-auto px-8 mt-16">
                <h2 className="text-4xl font-semibold mb-8">All Products</h2>
                <div className="flex flex-wrap justify-between items-center mb-12">
                    <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
                        <Search className="absolute top-3 left-3 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search for a product"
                            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition-all">AI</button>
                        <button className="px-4 py-2 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-300 transition-all">Mobile</button>
                        <button className="px-4 py-2 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-300 transition-all">Web</button>
                        <button className="px-4 py-2 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-300 transition-all">Cloud</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {allProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                        >
                            <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                            <a href="#" className="text-blue-500 font-bold">Explore</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const overviewProducts = [
    {
        title: "Google Play",
        description: "Publish your apps and games, grow your audience, boost engagement, and earn revenue.",
        image: "/gro1.png",
    },
    {
        title: "Google AdMob",
        description: "Monetize mobile apps with targeted, in-app advertising that respects user experience.",
        image: "/gro2.png",
    },
    {
        title: "Google Ads",
        description: "Promote your website, products, and app to the right users with Google Ads.",
        image: "/gro3.svg",
    },
    {
        title: "Firebase",
        description: "An app development platform that helps you build and grow apps and games users love.",
        image: "/gro4.svg",
    },
];

const allProducts = [
    {
        title: "Firebase In-App Messaging",
        description: "Firebase In-App Messaging helps you engage your app's active users by sending them targeted, contextual messages that encourage them to use key app features.",
    },
    {
        title: "Firebase Cloud Messaging",
        description: "Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.",
    },
    {
        title: "Chrome Extensions",
        description: "Learn how to develop Chrome extensions.",
    },
    {
        title: "Google Ads API",
        description: "Build tools to manage large Google Ads accounts and campaigns.",
    },
    {
        title: "Privacy Sandbox",
        description: "Privacy-focused APIs and updates for cookies, advertising, identity, personalization, and fraud prevention.",
    },
    {
        title: "Google Play's billing system",
        description: "Google Play’s billing system Sell digital in-app products and subscriptions in your app.",
    },
    {
        title: "Distribute Your Apps & Games on Google Play",
        description: "Utilize Google Play to distribute your apps and games, which has the ability to reach over 2 billion Android devices and increase total app downloads.",
    },
    {
        title: "Google Play Console",
        description: "Publish your apps and games with Google Play Console and grow your business on Google Play.",
    },
    {
        title: "Interactive Media Ads SDKs",
        description: "The IMA SDKs enable publishers to monetize video, audio, or gaming content with video advertising.",
    },
    {
        title: "AdSense",
        description: "Google AdSense provides a free, flexible way to earn money from your websites, mobile sites, and site search results.",
    },
    {
        title: "Google Ads",
        description: "Create and manage ads that reach users looking for your products or services on Google Search, Display, YouTube, and more.",
    },
    {
        title: "AdMob",
        description: "Discover how to monetize your mobile apps with targeted in-app advertising that matches criteria you set.",
    },
];

export default GrowthMonetizationPage;
