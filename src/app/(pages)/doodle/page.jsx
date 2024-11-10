"use client"
import React, { useState } from 'react';
import { Palette, Play, Code, Trophy, ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const doodleChallenges = [
    {
        name: "Holiday Doodle",
        difficulty: "Beginner",
        description: "Create an interactive holiday-themed doodle that brings festive cheer to the Google homepage.",
        tutorial: "Learn the basics of SVG animation and interactive elements to create a playful holiday scene.",
        requirements: ["SVG Animation", "Click Events", "Sound Effects"],
        icon: Palette,
        gradient: "bg-gradient-to-br from-red-400 via-pink-500 to-purple-600",
        complexity: 75,
        inspirationImage: "/doodle1.png"
    },
    {
        name: "Earth Day Game",
        difficulty: "Intermediate",
        description: "Design an educational mini-game about environmental conservation that users can play right from the search page.",
        tutorial: "Master Canvas animations and game physics to create an engaging eco-friendly experience.",
        requirements: ["Game Physics", "Score System", "Educational Content"],
        icon: Play,
        gradient: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600",
        complexity: 85,
        inspirationImage: "/doodle2.jpeg"
    },
    {
        name: "Historical Timeline",
        difficulty: "Advanced",
        description: "Build an interactive journey through time, celebrating important historical figures and events.",
        tutorial: "Explore advanced animations and storytelling techniques in web development.",
        requirements: ["Timeline Navigation", "Historical Facts", "Interactive Elements"],
        icon: Code,
        gradient: "bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600",
        complexity: 95,
        inspirationImage: "/doodl3.png"
    }
];

const DoodleDevZone = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextChallenge = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % doodleChallenges.length);
            setIsAnimating(false);
        }, 300);
    };

    const prevChallenge = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + doodleChallenges.length) % doodleChallenges.length);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
            {/* Interactive Header with Doodle Animation */}
            <header className="text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32">
                    {/* Animated Google Letters */}
                    <div className="flex justify-center gap-4 text-8xl font-bold">
                        {['D', 'o', 'o', 'd', 'l', 'e'].map((letter, index) => (
                            <span
                                key={index}
                                className="animate-bounce"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    color: ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#4285F4', '#EA4335'][index]
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            {/* Challenge Showcase */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="flex items-center justify-between gap-4">
                    <button
                        onClick={prevChallenge}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <Card className={`flex-1 ${doodleChallenges[currentIndex].gradient} ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}>
                        <CardContent className="p-8">
                            <div className="grid grid-cols-3 gap-8">
                                {/* Challenge Info */}
                                <div className="col-span-2">
                                    <div className="flex items-center gap-4 mb-6">
                                        {React.createElement(doodleChallenges[currentIndex].icon, { size: 32 })}
                                        <div>
                                            <h2 className="text-3xl font-bold">{doodleChallenges[currentIndex].name}</h2>
                                            <span className="text-white/80">{doodleChallenges[currentIndex].difficulty}</span>
                                        </div>
                                    </div>

                                    <p className="text-lg mb-6">{doodleChallenges[currentIndex].description}</p>

                                    <div className="mb-6">
                                        <h4 className="text-xl mb-4 font-semibold flex items-center gap-2">
                                            <Trophy size={20} />
                                            Challenge Requirements
                                        </h4>
                                        <ul className="grid grid-cols-2 gap-4">
                                            {doodleChallenges[currentIndex].requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-center bg-black/20 rounded-lg p-3">
                                                    <Star size={16} className="mr-2" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-xl mb-2">Complexity Level</h4>
                                        <div className="bg-black/20 rounded-full h-4">
                                            <div
                                                className="h-full bg-white rounded-full transition-all duration-1000"
                                                style={{ width: `${doodleChallenges[currentIndex].complexity}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Preview Area */}
                                <div className="space-y-4">
                                    <img
                                        src={doodleChallenges[currentIndex].inspirationImage}
                                        alt="Doodle Preview"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <div className="bg-black/20 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">Quick Tutorial</h4>
                                        <p className="text-sm">{doodleChallenges[currentIndex].tutorial}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <button
                        onClick={nextChallenge}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Interactive Playground */}
            <section className="max-w-4xl mx-auto mb-16">
                <div className="bg-white/5 rounded-2xl p-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">Doodle Playground</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <button className="p-6 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 transition-all group">
                            <Code size={32} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <span className="block font-semibold">Start Coding</span>
                        </button>
                        <button className="p-6 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 transition-all group">
                            <Play size={32} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <span className="block font-semibold">Try Examples</span>
                        </button>
                        <button className="p-6 rounded-xl bg-green-500/20 hover:bg-green-500/30 transition-all group">
                            <Heart size={32} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <span className="block font-semibold">Submit Doodle</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Community Showcase */}
            <section className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Featured Doodles</h2>
                <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-white/5 rounded-lg hover:bg-white/10 transition-all cursor-pointer">
                            <img
                                src={`/doodle1.png`}
                                alt={`Featured Doodle ${i}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DoodleDevZone;