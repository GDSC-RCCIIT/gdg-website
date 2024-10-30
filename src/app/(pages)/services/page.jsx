'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductsNavbar from '../../../components/Global/ProductsNavbar';

// Services and Integrations Page Component
const ServicesIntegrationsPage = () => {
    const [selectedTab, setSelectedTab] = useState("Services and integrations");

    return (
        <div className="bg-white text-black">
            {/* Use the existing ProductsNavbar component */}
            <ProductsNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-8 py-12 text-center">
                <h1 className="text-6xl font-bold leading-tight">
                    Services and integrations
                </h1>
                <p className="text-lg mt-4">
                    Integrate services to boost your app's features, improve experience, and delight your users.
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

            {/* Footer Section */}
            <footer className="mt-32 py-16 bg-gray-900 text-gray-400">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <div className="mb-10">
                        <p className="text-lg">Connect with us:</p>
                        <div className="flex justify-center space-x-6 mt-4">
                            <a href="#"><img src="/images/instagram-icon.png" alt="Instagram" className="w-6 h-6 hover:text-white transition-all" /></a>
                            <a href="#"><img src="/images/twitter-icon.png" alt="Twitter" className="w-6 h-6 hover:text-white transition-all" /></a>
                            <a href="#"><img src="/images/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6 hover:text-white transition-all" /></a>
                            <a href="#"><img src="/images/mail-icon.png" alt="Email" className="w-6 h-6 hover:text-white transition-all" /></a>
                        </div>
                    </div>
                    <ul className="flex justify-center space-x-8 mb-8">
                        <li><a href="#" className="hover:text-white">Privacy</a></li>
                        <li><a href="#" className="hover:text-white">Terms</a></li>
                    </ul>
                    <p className="text-sm">© 2024 Google - Services and Integrations</p>
                </div>
            </footer>
        </div>
    );
};

const overviewProducts = [
    {
        title: "Gemini API",
        description: "Unlock new possibilities within your projects by integrating Google's latest generative AI models.",
        image: "ser1.png",
    },
    {
        title: "Checks",
        description: "Actionable insights to help you quickly discover and fix compliance issues on your apps.",
        image: "ser2.png",
    },
    {
        title: "Identity Services",
        description: "Simplify user authentication and credential management for seamless, secure experiences.",
        image: "ser3.svg",
    },
    {
        title: "Google Pay API",
        description: "Provide a quick, simple and secure checkout experience for your users.",
        image: "ser4.svg",
    },
];

const allProducts = [
    {
        title: "Cloud Functions for Firebase",
        description: "Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests.",
    },
    {
        title: "Firebase Crashlytics",
        description: "Firebase Crashlytics is a lightweight, realtime crash reporter that helps you track, prioritize, and fix stability issues that erode your app quality.",
    },
    {
        title: "Firebase App Distribution",
        description: "Firebase App Distribution makes distributing your apps to trusted testers painless, helping you get feedback early and often.",
    },
    {
        title: "Firebase Test Lab",
        description: "Firebase Test Lab is a cloud-based app testing infrastructure that lets you test your app on a range of devices and configurations.",
    },
    {
        title: "Firestore",
        description: "Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud.",
    },
    {
        title: "Gemini in Firebase",
        description: "Gemini in Firebase is an AI-assistive tool that helps you get answers to questions about Firebase products and features, generates and explains code for development, and shortens your troubleshooting process.",
    },
    {
        title: "Cloud Run documentation",
        description: "Run containers on a fully managed environment.",
    },
    {
        title: "Google Home Developers",
        description: "Make your smart home devices more accessible, engaging, and helpful to millions of users on the Google Home platform.",
    },
    {
        title: "Firebase Realtime Database",
        description: "Flexible NoSQL realtime database from Firebase.",
    },
    {
        title: "Firebase App Hosting",
        description: "Firebase App Hosting is a framework that provides serverless hosting for modern, full-stack, and AI web apps.",
    },
    {
        title: "Firebase Remote Config",
        description: "Change the behavior and appearance of your app without publishing an app update, at no cost, for unlimited daily active users.",
    },
    {
        title: "Vertex AI in Firebase",
        description: "Build AI-powered mobile and web apps and features with the Gemini API using Vertex AI in Firebase.",
    },
];

export default ServicesIntegrationsPage;
