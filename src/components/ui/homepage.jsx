'use client'
import { motion } from "framer-motion";

export default function Homepage() {
    return (
        <div className="bg-white text-gray-900 select-none">
            <section className="py-12 px-6 md:px-16 ml-40 mr-40">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-blue-600"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Path to Success
                </motion.h2>

                <motion.div
                    className="flex flex-col md:flex-row items-center mb-16"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.img
                        src="/vision.webp"
                        alt="Vision"
                        className="w-full md:w-1/2 h-64 object-contain rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-4xl font-semibold text-gray-800 mb-4">🌟 Vision</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Our vision is to create a world where technology and innovation lead to the betterment of human lives, driving progress and success.
                            We aim to bridge gaps and create opportunities through collaboration and forward-thinking strategies that inspire change and growth across all sectors.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row-reverse items-center mb-16"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.img
                        src="/mission.webp"
                        alt="Mission"
                        className="w-full md:w-1/2 h-64 object-contain rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="md:mr-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-4xl font-semibold text-gray-800 mb-4">🎯 Mission</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Our mission is to empower individuals and organizations through cutting-edge technological solutions, fostering growth and innovation.
                            By providing comprehensive support and resources, we strive to cultivate an environment where creativity and technology thrive together.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row items-center mb-16"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.img
                        src="/goal.webp"
                        alt="Goal"
                        className="w-full md:w-1/2 h-64 object-contain rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-4xl font-semibold text-gray-800 mb-4">🚀 Goal</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Our goal is to continuously push the boundaries of what's possible and lead the way towards a more prosperous, tech-driven future.
                            We aim to inspire and equip the next generation of innovators to tackle challenges and seize opportunities that arise in a rapidly evolving digital landscape.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            <motion.section
                className="bg-blue-600 py-16 px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <motion.div
                    className="max-w-4xl mx-auto text-center relative bg-white rounded-lg shadow-lg p-12"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>

                    <blockquote className="relative text-3xl font-semibold text-gray-800 italic mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11V9a6 6 0 0112 0v1a6 6 0 01-6 6h-3v2a6 6 0 11-12 0v-1" />
                        </svg>
                        "Coming together is a beginning, staying together is progress, and working together is success."
                    </blockquote>

                    <cite className="relative text-lg font-medium text-gray-700">
                        - Henry Ford
                    </cite>
                </motion.div>
            </motion.section>
        </div>
    );
}
