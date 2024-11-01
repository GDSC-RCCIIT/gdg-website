'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Developers & Practitioners Page Component
const DevelopersPractitionersPage = () => {
    return (
        <div className="bg-gray-50 text-black">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-8 py-16 text-center">
                <h1 className="text-5xl font-bold mb-4">
                    Developers & Practitioners
                </h1>
                <p className="text-lg text-gray-600">
                    Google Cloud content and resources for its technical communities.
                </p>
            </div>

            {/* Articles Section */}
            <div className="max-w-5xl mx-auto px-8 py-8 space-y-12">
                {articles.map((article, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                    >
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-blue-600 hover:underline cursor-pointer">
                                {article.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">
                                By {article.author} • {article.readTime}
                            </p>
                            <p className="mt-2 text-gray-800">
                                {article.category}
                            </p>
                        </div>
                        {article.image && (
                            <img src={article.image} alt={article.title} className="w-24 h-24 object-cover rounded-md" />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Load More Button */}
            <div className="text-center my-16">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
                    Load more stories
                </button>
            </div>
        </div>
    );
};

const articles = [
    {
        title: "Gemini models are coming to GitHub Copilot",
        category: "AI & Machine Learning",
        author: "Keith Ballinger",
        readTime: "2-minute read",
    },
    {
        title: "Highlights from the 10th DORA report",
        category: "DevOps & SRE",
        author: "Nathen Harvey",
        readTime: "6-minute read",
    },
    {
        title: "How to protect your site from DDoS attacks with the power of Google Cloud networking and network security",
        category: "Security & Identity",
        author: "Marc Howard",
        readTime: "8-minute read",
    },
    {
        title: "An advanced LlamaIndex RAG implementation on Google Cloud",
        category: "AI & Machine Learning",
        author: "Sagar Kewalramani",
        readTime: "12-minute read",
    },
    {
        title: "Enhancing your gen AI use case with Vertex AI embeddings and task types",
        category: "AI & Machine Learning",
        author: "Parashar Shah",
        readTime: "9-minute read",
    },
    {
        title: "Tell a more complete data story with customized Looker charts and visualizations",
        category: "Business Intelligence",
        author: "Jeremy Chang",
        readTime: "6-minute read",
    },
    {
        title: "Routing in Google Cloud: Where can I send my IP packet from a VM?",
        category: "Networking",
        author: "Manjuram Perumalla",
        readTime: "9-minute read",
    },
    {
        title: "Apache Airflow ETL in Google Cloud",
        category: "Data Analytics",
        author: "Jaeyeon Baek",
        readTime: "6-minute read",
    },
    {
        title: "Test it out: an online shopping demo experience with Gemini and RAG",
        category: "AI & Machine Learning",
        author: "Olivier Bourgeois",
        readTime: "3-minute read",
    },
    {
        title: "Regnology Automates Ticket-to-Code with agentic GenAI on Vertex AI",
        category: "AI & Machine Learning",
        author: "Ahmed Amer",
        readTime: "5-minute read",
    },
];

export default DevelopersPractitionersPage;
