"use client";
import React, { useState } from 'react';
import {
    Rocket,
    Brain,
    Car,
    Wifi,
    LineChart,
    Server,
    Zap,
    ArrowRight,
    ExternalLink
} from 'lucide-react';

const moonshots = [
    {
        id: 'waymo',
        name: 'Waymo',
        tagline: 'Autonomous Driving Revolution',
        category: 'Transportation',
        status: 'Active',
        year: 2009,
        description: 'Pioneering the future of autonomous driving with advanced AI and sensor technology.',
        icon: Car,
        impact: 'Over 20 million miles of autonomous driving, revolutionizing transportation safety.',
        metrics: [
            { label: 'Autonomous Miles', value: '20M+' },
            { label: 'Cities Active', value: '25+' },
            { label: 'Safety Rating', value: '99.9%' }
        ],
        tech: ['LiDAR', 'Computer Vision', 'Machine Learning'],
        gradient: 'from-blue-400 via-cyan-500 to-teal-600',
        apis: ['Waymo API', 'Maps API', 'Cloud AI'],
        datasets: ['Urban Driving Patterns', 'Traffic Analysis']
    },
    {
        id: 'loon',
        name: 'Project Loon',
        tagline: 'Internet Access From Above',
        category: 'Connectivity',
        status: 'Legacy',
        year: 2011,
        description: 'Bringing internet connectivity to remote areas using high-altitude balloons.',
        icon: Wifi,
        impact: 'Connected over 1M people in remote areas to the internet.',
        metrics: [
            { label: 'People Connected', value: '1M+' },
            { label: 'Max Altitude', value: '20km' },
            { label: 'Coverage Area', value: '11k km²' }
        ],
        tech: ['Atmospheric Modeling', 'Mesh Networking', 'Solar Power'],
        gradient: 'from-purple-400 via-fuchsia-500 to-pink-600',
        apis: ['Telemetry API', 'Weather API'],
        datasets: ['Stratospheric Wind Patterns', 'Coverage Maps']
    },
    {
        id: 'deepmind',
        name: 'DeepMind',
        tagline: 'AI for Scientific Discovery',
        category: 'Artificial Intelligence',
        status: 'Active',
        year: 2010,
        description: 'Pushing the boundaries of AI to solve humanity’s greatest challenges.',
        icon: Brain,
        impact: 'Breakthrough achievements in protein folding and nuclear fusion research.',
        metrics: [
            { label: 'Scientific Papers', value: '1000+' },
            { label: 'Proteins Mapped', value: '200M+' },
            { label: 'Energy Saved', value: '40%' }
        ],
        tech: ['Deep Learning', 'Reinforcement Learning', 'Neural Networks'],
        gradient: 'from-green-400 via-emerald-500 to-teal-600',
        apis: ['AlphaFold API', 'TensorFlow'],
        datasets: ['Protein Structures', 'Climate Patterns']
    }
];

const MoonshotHub = () => {
    const [selectedMoonshot, setSelectedMoonshot] = useState(moonshots[0]);
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <header className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/20 to-transparent" />
                    <div className="grid grid-cols-8 gap-4 rotate-12 opacity-10">
                        {[...Array(64)].map((_, i) => (
                            <div
                                key={i}
                                className="h-32 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-lg"
                            />
                        ))}
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-6xl font-bold mb-4">
                                Project Moonshot Hub
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                    .
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl">
                                Explore Google's most ambitious innovations pushing the boundaries of technology
                                to solve humanity's greatest challenges.
                            </p>
                        </div>
                        <Rocket size={80} className="text-blue-400" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Project Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {moonshots.map((moonshot) => (
                        <button
                            key={moonshot.id}
                            onClick={() => setSelectedMoonshot(moonshot)}
                            className={`p-6 rounded-xl transition-all duration-300 ${selectedMoonshot.id === moonshot.id
                                ? `bg-gradient-to-br ${moonshot.gradient}`
                                : 'bg-gray-800 hover:bg-gray-700'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    {React.createElement(moonshot.icon, { size: 24, className: "mr-3" })}
                                    <h3 className="text-xl font-semibold">{moonshot.name}</h3>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-sm ${moonshot.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-300'
                                    }`}>
                                    {moonshot.status}
                                </span>
                            </div>
                            <p className="text-gray-300">{moonshot.tagline}</p>
                        </button>
                    ))}
                </div>

                {/* Project Details */}
                <div className="bg-gray-800 rounded-2xl p-8">
                    {/* Tabs */}
                    <div className="flex space-x-4 mb-8">
                        {['overview', 'technology', 'impact', 'resources'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg capitalize transition-colors ${activeTab === tab
                                    ? `bg-gradient-to-r ${selectedMoonshot.gradient}`
                                    : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-8">
                        {activeTab === 'overview' && (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {selectedMoonshot.metrics.map((metric, idx) => (
                                        <div key={idx} className="bg-gray-700 rounded-xl p-6">
                                            <p className="text-gray-300 mb-2">{metric.label}</p>
                                            <p className="text-3xl font-bold">{metric.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-700 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-4">About</h3>
                                    <p className="text-gray-300">{selectedMoonshot.description}</p>
                                </div>
                            </>
                        )}

                        {activeTab === 'technology' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-700 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
                                    <ul className="space-y-3">
                                        {selectedMoonshot.tech.map((tech, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <Server size={20} className="mr-3 text-blue-400" />
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-700 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-4">Available APIs</h3>
                                    <ul className="space-y-3">
                                        {selectedMoonshot.apis.map((api, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <Zap size={20} className="mr-3 text-purple-400" />
                                                {api}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'impact' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-700 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
                                    <p className="text-gray-300">{selectedMoonshot.impact}</p>
                                </div>
                                <div className="bg-gray-700 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-4">Timeline</h3>
                                    <div className="flex items-center">
                                        <div className="text-3xl font-bold">{selectedMoonshot.year}</div>
                                        <ArrowRight size={24} className="mx-4" />
                                        <div className="text-3xl font-bold">Present</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'resources' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-700 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-4">Open Datasets</h3>
                                    <ul className="space-y-3">
                                        {selectedMoonshot.datasets.map((dataset, idx) => (
                                            <li key={idx} className="flex items-center justify-between group">
                                                <span className="flex items-center">
                                                    <LineChart size={20} className="mr-3 text-green-400" />
                                                    {dataset}
                                                </span>
                                                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-700 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-4">Developer Resources</h3>
                                    <div className="space-y-4">
                                        <button className="w-full py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
                                            Documentation
                                        </button>
                                        <button className="w-full py-2 px-4 rounded-lg bg-purple-500 hover:bg-purple-600 transition-colors">
                                            API Reference
                                        </button>
                                        <button className="w-full py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 transition-colors">
                                            Sample Projects
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Call to Action */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join the community of innovators using Google's moonshot technologies
                        to create world-changing applications.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                            Get Started
                        </button>
                        <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                            View Documentation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MoonshotHub;
