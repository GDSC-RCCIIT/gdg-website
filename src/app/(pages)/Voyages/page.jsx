"use client"
import React from 'react';
import { BarChart2, Globe } from 'lucide-react';

const datasets = [
    {
        id: 1,
        title: "Tech Trends Over Time",
        description: "Explore the rise and fall of different technologies over the last 20 years. This animated infographic lets you visualize how certain programming languages and tech stacks gained popularity.",
        mediaUrl: "/voy1.png",
        type: "Infographic",
    },
    {
        id: 2,
        title: "Global Internet Usage",
        description: "Discover the journey of internet adoption across different continents. This animated visualization highlights internet penetration rates by year.",
        mediaUrl: "/voy2.jpeg",
        type: "Infographic",
    },
    {
        id: 3,
        title: "Community Engagement Stats",
        description: "This infographic shows how community engagement activities, including workshops and hackathons, have increased over time in GDG chapters globally.",
        mediaUrl: "/voy3.png",
        type: "Infographic",
    }
];

const DataVoyages = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 p-8 sm:p-16">
            <header className="flex flex-col md:flex-row justify-between items-center mb-16">
                <div className="mb-8 md:mb-0">
                    <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-teal-400">Data Voyages</h1>
                    <p className="text-lg sm:text-xl mt-4">Visualize fascinating datasets related to tech trends, social impact, and community engagement through creative, animated infographics.</p>
                </div>
                <Globe size={64} className="text-teal-400 animate-spin-slow" />
            </header>

            {/* Dataset Visualization Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {datasets.map((dataset) => (
                    <div key={dataset.id} className="bg-gray-800 rounded-md shadow-lg p-8 border-l-4 border-teal-500 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                        <div className="flex items-start gap-4 mb-4">
                            <BarChart2 size={32} className="text-teal-300" />
                            <h3 className="text-3xl font-bold">{dataset.title}</h3>
                        </div>
                        <p className="text-lg text-gray-300 mb-4">{dataset.description}</p>
                        <img src={dataset.mediaUrl} alt={dataset.title} className="w-full rounded-md shadow-md" />
                    </div>
                ))}
            </div>

            {/* Why Data Visualization Matters Section */}
            <section className="max-w-6xl mx-auto mb-16 bg-gray-800 p-10 rounded-md shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-teal-400">Why Data Visualization Matters</h2>
                <p className="text-lg text-gray-300 mb-6">
                    Data visualization helps us make sense of large volumes of data by presenting information in an engaging and accessible format. It allows us to see patterns, trends, and insights that might otherwise be hidden in raw numbers.
                </p>
                <ul className="list-disc list-inside space-y-4 text-gray-300">
                    <li>Visual storytelling makes complex data easier to understand and interpret.</li>
                    <li>Animated infographics capture attention and help convey information in a dynamic way.</li>
                    <li>Understanding data trends empowers communities and drives informed decision-making.</li>
                </ul>
            </section>

            {/* Tools and Resources for Visualization Section */}
            <section className="max-w-6xl mx-auto mb-16 p-10 bg-gradient-to-b from-gray-800 to-black rounded-md shadow-md">
                <h2 className="text-3xl font-bold mb-4 text-teal-400">Tools and Resources for Visualization</h2>
                <div className="flex flex-wrap gap-6">
                    <div className="bg-gray-900 p-6 rounded-md shadow-sm flex-1 min-w-[250px]">
                        <h3 className="text-xl font-bold mb-2 text-teal-300">D3.js</h3>
                        <p className="text-sm text-gray-400">A powerful JavaScript library for producing dynamic, interactive data visualizations in web browsers.</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-md shadow-sm flex-1 min-w-[250px]">
                        <h3 className="text-xl font-bold mb-2 text-teal-300">Tableau</h3>
                        <p className="text-sm text-gray-400">A leading platform for data visualization that helps users convert data into dashboards and visual insights.</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-md shadow-sm flex-1 min-w-[250px]">
                        <h3 className="text-xl font-bold mb-2 text-teal-300">Chart.js</h3>
                        <p className="text-sm text-gray-400">A simple yet flexible JavaScript charting library that allows you to create engaging data visualizations.</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="text-center pt-12 pb-6 border-t border-gray-700">
                <p className="text-lg text-gray-400">Thanks for exploring Data Voyages. Dive into our visualizations and see what insights you can discover!</p>
                <button className="mt-4 bg-teal-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-700 transition-all">
                    Explore More Data
                </button>
            </footer>
        </div>
    );
};

export default DataVoyages;
