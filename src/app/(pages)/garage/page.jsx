"use client";
import React, { useState } from 'react';
import {
    Lightbulb,
    Tool,
    Users,
    Rocket,
    Code,
    MessageSquare,
    ThumbsUp,
    Zap,
    Coffee,
    Globe,
    Clock,
    ArrowRight,
    Star,
    GitBranch,
    MessageCircle
} from 'lucide-react';

const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'ai', name: 'AI & ML', icon: Zap },
    { id: 'web3', name: 'Web3', icon: GitBranch },
    { id: 'sustainability', name: 'Sustainability', icon: Coffee }
];

const GarageWorkspace = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');
    const [ideaTitle, setIdeaTitle] = useState('');
    const [showIdeaForm, setShowIdeaForm] = useState(false);

    // Example projects array (make sure the structure and data are correct)
    const projects = [
        {
            id: 'quantum-search',
            name: 'Quantum Search Algorithm',
            description: 'Experimental search algorithm using quantum computing principles',
            creator: 'Sarah Chen',
            stage: 'Prototype',
            tags: ['Algorithm', 'Quantum', 'Search'],
            collaborators: 12,
            likes: 234,
            progress: 65,
            updates: [
                {
                    date: '2 days ago',
                    message: 'Implemented quantum gate simulation'
                },
                {
                    date: '1 week ago',
                    message: 'Initial prototype complete'
                }
            ]
        },
        // Add more projects as required
    ];

    // Function to filter projects based on the active category
    const filteredProjects = activeCategory === 'all' ? projects : projects.filter(project => project.tags.includes(activeCategory));

    return (
        <div className="min-h-screen bg-zinc-900">
            {/* Hero Section with Garage Aesthetic */}
            <div className="relative overflow-hidden bg-[url('/api/placeholder/1920/400')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                <div className="relative max-w-7xl mx-auto px-6 py-24">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6 text-white">
                            The Garage
                            <span className="text-orange-500">_</span>
                        </h1>
                        <p className="text-xl text-zinc-300 mb-8">
                            Where great ideas are born. Just like Google started in a garage,
                            your next big innovation could start right here.
                        </p>
                        <button
                            onClick={() => setShowIdeaForm(true)}
                            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition-all transform hover:scale-105"
                        >
                            Start Your Project
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-orange-500/20 rounded-lg">
                                <Lightbulb className="w-8 h-8 text-orange-500" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">1,234</p>
                                <p className="text-zinc-400">Active Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-purple-500/20 rounded-lg">
                                <Users className="w-8 h-8 text-purple-500" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">5,678</p>
                                <p className="text-zinc-400">Innovators</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-green-500/20 rounded-lg">
                                <Rocket className="w-8 h-8 text-green-500" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">89</p>
                                <p className="text-zinc-400">Launched Projects</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Browser */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700">
                            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full flex items-center p-3 rounded-lg transition-all ${activeCategory === category.id
                                            ? 'bg-orange-500 text-white'
                                            : 'hover:bg-zinc-700/50 text-zinc-300'
                                            }`}
                                    >
                                        {category.icon && React.createElement(category.icon, {
                                            size: 18,
                                            className: "mr-3"
                                        })}
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Grid */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700 hover:border-orange-500/50 transition-all cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-semibold text-white">
                                            {project.name}
                                        </h3>
                                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">
                                            {project.stage}
                                        </span>
                                    </div>
                                    <p className="text-zinc-300 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-zinc-700/50 text-zinc-300 rounded-lg text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between text-zinc-400 text-sm">
                                        <div className="flex items-center space-x-4">
                                            <span className="flex items-center">
                                                <Users className="w-4 h-4 mr-1" />
                                                {project.collaborators}
                                            </span>
                                            <span className="flex items-center">
                                                <ThumbsUp className="w-4 h-4 mr-1" />
                                                {project.likes}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {project.updates[0].date}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-zinc-900 py-8 border-t border-zinc-700">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-zinc-400">
                        © 2024 The Garage. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Idea Form Modal */}
            {showIdeaForm && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="bg-zinc-800 p-6 rounded-lg max-w-md mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Start a New Project
                        </h2>
                        <input
                            type="text"
                            placeholder="Project Title"
                            className="w-full p-3 mb-4 bg-zinc-700 text-white rounded-lg"
                            value={ideaTitle}
                            onChange={(e) => setIdeaTitle(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                setShowIdeaForm(false);
                                setIdeaTitle('');
                            }}
                            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all"
                        >
                            Submit
                        </button>
                        <button
                            onClick={() => setShowIdeaForm(false)}
                            className="mt-4 text-zinc-400 text-sm"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GarageWorkspace;
