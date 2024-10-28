"use client";
import React, { useState } from 'react';
import { ChevronDown, Users, Code, Calendar, ShieldCheck, ChevronRight, Sparkles, Network } from 'lucide-react';

const Header = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center" />
            <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center justify-center">
                <div className="animate-float">
                    <Sparkles className="w-16 h-16 mb-8 text-yellow-400" />
                </div>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
                    Lead the Next Generation
                    <br />
                    of Tech Innovators
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl text-center mb-12">
                    Become a Google Developer Student Clubs Lead and shape the future of technology on your campus
                </p>
                <div className="space-x-4 flex flex-wrap justify-center gap-4">
                    <button className="px-8 py-4 rounded-full bg-white text-purple-900 font-bold hover:bg-opacity-90 transform hover:scale-105 transition shadow-lg">
                        Apply Now
                    </button>
                    <button className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-purple-900 transform hover:scale-105 transition">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
    );
};

const ImpactCard = ({ number, title, description }) => (
    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="text-4xl font-bold text-purple-600 mb-4">{number}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Impact = () => {
    const stats = [
        { number: "1000+", title: "Active Clubs", description: "Across universities worldwide" },
        { number: "50K+", title: "Students Reached", description: "Through workshops and events" },
        { number: "5K+", title: "Projects Built", description: "Making real-world impact" }
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Our Global Impact</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <ImpactCard key={index} {...stat} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const RoleCard = ({ icon: Icon, title, description, color }) => (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className={`absolute top-0 left-0 w-2 h-full ${color} rounded-l-2xl transition-all group-hover:w-full group-hover:rounded-2xl group-hover:opacity-10`} />
        <div className="relative z-10">
            <Icon className={`w-12 h-12 ${color.replace('bg-', 'text-')} mb-6`} />
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const Roles = () => {
    const roles = [
        {
            icon: Users,
            title: "Community Builder",
            description: "Create an inclusive space for students to learn and grow together",
            color: "bg-blue-500"
        },
        {
            icon: Code,
            title: "Tech Educator",
            description: "Share knowledge and facilitate hands-on learning experiences",
            color: "bg-purple-500"
        },
        {
            icon: Network,
            title: "Network Curator",
            description: "Connect students with industry experts and opportunities",
            color: "bg-pink-500"
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Your Role as a Lead</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {roles.map((role, index) => (
                        <RoleCard key={index} {...role} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Journey = () => {
    const steps = [
        { title: "Apply", description: "Submit your application and share your vision" },
        { title: "Get Selected", description: "Join the global community of GDSC leads" },
        { title: "Get Trained", description: "Access exclusive resources and mentorship" },
        { title: "Lead", description: "Start making an impact on your campus" }
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Your Journey Starts Here</h2>
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 relative">
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                    <ChevronRight className="w-8 h-8 text-purple-600" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CallToAction = () => {
    return (
        <div className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to Make an Impact?</h2>
                <p className="text-xl mb-12 max-w-2xl mx-auto">
                    Join a global community of student leaders and start making a difference today
                </p>
                <button className="px-8 py-4 rounded-full bg-white text-purple-900 font-bold hover:bg-opacity-90 transform hover:scale-105 transition shadow-lg">
                    Start Your Application
                </button>
            </div>
        </div>
    );
};

const DeveloperStudentClubsLeadsPage = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <Impact />
            <Roles />
            <Journey />
            <CallToAction />
        </div>
    );
};

export default DeveloperStudentClubsLeadsPage;