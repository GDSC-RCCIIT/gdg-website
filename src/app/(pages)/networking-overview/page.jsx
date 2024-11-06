"use client";
import React from "react";
import { motion } from "framer-motion";

const NetworkingOverview = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-700 text-white font-sans">
            {/* Animated Header */}
            <header className="relative py-20 text-center shadow-lg">
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
                        Networking Overview
                    </motion.h1>
                    <p className="text-lg max-w-2xl mx-auto text-white/90">
                        Connect your networks and workloads, load balance traffic, and secure your network.
                    </p>
                </motion.div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12 text-gray-100">
                {/* Explore Networking Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Explore Networking in Google Cloud</h2>
                    <p className="text-gray-200 mb-8">
                        Read documentation and articles about networking products, capabilities, and procedures.
                    </p>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Virtual Private Cloud (VPC) Overview",
                                description: "Deploy and connect resources in a virtual network environment.",
                                icon: "cloud",
                            },
                            {
                                title: "Choosing a Network Connectivity Product",
                                description: "Choose the best network connectivity method for your setup.",
                                icon: "settings_ethernet",
                            },
                            {
                                title: "Choose a Load Balancer",
                                description: "Select the right load balancer for your workload needs.",
                                icon: "speed",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-yellow-400 text-3xl mr-3">{item.icon}</span>
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-gray-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Training and Resources */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Training, Blog Articles, and More</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Networking News and Updates",
                                description: "Stay updated with best practices for Google Cloud networking.",
                                icon: "article",
                            },
                            {
                                title: "Network Engineer Learning Path",
                                description: "Learn to configure and troubleshoot network components.",
                                icon: "school",
                            },
                            {
                                title: "Network Engineer Certification",
                                description: "Become certified as a Google Cloud network engineer.",
                                icon: "verified",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-yellow-400 text-3xl mr-3">{item.icon}</span>
                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                </div>
                                <p className="text-gray-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Networking Products by Use Case */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Networking Products by Use Case</h2>
                    <input
                        type="text"
                        placeholder="Filter here"
                        className="w-full p-4 border rounded-lg mb-6 shadow-sm text-gray-800 focus:outline-none"
                    />
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            "Connectivity",
                            "Core Networking",
                            "Hybrid Networking",
                            "Scalability",
                            "Security",
                            "Observability",
                        ].map((title, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <h4 className="text-2xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-300">Explore Google Cloud's solutions for {title.toLowerCase()}.</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Related Guides and Resources */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Related Products, Guides, and Sites</h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            "GKE Networking Guide",
                            "Compute Engine Networking Guide",
                            "Internal DNS Guide",
                            "SSH Connections Guide",
                            "VLANs and Subnets on VMware Engine Guide",
                            "VPC Access for Serverless",
                            "Cloud Service Mesh",
                            "Encryption in Transit",
                            "Cloud Storage",
                        ].map((title, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-300">Learn more about {title.toLowerCase()}.</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default NetworkingOverview;
