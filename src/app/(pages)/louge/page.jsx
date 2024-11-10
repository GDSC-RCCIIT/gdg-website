"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Header Section for GDG Virtual Lounge
const LoungeHeader = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative z-10 max-w-3xl mx-auto mt-8">
                <motion.h1 className="text-5xl font-bold mb-4">
                    Welcome to the GDG Virtual Lounge
                </motion.h1>
                <p className="text-xl font-medium">
                    Connect with other GDG members, share ideas, and enjoy informal chats in this virtual space. Explore chat rooms, join discussions, or pop into a video call!
                </p>
            </div>
        </motion.div>
    );
};

// Chat Rooms Section
const ChatRooms = () => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Chat Rooms</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    Join themed chat rooms where you can talk about various topics, from tech trends to event planning. Each room offers a unique space for discussions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Tech Talk Room</h3>
                        <p className="text-lg">Discuss the latest in tech, programming, and cloud computing with fellow GDG members.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Event Ideas Room</h3>
                        <p className="text-lg">Share and brainstorm ideas for future GDG events and activities.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Casual Chat</h3>
                        <p className="text-lg">Unwind and chat about anything—from hobbies to weekend plans. A relaxed, fun environment.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">GDG Announcements</h3>
                        <p className="text-lg">Stay updated with announcements on upcoming GDG events, workshops, and more.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Discussion Boards Section
const DiscussionBoards = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Discussion Boards</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    Engage in threaded discussions on various topics. Start a new thread or join an ongoing conversation to share your thoughts.
                </p>
                {/* Placeholder for Discussion Board links */}
                <div className="bg-gray-100 p-8 rounded-lg mt-8">
                    <p className="text-lg font-semibold text-gray-700">[Discussion Boards Coming Soon]</p>
                </div>
            </div>
        </motion.div>
    );
};

// Video Calls Section
const VideoCalls = () => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Join a Video Call</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    Join a virtual video call to connect face-to-face with other GDG members. Video calls are scheduled throughout the week.
                </p>
                {/* Placeholder for Video Call links */}
                <div className="bg-gray-200 p-8 rounded-lg mt-8">
                    <p className="text-lg font-semibold text-gray-700">[Video Call Links Coming Soon]</p>
                </div>
            </div>
        </motion.div>
    );
};

// Scheduled Hangouts Section
const ScheduledHangouts = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Scheduled Virtual Hangouts</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    Join our scheduled virtual hangouts for fun group activities and informal networking. Check out the upcoming hangout schedule!
                </p>
                {/* Placeholder for Hangout Schedule */}
                <div className="bg-gray-100 p-8 rounded-lg mt-8">
                    <p className="text-lg font-semibold text-gray-700">[Hangout Schedule Coming Soon]</p>
                </div>
            </div>
        </motion.div>
    );
};

// Main GDG Virtual Lounge Page Component
const GDGVirtualLoungePage = () => {
    return (
        <div>
            <LoungeHeader />
            <ChatRooms />
            <DiscussionBoards />
            <VideoCalls />
            <ScheduledHangouts />
        </div>
    );
};

export default GDGVirtualLoungePage;
