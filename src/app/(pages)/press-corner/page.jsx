"use client";
import React from 'react';

const pressReleases = [
    { date: "Nov 05", title: "Google Developers Launch New Tools for Building Web3 Applications" },
    { date: "Nov 04", title: "Firebase Expands Machine Learning Capabilities to Empower Mobile Developers" },
    { date: "Oct 30", title: "Google Cloud and GitHub Partner to Enhance DevOps Workflows with Generative AI" },
    { date: "Oct 28", title: "Google Cloud Unveils Advanced API Security Features for Developers" },
    { date: "Oct 24", title: "Flutter's Latest Update Accelerates Cross-Platform Development" },
    { date: "Oct 21", title: "Google Maps Platform Introduces New APIs for Immersive Experiences" },
];

const DeveloperPressCornerPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-6">
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 border-b border-gray-300">
                <h1 className="text-3xl font-bold text-blue-700">Developer Press Corner</h1>
                <a href="#" className="text-blue-600 underline">Developer Console</a>
            </header>

            {/* Main Banner */}
            <section className="p-6 bg-white shadow-md rounded-md mt-6">
                <h2 className="text-2xl font-semibold">Latest News</h2>
                <div className="mt-4 flex items-center justify-between">
                    <img
                        src="/images/sample-banner.jpg" // Placeholder image for banner
                        alt="Press Highlight"
                        className="w-1/3 rounded-md shadow-md"
                    />
                    <div className="ml-6 flex-1">
                        <h3 className="text-xl font-semibold text-gray-800">
                            Google Developers Introduce AI-Powered Code Assistance for Enhanced Developer Productivity
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Google Developers launches AI tools to streamline coding workflows and enhance developer productivity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Press Releases</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pressReleases.map((release, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
                            <span className="text-gray-500 text-sm">{release.date}</span>
                            <h3 className="text-lg font-semibold mt-2">{release.title}</h3>
                        </div>
                    ))}
                </div>
                <a href="#" className="block text-right mt-4 text-blue-600 underline font-semibold">All Press Releases</a>
            </section>

            {/* Topics Section */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Browse other press announcements by topic</h2>
                <div className="flex flex-wrap gap-4">
                    {["AI & Machine Learning", "Data Analytics", "Developer Tools", "Cloud Infrastructure", "Mobile Development", "Open Source"].map((topic, index) => (
                        <button
                            key={index}
                            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md font-semibold hover:bg-blue-700 transition-colors"
                        >
                            {topic}
                        </button>
                    ))}
                </div>
                <a href="#" className="block text-right mt-4 text-blue-600 underline font-semibold">All Press Releases</a>
            </section>

            {/* Subscription Section */}
            <section className="bg-blue-100 p-6 rounded-md mt-8 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold text-blue-900">Subscribe for email alerts</h3>
                    <p className="text-blue-700 text-sm">Get the latest updates on Google Developer tools, news, and resources.</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">Subscribe</button>
            </section>

            {/* Learn More Section */}
            <section className="mt-8 bg-white shadow-md rounded-md p-6">
                <h2 className="text-xl font-semibold mb-4">Learn More</h2>
                <div className="flex space-x-8">
                    <div>
                        <h3 className="font-semibold">Questions?</h3>
                        <p>Reach out to us at <a href="mailto:press@google.com" className="text-blue-600 underline">press@google.com</a></p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Meet the Team</h3>
                        <p>View photos and read bios of our leadership team.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Brand Logos</h3>
                        <p>Download logos suitable for print or web.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">B-roll Video</h3>
                        <p>Behind-the-scenes videos of Google Developer tools in action.</p>
                    </div>
                </div>
            </section>

            {/* Why Google Developers Section */}
            <section className="mt-8 bg-gray-100 p-6 rounded-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Why Google Developers?</h2>
                <div className="flex flex-wrap justify-center gap-8 mt-4">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl">🌱</div>
                        <h3 className="font-semibold mt-2">Sustainability</h3>
                        <p className="text-gray-600 text-sm">Build on an eco-friendly cloud with sustainable practices.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl">📊</div>
                        <h3 className="font-semibold mt-2">Data Analytics</h3>
                        <p className="text-gray-600 text-sm">Gain insights with Google’s advanced analytics tools.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white text-2xl">🔒</div>
                        <h3 className="font-semibold mt-2">Security</h3>
                        <p className="text-gray-600 text-sm">Develop with top-notch security and privacy protection.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeveloperPressCornerPage;
