"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Header Section with Image and Text
const SponsorshipHeader = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >

            <div className="relative z-10 max-w-3xl mx-auto mt-8">
                <motion.h1 className="text-5xl font-bold mb-4">
                    Sponsorship Opportunities
                </motion.h1>
                <p className="text-xl font-medium">
                    A unique opportunity for potential sponsors and partners to support GDG events and initiatives while enjoying exclusive benefits and visibility in the tech community.
                </p>
            </div>
        </motion.div>
    );
};

// Sponsorship Tiers Section
const SponsorshipTiers = () => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Sponsorship Tiers</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <h3 className="text-2xl font-semibold mb-4">Gold, Silver, and Bronze Packages</h3>
                <p className="text-lg mb-6">
                    We offer three sponsorship tiers to suit various levels of partnership. Each tier provides different levels of visibility, access, and benefits at GDG events.
                </p>
                <p className="text-lg mb-6">
                    As a sponsor, you'll have the opportunity to showcase your brand, interact with participants, and be part of a vibrant tech community.
                </p>
            </div>
        </motion.div>
    );
};

// Benefits Section
const SponsorshipBenefits = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Benefits of Sponsorship</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    By partnering with GDG, sponsors enjoy numerous benefits, including brand exposure, networking opportunities, and the chance to connect with tech professionals and enthusiasts.
                </p>
                <Image
                    src="/sponser2.jpeg" // Replace with actual image URL
                    alt="Sponsorship Benefits"
                    width={800}
                    height={400}
                    className="mx-auto"
                />
            </div>
        </motion.div>
    );
};

// Success Stories Section
const SuccessStories = () => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Success Stories</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    Our past sponsors have found great success by partnering with GDG events. Read more about how our sponsorship opportunities have benefited companies in reaching their goals.
                </p>
                <p className="text-lg mb-6">
                    Discover stories that showcase the impactful collaborations with GDG, highlighting the positive outcomes of our shared initiatives.
                </p>
            </div>
        </motion.div>
    );
};

// Sponsorship Application Section
const SponsorshipApplication = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Apply to Become a Sponsor</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    Ready to become a sponsor? Fill out the application form to join us in our mission to drive tech innovation and create memorable events.
                </p>
                <p className="text-lg mb-6">
                    We look forward to partnering with you to make a meaningful impact in the tech community. Submit your application today and let's start building something great together!
                </p>
                {/* Placeholder for the application form */}
                <div className="bg-gray-200 p-8 rounded-lg mt-8">
                    <p className="text-lg font-semibold text-gray-700">[Application Form Coming Soon]</p>
                </div>
            </div>
        </motion.div>
    );
};

// Main Sponsorship Opportunities Page Component
const SponsorshipOpportunitiesPage = () => {
    return (
        <div>
            <SponsorshipHeader />
            <SponsorshipTiers />
            <SponsorshipBenefits />
            <SuccessStories />
            <SponsorshipApplication />
        </div>
    );
};

export default SponsorshipOpportunitiesPage;
