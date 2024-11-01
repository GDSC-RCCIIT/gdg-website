'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductsNavbar from '../../../components/Global/ProductsNavbar';

// Platforms and Operating Systems Page Component
const PlatformsOSPage = () => {
    const [selectedTab, setSelectedTab] = useState("Platforms and operating systems");

    return (
        <div className="bg-gray-100 text-black">
            {/* Use the existing ProductsNavbar component */}
            <ProductsNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-8 py-16 text-center">
                <h1 className="text-6xl font-bold leading-tight">
                    Platforms and Operating Systems
                </h1>
                <p className="text-lg mt-4">
                    Streamline your development process across multiple environments with our integrated platforms and operating systems.
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
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
                        >
                            <img src={product.image} alt={product.title} className="w-24 h-24 mx-auto mb-4" />
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
        title: "Android",
        description: "Modern tools to help you build experiences that people love across every Android device.",
        image: "/os1.png",
    },
    {
        title: "Google AI",
        description: "Integrate cutting-edge AI into your projects. Streamline processes with Google's latest models.",
        image: "/os2.ico",
    },
    {
        title: "Firebase",
        description: "An app development platform that helps you build and grow apps and games users love.",
        image: "/os3.png",
    },
    {
        title: "Google Cloud",
        description: "New customers get $300 in free credits to deploy a dynamic website, launch a VM, build a three-tier web app, and more.",
        image: "/os4.png",
    },
];

const allProducts = [
    {
        title: "Android Developers",
        description: "Discover the latest app development tools, platform updates, training, and documentation for developers across every Android device.",
    },
    {
        title: "Google AI for Developers",
        description: "Generative AI documentation.",
    },
    {
        title: "Firebase",
        description: "Firebase gives you the tools and infrastructure you need to build better mobile and web apps, improve app quality, and grow your business.",
    },
    {
        title: "Chrome for Developers",
        description: "Helping you build, grow and innovate on the web.",
    },
    {
        title: "Google Cloud Documentation",
        description: "Comprehensive documentation, guides, and resources for Google Cloud products and services.",
    },
    {
        title: "Android TV overview",
        description: "If you've got an Android app or game, Android TV can bring it to your users in their living room. Android TV apps use the same architecture as those for phones and tablets.",
    },
    {
        title: "Android for Cars overview",
        description: "Bring your app to vehicles running either Android Auto or Android Automotive OS. Use one app architecture that works for both cases.",
    },
    {
        title: "Android for Cars",
        description: "Discover Android Auto and Android Automotive OS and get links to detailed documentation.",
    },
    {
        title: "Google Play Games on PC",
        description: "Google Play Games on PC brings the best of Google Play by enabling players to experience immersive and seamless cross-platform gameplay.",
    },
    {
        title: "Get started with Wear OS",
        description: "Wear OS by Google lets you write apps that help users stay connected, track their health and fitness goals, execute tasks, and express themselves.",
    },
    {
        title: "ChromeOS",
        description: "ChromeOS is the speedy, simple and secure operating system that powers every Chromebook.",
    },
    {
        title: "Chromium",
        description: "An open source browser project that aims to build a safer, faster, and more stable way for all internet users to experience the web.",
    },
];

export default PlatformsOSPage;
