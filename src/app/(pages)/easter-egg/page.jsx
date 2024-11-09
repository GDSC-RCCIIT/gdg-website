"use client";
import React, { useState } from 'react';
import {
    Sparkles,
    Search,
    Gift,
    Code,
    Play,
    Heart,
    Star,
    Share2,
    Coffee,
    Gamepad2,
    Rocket
} from 'lucide-react';

const easterEggs = [
    {
        id: 'do-a-barrel-roll',
        name: 'Do a Barrel Roll',
        description: 'Makes the entire page do a 360-degree rotation',
        category: 'Animation',
        icon: Rocket,
        difficulty: 'Easy',
        yearAdded: 2011,
        trigger: 'Search "do a barrel roll"',
        codeSnippet: `
// CSS Animation Implementation
@keyframes barrelRoll {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

document.body.style.animation = 
  "barrelRoll 1s cubic-bezier(0.4, 0.0, 0.2, 1)";
        `,
        funFact: "Inspired by the Star Fox 64 video game where Peppy Hare tells Fox McCloud to 'do a barrel roll'",
        popularity: 98
    },
    {
        id: 'thanos-snap',
        name: 'Thanos Snap',
        description: 'Makes half of the search results disappear with a snap effect',
        category: 'Special Effects',
        icon: Sparkles,
        difficulty: 'Advanced',
        yearAdded: 2019,
        trigger: 'Search "thanos" and click the infinity gauntlet',
        codeSnippet: `
// Thanos Snap Effect
const snapEffect = async (elements) => {
  const half = Math.floor(elements.length / 2);
  const vanishing = elements
    .slice(0, half)
    .map(el => {
      return el.animate([
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0.5)' }
      ], {
        duration: 1000,
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      }).finished;
    });
  
  await Promise.all(vanishing);
  return 'perfectly balanced';
};
        `,
        funFact: "Released to coincide with Avengers: Endgame, this Easter egg became one of Google's most viral features",
        popularity: 95
    },
    {
        id: 'google-gravity',
        name: 'Google Gravity',
        description: 'Makes all page elements fall and collide with physics',
        category: 'Physics',
        icon: Gamepad2,
        difficulty: 'Expert',
        yearAdded: 2009,
        trigger: 'Search "google gravity" and click I\'m Feeling Lucky',
        codeSnippet: `
// Physics Engine Integration
const applyGravity = () => {
  const world = Matter.World.create();
  const engine = Matter.Engine.create({
    world,
    gravity: { x: 0, y: 1 }
  });

  document.querySelectorAll('*').forEach(el => {
    const body = Matter.Bodies.rectangle(
      el.offsetLeft,
      el.offsetTop,
      el.offsetWidth,
      el.offsetHeight
    );
    Matter.World.add(world, body);
  });

  Matter.Engine.run(engine);
};
        `,
        funFact: "The physics simulation uses a modified version of the Matter.js engine to handle DOM elements",
        popularity: 92
    }
];

const EasterEggRepository = () => {
    const [activeEgg, setActiveEgg] = useState(easterEggs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const playAnimation = () => {
        setIsPlaying(true);
        setTimeout(() => setIsPlaying(false), 2000);
    };

    const filteredEggs = easterEggs.filter(egg =>
        egg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        egg.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-slate-900 to-slate-900 text-white">
            {/* Hero Section */}
            <header className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="animate-float">
                            <Gift className="w-16 h-16 text-purple-400 mb-6" />
                        </div>
                        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                            Google Easter Egg Repository
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mb-8">
                            Discover the hidden treasures and playful surprises that make the web magical.
                        </p>
                        <div className="relative w-full max-w-xl">
                            <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search easter eggs..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-12 py-3 bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Easter Eggs List */}
                    <div className="space-y-4">
                        {filteredEggs.map((egg) => (
                            <button
                                key={egg.id}
                                onClick={() => setActiveEgg(egg)}
                                className={`w-full p-4 rounded-xl text-left transition-all ${activeEgg.id === egg.id
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/20'
                                    : 'bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {React.createElement(egg.icon, {
                                            size: 24,
                                            className: "mr-3 text-purple-400"
                                        })}
                                        <div>
                                            <h3 className="font-semibold">{egg.name}</h3>
                                            <p className="text-sm text-slate-300">{egg.category}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Star className="text-yellow-400 w-4 h-4 mr-1" />
                                        <span className="text-sm">{egg.popularity}%</span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Easter Egg Details */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold">{activeEgg.name}</h2>
                                    <p className="text-slate-300">{activeEgg.description}</p>
                                </div>
                                <button
                                    onClick={playAnimation}
                                    disabled={isPlaying}
                                    className={`p-3 rounded-xl transition-all ${isPlaying
                                        ? 'bg-slate-700 text-slate-400'
                                        : 'bg-purple-500 hover:bg-purple-600'
                                        }`}
                                >
                                    <Play size={24} />
                                </button>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-slate-700/50 p-4 rounded-lg">
                                    <p className="text-sm text-slate-400 mb-1">Added</p>
                                    <p className="text-xl font-bold">{activeEgg.yearAdded}</p>
                                </div>
                                <div className="bg-slate-700/50 p-4 rounded-lg">
                                    <p className="text-sm text-slate-400 mb-1">Difficulty</p>
                                    <p className="text-xl font-bold">{activeEgg.difficulty}</p>
                                </div>
                                <div className="bg-slate-700/50 p-4 rounded-lg">
                                    <p className="text-sm text-slate-400 mb-1">Category</p>
                                    <p className="text-xl font-bold">{activeEgg.category}</p>
                                </div>
                                <div className="bg-slate-700/50 p-4 rounded-lg">
                                    <p className="text-sm text-slate-400 mb-1">Popularity</p>
                                    <p className="text-xl font-bold">{activeEgg.popularity}%</p>
                                </div>
                            </div>

                            {/* Code Preview */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Implementation</h3>
                                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                                    <pre className="text-slate-300">{activeEgg.codeSnippet}</pre>
                                </div>
                            </div>

                            {/* Fun Fact */}
                            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                                <h3 className="flex items-center text-purple-400 font-semibold mb-2">
                                    <Coffee className="mr-2" size={20} />
                                    Fun Fact
                                </h3>
                                <p className="text-slate-300">{activeEgg.funFact}</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                            <button className="flex-1 bg-purple-500 hover:bg-purple-600 p-4 rounded-xl font-semibold transition-all flex items-center justify-center">
                                <Code className="mr-2" size={20} />
                                View Source
                            </button>
                            <button className="flex-1 bg-pink-500 hover:bg-pink-600 p-4 rounded-xl font-semibold transition-all flex items-center justify-center">
                                <Share2 className="mr-2" size={20} />
                                Share Easter Egg
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Contribution CTA */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 text-center backdrop-blur-sm border border-purple-500/20">
                    <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4">
                        Have an Easter Egg Idea?
                    </h2>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                        Join our community of creative developers and contribute your own Easter eggs to make the web more delightful.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl font-semibold transition-all">
                            Submit Your Idea
                        </button>
                        <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold transition-all">
                            View Guidelines
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EasterEggRepository;