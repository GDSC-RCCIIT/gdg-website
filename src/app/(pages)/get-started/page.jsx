"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const sections = [
    {
        title: "IT administration",
        description: "Establish administrators, billing accounts, and other settings in your Google Cloud environment.",
        steps: [
            "Establish your organization, administrators, and billing",
            "Create an initial architecture",
            "Deploy or download configuration",
        ],
        resources: [
            "Cloud Quotas overview",
            "Google Cloud deployment archetypes (Architecture Center)",
        ],
    },
    {
        title: "FinOps administration",
        description: "Set up billing, spending notifications, and resource structure to facilitate cost monitoring and optimization.",
        steps: [
            "Learn about Cloud Billing",
            "Create a billing account",
            "Set up spending notifications",
            "Enable billing data export for custom reporting",
        ],
        resources: [
            "Monitor costs using billing reports",
            "Optimize costs with FinOps hub",
            "Resource hierarchy options for cost tracking",
            "Implement cost optimization strategies (Architecture Center)",
        ],
    },
    {
        title: "DevOps engineering",
        description: "Start automating infrastructure and secure collaboration with teammates using Google Cloud tools and best practices.",
        steps: [
            "Set up API access",
            "Install the gcloud CLI",
            "Enable teammates using IAM",
            "Choose and install a Cloud Client Library",
            "Learn about authentication and authorization",
        ],
        resources: [
            "Observability in Google Cloud",
            "Terraform and Infrastructure Manager",
            "CI/CD pipeline for containerized apps (Architecture Center)",
        ],
    },
    {
        title: "Application development",
        description: "Get basic API access and set up a development environment that can interact with Google Cloud services.",
        steps: [
            "Set up API access",
            "Install the gcloud CLI",
            "Choose and install a Cloud Client Library",
            "Set up IDE extensions",
            "Learn about authentication and authorization",
        ],
        resources: [
            "Build a generative AI application",
        ],
    },
    {
        title: "Data analysis",
        description: "Analyze sample data using Google Cloud products with minimal setup.",
        steps: [
            "Load and query sample data",
            "Explore, analyze, and share data",
            "Learn about programmatic analysis tools",
            "Introduction to AI and ML in BigQuery",
        ],
        resources: [
            "Set up the bq command-line tool",
            "Gemini in BigQuery overview",
            "Data analytics design patterns (Architecture Center)",
        ],
    },
];

const GetStartedPage = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <header className="text-center bg-white shadow-lg p-6 rounded-md">
                <h1 className="text-3xl font-bold mb-2">Get started with Google Cloud</h1>
                <p className="text-gray-700 max-w-xl mx-auto mb-4">
                    Get hands-on experience with free usage of 20+ products, including popular products like AI APIs, Compute Engine, BigQuery, and more.
                </p>
                <div className="space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Go to console</button>
                    <button className="text-blue-600 underline">Google Cloud overview</button>
                </div>
            </header>

            <section className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Start your platform setup</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                    {["IT administration", "FinOps administration", "DevOps engineering", "Application development", "Data analysis"].map((label) => (
                        <span key={label} className="px-3 py-1 bg-green-200 text-green-800 rounded-md font-medium">
                            {label}
                        </span>
                    ))}
                </div>

                {sections.map((section, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-md mb-4 p-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-semibold">{section.title}</h3>
                                <p className="text-gray-600">{section.description}</p>
                            </div>
                            <button
                                onClick={() => toggleSection(index)}
                                className="text-blue-600 flex items-center"
                            >
                                {expandedSection === index ? (
                                    <>
                                        Collapse <FaChevronUp className="ml-1" />
                                    </>
                                ) : (
                                    <>
                                        Expand <FaChevronDown className="ml-1" />
                                    </>
                                )}
                            </button>
                        </div>

                        {expandedSection === index && (
                            <div className="mt-4">
                                <h4 className="font-medium text-gray-800 mb-2">Steps:</h4>
                                <ol className="list-decimal list-inside space-y-2">
                                    {section.steps.map((step, i) => (
                                        <li key={i} className="text-gray-700">{step}</li>
                                    ))}
                                </ol>

                                <h4 className="font-medium text-gray-800 mt-4 mb-2">Resources for later:</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    {section.resources.map((resource, i) => (
                                        <li key={i} className="text-blue-600 underline">{resource}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </section>

            <section className="bg-blue-50 p-6 rounded-md shadow-md mt-6">
                <h2 className="text-xl font-semibold mb-4">Begin building</h2>
                <div className="flex flex-wrap gap-6">
                    <div className="bg-white p-4 shadow rounded-md flex-1">
                        <h3 className="text-lg font-semibold">Jump Start Solution guides</h3>
                        <p className="text-gray-600">Learn and experiment with pre-built solution templates.</p>
                    </div>
                    <div className="bg-white p-4 shadow rounded-md flex-1">
                        <h3 className="text-lg font-semibold">Cloud SDK, languages, frameworks, and tools</h3>
                        <p className="text-gray-600">Discover tools, resources, and products that enable interaction with Google Cloud using code.</p>
                    </div>
                    <div className="bg-white p-4 shadow rounded-md flex-1">
                        <h3 className="text-lg font-semibold">Google Cloud Architecture Framework</h3>
                        <p className="text-gray-600">Follow recommendations and best practices to design and operate a well-architected cloud topology.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetStartedPage;
