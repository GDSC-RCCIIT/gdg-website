"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ChevronRight, Info } from 'lucide-react';

const goalsData = [
    {
        title: "No Poverty",
        description: "End poverty in all its forms, everywhere.",
        projects: ["DonationMatch", "OKO Finance", "Solar Freeze"],
    },
    {
        title: "Zero Hunger",
        description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.",
        projects: ["IndigoDrones", "SkillLab", "Apic"],
    },
    {
        title: "Good Health and Wellbeing",
        description: "Ensure healthy lives and promote well-being for all, at all ages.",
        projects: ["Kindara", "WonderTree", "Wonder"],
    },
    {
        title: "Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        projects: ["DonationMatch", "OKO Finance", "Femunity"],
    },
    {
        title: "Gender Equality",
        description: "Achieve gender equality and empower all women and girls.",
        projects: ["DonationMatch", "SkillLab", "Kindara"],
    },
    {
        title: "Clean Water and Sanitation",
        description: "Ensure availability and sustainable management of water and sanitation for all.",
        projects: ["Flow", "Remora"],
    },
    {
        title: "Decent Work and Economic Growth",
        description: "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
        projects: ["SkillLab", "DonationMatch"],
    },
    {
        title: "Industry, Innovation and Infrastructure",
        description: "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
        projects: ["DonationMatch", "ReVita"],
    },
    {
        title: "Reduced Inequalities",
        description: "Reduce inequality within and among countries.",
        projects: ["Wonder Reader", "HearSitter"],
    },
    {
        title: "Sustainable Cities and Communities",
        description: "Make cities and human settlements inclusive, safe, resilient, and sustainable.",
        projects: ["OKO Finance", "HeadHome"],
    },
    {
        title: "Responsible Consumption and Production",
        description: "Ensure sustainable consumption and production patterns.",
        projects: ["DeCarbonUs", "FarmX"],
    },
    {
        title: "Climate Action",
        description: "Take urgent action to combat climate change and its impacts.",
        projects: ["FarmX", "SlugLoop"],
    },
    {
        title: "Partnerships",
        description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
        projects: ["BuzzBusters", "Gateway"],
    },
    {
        title: "Life Below Water",
        description: "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.",
        projects: ["Consider submitting to this category!"],
    },
    {
        title: "Life on Land",
        description: "Protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests, combat desertification and biodiversity loss, and halt and reverse land degradation.",
        projects: ["Consider submitting to this category!"],
    },
    {
        title: "Peace, Justice and Strong Institutions",
        description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions.",
        projects: ["Consider submitting to this category!"],
    },
    {
        title: "Affordable and Clean Energy",
        description: "Ensure access to affordable, reliable, sustainable, and modern energy for all.",
        projects: ["Consider submitting to this category!"],
    },
];

const SDGsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <motion.div
                className="relative text-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">The 17 Sustainable Development Goals</h1>
                    <p className="text-lg max-w-2xl mx-auto mb-6">
                        Created by the United Nations in 2015, these goals aim to end poverty, ensure prosperity, and protect the planet by 2030.
                    </p>
                    <button className="mt-4 bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                        Learn More
                    </button>
                </div>
            </motion.div>

            {/* Goals Section */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Explore the Goals</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {goalsData.map((goal, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-center mb-4">
                                <Info className="text-blue-500 mr-3 w-6 h-6" />
                                <h3 className="text-2xl font-semibold text-gray-800">{goal.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{goal.description}</p>
                            <div className="mb-4">
                                <h4 className="text-lg font-medium text-gray-700 mb-2">Example Projects:</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {goal.projects.map((project, idx) => (
                                        <li key={idx} className="text-gray-600">{project}</li>
                                    ))}
                                </ul>
                            </div>
                            <button className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center">
                                <span>Why It Matters</span>
                                <ChevronRight className="w-5 h-5 ml-1" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SDGsPage;
