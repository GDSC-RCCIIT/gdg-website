"use client"
import React, { useState } from 'react';
import { Book, Map, Shield, Brain, Languages, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const apiCharacters = [
    {
        name: "Google Maps",
        title: "The Wayfinder",
        story: "In the digital realm, The Wayfinder stands as a beacon of guidance, helping lost travelers find their way through the vast landscape of the physical world.",
        description: "Master of navigation and spatial wisdom, The Wayfinder holds the power to guide anyone through unknown territories.",
        abilities: ["Path Revelation", "Distance Wisdom", "Location Mastery"],
        icon: Map,
        gradient: "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600",
        powerLevel: 92
    },
    {
        name: "Firebase",
        title: "The Digital Guardian",
        story: "Deep within the cloud realms, The Digital Guardian maintains eternal vigilance, protecting data and ensuring real-time harmony.",
        description: "A steadfast protector of digital assets, wielding the power of real-time synchronization and secure authentication.",
        abilities: ["Reality Sync", "Identity Shield", "Message Herald"],
        icon: Shield,
        gradient: "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600",
        powerLevel: 88
    },
    {
        name: "Vision AI",
        title: "The All-Seeing Oracle",
        story: "Blessed with the gift of digital sight, The Oracle peers beyond the veil of pixels to understand the meaning within images.",
        description: "A mystic entity that transforms visual information into knowledge, revealing hidden patterns in the digital cosmos.",
        abilities: ["Pattern Sight", "Face Memory", "Text Vision"],
        icon: Brain,
        gradient: "bg-gradient-to-br from-violet-400 via-purple-500 to-indigo-600",
        powerLevel: 95
    },
    {
        name: "Translate",
        title: "The Bridge Builder",
        story: "Breaking down the ancient barriers of language, The Bridge Builder connects minds across the vast expanse of human expression.",
        description: "A master of tongues who bridges cultures and enables understanding between all peoples of the digital world.",
        abilities: ["Tongue Mastery", "Voice Echoes", "Script Weaving"],
        icon: Languages,
        gradient: "bg-gradient-to-br from-pink-400 via-rose-500 to-purple-600",
        powerLevel: 90
    }
];

const ApiStorytime = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCharacter = () => {
        setCurrentIndex((prev) => (prev + 1) % apiCharacters.length);
    };

    const prevCharacter = () => {
        setCurrentIndex((prev) => (prev - 1 + apiCharacters.length) % apiCharacters.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
            {/* Mystical Header */}
            <header className="text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20" />
                <h1 className="text-6xl font-bold mb-4 relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        API Storytime
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Journey through the magical realm of Google APIs, where each service is a legendary hero with unique powers
                </p>
            </header>

            {/* Character Showcase */}
            <div className="max-w-6xl mx-auto mb-16 relative">
                <div className="flex items-center justify-between">
                    <button
                        onClick={prevCharacter}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <Card className={`w-full mx-4 ${apiCharacters[currentIndex].gradient} transition-all duration-500`}>
                        <CardContent className="p-8">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h2 className="text-4xl font-bold mb-2">{apiCharacters[currentIndex].name}</h2>
                                    <h3 className="text-2xl mb-6 opacity-90">{apiCharacters[currentIndex].title}</h3>

                                    <div className="mb-6">
                                        <h4 className="text-xl mb-2 font-semibold flex items-center">
                                            <Book className="mr-2" size={20} />
                                            Origin Story
                                        </h4>
                                        <p className="text-lg leading-relaxed">{apiCharacters[currentIndex].story}</p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-xl mb-2 font-semibold flex items-center">
                                            <Sparkles className="mr-2" size={20} />
                                            Legendary Powers
                                        </h4>
                                        <ul className="grid grid-cols-2 gap-4">
                                            {apiCharacters[currentIndex].abilities.map((ability, idx) => (
                                                <li key={idx} className="flex items-center bg-black bg-opacity-20 rounded-lg p-3">
                                                    <div className="h-2 w-2 bg-white rounded-full mr-3" />
                                                    {ability}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-xl mb-2">Power Level</h4>
                                        <div className="bg-black bg-opacity-20 rounded-full h-4 w-full">
                                            <div
                                                className="h-full bg-white rounded-full transition-all duration-1000"
                                                style={{ width: `${apiCharacters[currentIndex].powerLevel}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-8 flex items-center justify-center w-64 h-64 bg-black bg-opacity-20 rounded-2xl">
                                    {React.createElement(apiCharacters[currentIndex].icon, { size: 80 })}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <button
                        onClick={nextCharacter}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Lore Section */}
            <section className="max-w-4xl mx-auto text-center mb-16 bg-gray-800 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10" />
                <h2 className="text-3xl font-bold mb-4 relative">The Ancient Scrolls</h2>
                <p className="text-lg leading-relaxed relative">
                    "In the beginning, when the digital realm was young, the Architect of Google bestowed upon the world powerful APIs,
                    each imbued with unique abilities to aid developers in their noble quests. These legendary beings work in harmony,
                    their powers combining to create experiences that transcend the ordinary. Now, young developer, which hero will you
                    call upon first in your journey?"
                </p>
            </section>

            {/* Call to Adventure */}
            <section className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Begin Your Quest</h2>
                <p className="text-gray-300 mb-6">Choose your path and discover the API heroes that will aid your journey</p>
                <div className="flex justify-center space-x-4">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                        Novice Path
                    </button>
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                        Warrior Path
                    </button>
                    <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                        Sage Path
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ApiStorytime;