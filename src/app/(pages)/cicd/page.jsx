'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductsNavbar from '../../../components/Global/ProductsNavbar';

// DevOps and CI/CD Tools Page Component
const DevOpsCIPage = () => {
    const [selectedTab, setSelectedTab] = useState("DevOps and CI/CD Tools");

    return (
        <div className="bg-gray-100 text-black">
            {/* Use the existing ProductsNavbar component */}
            <ProductsNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-8 py-16 text-center">
                <h1 className="text-6xl font-bold leading-tight">
                    DevOps and CI/CD on Google Cloud Explained
                </h1>
                <p className="text-sm mt-2 text-gray-600">December 8, 2021</p>
            </div>

            {/* Image Section */}
            <div className="max-w-5xl mx-auto px-8 py-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <img src="/cicd1.png" alt="DevOps and CI/CD on Google Cloud" className="w-full h-auto" />
                    <p className="text-center text-sm mt-2">Click to enlarge</p>
                </div>
            </div>

            {/* What is CI/CD Section */}
            <div className="max-w-5xl mx-auto px-8 py-12">
                <h2 className="text-4xl font-bold mb-4">What is CI/CD?</h2>
                <p className="text-lg mb-6">
                    Continuous Integration (CI), at its core, is about getting feedback early and often, which makes it possible to identify and correct problems early in the development process. With CI, you integrate your work frequently, often multiple times a day, instead of waiting for one large integration later on. Each integration is verified with an automated build, which enables you to detect integration issues as quickly as possible and reduce problems downstream.
                </p>
                <p className="text-lg mb-6">
                    Continuous Delivery (CD) extends CI. CD is about packaging and preparing the software with the goal of delivering incremental changes to users. Deployment strategies such as red/black and canary deployments can help reduce release risk and increase confidence in releases. CD makes the release process safer, lower risk, faster, and, when done well, boring. Often deployments are made painless with CI/CD, developers can focus on writing code, not tweaking deployment scripts.
                </p>
            </div>

            {/* Application Development Landscape Section */}
            <div className="max-w-5xl mx-auto px-8 py-12">
                <h2 className="text-4xl font-bold mb-4">How has the application development landscape changed?</h2>
                <p className="text-lg mb-6">
                    Much has changed in the app development space recently, and you'll want to take these changes into account as part of your CI/CD strategy.
                </p>
                <ul className="list-disc list-inside text-lg space-y-4">
                    <li>
                        <strong>Hybrid and multi-cloud deployments</strong>: Large enterprises want to deploy applications in hybrid cloud environments, with tools and services that lock them into a specific vendor.
                    </li>
                    <li>
                        <strong>The shift from monolithic to microservices</strong>: Teams are breaking down large monoliths into microservices for greater agility. This makes it possible for different teams to use different languages, tech stacks, deployment frequencies, which means deployment patterns, tooling needs, and scaling patterns are changing.
                    </li>
                    <li>
                        <strong>Cloud-native applications</strong>: It's not just VMs anymore; companies are shifting paradigms and embracing serverless, containers, and Kubernetes. While simplifying some aspects of app development, this move adds complexity in other areas. How do you handle rollbacks? Canary deployments? It's different now.
                    </li>
                </ul>
            </div>
            <overviewProducts/>
        </div>
    );
};

const overviewProducts = [
    {
        title: "Cloud Build",
        description: "Continuous integration and delivery service that allows you to build, test, and deploy on Google Cloud.",
        image: "/cicd2.jpg",
    },
    {
        title: "Google Kubernetes Engine (GKE)",
        description: "Managed, production-ready environment for deploying containerized applications.",
        image: "/cicd3.jpg",
    },
    {
        title: "GitHub Actions Integration",
        description: "Automate, customize, and execute your software development workflows directly in your GitHub repository.",
        image: "/cicd4.jpg",
    },
    {
        title: "Cloud Deployment Manager",
        description: "Create and manage cloud resources with simple templates.",
        image: "/cicd5.jpg",
    },
];

const allProducts = [
    {
        title: "Cloud Build",
        description: "Cloud Build allows you to continuously build, test, and deploy applications quickly, consistently, and at scale.",
    },
    {
        title: "Google Kubernetes Engine (GKE)",
        description: "GKE offers a managed environment for deploying, managing, and scaling containerized applications using Kubernetes.",
    },
    {
        title: "GitHub Actions",
        description: "With GitHub Actions, you can automate your build, test, and deployment pipeline.",
    },
    {
        title: "Cloud Deployment Manager",
        description: "Define all the Google Cloud resources needed for your application in easy-to-understand templates.",
    },
    {
        title: "Spinnaker",
        description: "A multi-cloud continuous delivery platform for releasing software changes with high velocity and confidence.",
    },
    {
        title: "Jenkins on Google Cloud",
        description: "Use Jenkins to automate your development process, including CI/CD, in a secure and scalable manner on Google Cloud.",
    },
];

export default DevOpsCIPage;
