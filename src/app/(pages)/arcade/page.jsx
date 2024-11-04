"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Header Section with Image and Text
const Header = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Image
                src="/arcade1.png" // Replace with actual image URL
                alt="The Arcade Google Cloud"
                width={1200}
                height={600}
                className="mx-auto"
            />
            <div className="relative z-10 max-w-3xl mx-auto mt-8">
                <motion.h1 className="text-5xl font-bold mb-4">
                    Boost your cloud skills — play The Arcade with Google Cloud to earn points and prizes
                </motion.h1>
                <p className="text-xl font-medium">
                    Are you ready to grow your cloud skills and earn Google Cloud swag? Game on! Head over to The Arcade to participate in games that feature hands-on learning labs. Complete labs and you’ll earn digital badges. These badges award you points that you can use to redeem great Google Cloud prizes from the prize counter, including backpacks, t-shirts, mugs, and more. You can even choose charitable donations. But take note: each game is available for a limited time only, so earn your digital badges and points while you can! Head to The Arcade to see what’s available to play today.
                </p>
            </div>
        </motion.div>
    );
};

// How It Works Section
const HowItWorks = () => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">How does it work?</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <h3 className="text-2xl font-semibold mb-4">Two games, two levels</h3>
                <p className="text-lg mb-6">
                    Every month, we will feature two new games: one that is an introductory “Level 1,” and another that is a more advanced “Level 2.” And no, you do not need a pocketful of quarters/credits! There is no cost to participate in The Arcade games.
                </p>
                <p className="text-lg mb-6">
                    Throughout the year, games will span a variety of topics to get you comfortable working with Google Cloud products and technology, like BigQuery, Firebase, Kubernetes, MongoDB, and many others to test your knowledge and showcase your skills.
                </p>
                <p className="text-lg mb-6">
                    Each game will include eight to 15 hands-on labs to build your cloud skills. If you’re new to the cloud, we recommend starting at Level 1, but you can play one or both games - it’s up to you!
                </p>
                <p className="text-lg mb-6">
                    Certain labs included in The Arcade will offer the chance to earn skill badges, which are shareable Google Cloud credentials that recognize your ability to solve real-world problems with your cloud knowledge. For every three skill badges you earn, dated between April 1 and June 15, 2023, you're eligible for one additional Arcade point.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Your challenge, should you choose to accept it…</h3>
                <p className="text-lg mb-6">
                    Each game includes one or more challenge labs. Challenge labs are designed to test the skills you've learned. No instructions, no steps; just a scenario for you to solve. Didn’t get the solution on your first try? No worries. You'll notice pointers to skill badges that will help you gain the skills you need to successfully complete challenge labs.
                </p>
            </div>
        </motion.div>
    );
};

// Trivia Challenge Section
const TriviaChallenge = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Test your knowledge with the Trivia Challenge</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    In addition to the games you can play on The Arcade, you can also participate in our monthly Trivia Challenges. These are structured as quests, which are collections of self-paced, hands-on labs about a specific product or tool, and associated trivia questions. Make sure to check back every month for our newest Trivia Challenge, and earn a point to use in the prize counter upon completion.
                </p>
                <Image
                    src="/arcade2.png" // Replace with actual image URL
                    alt="Trivia Challenge"
                    width={800}
                    height={400}
                    className="mx-auto"
                />
            </div>
        </motion.div>
    );
};

// Main Google Cloud Arcade Page Component
const GoogleCloudArcadePage = () => {
    return (
        <div>
            <Header />
            <HowItWorks />
            <TriviaChallenge />
        </div>
    );
};

export default GoogleCloudArcadePage;
