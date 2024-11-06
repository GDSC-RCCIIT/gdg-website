"use client";
import React from "react";
import { motion } from "framer-motion";

const StorageOverview = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            {/* Header Section with Light Gradient Bar */}
            <header className="relative py-20 text-center bg-gray-50 shadow-lg border-b-2 border-indigo-300">
                <motion.div
                    className="container mx-auto px-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h1
                        className="text-5xl font-bold text-indigo-700 mb-4"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Storage Overview
                    </motion.h1>
                    <p className="text-lg max-w-2xl mx-auto text-gray-700">
                        Data storage, backup, and disaster recovery in Google Cloud.
                    </p>
                </motion.div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12">
                {/* Explore Storage Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6 text-indigo-700">Explore Storage in Google Cloud</h2>
                    <p className="text-gray-700 mb-8">
                        Read documentation and Cloud Architecture Center articles about storage products, capabilities, and procedures.
                    </p>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Cloud Storage Overview",
                                description: "Learn about Cloud Storage, including tools for data storage.",
                                icon: "cloud_upload",
                            },
                            {
                                title: "Filestore Overview",
                                description: "Explore Filestore for network-attached file storage.",
                                icon: "folder_open",
                            },
                            {
                                title: "Backup and Disaster Recovery",
                                description: "Understand how to back up and recover your data resources.",
                                icon: "backup",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-indigo-600 text-3xl mr-3">{item.icon}</span>
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
                                title: "NetApp Volumes PDF",
                                description: "Explore high-performance file storage for enterprise applications.",
                                icon: "picture_as_pdf",
                            },
                            {
                                title: "GKE + Filestore",
                                description: "See how Filestore integration with GKE accelerates AI/ML workload performance.",
                                icon: "data_usage",
                            },
                            {
                                title: "Get Started with Cloud Storage",
                                description: "Learn the basics of creating, managing, and securing data in Cloud Storage.",
                                icon: "school",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-blue-600 text-3xl mr-3">{item.icon}</span>
                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                </div>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Storage Products by Use Case with Filter */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6 text-indigo-700">Storage Products by Use Case</h2>
                    <input
                        type="text"
                        placeholder="Filter here"
                        className="w-full p-4 border rounded-lg mb-6 shadow-sm text-gray-800 focus:outline-none"
                    />
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            "Backing Up Data Resources",
                            "Data Backup Compliance",
                            "Storage Solutions",
                            "Data Transfer",
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
                                    Discover how Google Cloud’s storage products can assist with {title.toLowerCase()}.
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
                            "Filestore Multishares for GKE",
                            "Migrate Your Data",
                            "Backup for GKE",
                            "What is a Data Lake?",
                            "Cloud Storage for Firebase",
                            "Storage Insights Inventory Reports",
                            "Google Drive",
                            "Optimal Storage Strategy",
                        ].map((title, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-bl from-gray-50 to-indigo-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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

            {/* Footer Section with Minimal Gradient */}
            <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-lg">Ready to explore Google Cloud Storage solutions?</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="hover:text-indigo-300">Get Started</a>
                        <a href="#" className="hover:text-indigo-300">Contact Support</a>
                    </div>
                    <p className="mt-4">© 2024 Google Cloud - All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default StorageOverview;
