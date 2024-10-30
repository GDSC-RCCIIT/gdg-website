"use client";
import React, { useState } from 'react';
import { Search, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';

// Header Section with Search Bar and Decorative Elements
const Header = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-xl font-light mb-8 max-w-lg mx-auto">
                Find answers to common questions or get in touch for further assistance.
            </p>
            <div className="max-w-lg mx-auto flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                <input
                    type="text"
                    placeholder="Search for help articles..."
                    className="flex-grow py-3 px-4 text-gray-800 focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition">
                    <Search className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

// FAQ Section with Toggle Effect and Expand/Collapse Functionality
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "How can I reset my password?", answer: "To reset your password, go to the login page and click on 'Forgot password'. Follow the instructions to receive a password reset link in your email." },
        { question: "How do I update my profile information?", answer: "To update your profile, navigate to your account settings, and edit your profile information as needed." },
        { question: "What should I do if I encounter an error?", answer: "If you encounter an error, try refreshing the page. If the issue persists, reach out to our support team." },
        { question: "How do I contact customer support?", answer: "You can contact customer support via email at support@example.com or by calling our support number." },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-20 bg-gray-50">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-200 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                            <span className="text-gray-500">
                                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                            </span>
                        </div>
                        {openIndex === index && (
                            <p className="mt-4 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Resources Section with Card Links and Icons
const Resources = () => {
    const resources = [
        { title: "Account & Settings", description: "Manage your account settings and update personal information.", link: "#", icon: "🔐" },
        { title: "Billing & Payments", description: "Learn about billing options and payment methods.", link: "#", icon: "💳" },
        { title: "Privacy & Security", description: "Find out how we protect your data and privacy.", link: "#", icon: "🔒" },
        { title: "Troubleshooting", description: "Get solutions to common issues and find troubleshooting answers.", link: "#", icon: "🔧" },
    ];

    return (
        <div className="py-20 bg-white text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Resources</h2>
            <div className="max-w-6xl mx-auto flex flex-wrap gap-8 justify-center px-6">
                {resources.map((resource, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 w-72 text-left hover:bg-blue-50 transition">
                        <span className="text-4xl mb-2 block">{resource.icon}</span>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <a
                            href={resource.link}
                            className="text-blue-600 font-medium hover:text-blue-800 transition"
                        >
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Contact Support Section with Contact Cards and Icons
const ContactSupport = () => {
    return (
        <div className="py-20 bg-gray-100 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Need More Help?</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                If you can't find the answer you're looking for, feel free to contact our support team.
            </p>
            <div className="flex flex-wrap gap-10 justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 w-80">
                    <Mail className="w-10 h-10 text-blue-600" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                        <p className="text-gray-600">support@example.com</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 w-80">
                    <Phone className="w-10 h-10 text-blue-600" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                        <p className="text-gray-600">1-800-123-4567</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Help Center Page Component
const HelpCenterPage = () => {
    return (
        <div>
            <Header />
            <FAQ />
            <Resources />
            <ContactSupport />
        </div>
    );
};

export default HelpCenterPage;
