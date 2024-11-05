"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GroundingGenAIPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg py-6">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-white">
                        It’s gen AI’s <span className="text-blue-300">moment of truth</span>.
                    </h1>
                    <p className="text-lg text-white mt-4">
                        Learn how grounding your foundation models helps you gain a competitive edge.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-white text-blue-800 rounded-lg transition-colors duration-300 hover:bg-blue-100">
                        Download the guide
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-10">
                {/* Featured Section */}
                <section className="mb-12">
                    <div className="relative mb-8">
                        <Image
                            src="/truth1.png" // Please replace with the correct path to the image
                            alt="Generative AI in enterprise truth"
                            width={1800}
                            height={800}
                            className="rounded-lg shadow-lg"
                        />

                    </div>
                    <div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                className="bg-white rounded-lg shadow-lg overflow-hidden p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <h3 className="text-3xl font-bold mb-4">Grounding generative AI in enterprise truth</h3>
                                <p className="text-gray-700 mb-4">
                                    Give your AI models an edge. Leaders across industries are racing to get generative AI off the ground—and get ahead of the competition.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    How can your enterprise unlock the full potential of gen AI? Achieve more accurate and nuanced results by moving beyond generic training sets and grounding your AI models in real-time and enterprise data. At Google Cloud, we call this approach “enterprise truth”.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Grounding foundation models in enterprise truth—like your
                                    databases, enterprise applications, and Google Search—enables
                                    the real-world integration, data authenticity.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-white rounded-lg shadow-lg overflow-hidden p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-3xl font-bold mb-4">Driving Innovation with AI</h3>
                                <p className="text-gray-700 mb-4">
                                    Learn how AI can transform your business and stay competitive in a fast-evolving market.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Explore new use cases, operational efficiencies, and ways to integrate AI-driven insights into your business strategy.
                                </p>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Identifying AI opportunities in various business domains</li>
                                    <li>Strategies for seamless AI integration</li>
                                    <li>Maximizing productivity and reducing costs</li>
                                    <li>Leveraging data to drive decision-making</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                className="bg-white rounded-lg shadow-lg overflow-hidden p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="text-3xl font-bold mb-4">Ethics and Accountability in AI</h3>
                                <p className="text-gray-700 mb-4">
                                    Ensure that your AI solutions are built responsibly with transparency and ethical standards in mind.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Learn how to design AI systems that respect user privacy, maintain accountability, and foster trust.
                                </p>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Establishing ethical guidelines for AI use</li>
                                    <li>Understanding accountability in AI decision-making</li>
                                    <li>Implementing transparency in algorithms</li>
                                    <li>Maintaining user trust with privacy-first AI solutions</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                </section>

                {/* Quote Section */}
                <section className="bg-blue-100 p-8 rounded-lg shadow-lg mb-12">
                    <blockquote className="text-xl font-semibold text-blue-900">
                        &ldquo;2023 was gen AI’s breakout year. In 2024, enterprises are asking how far they can take it to drive genuine impact. And grounding AI models in enterprise truth is how businesses are turning the opportunities of gen AI to reality.&rdquo;
                    </blockquote>
                    <p className="mt-4 text-right text-blue-800 font-semibold">Oliver Parker — VP, Global Generative AI GTM, Google Cloud</p>
                </section>

                {/* Form Section */}
                <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
                    <h3 className="text-3xl font-bold mb-6">Download the guide</h3>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name*"
                            className="p-4 border rounded-lg"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name*"
                            className="p-4 border rounded-lg"
                        />
                        <input
                            type="text"
                            name="businessName"
                            placeholder="Business name*"
                            className="p-4 border rounded-lg"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            className="p-4 border rounded-lg"
                        />
                        <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job title*"
                            className="p-4 border rounded-lg"
                        />
                        <input
                            type="text"
                            name="businessPhone"
                            placeholder="Business mobile phone*"
                            className="p-4 border rounded-lg"
                        />
                        <input
                            type="text"
                            name="country"
                            placeholder="Country*"
                            className="p-4 border rounded-lg"
                        />
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Sign me up to receive news, product updates, event information, and special offers about Google Cloud from Google.
                        </label>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg transition-colors duration-300">
                            Submit
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default GroundingGenAIPage;
