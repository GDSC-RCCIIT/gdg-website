"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Header Section with Image and Text
const PollsHeader = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-10 max-w-3xl mx-auto mt-8">
                <motion.h1 className="text-5xl font-bold mb-4">
                    Live Polls & Surveys
                </motion.h1>
                <p className="text-xl font-medium">
                    We want your feedback! Participate in live polls, share your thoughts, and help us shape the future of GDG events and initiatives.
                </p>
            </div>
        </motion.div>
    );
};

// Live Polls Section
const LivePolls = () => {
    const [polls, setPolls] = useState([
        { question: "Which topic interests you the most for the next GDG event?", options: ["AI/ML", "Cloud Computing", "Web Development", "Cybersecurity"], votes: [12, 34, 19, 5] },
        { question: "Preferred GDG event format?", options: ["In-Person", "Virtual", "Hybrid"], votes: [22, 17, 8] },
    ]);

    const handleVote = (pollIndex, optionIndex) => {
        const updatedPolls = [...polls];
        updatedPolls[pollIndex].votes[optionIndex] += 1;
        setPolls(updatedPolls);
    };

    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Live Polls</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                {polls.map((poll, pollIndex) => (
                    <div key={pollIndex} className="mb-10 bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">{poll.question}</h3>
                        {poll.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center mb-2">
                                <button
                                    onClick={() => handleVote(pollIndex, optionIndex)}
                                    className="bg-indigo-500 text-white py-1 px-4 rounded-full mr-4 hover:bg-indigo-600 transition duration-200"
                                >
                                    Vote
                                </button>
                                <p className="text-lg">{option} - {poll.votes[optionIndex]} votes</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

// Survey Participation Section
const SurveyParticipation = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Take Our Survey</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    Help us understand your preferences and interests! Your insights drive the content and format of our future events. Fill out our survey and let your voice be heard!
                </p>
                {/* Placeholder for the survey form */}
                <div className="bg-gray-200 p-8 rounded-lg mt-8">
                    <p className="text-lg font-semibold text-gray-700">[Survey Form Coming Soon]</p>
                </div>
            </div>
        </motion.div>
    );
};

// Topic Suggestions Section
const TopicSuggestions = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSuggest = () => {
        if (inputValue.trim()) {
            setSuggestions([...suggestions, inputValue.trim()]);
            setInputValue("");
        }
    };

    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Suggest a Topic</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    Got a topic you'd like to see at an upcoming GDG event? Share your ideas with us, and let’s make it happen!
                </p>
                <div className="flex mb-6">
                    <input
                        type="text"
                        placeholder="Enter your topic suggestion..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
                    />
                    <button
                        onClick={handleSuggest}
                        className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition duration-200"
                    >
                        Suggest
                    </button>
                </div>
                <div>
                    {suggestions.length > 0 && (
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Community Suggestions</h3>
                            <ul>
                                {suggestions.map((suggestion, index) => (
                                    <li key={index} className="text-lg mb-2">- {suggestion}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// Main Live Polls & Surveys Page Component
const LivePollsAndSurveysPage = () => {
    return (
        <div>
            <PollsHeader />
            <LivePolls />
            <SurveyParticipation />
            <TopicSuggestions />
        </div>
    );
};

export default LivePollsAndSurveysPage;
