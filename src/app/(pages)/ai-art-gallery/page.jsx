"use client"
import React from 'react';

const aiArtworks = [
    {
        id: 1,
        title: "Surreal Cityscape",
        type: "Image",
        description: "An AI-generated surreal cityscape created using DALL-E. This piece showcases abstract urban geometry and vibrant colors.",
        mediaUrl: "/art1.jpeg",
        tool: "DALL-E"
    },
    {
        id: 2,
        title: "AI Dreamscape",
        type: "Image",
        description: "A dreamlike landscape created using Midjourney, with a focus on blending natural elements into a whimsical scene.",
        mediaUrl: "/art2.jpeg",
        tool: "Midjourney"
    },
    {
        id: 3,
        title: "Generative Portrait",
        type: "Image",
        description: "A stylized portrait of a fictional character, generated using Stable Diffusion. The model emphasized texture and color variety.",
        mediaUrl: "/art3.jpeg",
        tool: "Stable Diffusion"
    },
    {
        id: 4,
        title: "AI Art Bot - Landscape",
        type: "Video",
        description: "A timelapse of an AI creating a beautiful mountain landscape. This video shows the process of the artwork being generated in real-time.",
        mediaUrl: "/art4.jpeg",
        tool: "Artbreeder"
    },
    {
        id: 5,
        title: "Cyberpunk Metropolis",
        type: "Image",
        description: "A cyberpunk-style image of a futuristic city at night, generated using Disco Diffusion, highlighting neon lights and dystopian vibes.",
        mediaUrl: "/art5.jpeg",
        tool: "Disco Diffusion"
    }
];

const AIArtGallery = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white p-6 sm:p-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">AI Art Gallery</h1>
                <p className="text-xl sm:text-2xl">Explore AI-generated art created by community members and popular tools, featuring explanations of the algorithms used.</p>
            </header>

            {/* Featured AI Art Section */}
            <section className="mb-16">
                <div className="max-w-6xl mx-auto bg-white/10 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Featured AI Art</h2>
                    <div className="flex overflow-x-auto gap-4">
                        {aiArtworks.slice(0, 3).map((art) => (
                            <div key={art.id} className="min-w-[250px] bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg p-4">
                                <img src={art.mediaUrl} alt={art.title} className="w-full h-40 object-cover rounded-md mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{art.title}</h3>
                                <p className="text-sm text-white/70">{art.description}</p>
                                <p className="text-xs text-white/50">Tool: {art.tool}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Art Grid Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {aiArtworks.map((art) => (
                    <div key={art.id} className="bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg p-6 sm:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col gap-4">
                            {art.type === "Video" ? (
                                <video controls className="w-full rounded-md shadow-md">
                                    <source src={art.mediaUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img src={art.mediaUrl} alt={art.title} className="w-full rounded-md shadow-md" />
                            )}
                            <h3 className="text-2xl font-bold">{art.title}</h3>
                            <p className="text-lg text-white/80">{art.description}</p>
                            <p className="text-sm text-white/60">Tool Used: {art.tool}</p>
                            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full transition-all hover:from-purple-600 hover:to-indigo-600">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* AI Art Info Section */}
            <section className="max-w-6xl mx-auto mb-16 bg-white/10 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">How AI Creates Art</h2>
                <p className="text-lg text-white/80 mb-4">
                    AI art is generated using advanced machine learning algorithms that learn from massive datasets of images. Popular models like DALL-E, Midjourney, and Stable Diffusion use neural networks to create visuals based on textual prompts. These algorithms interpret and "imagine" images by recognizing patterns and blending styles.
                </p>
                <ul className="list-disc list-inside space-y-4 text-white/80">
                    <li>DALL-E: Generates highly creative images based on textual descriptions, known for surreal compositions.</li>
                    <li>Midjourney: Focuses on artistic and imaginative creations, often used for concept art.</li>
                    <li>Stable Diffusion: Uses latent diffusion models to produce realistic or abstract art based on prompts.</li>
                </ul>
            </section>

            {/* Footer Section */}
            <footer className="text-center pt-12 pb-6 border-t border-white/10">
                <p className="text-lg">Thanks for visiting the AI Art Gallery! Be inspired and create your own AI masterpieces!</p>
                <button className="mt-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-full transition-all hover:from-blue-600 hover:to-indigo-600">
                    Submit Your AI Art
                </button>
            </footer>
        </div>
    );
};

export default AIArtGallery;
