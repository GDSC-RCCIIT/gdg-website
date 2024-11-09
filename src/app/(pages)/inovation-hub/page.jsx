"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample data for ideas
const sampleIdeas = [
    {
        id: 1,
        title: "AI-Powered Chatbot for Community Support",
        description: "An AI chatbot that helps answer common questions and provides resources for GDG members.",
        votes: 12,
    },
    {
        id: 2,
        title: "Mobile App for GDG Events",
        description: "A mobile app that displays GDG event schedules, locations, and resources.",
        votes: 8,
    },
];

// Header Section for Innovation Hub
const InnovationHubHeader = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-10 max-w-3xl mx-auto mt-8">
                <motion.h1 className="text-5xl font-bold mb-4">
                    GDG Innovation Hub
                </motion.h1>
                <p className="text-xl font-medium">
                    Discover, share, and vote on groundbreaking ideas from the GDG community. Help shape the future by contributing your ideas and supporting others.
                </p>
            </div>
        </motion.div>
    );
};

// Idea Submission Section
const IdeaSubmission = ({ onSubmit }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (title && description) {
            onSubmit({ id: Date.now(), title, description, votes: 0 });
            setTitle("");
            setDescription("");
        }
    };

    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Submit Your Idea</h2>
            <div className="max-w-3xl mx-auto px-6">
                <input
                    type="text"
                    placeholder="Idea Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
                />
                <textarea
                    placeholder="Idea Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Submit Idea
                </button>
            </div>
        </motion.div>
    );
};

// Idea Voting Section
const IdeaVoting = ({ ideas, onVote }) => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Vote on Ideas</h2>
            <div className="max-w-6xl mx-auto text-left px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {ideas.map((idea) => (
                    <div key={idea.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">{idea.title}</h3>
                        <p className="text-lg text-gray-700 mb-4">{idea.description}</p>
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => onVote(idea.id)}
                                className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                            >
                                Vote
                            </button>
                            <span className="text-lg font-bold">{idea.votes} votes</span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

// Spotlight Section for Top Ideas
const Spotlight = ({ ideas }) => {
    const topIdea = ideas.reduce((prev, current) => (current.votes > prev.votes ? current : prev), ideas[0]);

    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Spotlight on Top Idea</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold mb-4">{topIdea.title}</h3>
                <p className="text-lg text-gray-700 mb-4">{topIdea.description}</p>
                <p className="text-xl font-bold text-green-600">{topIdea.votes} votes</p>
            </div>
        </motion.div>
    );
};

// Prototyping Resources Section
const PrototypingResources = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Resources for Prototyping</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <ul className="list-disc list-inside ml-4 text-lg">
                    <li className="mb-4">Figma - Design and prototype your UI ideas.</li>
                    <li className="mb-4">GitHub - Collaborate and share your project code.</li>
                    <li className="mb-4">Firebase - Quickly deploy web and mobile applications.</li>
                    <li className="mb-4">AWS Free Tier - Access cloud resources to host and test your prototypes.</li>
                    <li className="mb-4">Google Cloud Credits - Available for GDG members working on innovative projects.</li>
                </ul>
            </div>
        </motion.div>
    );
};

// Main GDG Innovation Hub Page Component
const GDGInnovationHubPage = () => {
    const [ideas, setIdeas] = useState(sampleIdeas);

    const handleIdeaSubmit = (newIdea) => {
        setIdeas([...ideas, newIdea]);
    };

    const handleVote = (id) => {
        setIdeas(
            ideas.map((idea) =>
                idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea
            )
        );
    };

    return (
        <div>
            <InnovationHubHeader />
            <IdeaSubmission onSubmit={handleIdeaSubmit} />
            <IdeaVoting ideas={ideas} onVote={handleVote} />
            <Spotlight ideas={ideas} />
            <PrototypingResources />
        </div>
    );
};

export default GDGInnovationHubPage;
