"use client"
import React from 'react';

const retroItems = [
    {
        id: 1,
        title: "The Evolution of Mobile Phones",
        type: "Article",
        description: "A nostalgic dive into the history of mobile phones, from the bulky bricks of the 80s to the sleek smartphones of today.",
    },
    {
        id: 2,
        title: "The Rise and Fall of Netscape Navigator",
        type: "Video",
        description: "Explore the story of Netscape Navigator, the once-dominant web browser that eventually lost the browser wars to Internet Explorer.",
    },
    {
        id: 3,
        title: "The Charm of Floppy Disks",
        type: "Article",
        description: "Remember the floppy disk? Discover how these iconic storage devices defined a generation and eventually became a symbol of retro tech.",
    },
    {
        id: 4,
        title: "Classic Consoles: The Birth of Video Gaming",
        type: "Article",
        description: "Relive the golden age of video gaming with a look back at iconic consoles like the NES, Sega Genesis, and Atari.",
    },
    {
        id: 5,
        title: "Retro Computers: The First Personal Computers",
        type: "Article",
        description: "Learn about the first personal computers that became the foundation for the modern computing revolution, including the Apple II and Commodore 64.",
    },
    {
        id: 6,
        title: "The Dial-Up Internet Era",
        type: "Article",
        description: "Revisit the time when connecting to the internet meant listening to that iconic dial-up sound and waiting minutes for web pages to load.",
    }
];

const RetroCorner = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 text-white p-6 sm:p-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">Retro Corner</h1>
                <p className="text-xl sm:text-2xl">A nostalgic dive into the history of technology, showcasing iconic gadgets and classic projects from the past.</p>
            </header>

            {/* Featured Retro Section */}
            <section className="mb-16">
                <div className="max-w-6xl mx-auto bg-white/10 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Featured Retro Tech</h2>
                    <div className="flex overflow-x-auto gap-4">
                        {retroItems.slice(0, 3).map((item) => (
                            <div key={item.id} className="min-w-[250px] bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg p-4">
                                <img src={item.mediaUrl} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-white/70">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Retro Items Grid Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {retroItems.map((item) => (
                    <div key={item.id} className="bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg p-6 sm:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col gap-4">
                            <img src={item.mediaUrl} alt={item.title} className="w-full rounded-md shadow-md" />
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-lg text-white/80">{item.description}</p>
                            {item.type === "Video" ? (
                                <button className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 rounded-full transition-all hover:from-red-600 hover:to-blue-600">
                                    Watch Video
                                </button>
                            ) : (
                                <button className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 rounded-full transition-all hover:from-red-600 hover:to-blue-600">
                                    Read Article
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Retro Trivia Section */}
            <section className="max-w-6xl mx-auto mb-16 bg-white/10 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Retro Tech Trivia</h2>
                <ul className="list-disc list-inside space-y-4 text-white/80">
                    <li>Did you know that the first mobile phone, the Motorola DynaTAC 8000X, weighed almost 2 pounds?</li>
                    <li>The Commodore 64, released in 1982, is still the best-selling computer model of all time.</li>
                    <li>In the 90s, Microsoft invested $150 million in Apple to keep it afloat during its financial struggles.</li>
                    <li>The first 1GB hard drive, announced in 1980, cost $40,000 and weighed over 500 pounds.</li>
                </ul>
            </section>

            {/* Footer Section */}
            <footer className="text-center pt-12 pb-6 border-t border-white/10">
                <p className="text-lg">Thanks for visiting Retro Corner! Feel free to share your favorite retro tech memories with us!</p>
                <button className="mt-4 bg-gradient-to-r from-blue-600 to-yellow-600 text-white px-6 py-3 rounded-full transition-all hover:from-yellow-600 hover:to-blue-600">
                    Share Your Story
                </button>
            </footer>
        </div>
    );
};

export default RetroCorner;
