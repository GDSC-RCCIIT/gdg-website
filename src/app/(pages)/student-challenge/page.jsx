"use client";
import React from 'react';
import { Calendar, Award, Star, Globe, ArrowRight, Target, Users, Lightbulb, Earth } from 'lucide-react';

const Header = () => {
    return (
        <div className="relative min-h-[90vh] bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900 text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 -top-20 -left-20 animate-pulse" />
                <div className="absolute w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20 top-40 right-20 animate-pulse delay-700" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[90vh]">
                <div className="animate-bounce mb-8">
                    <Earth className="w-20 h-20 text-emerald-400" />
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                        2024 Solution Challenge
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl text-center mb-8">
                    Join the global movement to solve the world's most pressing challenges using Google technology
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="px-8 py-4 rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-600 transform hover:scale-105 transition shadow-lg flex items-center gap-2">
                        RSVP for Demo Day 2024
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-emerald-900 transform hover:scale-105 transition flex items-center gap-2">
                        Learn More
                        <Target className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const TimelineCard = ({ icon: Icon, period, description, color }) => (
    <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className={`absolute top-0 left-0 w-2 h-full ${color} rounded-l-2xl transition-all group-hover:w-full group-hover:rounded-2xl group-hover:opacity-10`} />
        <div className="relative z-10">
            <Icon className={`w-12 h-12 ${color.replace('bg-', 'text-')} mb-6`} />
            <h3 className="text-2xl font-bold mb-4">{period}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const Timeline = () => {
    const phases = [
        {
            icon: Lightbulb,
            period: "January - March",
            description: "Ideation & Development Phase: Form teams, brainstorm solutions, and start building.",
            color: "bg-emerald-500"
        },
        {
            icon: Target,
            period: "April - May",
            description: "Review & Mentoring Phase: Submit projects and receive expert guidance.",
            color: "bg-blue-500"
        },
        {
            icon: Star,
            period: "June 27 - Demo Day",
            description: "Final Showcase: Top 10 teams present their solutions to a global audience.",
            color: "bg-purple-500"
        }
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Your Journey to Impact</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {phases.map((phase, index) => (
                        <TimelineCard key={index} {...phase} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const AwardCard = ({ title, prize, icon: Icon, color }) => (
    <div className="transform transition-all duration-300 hover:scale-105">
        <div className={`relative p-8 rounded-2xl ${color} text-white overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
                <Icon className="w-full h-full opacity-20" />
            </div>
            <div className="relative z-10">
                <Icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-100">{prize}</p>
            </div>
        </div>
    </div>
);

const Awards = () => {
    const awards = [
        {
            icon: Star,
            title: "Top 100",
            prize: "Certificate, exclusive mentorship, and limited edition Google swag pack",
            color: "bg-gradient-to-br from-emerald-600 to-emerald-800"
        },
        {
            icon: Award,
            title: "Final 10",
            prize: "$1,000 prize, global recognition, and dedicated Google mentorship program",
            color: "bg-gradient-to-br from-blue-600 to-blue-800"
        },
        {
            icon: Target,
            title: "Winning 3",
            prize: "$3,000 prize, global feature, and exclusive Google development opportunities",
            color: "bg-gradient-to-br from-purple-600 to-purple-800"
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Awards & Recognition</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {awards.map((award, index) => (
                        <AwardCard key={index} {...award} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const UNGoals = () => {
    return (
        <div className="py-20 bg-gradient-to-br from-emerald-900 to-blue-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <Globe className="w-16 h-16 mx-auto mb-8 text-emerald-400" />
                <h2 className="text-4xl font-bold mb-8">UN Sustainable Development Goals</h2>
                <p className="text-xl mb-12 max-w-3xl mx-auto">
                    Join 193 United Nations Member States in their mission to end poverty,
                    ensure prosperity, and protect our planet through innovative solutions.
                </p>
                <button className="px-8 py-4 rounded-full bg-white text-emerald-900 font-bold hover:bg-opacity-90 transform hover:scale-105 transition shadow-lg flex items-center gap-2 mx-auto">
                    Explore the 17 Goals
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

const JoinGDSC = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <Users className="w-16 h-16 mx-auto mb-8 text-emerald-600" />
                    <h2 className="text-4xl font-bold mb-8">Join the Movement</h2>
                    <p className="text-xl mb-12">
                        Become part of a global community of student developers creating
                        solutions for real-world problems through Google Developer Student Clubs.
                    </p>
                    <button className="px-8 py-4 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-700 transform hover:scale-105 transition shadow-lg flex items-center gap-2 mx-auto">
                        Find Your Local GDSC
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const SolutionChallengePage = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <Timeline />
            <Awards />
            <UNGoals />
            <JoinGDSC />
        </div>
    );
};

export default SolutionChallengePage;