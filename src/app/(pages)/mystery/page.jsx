"use client"
import React from 'react';

const mysteries = [
    {
        id: 1,
        title: "The Lost Source Code of Apollo 11",
        type: "Article",
        description: "Dive into the story of how parts of the Apollo 11 source code were misplaced and the mystery surrounding how NASA recovered crucial parts of it.",
        mediaUrl: "/images/apollo_code.png"
    },
    {
        id: 2,
        title: "The Windows 9 Mystery",
        type: "Video",
        description: "A look at why Microsoft decided to skip Windows 9 and jump straight to Windows 10, leading to several theories and myths.",
        mediaUrl: "/videos/windows9_mystery.mp4"
    },
    {
        id: 3,
        title: "The Terrifying Tale of the Creepy Craigslist AI Bot",
        type: "Article",
        description: "Explore the unexplained AI behavior reported by Craigslist users, where an automated bot responded to posts with eerily accurate predictions.",
        mediaUrl: "/images/creepy_ai.png"
    },
    {
        id: 4,
        title: "Abandoned Google Projects That Vanished",
        type: "Article",
        description: "Discover the projects Google launched but later abandoned, including Wave, Glass, and their mysterious exits.",
        mediaUrl: "/images/google_wave.png"
    }
];

const UnsolvedMysteriesTech = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6 sm:p-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">Unsolved Mysteries of Tech</h1>
                <p className="text-xl sm:text-2xl">Dive into the unsolved and mysterious tech stories of the past - abandoned projects, lost source codes, and unexplained software behaviors.</p>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {mysteries.map((mystery) => (
                    <div key={mystery.id} className="bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg p-6 sm:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col gap-4">
                            <img src={mystery.mediaUrl} alt={mystery.title} className="w-full rounded-md shadow-md" />
                            <h3 className="text-2xl font-bold">{mystery.title}</h3>
                            <p className="text-lg text-white/80">{mystery.description}</p>
                            {mystery.type === "Video" ? (
                                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full transition-all hover:from-indigo-600 hover:to-purple-600">
                                    Watch Video
                                </button>
                            ) : (
                                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full transition-all hover:from-indigo-600 hover:to-purple-600">
                                    Read Article
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UnsolvedMysteriesTech;
