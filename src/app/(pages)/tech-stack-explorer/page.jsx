"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Sample data for tech stacks
const sampleTechStacks = [
    {
        id: 1,
        name: "Frontend Stack",
        description: "Technologies for building user interfaces.",
        tags: ["HTML", "CSS", "JavaScript", "React", "Angular"],
        details: {
            components: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Angular"],
            useCases: ["Web Development", "UI/UX Design", "Single Page Applications"],
            tutorials: ["https://reactjs.org/docs/getting-started.html", "https://angular.io/start"]
        },
    },
    {
        id: 2,
        name: "Backend Stack",
        description: "Technologies for server-side development.",
        tags: ["Node.js", "Express", "MongoDB", "SQL"],
        details: {
            components: ["Node.js", "Express", "Django", "MongoDB", "PostgreSQL"],
            useCases: ["REST APIs", "Database Management", "Authentication"],
            tutorials: ["https://nodejs.org/en/docs/guides/getting-started-guide/", "https://www.djangoproject.com/start/"]
        },
    },
    // Additional stacks can be added here
];

// Header Section
const TechStackHeader = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-10 max-w-3xl mx-auto mt-8">
                <motion.h1 className="text-5xl font-bold mb-4">
                    Tech Stack Explorer
                </motion.h1>
                <p className="text-xl font-medium">
                    Discover and explore popular tech stacks, learn about their components, and find tutorials to get started!
                </p>
            </div>
        </motion.div>
    );
};

// Tech Stack Cards Section
const TechStackCards = ({ stacks, onExpand }) => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-6xl mx-auto text-left px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stacks.map((stack) => (
                    <div
                        key={stack.id}
                        className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
                        onClick={() => onExpand(stack)}
                    >
                        <h3 className="text-2xl font-semibold mb-2">{stack.name}</h3>
                        <p className="text-lg text-gray-700 mb-4">{stack.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {stack.tags.map((tag, index) => (
                                <span key={index} className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-sm">
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
                className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">Close</button>
                <h2 className="text-3xl font-bold mb-4">{stack.name}</h2>
                <p className="text-lg mb-6">{stack.description}</p>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Components:</h3>
                    <ul className="list-disc list-inside ml-4 mb-4">
                        {stack.details.components.map((component, index) => (
                            <li key={index}>{component}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Use Cases:</h3>
                    <ul className="list-disc list-inside ml-4 mb-4">
                        {stack.details.useCases.map((useCase, index) => (
                            <li key={index}>{useCase}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Tutorials:</h3>
                    <ul className="list-disc list-inside ml-4">
                        {stack.details.tutorials.map((tutorial, index) => (
                            <li key={index}><a href={tutorial} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{tutorial}</a></li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

// Main Tech Stack Explorer Page Component
const TechStackExplorerPage = () => {
    const [selectedStack, setSelectedStack] = useState(null);

    const handleExpandStack = (stack) => {
        setSelectedStack(stack);
    };

    const handleCloseModal = () => {
        setSelectedStack(null);
    };

    return (
        <div>
            <TechStackHeader />
            <TechStackCards stacks={sampleTechStacks} onExpand={handleExpandStack} />
            {selectedStack && <TechStackModal stack={selectedStack} onClose={handleCloseModal} />}
        </div>
    );
};

export default TechStackExplorerPage;
