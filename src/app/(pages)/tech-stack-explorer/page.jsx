"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Header Section
const TechStackHeader = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white py-32 px-8 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-10 max-w-4xl mx-auto mt-8">
                <motion.h1 className="text-6xl font-bold mb-6 leading-tight tracking-wide">
                    Explore the Best Tech Stacks
                </motion.h1>
                <p className="text-xl font-medium opacity-80">
                    Discover and explore the top technologies for frontend, backend, and full-stack development. Learn about their components, use cases, and tutorials to get started!
                </p>
            </div>
        </motion.div>
    );
};

// Tech Stack Cards Section
const TechStackCards = ({ stacks, onExpand }) => {
    return (
        <motion.div
            className="py-24 bg-gray-100 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {stacks.map((stack) => (
                    <div
                        key={stack.id}
                        className="bg-white p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                        onClick={() => onExpand(stack)}
                    >
                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">{stack.name}</h3>
                        <p className="text-lg text-gray-600 mb-6">{stack.description}</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {stack.tags.map((tag, index) => (
                                <span key={index} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

// Expanded Tech Stack Details Modal
const TechStackModal = ({ stack, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <motion.div
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg p-8 max-w-4xl w-full relative overflow-hidden"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-indigo-200 transition"
                >
                    &times;
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-4xl font-semibold text-white mb-2">{stack.name}</h2>
                    <p className="text-lg text-white opacity-80">{stack.description}</p>
                </div>

                <div className="space-y-6">
                    {/* Components Section */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Components:</h3>
                        <ul className="space-y-2 pl-6 text-white">
                            {stack.details.components.map((component, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                                    {component}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Use Cases Section */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Use Cases:</h3>
                        <ul className="space-y-2 pl-6 text-white">
                            {stack.details.useCases.map((useCase, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                                    {useCase}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tutorials Section */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Tutorials:</h3>
                        <ul className="space-y-2 pl-6 text-white">
                            {stack.details.tutorials.map((tutorial, index) => (
                                <li key={index}>
                                    <a
                                        href={tutorial}
                                        className="text-blue-200 hover:text-blue-400 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {tutorial}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


const TechStackExplorerPage = () => {
    const [techStacks, setTechStacks] = useState([]);
    const [selectedStack, setSelectedStack] = useState(null);

    useEffect(() => {
        // Fetch tech stacks from JSON server
        const fetchTechStacks = async () => {
            try {
                const response = await fetch('http://localhost:5000/tech-stacks');
                const data = await response.json();
                setTechStacks(data);
            } catch (error) {
                console.error("Error fetching tech stacks:", error);
            }
        };

        fetchTechStacks();
    }, []);

    const handleExpandStack = (stack) => {
        setSelectedStack(stack);
    };

    const handleCloseModal = () => {
        setSelectedStack(null);
    };

    return (
        <div>
            <TechStackHeader />
            <TechStackCards stacks={techStacks} onExpand={handleExpandStack} />
            {selectedStack && <TechStackModal stack={selectedStack} onClose={handleCloseModal} />}
        </div>
    );
};

export default TechStackExplorerPage;