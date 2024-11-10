"use client"
import React, { useState } from 'react';
import { Camera, Scan, ImagePlus, Text, Search, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const analysisTypes = [
    { 
        title: "Object Detection",
        icon: Camera,
        color: "from-blue-400 to-blue-600"
    },
    { 
        title: "Text Recognition",
        icon: Text,
        color: "from-emerald-400 to-emerald-600"
    },
    { 
        title: "Visual Search",
        icon: Search,
        color: "from-purple-400 to-purple-600"
    }
];

const LensDevStudio = () => {
    const [activeDemo, setActiveDemo] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleImageUpload = (e) => {
        setIsAnalyzing(true);
        // Simulate analysis delay
        setTimeout(() => setIsAnalyzing(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 md:p-8">
            {/* Header */}
            <header className="max-w-4xl mx-auto text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <Scan size={40} className="text-blue-400" />
                    <h1 className="text-4xl md:text-5xl font-bold">Lens Studio</h1>
                </div>
                <p className="text-slate-300 text-lg">
                    Explore the power of computer vision with Google Lens API
                </p>
            </header>

            {/* Main Demo Area */}
            <main className="max-w-6xl mx-auto">
                {/* Analysis Types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {analysisTypes.map((type) => (
                        <Card 
                            key={type.title}
                            className={`bg-gradient-to-r ${type.color} cursor-pointer transform hover:scale-105 transition-all`}
                            onClick={() => setActiveDemo(type.title)}
                        >
                            <CardContent className="p-6 flex items-center gap-4">
                                <type.icon size={24} />
                                <span className="font-semibold">{type.title}</span>
                                <ArrowRight size={16} className="ml-auto" />
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Upload & Analysis Area */}
                <Card className="bg-slate-800/50 backdrop-blur">
                    <CardContent className="p-8">
                        {!activeDemo ? (
                            <div className="text-center p-12">
                                <p className="text-slate-300 mb-4">Select an analysis type to begin</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold mb-4">{activeDemo}</h3>
                                
                                {/* Upload Area */}
                                <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
                                    <input
                                        type="file"
                                        id="image-upload"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                        accept="image/*"
                                    />
                                    <label 
                                        htmlFor="image-upload" 
                                        className="cursor-pointer flex flex-col items-center gap-4"
                                    >
                                        <ImagePlus size={40} className="text-slate-400" />
                                        <span className="text-slate-300">
                                            Drop an image or click to upload
                                        </span>
                                    </label>
                                </div>

                                {/* Analysis Status */}
                                {isAnalyzing && (
                                    <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                                        <div className="animate-pulse">Analyzing image...</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Quick Tips */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <Card className="bg-slate-800/30">
                        <CardContent className="p-4">
                            <p>💡 Tip: Use high-resolution images for better results</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-800/30">
                        <CardContent className="p-4">
                            <p>🎯 Tip: Center your main subject in the frame</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-800/30">
                        <CardContent className="p-4">
                            <p>✨ Tip: Good lighting improves recognition accuracy</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default LensDevStudio;