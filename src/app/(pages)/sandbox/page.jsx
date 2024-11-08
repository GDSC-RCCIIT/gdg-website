"use client";
import React, { useState } from 'react';
import {
    Shield,
    Users,
    FileCode,
    Terminal,
    Play,
    RefreshCw,
    CheckCircle,
    LineChart,
    Eye
} from 'lucide-react';

const privacyTechnologies = [
    {
        id: 'federated-learning',
        name: 'Federated Learning',
        description: 'Train ML models on distributed datasets without centralizing data',
        icon: Users,
        simulationData: {
            participants: 1000,
            accuracy: 94.5,
            privacyScore: 98,
            dataPoints: 50000
        },
        codeSample: `
// Federated Learning Example
const model = await FederatedModel.initialize({
  aggregation: 'secure',
  minClients: 50,
  rounds: 10
});

model.onRound(async (clientData) => {
  const localUpdate = await trainLocal(clientData);
  return securelyAggregate(localUpdate);
});
    `
    },
    {
        id: 'differential-privacy',
        name: 'Differential Privacy',
        description: 'Add controlled noise to data while maintaining statistical accuracy',
        icon: Shield,
        simulationData: {
            epsilon: 0.1,
            delta: 1e-5,
            accuracy: 96.2,
            privacyScore: 95
        },
        codeSample: `
// Differential Privacy Example
const sensitiveData = getData();
const epsilon = 0.1;

const privateMean = DifferentialPrivacy.mean(
  sensitiveData,
  epsilon,
  {
    sensitivity: 1.0,
    mechanism: 'laplace'
  }
);
    `
    },
    {
        id: 'k-anonymity',
        name: 'K-Anonymity',
        description: 'Ensure each record is indistinguishable from at least k-1 others',
        icon: Eye,
        simulationData: {
            kValue: 5,
            recordsProtected: 10000,
            accuracy: 98.1,
            privacyScore: 92
        },
        codeSample: `
// K-Anonymity Example
const rawData = loadSensitiveData();
const k = 5;

const anonymizedData = KAnonymity.apply(rawData, {
  k: k,
  sensitiveColumns: ['age', 'zipcode'],
  generalizations: {
    age: [5, 10, 20],
    zipcode: [1, 2, 3]
  }
});
    `
    }
];

const PrivacySandbox = () => {
    const [activeTech, setActiveTech] = useState(privacyTechnologies[0]);
    const [isSimulating, setIsSimulating] = useState(false);
    const [simulationResults, setSimulationResults] = useState(null);

    const runSimulation = () => {
        setIsSimulating(true);
        setTimeout(() => {
            setSimulationResults({
                success: true,
                metrics: activeTech.simulationData,
                timestamp: new Date()
            });
            setIsSimulating(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Header */}
            <header className="bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold mb-4">Privacy Sandbox Playground</h1>
                            <p className="text-slate-300 max-w-2xl">
                                Explore and experiment with privacy-preserving technologies through interactive simulations and real-world examples.
                            </p>
                        </div>
                        <Shield className="text-blue-400" size={64} />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="space-y-4">
                        {privacyTechnologies.map((tech) => (
                            <button
                                key={tech.id}
                                onClick={() => setActiveTech(tech)}
                                className={`w-full p-4 rounded-lg text-left transition-all ${activeTech.id === tech.id
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                            >
                                <div className="flex items-center">
                                    {React.createElement(tech.icon, {
                                        size: 20,
                                        className: "mr-3"
                                    })}
                                    <span className="font-semibold">{tech.name}</span>
                                </div>
                            </button>
                        ))}
                        {/* Resources */}
                        <div className="mt-8 p-4 bg-slate-800 rounded-lg">
                            <h3 className="text-white font-semibold mb-2">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-slate-300 hover:text-white flex items-center">
                                        <FileCode size={16} className="mr-2" />
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-300 hover:text-white flex items-center">
                                        <Terminal size={16} className="mr-2" />
                                        API Reference
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:col-span-3 space-y-8">
                        {/* Technology Overview */}
                        <div className="bg-slate-800 rounded-lg p-6">
                            <h2 className="text-2xl font-bold mb-4">{activeTech.name}</h2>
                            <p className="text-slate-300 mb-6">{activeTech.description}</p>

                            {/* Interactive Demo */}
                            <div className="bg-slate-900 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold">Interactive Simulation</h3>
                                    <button
                                        onClick={runSimulation}
                                        disabled={isSimulating}
                                        className={`px-4 py-2 rounded-lg flex items-center ${isSimulating
                                            ? 'bg-slate-700 text-slate-400'
                                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                                            }`}
                                    >
                                        {isSimulating ? (
                                            <>
                                                <RefreshCw size={16} className="mr-2 animate-spin" />
                                                Simulating...
                                            </>
                                        ) : (
                                            <>
                                                <Play size={16} className="mr-2" />
                                                Run Simulation
                                            </>
                                        )}
                                    </button>
                                </div>

                                {simulationResults && (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        {Object.entries(simulationResults.metrics).map(([key, value]) => (
                                            <div key={key} className="bg-slate-800 p-4 rounded-lg">
                                                <p className="text-slate-400 text-sm capitalize mb-1">
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                </p>
                                                <p className="text-2xl font-bold text-white">
                                                    {typeof value === 'number' ? value.toLocaleString() : value}
                                                    {key.includes('Score') || key.includes('accuracy') ? '%' : ''}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Code Example */}
                                <div className="font-mono text-sm bg-slate-950 p-4 rounded-lg overflow-x-auto">
                                    <pre className="text-slate-300">{activeTech.codeSample}</pre>
                                </div>
                            </div>
                        </div>

                        {/* Privacy Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-800 rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-4">Privacy Score</h3>
                                <div className="relative pt-1">
                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-700">
                                        <div
                                            style={{ width: `${activeTech.simulationData.privacyScore}%` }}
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-800 rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-4">Implementation Guide</h3>
                                <ol className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-sm mr-3 mt-0.5">
                                            1
                                        </span>
                                        <div>
                                            <p className="font-semibold">Configure Parameters</p>
                                            <p className="text-slate-300 text-sm">Set privacy thresholds and data scope</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-sm mr-3 mt-0.5">
                                            2
                                        </span>
                                        <div>
                                            <p className="font-semibold">Initialize SDK</p>
                                            <p className="text-slate-300 text-sm">Set up development environment</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-sm mr-3 mt-0.5">
                                            3
                                        </span>
                                        <div>
                                            <p className="font-semibold">Test Implementation</p>
                                            <p className="text-slate-300 text-sm">Validate privacy guarantees</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {/* Data Visualization */}
                        <div className="bg-slate-800 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-4">Privacy Impact Analysis</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-slate-900 p-4 rounded-lg">
                                    <h4 className="text-sm font-semibold mb-2">Data Protection</h4>
                                    <div className="flex items-center">
                                        <Shield size={20} className="text-green-400 mr-2" />
                                        <span className="font-bold">Enhanced</span>
                                    </div>
                                </div>
                                <div className="bg-slate-900 p-4 rounded-lg">
                                    <h4 className="text-sm font-semibold mb-2">Performance Impact</h4>
                                    <div className="flex items-center">
                                        <LineChart size={20} className="text-yellow-400 mr-2" />
                                        <span className="font-bold">Minimal</span>
                                    </div>
                                </div>
                                <div className="bg-slate-900 p-4 rounded-lg">
                                    <h4 className="text-sm font-semibold mb-2">Compliance Status</h4>
                                    <div className="flex items-center">
                                        <CheckCircle size={20} className="text-green-400 mr-2" />
                                        <span className="font-bold">Compliant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Call to Action */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Ready to Implement Privacy-First Solutions?
                    </h2>
                    <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                        Get started with our Privacy Sandbox tools and build trust with your users through enhanced data protection.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            Start Implementation
                        </button>
                        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                            View Documentation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacySandbox;
