"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    Calendar,
    BookOpen,
    CheckCircle,
    Cloud,
    Code,
    Search,
    ArrowRight
} from "lucide-react";

const certifications = [
    "Associate Cloud Engineer",
    "Professional Cloud Architect",
    "Professional Cloud Developer",
    "Professional Cloud DevOps Engineer",
    "Professional Cloud Security Engineer",
    "Professional Cloud Network Engineer",
    "Professional Data Engineer",
    "Professional Machine Learning Engineer",
];

const events = [
    { title: "DevFest New Delhi 2024", location: "Delhi", date: "Nov 9" },
    { title: "Gen AI Study Jam", location: "Delhi", date: "Sep 25" },
    { title: "Cloud Innovation Workshop", location: "Chandigarh", date: "Oct 28" },
    { title: "DevFest Jalandhar 2024", location: "Jalandhar", date: "Nov 30" },
    { title: "Google Devfest-‎Gemini Lahore 2024", location: "Lahore", date: "Dec 7" },
    { title: "DevFest Udaipur 2024", location: "Udaipur", date: "Nov 24" },
    { title: "DevFest 2024 Bhubaneswar", location: "Bhubaneswar", date: "Nov 10" },
    { title: "Responsible AI Workshop", location: "Almaty", date: "Oct 30" },
];

const CertificationCard = ({ title }) => (
    <motion.div
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
        whileHover={{ y: -5 }}
    >
        <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Cloud className="text-blue-600 w-6 h-6" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="mt-2 text-gray-600">Prepare for certification with expert-led sessions</p>
            </div>
        </div>
        <div className="mt-4 flex items-center text-blue-600 font-medium">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 ml-2" />
        </div>
    </motion.div>
);

const EventCard = ({ title, location, date }) => (
    <motion.div
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
        whileHover={{ y: -5 }}
    >
        <div className="flex flex-col h-full">
            <span className="text-sm font-medium text-green-600 mb-2">{date}</span>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <div className="flex items-center text-gray-600 mt-auto">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{location}</span>
            </div>
        </div>
    </motion.div>
);

const RoadToCertificationPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-green-400 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
                <div className="container mx-auto px-6 py-24 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl font-bold mb-6">Road to Google Cloud Certification</h1>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Join community-led events, hosted by Google Developer Groups, to prepare for Google Cloud certifications with hands-on workshops and expert support.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                                Get Started
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <CheckCircle className="text-red-500 w-8 h-8" />,
                                title: "Register",
                                description: "Find and RSVP for certification events near you"
                            },
                            {
                                icon: <BookOpen className="text-yellow-500 w-8 h-8" />,
                                title: "Learn",
                                description: "Access study materials and hands-on labs"
                            },
                            {
                                icon: <Code className="text-green-500 w-8 h-8" />,
                                title: "Practice",
                                description: "Work on real-world scenarios with experts"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center"
                            >
                                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Available Certifications</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Choose from a wide range of Google Cloud certifications and start your journey to becoming a certified professional.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <CertificationCard key={index} title={cert} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Events Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Upcoming Events</h2>
                    <div className="max-w-xl mx-auto mb-12">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search events by city..."
                                className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-12"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events
                            .filter(event =>
                                event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                event.title.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((event, index) => (
                                <EventCard key={index} {...event} />
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="font-bold mb-4">About</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About GDG</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chapters</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Console</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Events</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Calendar</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DevFest</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Study Jams</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>© 2024 Google. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RoadToCertificationPage;