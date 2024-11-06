"use client";
import React from "react";
import { motion } from "framer-motion";

const ObservabilityMonitoringOverview = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-indigo-600 text-white font-sans">
            {/* Animated Header */}
            <header className="relative py-24 text-center shadow-lg">
                <motion.div
                    className="container mx-auto px-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h1
                        className="text-5xl font-bold mb-4"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Observability and Monitoring Overview
                    </motion.h1>
                    <p className="text-lg max-w-2xl mx-auto text-white/90">
                        Documentation, guides, and resources for observability and monitoring across Google Cloud products and services.
                    </p>
                </motion.div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12 text-gray-100">
                {/* Explore Observability Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Explore Observability and Monitoring in Google Cloud</h2>
                    <p className="text-gray-200 mb-8">
                        Read documentation and Cloud Architecture Center articles about observability and monitoring products, capabilities, and procedures.
                    </p>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Observability in Google Cloud",
                                description: "Monitoring, logging, tracing, profiling, and debugging for observability.",
                                icon: "visibility",
                            },
                            {
                                title: "Google Cloud Managed Service for Prometheus",
                                description: "Collect Prometheus metrics for your workloads.",
                                icon: "analytics",
                            },
                            {
                                title: "Instrumentation and Observability",
                                description: "Collect telemetry from your applications with instrumentation.",
                                icon: "bar_chart",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-yellow-400 text-3xl mr-3">{item.icon}</span>
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-gray-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Training and Resources */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Training, Blog Articles, and More</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Troubleshoot Distributed Applications",
                                description: "Use Cloud Trace and Cloud Logging together to troubleshoot distributed applications.",
                                icon: "bug_report",
                            },
                            {
                                title: "Explore Log Analytics for Security",
                                description: "Access detailed logs of events and activities within your cloud environment.",
                                icon: "security",
                            },
                            {
                                title: "Effective Alerting in Google Cloud",
                                description: "Learn how proactive monitoring can support triage in advance.",
                                icon: "notifications_active",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <span className="material-icons text-yellow-400 text-3xl mr-3">{item.icon}</span>
                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                </div>
                                <p className="text-gray-300">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Observability and Monitoring Products by Use Case */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Observability and Monitoring Products by Use Case</h2>
                    <input
                        type="text"
                        placeholder="Filter here"
                        className="w-full p-4 border rounded-lg mb-6 shadow-sm text-gray-800 focus:outline-none"
                    />
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            "Google Cloud Observability",
                            "Cloud Logging",
                            "Cloud Monitoring",
                            "Cloud Trace",
                            "Error Reporting",
                            "Observability Optimization",
                        ].map((title, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <h4 className="text-2xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-300">Learn about {title.toLowerCase()} and its capabilities in Google Cloud.</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Related Guides and Resources */}
                <section className="mb-16">
                    <h2 className="text-4xl font-semibold mb-6">Related Products, Guides, and Sites</h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            "Observability for GKE",
                            "Virtual Machine Instances",
                            "Observe and Monitor Compute Engine VMs",
                            "Cloud Functions Overview",
                            "Write Prometheus Metrics from Cloud Run",
                            "Terraform",
                            "App Hub",
                            "Log Analytics for BigQuery Export Users",
                            "Creating Custom Notifications with Cloud Monitoring",
                        ].map((title, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:bg-white/20 transition duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                                <p className="text-gray-300">Find resources on {title.toLowerCase()}.</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ObservabilityMonitoringOverview;
