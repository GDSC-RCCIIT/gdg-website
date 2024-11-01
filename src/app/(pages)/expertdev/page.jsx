"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Users, ArrowRightCircle } from 'lucide-react';

// Header Section with Animated Background and Text
const Header = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute top-16 right-16 w-48 h-48 bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <motion.h1 className="text-5xl font-bold mb-4">Google Developer Experts</motion.h1>
                <p className="text-xl font-medium">
                    Join a global network of over 1,000 professionals. Connect, share, and grow with Google Developer Experts.
                </p>
                <motion.div className="mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                        Become an Expert
                    </button>
                    <button className="ml-4 bg-transparent text-white font-semibold px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition">
                        View All Experts
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

// Section for Program Benefits with Images and Icons
const ProgramBenefits = () => {
    const benefits = [
        {
            title: "Share",
            description: "Share your knowledge with the developer community by speaking at events and mentoring others.",
            icon: <Users className="w-10 h-10 text-purple-500" />,
            image: "/exp1.png",
        },
        {
            title: "Connect",
            description: "Join a passionate community of technologists from around the world and network with Google teams.",
            icon: <ArrowRightCircle className="w-10 h-10 text-blue-500" />,
            image: "/exp2.jpeg",
        },
        {
            title: "Develop",
            description: "Grow your career by getting featured in the GDE directory and gaining early access to products.",
            icon: <Users className="w-10 h-10 text-pink-500" />,
            image: "/exp3.jpeg",
        },
    ];

    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Program Benefits</h2>
            <div className="max-w-6xl mx-auto flex flex-wrap gap-8 justify-center px-6">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-lg w-80 transform transition-transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <img src={benefit.image} alt={benefit.title} className="rounded-t-lg w-full h-40 object-cover" />
                        <div className="p-6">
                            <div className="mb-4 flex justify-center">{benefit.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Testimonials Section with Image and Playable Video Thumbnails
const Testimonials = () => {
    const testimonials = [
        { title: "Fostering an inclusive tech community with Evelyn Mendes", link: "#", image: "/exp3.jpeg" },
        { title: "Using Machine Learning for COVID-19 helpline with Krupal Modi", link: "#", image: "/exp4.jpeg" },
        { title: "Indian sign language recognition with Akshay Bahadur", link: "#", image: "/exp5.jpeg" },
        { title: "My GDE journey by Lara Martin", link: "#", image: "/exp6.jpeg" },
    ];

    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Stories from the Community</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <img src={testimonial.image} alt={testimonial.title} className="rounded-t-lg w-full h-40 object-cover" />
                        <div className="p-6">
                            <div className="absolute top-4 right-4 text-gray-500">
                                <PlayCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{testimonial.title}</h3>
                            <button className="text-blue-600 font-medium">Watch Now</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Directory Iframe Section
const DirectoryIframe = () => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Explore the Expert Directory</h2>
            <div className="max-w-6xl mx-auto">
                <div className="devsite-landing-row-item border rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://developers.google.com/frame/community/experts/index_42d78dc5096bb559bd93e00d0957167a04582b6c5a24bf34a3fce1b1c84c2335.frame"
                        className="w-full h-[610px] border-0"
                        allow="clipboard-write https://developers-dot-devsite-v2-prod.appspot.com"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </motion.div>
    );
};

// Social Media Links Section
const SocialMedia = () => {
    const socials = [
        { platform: "YouTube", icon: "📺", link: "#" },
        { platform: "LinkedIn", icon: "🔗", link: "#" },
        { platform: "X (Twitter)", icon: "🐦", link: "#" },
        { platform: "Medium", icon: "✍️", link: "#" },
    ];

    return (
        <motion.div
            className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-bold mb-6">Stay in Touch</h2>
            <p className="text-lg mb-8">Follow Google Developer Experts for the latest news and updates.</p>
            <div className="flex justify-center gap-10">
                {socials.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.link}
                        className="text-4xl hover:scale-110 transition transform"
                        aria-label={social.platform}
                        whileHover={{ scale: 1.1 }}
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
};

// Main Google Developer Experts Page Component
const GoogleDeveloperExpertsPage = () => {
    return (
        <div>
            <Header />
            <ProgramBenefits />
            <Testimonials />
            <DirectoryIframe />
            <SocialMedia />
        </div>
    );
};

export default GoogleDeveloperExpertsPage;
