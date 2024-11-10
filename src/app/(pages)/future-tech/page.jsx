"use client"
import React from 'react';

const predictions = [
    {
        author: "Jane Doe",
        type: "Video",
        content: "Short video predicting how AI will impact software development over the next decade.",
        mediaUrl: "/videos/ai_future.mp4"
    },
    {
        author: "John Smith",
        type: "Written Post",
        content: "I believe that quantum computing will revolutionize the way we handle data encryption and processing within the next 10 years.",
    },
    {
        author: "Emily Johnson",
        type: "Infographic",
        content: "Infographic showcasing the future of autonomous vehicles and their integration into urban environments.",
        mediaUrl: "/images/autonomous_vehicles.png"
    }
];

const FutureTechPredictions = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white p-6 sm:p-12">
            <header className="text-center mb-16">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4">Future of Tech Predictions</h1>
                <p className="text-xl sm:text-2xl">Community members share their predictions for the future of technology over the next 5-10 years.</p>
            </header>

            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {predictions.map((prediction, index) => (
                    <div key={index} className="bg-gradient-to-b from-white/10 to-white/5 rounded-lg shadow-lg p-6 sm:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-2xl font-bold mb-4">{prediction.author}</h3>
                        <span className="block text-sm text-white/70 mb-4">Type: {prediction.type}</span>
                        <p className="text-lg text-white/80 mb-4">{prediction.content}</p>
                        {prediction.mediaUrl && (
                            prediction.type === "Video" ? (
                                <video controls className="w-full rounded-lg">
                                    <source src={prediction.mediaUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img src={prediction.mediaUrl} alt="Infographic" className="w-full rounded-lg" />
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FutureTechPredictions;
