"use client";
import React from "react";

const GenerativeAIOverview = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Header Section */}
            <header className="bg-gradient-to-br from-purple-700 to-indigo-600 text-white py-16 shadow-lg">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">Generative AI Overview</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Google Cloud offers a range of products and tools for the complete life cycle of building generative AI applications.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12">
                {/* Section: Learn about Building Generative AI Applications */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Learn about Building Generative AI Applications</h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Generative AI on Vertex AI",
                                description: "Access Google's large generative AI models for testing, tuning, and deploying in AI-powered applications.",
                                icon: "smart_toy",
                            },
                            {
                                title: "Gemini Quickstart",
                                description: "Get started with the Gemini API via Google Cloud's AI-ML platform, Vertex AI.",
                                icon: "rocket_launch",
                            },
                            {
                                title: "Choose Infrastructure",
                                description: "Select the best products for your use case and access documentation to get started.",
                                icon: "settings",
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-indigo-600 text-3xl mr-3">{item.icon}</span>
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Model Exploration and Hosting */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Model Exploration and Hosting</h2>
                    <p className="text-gray-600 mb-8">
                        Google Cloud offers advanced foundation models through Vertex AI, including Gemini. Deploy third-party models on Vertex AI Model Garden, GKE, or Compute Engine.
                    </p>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            "Google Models on Vertex AI",
                            "Other Models in the Vertex AI Model Garden",
                            "Text Generation Models via HuggingFace",
                        ].map((title, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-700">Discover, test, customize, and deploy from an ML model library.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Prompt Design and Engineering */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Prompt Design and Engineering</h2>
                    <p className="text-gray-600 mb-8">
                        Prompt design involves creating prompt-response pairs to provide language models with additional context and instructions.
                    </p>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Vertex AI Studio",
                                description: "Design, test, and customize prompts sent to Google's large language models.",
                            },
                            {
                                title: "Overview of Prompting Strategies",
                                description: "Learn workflows and strategies to optimize model responses.",
                            },
                            {
                                title: "Prompt Gallery",
                                description: "Browse example prompts and responses for specific use cases.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Grounding and RAG */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Grounding and RAG</h2>
                    <p className="text-gray-600 mb-8">
                        Grounding connects AI models to data sources to improve response accuracy, while RAG searches for relevant information to add to the prompt.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            "Vertex AI Grounding",
                            "Ground with Google Search",
                            "Vector Embeddings in AlloyDB",
                        ].map((title, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-700">Enhance your AI applications with grounding capabilities for accuracy.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Agents and Function Calling */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Agents and Function Calling</h2>
                    <p className="text-gray-600 mb-8">
                        Agents enable conversational interfaces in apps, while function calling extends model capabilities for specific tasks.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            "Vertex AI Agent Builder",
                            "Vertex AI Function Calling",
                        ].map((title, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-700">Integrate conversational and action-driven AI into applications.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Model Customization and Training */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Model Customization and Training</h2>
                    <p className="text-gray-600 mb-8">
                        Customize generative models with additional training for specialized tasks or terminology.
                    </p>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            "Evaluate Models in Vertex AI",
                            "Tune Vertex AI Models",
                            "Cloud TPU",
                        ].map((title, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-700">Improve model performance and efficiency with tuning and TPU support.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-lg">Ready to start building?</p>
                        <div className="flex justify-center space-x-6 mt-4">
                            <a href="#" className="hover:text-indigo-400">View Code Samples</a>
                            <a href="#" className="hover:text-indigo-400">Deploy Applications</a>
                        </div>
                        <p className="mt-4">Built on Google Cloud | Secure, resilient, and high-performance applications</p>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default GenerativeAIOverview;
