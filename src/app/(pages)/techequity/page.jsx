"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

// Tech Equity Collective Page Component
const TechEquityCollectivePage = () => {
    return (
        <div className="bg-black text-white">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto px-8 py-12">
                <h1 className="text-6xl font-bold text-center leading-tight">
                    COLLECTIVELY
                    <br />
                    <span className="text-yellow-400">ACCELERATING</span>
                    <br />
                    <span className="text-blue-400">BLACK</span> ACCESS, AMBITION
                    <br />
                    AND <span className="text-green-400">ADVANCEMENT</span>
                    <br />
                    IN <span className="text-red-400">TECH</span>
                </h1>
            </div>

            {/* Image and Pathway Section */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-8 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2"
                >
                    <img
                        src="/techeq1.webp"
                        alt="Black woman looking thoughtful"
                        className="rounded-xl shadow-lg w-full h-auto"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 text-lg"
                >
                    We initiate energizing pathways into tech for Black people.
                </motion.div>
            </div>

            {/* Uncover Your Path Section */}
            <div className="mt-32 max-w-6xl mx-auto px-8 text-center">
                <h2 className="text-5xl font-bold mb-16">Uncover Your Path</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:bg-gray-700 transition-all"
                    >
                        <h3 className="text-2xl font-bold mb-4">Tech Prep Program</h3>
                        <p>
                            Tech Equity Collective's Tech Prep is a career development program preparing aspiring technologists for success in the tech industry.
                        </p>
                        <a href="#" className="text-blue-400 mt-4 block font-semibold">APPLY TODAY</a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:bg-gray-700 transition-all"
                    >
                        <h3 className="text-2xl font-bold mb-4">CultureCon NYC</h3>
                        <p>
                            Discover how Black trailblazers are making an impact at the intersection of technology and creativity.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:bg-gray-700 transition-all"
                    >
                        <h3 className="text-2xl font-bold mb-4">Black Women Techmakers</h3>
                        <p>
                            Providing visibility, community, and resources for Black women in the tech industry.
                        </p>
                        <a href="#" className="text-blue-400 mt-4 block font-semibold">LEARN MORE</a>
                    </motion.div>
                </div>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 px-8 py-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all"
                >
                    View All
                </motion.button>
            </div>

            {/* Partner With Us Section */}
            <div className="mt-32 max-w-6xl mx-auto px-8 text-center">
                <h2 className="text-5xl font-bold mb-16">Partner With Us</h2>
                <div className="text-lg mb-12">
                    Collective action inspires breakthroughs—let’s work together. We invite passionate tech companies and organizations to join us as TEC Advocates.
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-yellow-400 text-black rounded-full shadow-lg font-bold hover:bg-yellow-500 transition-all"
                >
                    JOIN US
                </motion.button>
            </div>

            {/* Stay Connected Section */}
            <div className="mt-32 max-w-6xl mx-auto px-8 text-center">
                <h2 className="text-5xl font-bold mb-12">Tap In With The Collective</h2>
                <p className="text-lg mb-8">
                    Stay connected to Tech Equity Collective (TEC) to learn more about upcoming programs, experiences, and resources in tech.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label>Add me to this mailing list.</label>
                    </div>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg font-bold hover:bg-green-600 transition-all"
                >
                    JOIN
                </motion.button>
                <div className="mt-8 text-sm text-gray-500">
                    I accept Google's Terms and Conditions and acknowledge that my information will be used in accordance with Google's Privacy Policy.
                </div>
            </div>
        </div>
    );
};

export default TechEquityCollectivePage;
