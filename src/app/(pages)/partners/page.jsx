"use client";
import React from 'react';
import { motion } from "framer-motion";

const partnersData = [
    {
        category: "Partners",
        title: "Arize, Vertex AI API: Evaluation workflows to accelerate generative app development and AI ROI",
        author: "Gabe Barcelos",
        readTime: "9-minute read",
    },
    {
        category: "Partners",
        title: "Accelerate retail media success with EPAM and Google Cloud",
        author: "Diana Abebrese",
        readTime: "7-minute read",
    },
    {
        category: "Databases",
        title: "Unlocking the power of Spanner: 10 partners to revolutionize your data",
        author: "Nitin Sagar",
        readTime: "8-minute read",
    },
    {
        category: "AI & Machine Learning",
        title: "Announcing Anthropic’s upgraded Claude 3.5 Sonnet on Vertex AI",
        author: "Nenshad Bardoliwalla",
        readTime: "5-minute read",
    },
    {
        category: "Partners",
        title: "Accelerating partner growth with Earnings Hub and new AI resources",
        author: "Colleen Kapase",
        readTime: "5-minute read",
    },
    {
        category: "Partners",
        title: "Google Cloud Marketplace private offer enhancements unlock enterprise and AI use cases",
        author: "Sakshi Goel",
        readTime: "4-minute read",
    },
    {
        category: "Partners",
        title: "AUI’s Apollo offers businesses the next generation of AI agents on Google Cloud",
        author: "Zac Maufe",
        readTime: "7-minute read",
    },
    {
        category: "Data Analytics",
        title: "Generating synthetic data with BigQuery and Gretel",
        author: "Firat Tekiner",
        readTime: "7-minute read",
    },
    {
        category: "Startups",
        title: "Helping more AI startups build and go to market with Google Cloud",
        author: "James Lee",
        readTime: "5-minute read",
    },
    {
        category: "Data Analytics",
        title: "Integrate Oracle EBS insights faster with Google Cloud Cortex Framework",
        author: "Frank Zhang",
        readTime: "3-minute read",
    },
];

const PartnersPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Improved Header Section */}
            <header className="bg-gradient-to-br from-blue-500 via-green-400 to-yellow-400 py-20 text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-6"
                >
                    <h1 className="text-4xl font-bold mb-4 text-black">Partners</h1>
                    <p className="text-lg max-w-3xl mx-auto text-black">
                        Discover partners that can help you innovate faster with Google Cloud products and services.
                    </p>
                </motion.div>
            </header>

            {/* Partners List Section */}
            <main className="container mx-auto px-6 py-10">
                <section>
                    <div className="grid md:grid-cols-2 gap-6">
                        {partnersData.map((partner, index) => (
                            <motion.article
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-lg font-bold text-blue-600 mb-2">{partner.category}</h3>
                                <p className="text-gray-700 font-semibold mb-4">{partner.title}</p>
                                <p className="text-sm text-gray-500">{partner.author} • {partner.readTime}</p>
                            </motion.article>
                        ))}
                    </div>
                    <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        Load more stories
                    </button>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-gray-400 py-6">
                <div className="container mx-auto text-center">
                    <p className="text-sm mb-2">Follow us • Google Cloud • Google Cloud Products • Privacy • Terms • Help</p>
                    <p className="text-sm">‪English‬</p>
                </div>
            </footer>
        </div>
    );
};

export default PartnersPage;
