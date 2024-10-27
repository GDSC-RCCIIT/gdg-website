import React from 'react';
import { FileText, ClipboardCheck, Mail, Users, CheckCircle } from 'lucide-react';

// Header Section with a Simple Gradient Background
const Header = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 py-20 flex justify-center items-center text-center">
            <div className="absolute -top-10 -left-20 w-64 h-64 bg-blue-300 rounded-full opacity-30 blur-lg"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-400 rounded-full opacity-20 blur-lg"></div>
            <div className="relative z-10 max-w-2xl">
                <h1 className="text-5xl font-bold text-gray-800">How to Apply</h1>
                <p className="mt-4 text-lg text-gray-700">
                    Follow these simple steps to apply and join the Google Developer Groups community as an organizer. Empower and connect developers in your area.
                </p>
            </div>
        </div>
    );
};

// Step-by-Step Process Section with Timeline Style
const ApplicationProcess = () => {
    const steps = [
        {
            icon: <FileText className="w-10 h-10 text-blue-500" />,
            title: "Step 1: Review Guidelines",
            description: "Read through the Community Organizer Code of Conduct and Terms & Conditions to understand the responsibilities and expectations of an organizer.",
        },
        {
            icon: <Users className="w-10 h-10 text-green-500" />,
            title: "Step 2: Check GDG Directory",
            description: "Explore the GDG Directory to see if a chapter already exists in your location. This will help determine if you should apply as a co-organizer or start a new chapter.",
        },
        {
            icon: <ClipboardCheck className="w-10 h-10 text-yellow-500" />,
            title: "Step 3: Connect with Existing Organizers",
            description: "If a GDG chapter exists, reach out to current organizers to discuss how you can contribute as a co-organizer and support their events.",
        },
        {
            icon: <Mail className="w-10 h-10 text-red-500" />,
            title: "Step 4: Submit Your Application",
            description: "If no chapter exists in your area, submit an application on the GDG platform. Provide details about your experience and your vision for the community.",
        },
        {
            icon: <CheckCircle className="w-10 h-10 text-purple-500" />,
            title: "Step 5: Await Approval",
            description: "Our team will review your application. If you meet the requirements, we will reach out to you for the next steps. Expect communication via email.",
        },
    ];

    return (
        <div className="py-16 bg-gray-50">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Application Process</h2>
            <div className="flex flex-col items-center space-y-10 px-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative w-full max-w-4xl flex items-start bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <div className="absolute -left-10 flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full shadow-inner">
                            {step.icon}
                        </div>
                        <div className="pl-20">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Tips for a Successful Application Section
const Tips = () => {
    const tips = [
        {
            title: "Show Your Passion",
            description: "Highlight your interest in community building and your passion for Google technologies.",
        },
        {
            title: "Emphasize Relevant Experience",
            description: "Include any experience with event planning, public speaking, or leadership roles.",
        },
        {
            title: "Be Clear About Your Vision",
            description: "Describe how you plan to foster a supportive and engaging developer community in your area.",
        },
        {
            title: "Commit to Regular Events",
            description: "Demonstrate your commitment to organizing consistent and impactful events for your community.",
        },
    ];

    return (
        <div className="py-20 bg-white">
            <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Tips for a Successful Application</h2>
            <div className="flex flex-wrap justify-center gap-8 px-6">
                {tips.map((tip, index) => (
                    <div key={index} className="bg-gray-50 w-72 p-6 rounded-lg shadow-md border border-gray-200 text-center transition transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{tip.title}</h3>
                        <p className="text-gray-600">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// FAQ Section with Accordion Style for Compact View
const FAQ = () => {
    const faqs = [
        {
            question: "Can I apply if I'm not a technical expert?",
            answer: "Yes! While a technical background is helpful, what’s most important is your commitment to building a community and your passion for technology.",
        },
        {
            question: "Is there any financial support for organizers?",
            answer: "GDG Organizers gain access to resources and support from Google but do not receive direct financial compensation. This is a volunteer role.",
        },
        {
            question: "How long does the application process take?",
            answer: "The review process can vary, but typically it takes a few weeks. Our team will reach out if your application is selected for the next steps.",
        },
        {
            question: "Can I apply if a GDG chapter already exists in my location?",
            answer: "Yes! You can reach out to the existing chapter to explore becoming a co-organizer and helping to run events in the community.",
        },
    ];

    return (
        <div className="py-20 bg-gray-50">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main How to Apply Page Component
const HowToApplyPage = () => {
    return (
        <div>
            <Header />
            <ApplicationProcess />
            <Tips />
            <FAQ />
        </div>
    );
};

export default HowToApplyPage;