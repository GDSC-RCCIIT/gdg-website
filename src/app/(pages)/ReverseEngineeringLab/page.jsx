"use client"
import React from 'react';
import { Download, Terminal, Puzzle } from 'lucide-react';

const challenges = [
    {
        id: 1,
        title: "Retro Game Crack Challenge",
        description: "Learn how to reverse engineer old game binaries. Download the game binary and follow the step-by-step guide to find the hidden key.",
        fileUrl: "/downloads/retro_game_binary.zip",
        level: "Beginner",
    },
    {
        id: 2,
        title: "Old Software Debugging",
        description: "This challenge will guide you through debugging an old piece of software using popular reverse engineering tools. Identify and patch a bug in the binary.",
        fileUrl: "/downloads/old_software_debug.zip",
        level: "Intermediate",
    },
    {
        id: 3,
        title: "Gadget Firmware Analysis",
        description: "Take apart the firmware of an old gadget and learn how to analyze its functionalities. Understand how the hardware and software interact.",
        fileUrl: "/downloads/gadget_firmware.bin",
        level: "Advanced",
    }
];

const ReverseEngineeringLab = () => {
    return (
        <div className="min-h-screen bg-gradient-to-t from-gray-100 via-white to-gray-50 text-gray-800 p-8 sm:p-16">
            <header className="flex flex-col md:flex-row justify-between items-center mb-16">
                <div className="mb-8 md:mb-0">
                    <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-blue-600">Reverse Engineering Lab</h1>
                    <p className="text-lg sm:text-xl mt-4">Learn the basics of reverse engineering by diving into hands-on challenges involving old software, games, and gadgets.</p>
                </div>
                <Puzzle size={64} className="text-blue-600 animate-bounce" />
            </header>

            {/* Challenges Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {challenges.map((challenge) => (
                    <div key={challenge.id} className="bg-blue-50 rounded-md shadow-lg p-8 border-l-4 border-blue-600 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                        <div className="flex items-start gap-4 mb-4">
                            <Terminal size={32} className="text-blue-500" />
                            <h3 className="text-3xl font-bold">{challenge.title}</h3>
                        </div>
                        <p className="text-lg text-gray-700 mb-4">{challenge.description}</p>
                        <span className="inline-block mb-4 text-sm text-gray-600 font-semibold">Level: {challenge.level}</span>
                        <a href={challenge.fileUrl} download className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all">
                            <Download size={20} className="mr-2" /> Download Challenge
                        </a>
                    </div>
                ))}
            </div>

            {/* Step-by-Step Guides Section */}
            <section className="max-w-6xl mx-auto mb-16 bg-blue-100 p-10 rounded-md shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-blue-700">Step-by-Step Guides</h2>
                <ul className="list-decimal list-inside space-y-4 text-gray-800">
                    <li>Understand the basics of how software works to be better at reverse engineering.</li>
                    <li>Use tools like Ghidra, IDA Pro, or Radare2 to disassemble binaries and inspect their internals.</li>
                    <li>Follow our guides to learn how to extract, analyze, and modify executable code safely.</li>
                    <li>Work with old software and games to get hands-on practice without risking current technologies.</li>
                </ul>
            </section>

            {/* Tools and Resources Section */}
            <section className="max-w-6xl mx-auto mb-16 p-10 bg-white rounded-md shadow-md border border-gray-200">
                <h2 className="text-3xl font-bold mb-4 text-blue-700">Tools and Resources</h2>
                <p className="text-lg text-gray-700 mb-6">Here are some popular tools and resources you can use to begin your journey in reverse engineering:</p>
                <div className="flex flex-wrap gap-6">
                    <div className="bg-blue-50 p-6 rounded-md shadow-sm flex-1 min-w-[250px]">
                        <h3 className="text-xl font-bold mb-2">Ghidra</h3>
                        <p className="text-sm text-gray-600">An open-source reverse engineering tool developed by the NSA that helps you decompile software and analyze its inner workings.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-md shadow-sm flex-1 min-w-[250px]">
                        <h3 className="text-xl font-bold mb-2">IDA Pro</h3>
                        <p className="text-sm text-gray-600">A powerful disassembler used by professionals for software reverse engineering, known for its extensibility and interactive analysis capabilities.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-md shadow-sm flex-1 min-w-[250px]">
                        <h3 className="text-xl font-bold mb-2">Radare2</h3>
                        <p className="text-sm text-gray-600">An open-source framework for reverse engineering and analyzing binaries, known for its versatility and scriptable nature.</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="text-center pt-12 pb-6 border-t border-gray-300">
                <p className="text-lg text-gray-600">Thanks for exploring the Reverse Engineering Lab. Take on a challenge today and unlock the mysteries of old software and gadgets!</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all">
                    Start Your Challenge
                </button>
            </footer>
        </div>
    );
};

export default ReverseEngineeringLab;
