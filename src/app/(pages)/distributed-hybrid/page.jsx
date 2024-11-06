"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DistributedHybridMulticloudOverview = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 shadow-md py-10">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-white">Distributed, Hybrid, and Multicloud Overview</h1>
                    <p className="text-lg text-white mt-4">
                        Implement a combination of solutions to meet your organization's cloud infrastructure requirements.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12">
                {/* Overview Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-semibold mb-6">Explore Distributed, Hybrid, and Multicloud in Google Cloud</h3>
                    <p className="text-gray-700 mb-4">
                        Read documentation and Cloud Architecture Center articles about distributed, hybrid, and multicloud products, capabilities, and procedures.
                    </p>
                </section>

                {/* Detailed Sections */}
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {[
                        {
                            title: "Distributed cloud overview",
                            description: "Extend Google Cloud infrastructure to the edge and into your data centers.",
                            icon: "cloud",
                        },
                        {
                            title: "GKE Enterprise technical overview",
                            description: "Run modern apps anywhere consistently at scale, delivering manageable, scalable, reliable applications.",
                            icon: "settings",
                        },
                        {
                            title: "Hybrid and multicloud resources",
                            description: "Plan with Architecture Center resources across hybrid and multicloud topics.",
                            icon: "account_tree",
                        },
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <span className="material-icons text-teal-600 mr-3 text-3xl">{item.icon}</span>
                                <h4 className="text-xl font-semibold">{item.title}</h4>
                            </div>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </section>

                {/* Training Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-semibold mb-6">Training, Blog Articles, and More</h3>
                    <div className="grid md:grid-cols-1 gap-8">
                        {[
                            {
                                title: "Hybrid and Multicloud Architect Learning Path",
                                description: "Study managing container-based applications across multiple clouds or between on-premises and cloud environments.",
                                icon: "school",
                            },
                            {
                                title: "Cloud Developer Learning Path",
                                description: "Study designing, building, analyzing, and maintaining cloud-native applications.",
                                icon: "school",
                            },
                            {
                                title: "Hybrid Connectivity and Network Management Learning Path",
                                description: "Study Google Cloud networking technologies and private connection options.",
                                icon: "school",
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-teal-600 mr-3 text-3xl">{item.icon}</span>
                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                </div>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Products by Use Case */}
                <section className="mb-12">
                    <h3 className="text-3xl font-semibold mb-6">Distributed, Hybrid, and Multicloud Products by Use Case</h3>
                    <input
                        type="text"
                        placeholder="Filter here"
                        className="w-full p-4 border rounded-lg mb-6 shadow-sm"
                    />
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Distributed cloud",
                            "Google Distributed Cloud air-gapped",
                            "Google Distributed Cloud connected",
                            "Google Distributed Cloud (software only) for bare metal",
                            "Google Distributed Cloud (software only) for VMware",
                            "Multicloud",
                            "Fleet management",
                        ].map((title, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-600">Extend Google Cloud infrastructure and services to the edge and into your data centers.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related Products Section */}
                <section className="mb-12">
                    <h3 className="text-3xl font-semibold mb-6">Related Products, Guides, and Sites</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Google Kubernetes Engine (GKE)",
                            "Enterprise features",
                            "GKE Enterprise",
                            "Policy Controller",
                            "Service Mesh",
                            "Config Sync",
                            "Config Controller",
                            "Cloud Interconnect",
                            "Service Directory",
                            "Blockchain Node Engine",
                        ].map((title, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-600">Learn more about {title.toLowerCase()} and how it can help your business.</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DistributedHybridMulticloudOverview;
