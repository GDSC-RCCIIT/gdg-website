'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Award, Users, Target, Code, Video, Star } from 'lucide-react';

const TimelinePage = () => {
    const [activePhase, setActivePhase] = useState('getStarted');

    const timelinePhases = {
        getStarted: {
            title: "Get Started",
            icon: Users,
            steps: [
                {
                    title: "Join a Google Developer Student Club",
                    content: "If there is no club at your college or university, you can join the closest one through the community event platform."
                },
                {
                    title: "Form a team and register",
                    content: "Form a 1 to 4 person team, with at least one student who is a member of a Google Developer Student Club at the associated university, and ideally with a varied set of technical and soft skills. Have a conversation early about causes you care about most to identify a problem to potentially solve."
                },
                {
                    title: "Select a UN Sustainable Development Goal",
                    content: "Select a goal that aligns with personal interests and/or needs in your community that you would like to solve with technology."
                }
            ]
        },
        learnBuild: {
            title: "Learn and Build",
            icon: Code,
            steps: [
                {
                    title: "Identify a solution",
                    content: "One way to identify a solution is by using a Design Sprint, a flexible framework for solving problems through designing, prototyping, and testing ideas with users over a 5-day sprint."
                },
                {
                    title: "Design the user interface",
                    content: "This is where your solution's user interface and user experience comes in. Start thinking about how a user will interact with the solution."
                },
                {
                    title: "Design the backend technology",
                    content: "Follow the learning pathways on the Resources page to help you plan and design the backend."
                }
            ]
        },
        finalize: {
            title: "Finalize and Submit",
            icon: Video,
            steps: [
                {
                    title: "Test your solution",
                    content: "Collect feedback by showcasing your project to other students, family, and friends."
                },
                {
                    title: "Iterate on your project",
                    content: "Using the feedback you received, start iterating on your design and technology until it's polished and ready for a final demo."
                },
                {
                    title: "Record a demo video, and submit",
                    content: "Put your solution into action. Record a video of a successful demo (maximum 2 minutes long) and submit it by February 22, 2024. The submission form will open on January 22, 2024."
                }
            ]
        }
    };

    const evaluationCriteria = [
        {
            title: "Impact",
            points: 25,
            criteria: [
                "Clear challenge using problem statement (5 points)",
                "Clear explanation of chosen UN SDG goals and targets (5 points)",
                "User feedback, testing & iteration (5 points)",
                "Solution addresses identified challenge (5 points)",
                "Evidence of next steps and scaling plan (5 points)"
            ]
        },
        {
            title: "Technology",
            points: 25,
            criteria: [
                "Clear architecture and Google technology implementation (5 points)",
                "Complete technical implementation (5 points)",
                "Code testing and iteration (5 points)",
                "Working demonstration (5 points)",
                "Scalability potential (5 points)"
            ]
        }
    ];

    const decisionTimeline = [
        {
            date: "Early April",
            title: "Top 100 teams selected",
            description: "After judges review all submissions against the evaluation criteria, the top 100 Solution Challenge teams will be announced."
        },
        {
            date: "April",
            title: "Mentoring for top 100 teams",
            description: "The top 100 teams receive mentorship from Google and Google Developer Experts to improve their solution and resubmit it for the top prize."
        },
        {
            date: "Late May",
            title: "Final 10 announced",
            description: "Finalist teams will be announced and begin to prepare for the 2024 Solution Challenge Demo Day."
        },
        {
            date: "June",
            title: "Winning 3 teams announced live on YouTube",
            description: "Final 10 will showcase their solutions during the 2024 Solution Challenge Demo Day, and the winning 3 teams will be announced!"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.div
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        2024 Solution Challenge Timeline
                    </h1>
                    <p className="text-xl max-w-3xl">
                        Watch the Final 10 teams showcase their projects live during Solution Challenge Demo Day on June 27, 2024.
                    </p>
                    <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                        Learn more
                    </button>
                </div>
            </motion.div>

            {/* Phase Navigation */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex space-x-8 overflow-x-auto">
                        {Object.entries(timelinePhases).map(([key, phase]) => (
                            <button
                                key={key}
                                onClick={() => setActivePhase(key)}
                                className={`py-4 px-2 border-b-2 transition-colors ${activePhase === key
                                    ? 'border-blue-500 text-blue-500'
                                    : 'border-transparent text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                <phase.icon className="inline-block mr-2" size={20} />
                                {phase.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Phase Content */}
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    key={activePhase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {timelinePhases[activePhase].steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-gray-600">{step.content}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Evaluation Criteria */}
            <div className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Evaluation Criteria</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {evaluationCriteria.map((category, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold">{category.title}</h3>
                                    <span className="text-blue-400 font-bold">{category.points} points</span>
                                </div>
                                <ul className="space-y-3">
                                    {category.criteria.map((criterion, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <ChevronRight className="text-blue-400 mt-1 mr-2 flex-shrink-0" size={16} />
                                            <span className="text-gray-300">{criterion}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decision Timeline */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-12">Decision Timeline</h2>
                <div className="relative">
                    {decisionTimeline.map((event, index) => (
                        <motion.div
                            key={index}
                            className="flex mb-8 relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="flex flex-col items-center mr-8">
                                <Calendar className="text-blue-500 mb-2" size={24} />
                                <div className="h-full w-0.5 bg-blue-200" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">{event.date}</h3>
                                <h4 className="text-lg font-medium text-blue-600 mb-2">{event.title}</h4>
                                <p className="text-gray-600">{event.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;