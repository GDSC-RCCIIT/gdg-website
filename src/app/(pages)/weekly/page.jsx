import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WeekliesGenAIPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg py-6">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-white">
                        GOOGLE CLOUD WEEKLIES
                    </h1>
                    <h2 className="text-3xl font-bold text-white mt-2">
                        Weeklies | Build your Optimal Gen AI Roadmap for ROI
                    </h2>
                    <p className="text-lg text-white mt-4">
                        Learn how to prioritise today's proven use cases, manage the nuance of measurement, and build your own roadmap to generative AI ROI.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-white text-blue-800 rounded-lg transition-colors duration-300 hover:bg-blue-100">
                        Register to watch on demand
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-10">
                {/* Webinar Details Section */}
                <section className="mb-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">Build your Optimal Gen AI Roadmap for ROI</h3>
                            <p className="text-gray-700 mb-4">
                                Generative AI is rapidly transforming how businesses operate. But how can leaders measure ROI on a constantly evolving technology? Join leaders and industry innovators as they reveal how proven strategies and quick wins are driving immediate value while laying the foundation for future breakthroughs. They’ll discuss:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>How to prioritise today's effective use cases</li>
                                <li>How to manage the nuance of measurement</li>
                                <li>How to create your own roadmap to generative AI ROI</li>
                            </ul>
                            <p className="text-gray-700 mb-2">Time: 37 Minutes</p>
                            <a href="#" className="text-blue-600 hover:underline">Copy link to share session</a>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/week1.png" // Please replace with the correct path to the image
                                alt="Build your Optimal Gen AI Roadmap for ROI"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Speakers Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-bold mb-6">Speakers</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold mb-2">Carrie Tharp</h4>
                            <p className="text-gray-700">VP, Global Solutions & Industries, Google Cloud</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold mb-2">Jane Lauder</h4>
                            <p className="text-gray-700">EVP Enterprise Marketing + CDO, The Estée Lauder Companies Inc.</p>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="bg-blue-100 p-8 rounded-lg shadow-lg mb-12">
                    <div className="flex items-center">
                        <span className="material-icons text-red-600 mr-4">video_youtube</span>
                        <p className="text-xl font-semibold text-blue-900">Watch on-demand</p>
                    </div>
                </section>

                {/* What are Google Cloud Weeklies Section */}
                <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
                    <h3 className="text-3xl font-bold mb-6">What are Google Cloud Weeklies?</h3>
                    <p className="text-gray-700 mb-6">
                        A new series of byte-sized sessions designed to help developers, practitioners, and business leaders solve their chewiest challenges in a flexible format. Discover the latest insights, engage with local experts and drive meaningful digital transformation - in 60 minutes or less.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                        View full schedule
                    </button>
                </section>

                {/* Other Weeklies Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-bold mb-6">Other Weeklies you might be interested in</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Weeklies | Asia Pacific AI Bootcamp Series",
                            "Weeklies | Cloud Roadmap Series: AI Innovation",
                            "Weeklies | Modernising Marketing: How AI Unifies Our Marketing Solutions",
                            "Weeklies | Operationalize Your AI: Best Practices for LLM & ML Models",
                        ].map((title, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-blue-600 mr-2">ondemand_video</span>
                                    <p className="text-blue-600 font-semibold">On demand</p>
                                </div>
                                <h4 className="text-xl font-bold">{title}</h4>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default WeekliesGenAIPage;
