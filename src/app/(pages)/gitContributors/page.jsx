"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Star, GitPullRequest, GitCommit, Award, Github, ExternalLink, Code, Users } from 'lucide-react';

const GithubContributorsPage = () => {
    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('all'); // 'all' | 'top' | 'recent'

    useEffect(() => {
        fetchContributors();
    }, []);

    const fetchContributors = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/GDSC-RCCIIT/gdg-website/contributors');
            if (!response.ok) throw new Error('Failed to fetch contributors');
            const data = await response.json();

            // Fetch additional details for each contributor
            const detailedContributors = await Promise.all(
                data.map(async (contributor) => {
                    const userResponse = await fetch(contributor.url);
                    const userData = await userResponse.json();
                    return {
                        ...contributor,
                        name: userData.name || userData.login,
                        bio: userData.bio,
                        followers: userData.followers,
                        location: userData.location,
                        contributions: contributor.contributions,
                    };
                })
            );

            setContributors(detailedContributors);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const getContributorRank = (index) => {
        if (index === 0) return '🥇';
        if (index === 1) return '🥈';
        if (index === 2) return '🥉';
        return `#${index + 1}`;
    };

    return (
        <div className="min-h-screen bg-[#0d1117]">
            {/* Hero Section */}
            <motion.div
                className="bg-[#161b22] border-b border-[#30363d] text-white py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-6">
                        <Github size={40} className="text-gray-400" />
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
                            Contributors
                        </h1>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Meet the awesome developers who have contributed to the GDSC RCCIIT Website
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a
                            href="https://github.com/GDSC-RCCIIT/gdg-website"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#238636] text-white px-4 py-2 rounded-md hover:bg-[#2ea043] transition-colors"
                        >
                            <Star size={16} />
                            Star Repository
                        </a>
                        <a
                            href="https://github.com/GDSC-RCCIIT/gdg-website/fork"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#21262d] text-white px-4 py-2 rounded-md hover:bg-[#30363d] transition-colors"
                        >
                            <GitPullRequest size={16} />
                            Fork Repository
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Stats Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div
                        className="bg-[#161b22] border border-[#30363d] rounded-lg p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Users className="text-gray-400 mb-2" size={24} />
                        <h3 className="text-2xl font-bold text-white">{contributors.length}</h3>
                        <p className="text-gray-400">Total Contributors</p>
                    </motion.div>
                    <motion.div
                        className="bg-[#161b22] border border-[#30363d] rounded-lg p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <GitCommit className="text-gray-400 mb-2" size={24} />
                        <h3 className="text-2xl font-bold text-white">
                            {contributors.reduce((acc, curr) => acc + curr.contributions, 0)}
                        </h3>
                        <p className="text-gray-400">Total Contributions</p>
                    </motion.div>
                    <motion.div
                        className="bg-[#161b22] border border-[#30363d] rounded-lg p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Award className="text-gray-400 mb-2" size={24} />
                        <h3 className="text-2xl font-bold text-white">
                            {contributors[0]?.name || 'Loading...'}
                        </h3>
                        <p className="text-gray-400">Top Contributor</p>
                    </motion.div>
                </div>
            </div>

            {/* Contributors List */}
            <div className="container mx-auto px-4 py-8">
                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center py-12">
                        Error: {error}
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {contributors.map((contributor, index) => (
                            <motion.div
                                key={contributor.id}
                                className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 flex items-center gap-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex-shrink-0">
                                    <img
                                        src={contributor.avatar_url}
                                        alt={contributor.login}
                                        className="w-16 h-16 rounded-full border-2 border-[#30363d]"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400 font-mono">
                                            {getContributorRank(index)}
                                        </span>
                                        <h3 className="text-xl font-semibold text-white">
                                            {contributor.name}
                                        </h3>
                                        <a
                                            href={contributor.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-blue-400"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                    <p className="text-gray-400 mt-1">{contributor.bio}</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <GitCommit size={14} />
                                            {contributor.contributions} contributions
                                        </span>
                                        {contributor.location && (
                                            <span className="flex items-center gap-1">
                                                📍 {contributor.location}
                                            </span>
                                        )}
                                        <span className="flex items-center gap-1">
                                            <Users size={14} />
                                            {contributor.followers} followers
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GithubContributorsPage;