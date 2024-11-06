"use client";
import React from "react";
import { motion } from "framer-motion";

const IndustrySolutionsOverview = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Header Section with Animation */}
            <header className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 shadow-lg">
                <motion.div
                    className="container mx-auto px-6 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-5xl font-bold mb-4"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Industry Solutions Overview
                    </motion.h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Transform your business with Google Cloud solutions tailored for industries like retail, healthcare, and financial services.
                    </p>
                </motion.div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12">
                {/* Section: Training, Blog Articles, and More */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Training, Blog Articles, and More</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Modernize retail and ecommerce solutions with Google Cloud",
                                description: "Explore services Google Cloud offers for modernizing retail applications and infrastructure.",
                                icon: "storefront",
                            },
                            {
                                title: "Media rendering with Google Cloud",
                                description: "Discover the benefits of Google Cloud for creating large-scale visual effects rendering for image and video content.",
                                icon: "movie",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-indigo-600 text-3xl mr-3">{item.icon}</span>
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Industry Solutions Products by Use Case */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Industry Solutions Products by Use Case</h2>
                    <input
                        type="text"
                        placeholder="Filter here"
                        className="w-full p-4 border rounded-lg mb-6 shadow-sm focus:outline-none"
                    />
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Financial Services",
                                description: "Transform AML detection by replacing rules-based transaction monitoring with AI.",
                                icon: "account_balance",
                                details: [
                                    "Anti Money Laundering AI: Detect suspicious activity faster and more accurately.",
                                ],
                            },
                            {
                                title: "Healthcare",
                                description: "Digitally transform healthcare and life sciences with data-powered innovation.",
                                icon: "local_hospital",
                            },
                            {
                                title: "Media and Entertainment",
                                description: "Transform audience experiences with innovation and insights.",
                                icon: "theaters",
                            },
                            {
                                title: "Retail",
                                description: "Provide Google-quality product search and recommendations for retail customers.",
                                icon: "shopping_cart",
                            },
                            {
                                title: "Transport, Fleet, Career, and Telecom",
                                description: "Leverage AI for problem-solving, quality hires, and improved subscriber retention.",
                                icon: "directions_car",
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-indigo-600 text-3xl mr-3">{item.icon}</span>
                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                </div>
                                <p className="text-gray-700">{item.description}</p>
                                {item.details && (
                                    <ul className="list-disc list-inside text-gray-600 mt-2">
                                        {item.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Related Products and Guides */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Related Products, Guides, and Sites</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Industry-specific Cloud Solutions",
                                description: "See how Google Cloud solutions improve efficiency, agility, reduce cost, and capture new opportunities.",
                                icon: "cloud_queue",
                            },
                            {
                                title: "Blockchain Node Engine",
                                description: "Managed node hosting for blockchain development.",
                                icon: "security",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-indigo-600 text-3xl mr-3">{item.icon}</span>
                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                </div>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default IndustrySolutionsOverview;
