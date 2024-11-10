"use client"
import React from 'react';

const gdgHistory = [
    {
        year: "2008",
        event: "GDG Founded",
        description: "Google Developer Groups (GDG) was founded with the purpose of creating a space for developers to connect, learn, and innovate."
    },
    {
        year: "2012",
        event: "Global Expansion",
        description: "GDG started expanding globally, with active chapters in over 50 countries, hosting local meetups and workshops."
    },
    {
        year: "2015",
        event: "1000+ Chapters",
        description: "The GDG community grew to over 1000 chapters worldwide, establishing itself as a key platform for developer learning."
    },
    {
        year: "2018",
        event: "Women Techmakers Initiative",
        description: "Women Techmakers became an integral part of GDG, aiming to support and increase the visibility of women in technology."
    },
    {
        year: "2020",
        event: "Virtual Events Era",
        description: "In response to the pandemic, GDG pivoted to virtual events, continuing to provide educational content to developers globally."
    },
    {
        year: "2023",
        event: "Major Milestone",
        description: "GDG celebrated its 15th anniversary with community-led events globally, marking a significant milestone in developer engagement."
    }
];

const GDGHistory = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white p-6 sm:p-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">History of GDG</h1>
                <p className="text-xl sm:text-2xl">Explore the growth and achievements of the GDG community over the years.</p>
            </header>

            <div className="max-w-5xl mx-auto">
                {gdgHistory.map((milestone, index) => (
                    <div key={index} className="bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg mb-10 p-6 sm:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-yellow-400 p-2 rounded-full">
                                <span className="text-2xl font-bold">{milestone.year}</span>
                            </div>
                            <h3 className="text-3xl font-bold">{milestone.event}</h3>
                        </div>
                        <p className="text-lg text-white/80">{milestone.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GDGHistory;
