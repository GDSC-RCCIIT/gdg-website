"use client";
import React from 'react';
import { motion } from "framer-motion";

const articles = [
    {
        category: "Security & Identity",
        title: "Cyber risk top 5: What every board should know",
        author: "David Homovich",
        readTime: "4-minute read",
        imageUrl: "https://storage.googleapis.com/gweb-cloudblog-publish/images/GettyImages-462411043.max-1800x1800.jpg",
    },
    {
        category: "Healthcare & Life Sciences",
        title: "The U.S. has a maternal mortality crisis. Can technology help us rescue it?",
        author: "Matt A.V. Chaban",
        readTime: "6-minute read",
        imageUrl: "https://storage.googleapis.com/gweb-cloudblog-publish/images/us-maternal-mortality-crisis-technology-solu.max-900x900.jpg",
    },
    {
        category: "AI & Machine Learning",
        title: "Three proven strategies for optimizing AI costs",
        author: "Marcus Oliver",
        readTime: "7-minute read",
        imageUrl: "https://storage.googleapis.com/gweb-cloudblog-publish/images/GettyImages-910798920.max-900x900.jpg",
    },
];

const videos = [
    {
        title: "Gen AI unicorns leading the way",
        duration: "2-min video",
        imageUrl: "https://storage.googleapis.com/gweb-cloudblog-publish/images/ai-unicorns-yt-hero.max-1200x1200.png",
    },
    {
        title: "Across Asia, better begins with Google Cloud",
        duration: "2-min video",
        imageUrl: "https://storage.googleapis.com/gweb-cloudblog-publish/images/Screenshot_2023-08-14_at_2.46.01_PM.max-1200x1200.png",
    },
    {
        title: "How TIME is using cloud to tell the stories that matter",
        duration: "3-min video",
        imageUrl: "https://storage.googleapis.com/gweb-cloudblog-publish/images/Screenshot_2023-06-13_at_5.51.49_PM.max-1200x1200.png",
    },
    {
        title: "Sustainable fishing and empowering local fishermen through data",
        duration: "3-min video",
        imageUrl: "https://storage.googleapis.com/gweb-cloudblog-publish/images/Screenshot_2023-06-13_at_5.54.42_PM.max-1200x1200.png",
    },
];

const TransformWithGoogleCloud = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg py-6">
                <div className="container mx-auto px-6">
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-10">
                {/* Featured Articles */}
                <section className="mb-12">
                    <h2 className="text-4xl font-bold mb-8">Inside the moments when cloud computing changed everything</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <motion.article
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <img src={article.imageUrl} alt={article.category} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-2">{article.category}</h3>
                                    <p className="text-gray-700 mb-4">{article.title}</p>
                                    <p className="text-sm text-gray-500">{article.author} • {article.readTime}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Featured Videos */}
                <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 px-6 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-bold text-center mb-8">Featured Videos</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {videos.map((video, index) => (
                            <motion.article
                                key={index}
                                className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-600 transition-colors duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <img src={video.imageUrl} alt={video.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                                    <p className="text-sm">{video.duration}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                    <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-300">
                        Browse all videos
                    </button>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-gray-400 py-6">
                <div className="container mx-auto text-center">
                    <p className="text-sm mb-2">Follow us • Google Cloud • Google Cloud Products • Privacy • Terms • Help</p>
                    <p className="text-sm">‪English‬</p>
                </div>
            </footer>
        </div>
    );
};

export default TransformWithGoogleCloud;
