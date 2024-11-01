'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductsNavbar from '../../../components/Global/ProductsNavbar';

// Frameworks, IDEs, and SDKs Page Component
const FrameworksIDEsSDKsPage = () => {
    const [selectedTab, setSelectedTab] = useState("Frameworks, IDEs and SDKs");

    return (
        <div className="bg-white text-black">
            {/* Use the existing ProductsNavbar component */}
            <ProductsNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-8 py-12 text-center">
                <h1 className="text-6xl font-bold leading-tight">
                    Frameworks, IDEs and SDKs
                </h1>
                <p className="text-lg mt-4">
                    Simplify your development process with intuitive IDEs, time-saving frameworks, and feature-rich SDKs.
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
        title: "Android Studio",
        description: "The official IDE for building Android apps, designed to streamline your development workflow.",
        image: "/sdk1.png",
    },
    {
        title: "Flutter",
        description: "Build, test, and deploy beautiful web, mobile, desktop and embedded apps from one codebase.",
        image: "/sdk2.png",
    },
    {
        title: "Google AI Studio",
        description: "Build generative AI applications quickly with Gemini in Google AI Studio.",
        image: "/sdk3.png",
    },
    {
        title: "Project IDX",
        description: "Bring your full-stack, multiplatform app development workflow to the cloud.",
        image: "/sdk4.png",
    },
];

const allProducts = [
    {
        title: "Android Studio",
        description: "Android Studio provides app builders with an integrated development environment (IDE) optimized for Android apps. Download Android Studio today.",
    },
    {
        title: "ARCore",
        description: "Discover links to learn more about and get started with the technology to create world-scale, immersive augmented reality experiences.",
    },
    {
        title: "Genkit",
        description: "Code-first framework for orchestrating, deploying, and monitoring generative AI workflows.",
    },
    {
        title: "Jetpack",
        description: "Follow best practices, eliminate boilerplate code, and reduce fragmentation.",
    },
    {
        title: "Matter",
        description: "The new smart home connectivity protocol for more reliability & lower latency.",
    },
    {
        title: "Chrome DevTools",
        description: "Debug and optimize your web applications with Chrome DevTools.",
    },
    {
        title: "Blockly Accessibility Overview",
        description: "Blockly's work to support block-based accessible programming for developers, students, and organizations.",
    },
    {
        title: "TensorFlow",
        description: "An open source machine learning library for research and production.",
    },
    {
        title: "Jetpack Compose",
        description: "Jetpack Compose is Android's recommended modern toolkit for building native UI. It simplifies and accelerates UI development on Android.",
    },
    {
        title: "Kotlin",
        description: "Kotlin is Android's recommended programming language for modern android development.",
    },
    {
        title: "Blockly",
        description: "Visual programming editor. Drag and drop blocks to generate executable code. Designed for developers to embed into websites or mobile apps.",
    },
    {
        title: "Blockly Summit 2024",
        description: "Discover how developers and educators are using Blockly to advance the future of CS education, along with how Blockly partners are incorporating AI into their programs.",
    },
];

export default FrameworksIDEsSDKsPage;
