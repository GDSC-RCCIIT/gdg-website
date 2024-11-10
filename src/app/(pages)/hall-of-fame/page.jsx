"use client"
import React from 'react';
import { Trophy, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const members = [
    {
        name: "Jane Doe",
        role: "Lead Organizer",
        achievements: [
            "Organized over 50 successful events",
            "Led the chapter to become one of the top 10 GDG groups globally",
            "Mentored over 100 developers in the community"
        ],
        image: "/hall1.jpeg"
    },
    {
        name: "John Smith",
        role: "Core Contributor",
        achievements: [
            "Contributed to multiple open-source projects",
            "Speaker at various GDG events on modern JavaScript frameworks",
            "Co-hosted GDG hackathon with over 500 participants"
        ],
        image: "/hall2.jpeg"
    },
    {
        name: "Emily Johnson",
        role: "Event Organizer",
        achievements: [
            "Coordinated community workshops and bootcamps",
            "Built partnerships with local companies to support events",
            "Managed community outreach and engagement"
        ],
        image: "/hall3.jpeg"
    }
];

const HallOfFame = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white p-4 sm:p-8">
            <header className="text-center mb-12 sm:mb-16">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4">Hall of Fame</h1>
                <p className="text-lg sm:text-xl">Honoring our long-term contributors and top-performing members</p>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {members.map((member, index) => (
                    <Card key={index} className="bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg">
                        <CardContent className="p-6 text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 border-4 border-white/20"
                            />
                            <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                            <p className="text-sm text-white/70 mb-4">{member.role}</p>

                            <div className="text-left">
                                <h4 className="text-lg font-semibold flex items-center gap-2 mb-2">
                                    <Trophy size={20} /> Achievements
                                </h4>
                                <ul className="list-disc list-inside space-y-2">
                                    {member.achievements.map((achievement, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Star size={16} className="text-yellow-400 mt-1" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HallOfFame;

// New Style for the Page
export const styles = {
    cardStyle: "bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl",
    headerStyle: "text-center text-3xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
    buttonStyle: "p-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-colors text-white font-semibold"
};
