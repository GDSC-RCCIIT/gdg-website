"use client"
import React from 'react';

const detoxTips = [
    {
        id: 1,
        title: "Unplug for an Hour a Day",
        description: "Take an hour each day to disconnect from all your devices. Use this time to relax, read, or take a walk outside.",
    },
    {
        id: 2,
        title: "Digital-Free Mornings",
        description: "Start your mornings without screens. Use this time to meditate, do yoga, or write in a journal.",
    },
    {
        id: 3,
        title: "Set Device-Free Zones",
        description: "Create areas in your home where digital devices are not allowed. This can help you maintain a better work-life balance.",
    },
    {
        id: 4,
        title: "Mindfulness Exercises",
        description: "Practice mindfulness exercises such as deep breathing or body scans to stay present and reduce stress.",
    },
    {
        id: 5,
        title: "Turn Off Notifications",
        description: "Reduce digital stress by turning off non-essential notifications. This helps limit distractions and increases productivity.",
    }
];

const mindfulnessExercises = [
    {
        id: 1,
        name: "Deep Breathing Exercise",
        description: "Sit comfortably, inhale deeply through your nose for 4 counts, hold for 4 counts, and exhale slowly through your mouth for 4 counts. Repeat for 5 minutes.",
    },
    {
        id: 2,
        name: "Body Scan Meditation",
        description: "Lie down or sit comfortably. Focus on each part of your body, starting from your feet and moving up to your head. Notice sensations and release tension.",
    },
    {
        id: 3,
        name: "Mindful Walking",
        description: "Take a walk, paying attention to every step, the feeling of your feet on the ground, and the sights, sounds, and smells around you.",
    }
];

const DigitalDetoxZone = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-800 via-blue-700 to-teal-800 text-white p-6 sm:p-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">Digital Detox Zone</h1>
                <p className="text-xl sm:text-2xl">Encourage members to take breaks and care for their mental health with these digital detox tips and mindfulness exercises.</p>
            </header>

            {/* Featured Detox Tips Section */}
            <section className="mb-16">
                <div className="max-w-6xl mx-auto bg-white/10 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Featured Detox Tips</h2>
                    <div className="flex overflow-x-auto gap-4">
                        {detoxTips.slice(0, 3).map((tip) => (
                            <div key={tip.id} className="min-w-[250px] bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg p-4">
                                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                                <p className="text-sm text-white/70">{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Digital Detox Tips Grid Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {detoxTips.map((tip) => (
                    <div key={tip.id} className="bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg p-6 sm:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold">{tip.title}</h3>
                            <p className="text-lg text-white/80">{tip.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mindfulness Exercises Section */}
            <section className="max-w-6xl mx-auto mb-16 bg-white/10 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Mindfulness Exercises</h2>
                <div className="flex flex-col gap-6">
                    {mindfulnessExercises.map((exercise) => (
                        <div key={exercise.id} className="bg-white/10 rounded-lg p-6">
                            <h3 className="text-2xl font-semibold mb-2">{exercise.name}</h3>
                            <p className="text-lg text-white/80">{exercise.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Digital Detox Recommendations Section */}
            <section className="max-w-6xl mx-auto mb-16 bg-white/10 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Recommendations for Unplugging</h2>
                <ul className="list-disc list-inside space-y-4 text-white/80">
                    <li>Plan a weekend hike and leave your phone at home, or use it only for emergencies.</li>
                    <li>Set screen time limits on your phone to reduce the time spent on social media.</li>
                    <li>Try a digital detox challenge: go without screens for an entire day once a week.</li>
                    <li>Use analog alternatives for common digital tasks, like using a paper planner instead of a digital calendar.</li>
                </ul>
            </section>

            {/* Footer Section */}
            <footer className="text-center pt-12 pb-6 border-t border-white/10">
                <p className="text-lg">Take care of your mental health! Start your digital detox journey today for a healthier mind and body.</p>
                <button className="mt-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full transition-all hover:from-blue-600 hover:to-green-600">
                    Start Your Detox
                </button>
            </footer>
        </div>
    );
};

export default DigitalDetoxZone;
