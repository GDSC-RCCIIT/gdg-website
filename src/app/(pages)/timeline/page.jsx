"use client";
import React from 'react';
import { Calendar, Users, Target, Lightbulb, Video, Award, ChevronRight, ArrowRight, CheckCircle, Code, Play } from 'lucide-react';

const Header = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 text-white py-20">
            <div className="absolute inset-0">
                <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 -top-20 -left-20 animate-pulse" />
                <div className="absolute w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-10 top-40 right-20 animate-pulse delay-700" />
            </div>
            <div className="relative container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    2024 Solution Challenge Timeline
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                    Ready to get started? Here's an overview of the program timeline and how to start your journey with the 2024 Solution Challenge.
                </p>
                <button className="px-8 py-4 rounded-full bg-white text-blue-900 font-bold hover:bg-opacity-90 transform hover:scale-105 transition shadow-lg flex items-center gap-2 mx-auto">
                    Register Now
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

const TimelinePhase = ({ title, icon: Icon, steps, isLast }) => (
    <div className="relative">
        <div className="flex items-start gap-8">
            <div className="flex-shrink-0 w-16">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                </div>
            </div>
            <div className="flex-grow pb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h4>
                                    <p className="text-gray-600">{step.description}</p>
                                    {step.note && (
                                        <p className="mt-2 text-sm text-blue-600 italic">{step.note}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {!isLast && (
            <div className="absolute left-8 top-16 bottom-0 w-[1px] bg-blue-200" />
        )}
    </div>
);

const DecisionTimeline = () => {
    const decisions = [
        {
            date: "Early April",
            title: "Top 100 Teams Selected",
            description: "After judges review all submissions against the evaluation criteria, the top 100 Solution Challenge teams will be announced."
        },
        {
            date: "April",
            title: "Mentoring Phase",
            description: "The top 100 teams receive mentorship from Google and Google Developer Experts to improve their solution and resubmit it for the top prize."
        },
        {
            date: "Late May",
            title: "Final 10 Announced",
            description: "Finalist teams will be announced and begin to prepare for the 2024 Solution Challenge Demo Day."
        },
        {
            date: "June",
            title: "Winners Announced",
            description: "Final 10 will showcase their solutions during the 2024 Solution Challenge Demo Day, and the winning 3 teams will be announced live on YouTube!"
        }
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Decision Timeline</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {decisions.map((decision, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 transform hover:-translate-y-1">
                            <div className="text-sm font-semibold text-blue-600 mb-3">{decision.date}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{decision.title}</h3>
                            <p className="text-gray-600">{decision.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const MainTimeline = () => {
    const phases = [
        {
            title: "Get Started",
            icon: Users,
            steps: [
                {
                    title: "Join a Google Developer Student Club",
                    description: "If there is no club at your college or university, you can join the closest one through the community event platform."
                },
                {
                    title: "Form a Team and Register",
                    description: "Form a 1 to 4 person team, with at least one GDSC member. Have a conversation about causes you care about most.",
                    note: "Registration indicates interest and is not a formal project submission."
                },
                {
                    title: "Select a UN Sustainable Development Goal",
                    description: "Choose a goal that aligns with personal interests and/or needs in your community that you would like to solve with technology."
                }
            ]
        },
        {
            title: "Learn and Build",
            icon: Code,
            steps: [
                {
                    title: "Identify a Solution",
                    description: "Use a Design Sprint framework for solving problems through designing, prototyping, and testing ideas with users."
                },
                {
                    title: "Design the User Interface",
                    description: "Plan how users will interact with your solution. Focus on creating an intuitive and effective user experience."
                },
                {
                    title: "Design the Backend Technology",
                    description: "Follow the learning pathways on the Resources page to help you plan and design the backend architecture."
                }
            ]
        },
        {
            title: "Finalize and Submit",
            icon: Video,
            steps: [
                {
                    title: "Test Your Solution",
                    description: "Collect feedback by showcasing your project to other students, family, and friends."
                },
                {
                    title: "Iterate on Your Project",
                    description: "Using the feedback received, refine your design and technology until it's polished and ready for final demo."
                },
                {
                    title: "Record and Submit",
                    description: "Record a demo video (maximum 2 minutes) and submit by February 22, 2024.",
                    note: "Submission form opens January 22, 2024"
                }
            ]
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="space-y-12">
                    {phases.map((phase, index) => (
                        <TimelinePhase
                            key={index}
                            {...phase}
                            isLast={index === phases.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const SolutionChallengeTimelinePage = () => {
    return (
        <div>
            <Header />
            <MainTimeline />
            <DecisionTimeline />
        </div>
    );
};

export default SolutionChallengeTimelinePage;