"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Header Section with Image and Text
const Header = () => {
    return (
        <motion.div
            className="relative text-white py-24 px-6 text-center overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Image
                src="/summer_learning_hero.png" // Replace with actual image URL
                alt="Google Cloud's Summer Learning Roadtrip"
                width={1200}
                height={600}
                className="mx-auto"
            />
            <div className="relative z-10 max-w-3xl mx-auto mt-8">
                <motion.h1 className="text-5xl text-black font-bold mb-4">
                    The top AI courses for a summer of learning with Google Cloud
                </motion.h1>
                <p className="text-xl font-medium text-black">
                    Summer's well on its way, and it feels like it’s time for a road trip! But instead of just cruising down the highway, why not embark on a journey that supercharges your AI skills? Generative AI isn't just a buzzword; it's transforming industries. With Vertex AI, you can build applications that tailor experiences for users, automate processes and order flows, and enrich data alongside BigQuery and Cloud Run.
                </p>
                <p className="text-xl font-medium mt-4 text-black">
                    To help you make the most of this summer, I've crafted a learning roadmap using Google Cloud Skills Boost. It's designed to guide you from AI curiosity to capability, equipping you with the skills needed to excel in this dynamic field. So, are you ready for a summer learning journey?
                </p>
            </div>
        </motion.div>
    );
};

// Learning Roadmap Section
const LearningRoadmap = () => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">First stop is a low-code approach</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    These initial training courses lay the groundwork for understanding generative AI, from its core concepts to the responsible development of large language models (LLMs). You'll explore Google's tools for building your own AI applications and master the art of crafting effective prompts in Vertex AI.
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li className="text-lg mb-2">Training 1: Introduction to Generative AI: Get acquainted with the fundamental concepts of generative AI, and how to use it as a developer.</li>
                    <li className="text-lg mb-2">Training 2: Introduction to Large Language Models (LLMs): Delve deeper into the world of LLMs, their applications, and the Google tools you can use to develop your own Generative AI apps.</li>
                    <li className="text-lg mb-2">Training 3: Introduction to Responsible AI: It's not just about the tech itself; it's about responsible innovation. Learn to create AI systems that are fair, unbiased, and socially conscious.</li>
                    <li className="text-lg mb-2">Training 4: Prompt Design in Vertex AI: Learn prompt engineering, image analysis, and multimodal generative techniques, within Vertex AI.</li>
                </ul>
                <p className="text-lg font-semibold italic mb-6">Debi's Pro Tip: As developers, we have a responsibility to build AI that positively impacts society. Positive impact means better products, better products typically mean more successful products!</p>
            </div>
        </motion.div>
    );
};

// AI Engineering Section
const AIEngineering = () => {
    return (
        <motion.div
            className="py-20 bg-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Shift into high gear with AI engineering</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    This section takes you beyond the basics, diving into the powerful tools and techniques that drive AI engineering. You'll gain hands-on experience building applications with Gemini and Streamlit, explore the fascinating world of image generation, and unlock the full potential of multimodal AI with Gemini.
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li className="text-lg mb-2">Training 5: Introduction to Vertex AI Studio: Familiarize yourself with Vertex AI Studio, your control center for building Gemini multimodal applications, designing prompts, and fine-tuning models.</li>
                    <li className="text-lg mb-2">Training 6: Develop GenAI Apps with Gemini and Streamlit: Build interactive, user-friendly apps powered by Gemini with the Vertex AI Gemini API and Python SDK, and learn how to deploy a Streamlit app integrated with Gemini on Cloud Run.</li>
                    <li className="text-lg mb-2">Training 7: Introduction to Image Generation: Discover how to generate images with AI using diffusion models, and how to train and deploy them on Vertex AI.</li>
                    <li className="text-lg mb-2">Training 8: Explore Generative AI with the Vertex AI Gemini API: Learn text generation, image and video analysis for content creation, and function calling techniques within the Gemini API for Vertex AI.</li>
                    <li className="text-lg mb-2">Training 9: Multimodality with Gemini: Harness the power of multimodal prompts to extract insights from text and visual data. Generate video descriptions and uncover hidden details in videos.</li>
                </ul>
                <p className="text-lg font-semibold italic mb-6">Debi's Pro Tip: Gain practical experience in this immersive Vertex AI lab!</p>
            </div>
        </motion.div>
    );
};

// Machine Learning Section
const MachineLearning = () => {
    return (
        <motion.div
            className="py-20 bg-gray-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Navigate machine learning and hit the gas</h2>
            <div className="max-w-4xl mx-auto text-left px-6">
                <p className="text-lg mb-6">
                    At this stop you'll learn how to harness the power of Vertex AI and BigQuery to build, deploy, and leverage machine learning models, extracting valuable insights from vast datasets.
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li className="text-lg mb-2">Training 10: Build and Deploy Machine Learning Solutions on Vertex AI: Turn your ideas into reality. Learn how to take your models from concept to deployment using Vertex AI and AutoML.</li>
                    <li className="text-lg mb-2">Training 11: BigQuery for Machine Learning: BigQuery is more than just a data warehouse. Leverage its vast datasets to build, train, evaluate, and predict with your own machine learning models.</li>
                </ul>
                <p className="text-lg font-semibold italic mb-6">Debi's Pro Tip: BigQuery is a treasure trove of real-world training data. Take a look at some of our featured datasets here!</p>
            </div>
        </motion.div>
    );
};

// Main Google Cloud AI Learning Page Component
const GoogleCloudAILearningPage = () => {
    return (
        <div>
            <Header />
            <LearningRoadmap />
            <AIEngineering />
            <MachineLearning />
        </div>
    );
};

export default GoogleCloudAILearningPage;
