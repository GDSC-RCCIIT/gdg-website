"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

// Solutions Catalog Page Component
const SolutionsCatalogPage = () => {
    return (
        <div className="bg-white text-black">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-8 py-12 text-center">
                <h1 className="text-6xl font-bold leading-tight">
                    Innovate Faster
                </h1>
                <p className="text-lg mt-4">
                    Unlock new possibilities with expert-backed guidance.
                </p>
            </div>

            {/* Experimenting with Gemini Section */}
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-semibold mb-8">Experimenting with Gemini?</h2>
                <p className="text-lg mb-12">
                    Find the best way forward with these integration solutions and resources.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {geminiSolutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-blue-500 border-4 border-transparent transition-all"
                        >
                            <img src={solution.image} alt={solution.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                            <p className="text-lg text-gray-600 mb-4">{solution.description}</p>
                            <div className="flex items-center space-x-2 mb-4">
                                {solution.icons.map((icon, iconIndex) => (
                                    <img key={iconIndex} src={icon} alt="icon" className="w-6 h-6" />
                                ))}
                            </div>
                            <a href="#" className="text-blue-500 font-bold">Learn more</a>
                        </motion.div>
                    ))}
                </div>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 px-8 py-4 bg-gray-200 text-black rounded-full shadow-md hover:bg-gray-300 transition-all"
                >
                    More
                </motion.button>
            </div>

            {/* Have a Specific Challenge Section */}
            <div className="mt-24 max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-semibold mb-8">Have a Specific Challenge?</h2>
                <p className="text-lg mb-12">
                    Find relevant problem-solving resources using the filters and search bar.
                </p>
                <div className="flex flex-wrap justify-between items-center mb-12">
                    <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
                        <Search className="absolute top-3 left-3 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition-all">AI</button>
                        <button className="px-4 py-2 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-300 transition-all">Cloud</button>
                        <button className="px-4 py-2 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-300 transition-all">Web</button>
                        <button className="px-4 py-2 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-300 transition-all">Mobile</button>
                        <button className="px-4 py-2 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-300 transition-all">Games</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {challengeSolutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                        >
                            <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                            <p className="text-lg text-gray-600 mb-4">{solution.description}</p>
                            <a href="#" className="text-blue-500 font-bold">Start</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const geminiSolutions = [
    {
        title: "Incorporating generative AI into your game development process",
        description: "Learn how generative AI can be used in different stages of game development from preproduction to in-game solutions using Gemini AI and Gemma model.",
        image: "/inovate1.png",
        icons: ["/images/gemini-logo.png", "/images/firebase-logo.png", "/images/chrome-logo.png"],
    },
    {
        title: "Build an agent-powered travel planning app with Generative AI",
        description: "Learn how to use Flutter and Firebase Genkit to build multi-platform apps that can seamlessly integrate with AI.",
        image: "/inovate2.png",
        icons: ["/images/gemini-logo.png", "/images/firebase-logo.png", "/images/flutter-logo.png", "/images/chrome-logo.png"],
    },
    {
        title: "Creating a multiplayer crossword with the Gemini API, Flutter, and Firebase",
        description: "Learn how the Google engineering teams created a multiplayer crossword using Gemini, Flutter, and Firebase.",
        image: "/inovate3.png",
        icons: ["/images/gemini-logo.png", "/images/firebase-logo.png", "/images/flutter-logo.png"],
    },
    // Additional solution cards can be added here...
];

const challengeSolutions = [
    {
        title: "Authentication with Firebase",
        description: "Firebase Authentication provides backend services, SDKs, and ready-made UI libraries to authenticate users to your app.",
    },
    {
        title: "Learn web development",
        description: "Web.dev is a platform for web design and development self-directed courses, all approved by members of the Chrome team.",
    },
    {
        title: "Build games with Flutter",
        description: "The Flutter Casual Games toolkit provides everything you need to learn to develop a mobile game – from idea to launch.",
    },
    // Additional challenge cards can be added here...
];

export default SolutionsCatalogPage;
