"use client";
import React from 'react';

const GeminiInAndroidStudio = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-6">
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 border-b border-gray-300">
                <h1 className="text-3xl font-bold text-gray-800">Android Developers Blog</h1>
                <a href="#" className="text-blue-600 underline">Subscribe</a>
            </header>

            {/* Hero Section */}
            <section className="mt-6 text-center">
                <img
                    src="/gen-studio2.svg" // Placeholder for Android logo
                    alt="Android Logo"
                    className="w-24 h-24 mx-auto"
                />
                <h2 className="text-4xl font-semibold mt-4">Gemini in Android Studio, now helping you across the development lifecycle</h2>
                <p className="text-gray-500 mt-2">31 October 2024</p>
                <div className="mt-4 flex justify-center space-x-4">
                    <button className="text-blue-600 underline">Share on LinkedIn</button>
                    <button className="text-blue-600 underline">Share on X</button>
                    <button className="text-blue-600 underline">Share on Facebook</button>
                    <button className="text-blue-600 underline">Email</button>
                    <button className="text-blue-600 underline">Copy Link</button>
                </div>
            </section>

            {/* Main Content */}
            <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 font-medium mb-2">Posted by Sandhya Mohan – Product Manager, Android Studio</p>
                <h3 className="text-2xl font-semibold mb-4">This is Our Biggest Feature Release Since Launch!</h3>
                <p className="text-gray-700 mb-4">
                    AI can accelerate your development experience, and help you become more productive. That's why we introduced Gemini in Android Studio, your AI-powered coding companion. It’s designed to make it easier for you to build high quality Android apps, faster. Today, we're releasing the biggest set of updates to Gemini in Android Studio since launch, and now Gemini brings the power of AI to every stage of the development lifecycle, directly within the Android Studio IDE experience.
                </p>
                <p className="text-gray-700 mb-6">
                    Download the latest version of Android Studio in the canary channel to take advantage of all these new features, and read on to unpack what's new.
                </p>

                <h3 className="text-xl font-semibold mb-4">Gemini Can Now Write, Refactor, and Document Android Code</h3>
                <p className="text-gray-700 mb-4">
                    Gemini goes beyond just guidance. It can edit your code, helping you quickly move from prototype to implementation, implement common design patterns, and refactor your code. Gemini also streamlines your workflow with features like documentation and commit message generation, allowing you to focus more time on writing code.
                </p>

                {/* Features Section */}
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><strong>Gemini Code Transforms:</strong> Modify and refactor code using custom prompts.</li>
                    <li><strong>Commit message generation:</strong> Analyze changes and propose VCS commit messages to streamline version control operations.</li>
                    <li><strong>Rethink and Rename:</strong> Generate intuitive names for classes, methods, and variables.</li>
                    <li><strong>Prompt library:</strong> Save and manage frequently used prompts for quick access.</li>
                    <li><strong>Generate documentation:</strong> Create documentation for selected code snippets with a right-click.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Integrating AI into UI Tools</h3>
                <p className="text-gray-700 mb-4">
                    It’s never been easier to build with Compose now that we have integrated AI into Compose workflows. Composable previews help you visualize your composables during design time in Android Studio. With AI assistance, Gemini can auto-generate Composable previews with relevant context, simplifying the process.
                </p>

                <h3 className="text-xl font-semibold mb-4">Deploy with Confidence</h3>
                <p className="text-gray-700 mb-4">
                    Gemini's intelligence can help you release higher quality apps with greater confidence. It can analyze, test code, and suggest fixes, and it's now integrated with the IDE’s App Quality Insights tool window, helping you analyze crashes from Google Play Console and Firebase Crashlytics.
                </p>

                <h3 className="text-xl font-semibold mb-4">Some of the features we are launching include:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><strong>Unit test scenario generation:</strong> Generates unit test scenarios based on local code context.</li>
                    <li><strong>Build/sync error insights:</strong> Provides improved coverage for build and sync errors.</li>
                    <li><strong>App Quality Insights:</strong> Explains and suggests fixes for crashes from Android Vitals and Firebase Crashlytics.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">A better Gemini in Android Studio for you</h3>
                <p className="text-gray-700 mb-4">
                    We recently surveyed many of you to see how AI-powered code completion has impacted your productivity, and 86% of respondents said they felt more productive. Please continue to provide feedback as you use Gemini in your day-to-day workflows.
                </p>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-100 p-6 rounded-md mt-8">
                <h3 className="text-lg font-semibold text-blue-900">Try enabling Gemini in your project and tell us what you think with #AndroidGeminiEra.</h3>
                <p className="text-blue-700 mt-2">Download the latest Android Studio version in the canary channel.</p>
            </section>

        </div>
    );
};

export default GeminiInAndroidStudio;
