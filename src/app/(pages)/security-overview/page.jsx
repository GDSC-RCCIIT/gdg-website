"use client";
import React from "react";
import { motion } from "framer-motion";

const SecurityOverview = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
            {/* Header Section with Gradient Accent */}
            <header className="relative py-24 text-center shadow-lg bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white">
                <motion.div
                    className="container mx-auto px-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h1
                        className="text-5xl font-bold mb-4"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Security Overview
                    </motion.h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Google Cloud security products help organizations secure their cloud environment, protect their data, and comply with industry regulations.
                    </p>
                </motion.div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12">
                {/* Explore Security Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6 text-indigo-700">Explore Security in Google Cloud</h2>
                    <p className="text-gray-700 mb-8">
                        Read documentation and articles about security products and procedures in Google Cloud.
                    </p>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Google Cloud Security Overview",
                                description: "Learn about the physical, administrative, and technical controls that protect your data.",
                                icon: "shield",
                            },
                            {
                                title: "Authentication Methods",
                                description: "Understand authentication concepts to confirm a user's identity.",
                                icon: "fingerprint",
                            },
                            {
                                title: "Plan Security, Privacy, and Compliance",
                                description: "Plan secure services architecture on Google Cloud.",
                                icon: "security",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-blue-600 text-3xl mr-3">{item.icon}</span>
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Training and Resources */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6 text-indigo-700">Training, Blog Articles, and More</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Security Engineer Learning Path",
                                description: "Study how to develop, implement, and monitor cloud security.",
                                icon: "school",
                            },
                            {
                                title: "Cloud Security Podcast",
                                description: "Listen to industry experts discuss cloud security.",
                                icon: "podcasts",
                            },
                            {
                                title: "Cloud Security Blog",
                                description: "Read about Google Cloud security benefits and customer stories.",
                                icon: "article",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-indigo-600 text-3xl mr-3">{item.icon}</span>
                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                </div>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Security Products by Use Case with Filter */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6 text-indigo-700">Security Products by Use Case</h2>
                    <input
                        type="text"
                        placeholder="Filter here"
                        className="w-full p-4 border rounded-lg mb-6 shadow-sm text-gray-800 focus:outline-none"
                    />
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            "Data Security",
                            "Network Security",
                            "Application Security",
                            "Security Operations",
                            "Access Management",
                            "Auditing, Monitoring, and Logging",
                            "Cloud Governance",
                        ].map((title, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <h4 className="text-2xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-600">
                                    Explore Google Cloud's solutions for {title.toLowerCase()}.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Related Guides and Resources */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6 text-indigo-700">Related Products, Guides, and Sites</h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            "Compliance and Privacy",
                            "Assured Workloads",
                            "Data Residency Service Availability",
                            "T-Systems Sovereign Cloud",
                            "Secure Software Supply Chain",
                            "Artifact Registry",
                            "Artifact Analysis",
                            "Cloud Build",
                            "Binary Authorization",
                        ].map((title, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-bl from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-600">Find resources on {title.toLowerCase()}.</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SecurityOverview;
