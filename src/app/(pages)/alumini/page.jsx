"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample data for alumni stories and job postings
const alumniStories = [
    {
        id: 1,
        name: "Jane Doe",
        role: "Software Engineer at Google",
        story: "Participating in GDG events opened doors to amazing opportunities and helped me build my network.",
    },
    {
        id: 2,
        name: "John Smith",
        role: "Data Scientist at Microsoft",
        story: "GDG was a fantastic platform to enhance my skills and connect with professionals across the tech industry.",
    },
];

const jobPostings = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Solutions Inc.",
        location: "Remote",
        description: "Seeking a frontend developer with experience in React and TypeScript.",
    },
    {
        id: 2,
        title: "Data Analyst",
        company: "DataCorp",
        location: "San Francisco, CA",
        description: "Looking for a data analyst with strong skills in Python and SQL.",
    },
];

// Header Section for Alumni Network
const AlumniHeader = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-10 max-w-3xl mx-auto mt-8">
                <motion.h1 className="text-5xl font-bold mb-4">
                    GDG Alumni Network
                </motion.h1>
                <p className="text-xl font-medium">
                    Reconnect with GDG alumni, share experiences, offer guidance, and explore career opportunities in tech.
                </p>
            </div>
        </motion.div>
    );
};

// Alumni Stories Section
const AlumniStories = ({ stories }) => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Alumni Stories</h2>
            <div className="max-w-6xl mx-auto text-left px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {stories.map((story) => (
                    <div key={story.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">{story.name}</h3>
                        <p className="text-lg text-gray-700 mb-4"><strong>{story.role}</strong></p>
                        <p className="text-lg">{story.story}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

// Career Advice Section
const CareerAdvice = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Career Advice</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    Looking to advance your career in tech? Here are some tips from our experienced GDG alumni on how to grow your skills, network effectively, and find great job opportunities.
                </p>
                <ul className="list-disc list-inside ml-4 text-lg">
                    <li className="mb-4">Build a strong online presence through LinkedIn and GitHub.</li>
                    <li className="mb-4">Take part in open-source projects and community events.</li>
                    <li className="mb-4">Connect with mentors and alumni for career guidance.</li>
                    <li className="mb-4">Stay updated with new technologies and industry trends.</li>
                </ul>
            </div>
        </motion.div>
    );
};

// Job Board Section
const JobBoard = ({ jobs }) => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Job Board</h2>
            <div className="max-w-6xl mx-auto text-left px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                    <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                        <p className="text-lg text-gray-700 mb-2"><strong>{job.company}</strong> - {job.location}</p>
                        <p className="text-lg mb-4">{job.description}</p>
                        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

// Main GDG Alumni Network Page Component
const GDGAlumniNetworkPage = () => {
    return (
        <div>
            <AlumniHeader />
            <AlumniStories stories={alumniStories} />
            <CareerAdvice />
            <JobBoard jobs={jobPostings} />
        </div>
    );
};

export default GDGAlumniNetworkPage;
