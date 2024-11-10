"use client"
import React from 'react';
import { Ghost, AlertTriangle } from 'lucide-react';

const developerNightmares = [
    {
        id: 1,
        title: "The Infinite Loop Disaster",
        description: "I once accidentally created an infinite loop in production that brought down the entire server. We had to reboot and revert changes immediately, but the damage was done. Lesson learned: always double-check loop conditions!",
    },
    {
        id: 2,
        title: "The Missing Semicolon Horror",
        description: "A single missing semicolon caused our entire application to crash during a major demo. We spent hours debugging, only to find that tiny mistake. Now, I never forget to lint my code.",
    },
    {
        id: 3,
        title: "The Database Drop Incident",
        description: "I ran a script to drop a database, intending to clean up a development environment, but I was on the production server. We lost crucial data, and backups saved us, but it was a nightmare I'll never forget.",
    },
    {
        id: 4,
        title: "The Client's CSS Overwrite",
        description: "I deployed a CSS change without testing it on all client pages. It ended up overwriting critical styles and making the website unreadable. We had to roll back immediately while the client was furious. Always test on staging!",
    },
    {
        id: 5,
        title: "The Forgotten API Key",
        description: "Left an API key hardcoded in a public repo. Within hours, malicious actors started making requests, and I had to rotate the key quickly. It was a horrifying experience that taught me to use environment variables.",
    }
];

const DeveloperNightmares = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-gray-900 text-gray-100 p-8 sm:p-16">
            <header className="flex flex-col md:flex-row justify-between items-center mb-16">
                <div className="mb-8 md:mb-0">
                    <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-red-600">Developer Nightmares</h1>
                    <p className="text-lg sm:text-xl mt-4">Horror stories from developers about the worst bugs, disasters, or project failures they've encountered. Proceed if you dare!</p>
                </div>
                <Ghost size={64} className="text-red-600 animate-bounce" />
            </header>

            {/* Nightmare Stories Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {developerNightmares.map((nightmare) => (
                    <div key={nightmare.id} className="bg-gray-700 rounded-md shadow-lg p-8 border-l-4 border-red-600 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                        <div className="flex items-start gap-4 mb-4">
                            <AlertTriangle size={32} className="text-yellow-500" />
                            <h3 className="text-3xl font-bold">{nightmare.title}</h3>
                        </div>
                        <p className="text-lg text-gray-300">{nightmare.description}</p>
                    </div>
                ))}
            </div>

            {/* Cautionary Tips Section */}
            <section className="max-w-6xl mx-auto mb-16 bg-gray-800 p-10 rounded-md shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">Lessons Learned</h2>
                <ul className="list-disc list-inside space-y-4 text-gray-300">
                    <li>Always double-check your environment before running destructive commands.</li>
                    <li>Never hardcode sensitive information into your codebase—use environment variables.</li>
                    <li>Test your changes in staging environments before pushing to production.</li>
                    <li>Use automated linting tools to catch syntax errors like missing semicolons.</li>
                    <li>Keep frequent backups of critical data, and practice restoring from backups.</li>
                </ul>
            </section>

            {/* Developer Advice Section */}
            <section className="max-w-6xl mx-auto mb-16 p-10 bg-gradient-to-b from-gray-900 to-black rounded-md shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-red-500">Developer Advice</h2>
                <p className="text-lg text-gray-300 mb-6">
                    We all make mistakes, but the key is to learn from them. The next time you encounter a challenging bug or disaster, remember that you're not alone. Every developer has faced their share of nightmares, and each one makes you a better, more resilient coder.
                </p>
                <button className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700 transition-all">
                    Share Your Nightmare
                </button>
            </section>

            {/* Footer Section */}
            <footer className="text-center pt-12 pb-6 border-t border-gray-700">
                <p className="text-lg text-gray-400">Thanks for joining us in Developer Nightmares. May your future debugging be swift and your code bug-free!</p>
                <Ghost size={48} className="text-red-600 mx-auto mt-4 animate-pulse" />
            </footer>
        </div>
    );
};

export default DeveloperNightmares;
