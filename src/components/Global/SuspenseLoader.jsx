"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function Loader() {

    const GoogleDot = ({ color, delay = 0, size = "w-4 h-4" }) => (
        <motion.div
            className={`${size} rounded-full ${color}`}
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
                delay,
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="flex justify-center space-x-3">
                <GoogleDot color="bg-blue-500" delay={0} />
                <GoogleDot color="bg-red-500" delay={0.2} />
                <GoogleDot color="bg-yellow-500" delay={0.4} />
                <GoogleDot color="bg-green-500" delay={0.6} />
            </div>
        </div>
    );
}
