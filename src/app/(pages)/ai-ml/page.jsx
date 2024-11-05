"user client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AiMlOverviewPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg py-6">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-white">
                        AI and ML Overview
                    </h1>
                    <p className="text-lg text-white mt-4">
                        Leverage the power of AI/ML models and solutions to transform your organization and solve real-world problems.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-10">
                {/* Explore AI and ML Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-bold mb-6">Explore AI and ML in Google Cloud</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Introduction to machine learning on Vertex AI",
                                description: "Support data engineering, data science, and ML engineering workflows on a unified platform, enabling you to train ML models and deploy AI solutions.",
                                icon: "description",
                            },
                            {
                                title: "AI and ML architecture resources",
                                description: "Plan your approach with architecture center resources across a wide variety of AI & ML subjects. (Goes to Architecture Center.)",
                                icon: "account_tree",
                            },
                            {
                                title: "Best practices for implementing ML",
                                description: "Plan for implementing ML, with a focus on custom-trained models based on your data and code. (Goes to Architecture Center.)",
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
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Applied AI summit learning path",
                                description: "Study Vertex AI and Gemini in Google Cloud. (Goes to Google Cloud Skills Boost.)",
                                icon: "school",
                            },
                            {
                                title: "Machine learning engineer learning path",
                                description: "Study designing, building, productionalizing, optimizing, operating, and maintaining ML systems. (Goes to Google Cloud Skills Boost.)",
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

                {/* AI and ML Products by Use Case Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-bold mb-6">AI and ML products by use case</h3>
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
                            "Pretrained models",
                            "Customer service, conversation, and speech",
                            "Document management",
                            "Industry-specific products",
                            "Video, images, vision, and augmented reality",
                            "Search and recommendations",
                            "Translation",
                            "Vertex AI model training and development",
                            "Vertex AI MLOps and production",
                            "Accelerators",
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
                            "Generative AI on Google Cloud",
                            "Overview of industry solutions",
                            "Gemini for Google Cloud overview",
                            "AutoML Tables (Deprecated)",
                            "AI Platform (Deprecated)",
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

export default AiMlOverviewPage;
