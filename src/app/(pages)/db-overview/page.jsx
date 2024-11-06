"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DatabaseOverviewPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-lg py-6">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-white">
                        Databases Overview
                    </h1>
                    <p className="text-lg text-white mt-4">
                        Migrate and manage enterprise data with security, reliability, high availability, and fully-managed data services.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-10">
                {/* Explore Databases Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-bold mb-6">Explore databases in Google Cloud</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Database resources",
                                description: "Plan your approach with Architecture Center resources across a variety of database topics.",
                                icon: "account_tree",
                            },
                            {
                                title: "Multicloud database management",
                                description: "Plan with architectures, use cases, and best practices for multicloud database management.",
                                icon: "account_tree",
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-blue-600 mr-2">{item.icon}</span>
                                    <h4 className="text-xl font-bold">{item.title}</h4>
                                </div>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Training Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-bold mb-6">Training, blog articles, and more</h3>
                    <div className="grid md:grid-cols-1 gap-8">
                        {[
                            {
                                title: "Database engineer learning path",
                                description: "Study how to design, create, manage, migrate, and troubleshoot databases used by applications to store and retrieve data.",
                                icon: "school",
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-blue-600 mr-2">{item.icon}</span>
                                    <h4 className="text-xl font-bold">{item.title}</h4>
                                </div>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Databases Products by Use Case Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-bold mb-6">Databases products by use case</h3>
                    <p className="text-gray-700 mb-4">
                        Expand sections or use the filter to find products and guides for typical use cases.
                    </p>
                    <input
                        type="text"
                        placeholder="Filter here"
                        className="w-full p-4 border rounded-lg mb-6"
                    />
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Non-relational databases",
                            "Relational databases",
                            "Migration",
                            "Fleet Management",
                        ].map((title, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h4 className="text-xl font-bold mb-2">{title}</h4>
                                <p className="text-gray-700">Apply Google's state-of-the-art capabilities to handle your needs in this category.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related Products, Guides, and Sites Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-bold mb-6">Related products, guides, and sites</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "BigQuery",
                            "BigLake in BigQuery",
                            "BigQuery Storage",
                        ].map((title, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h4 className="text-xl font-bold mb-2">{title}</h4>
                                <p className="text-gray-700">Learn more about {title.toLowerCase()} and how it can help your business.</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="#" className="hover:text-blue-400">About Google</a>
                        <a href="#" className="hover:text-blue-400">Google products</a>
                        <a href="#" className="hover:text-blue-400">Privacy</a>
                        <a href="#" className="hover:text-blue-400">Terms</a>
                        <a href="#" className="hover:text-blue-400">Code of Conduct</a>
                    </div>
                    <p>Built on Google Cloud | With support from YouTube</p>
                </div>
            </footer>
        </div>
    );
};

export default DatabaseOverviewPage;
