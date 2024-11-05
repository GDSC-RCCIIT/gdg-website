"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Header Section with Image and Text
const Header = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Image
                src="/genai1.jpg" // Replace with actual image URL
                alt="Build what's next in generative AI"
                width={1200}
                height={600}
                className="mx-auto"
            />
            <div className="relative z-10 max-w-3xl mx-auto mt-8">
                <motion.h1 className="text-5xl font-bold mb-4">
                    Build what's next in generative AI
                </motion.h1>
                <p className="text-xl font-medium">
                    See what you can build with up to a 2M token context window using our newest and most advanced Gemini 1.5 models.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                    <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                        Try it in Vertex AI
                    </button>
                    <button className="bg-transparent text-white font-semibold px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition">
                        Contact sales
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

// What's New Section
const WhatsNew = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">What's new in AI</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Startup Event</h3>
                    <p className="text-lg text-gray-600 mb-6">Join inspiring founders, VCs, and experts at Google Cloud Startup Summit.</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI Report</h3>
                    <p className="text-lg text-gray-600 mb-6">Learn from the Gen AI Leaders who are seeing significant gains in ROI.</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Gemini at Work Event</h3>
                    <p className="text-lg text-gray-600 mb-6">Fuel your AI-powered transformation at Google's Gemini at Work.</p>
                </div>
            </div>
        </motion.div>
    );
};

// Products and Solutions Section
const ProductsAndSolutions = () => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Access over 150 cutting-edge products, plus industry-defining AI</h2>
            <p className="text-lg mb-6 max-w-4xl mx-auto">
                Build, deploy, and manage applications on our scalable, world-class infrastructure.
            </p>
            <div className="mt-6 flex justify-center gap-4">
                <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                    Go to my console
                </button>
                <button className="bg-transparent text-blue-600 font-semibold px-8 py-3 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    See all 150+ products
                </button>
            </div>
        </motion.div>
    );
};

// Customer Innovation Section
const CustomerInnovation = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Customer innovation happens on Google Cloud</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Financial services</h3>
                    <p className="text-lg text-gray-600 mb-6">L&T Financial uses BigQuery to analyze data for faster loan processing in less than two minutes.</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Jain irrigation</h3>
                    <p className="text-lg text-gray-600 mb-6">Jain Irrigation records 10x productivity improvement with Google Workspace.</p>
                </div>
                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Josh Talks</h3>
                    <p className="text-lg text-gray-600 mb-6">Josh Talks delivers glitchless online learning with Firebase and shortens app response time to milliseconds.</p>
                </div>
            </div>
        </motion.div>
    );
};

// Main Google Cloud Generative AI Page Component
const GoogleCloudGenerativeAIPage = () => {
    return (
        <div>
            <Header />
            <WhatsNew />
            <ProductsAndSolutions />
            <CustomerInnovation />
        </div>
    );
};

export default GoogleCloudGenerativeAIPage;
