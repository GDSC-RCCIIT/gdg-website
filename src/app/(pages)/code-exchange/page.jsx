"use client";
import React, { useState } from 'react';

const exampleProblems = [
    { name: "FizzBuzz", description: "A common programming exercise for beginners." },
    { name: "Sorting Algorithm", description: "Sort an array of numbers in ascending order." },
    { name: "HTTP Request Handling", description: "Basic code to make an HTTP GET request." },
];

const languages = ["Python", "JavaScript", "Java", "C++", "Ruby"];

const codeExamples = {
    FizzBuzz: {
        Python: `for i in range(1, 101):\n    if i % 3 == 0 and i % 5 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)`,
        JavaScript: `for (let i = 1; i <= 100; i++) {\n    if (i % 3 === 0 && i % 5 === 0) {\n        console.log("FizzBuzz");\n    } else if (i % 3 === 0) {\n        console.log("Fizz");\n    } else if (i % 5 === 0) {\n        console.log("Buzz");\n    } else {\n        console.log(i);\n    }\n}`,
        Java: `for (int i = 1; i <= 100; i++) {\n    if (i % 3 == 0 && i % 5 == 0) {\n        System.out.println("FizzBuzz");\n    } else if (i % 3 == 0) {\n        System.out.println("Fizz");\n    } else if (i % 5 == 0) {\n        System.out.println("Buzz");\n    } else {\n        System.out.println(i);\n    }\n}`,
        "C++": `for (int i = 1; i <= 100; i++) {\n    if (i % 3 == 0 && i % 5 == 0) {\n        std::cout << "FizzBuzz" << std::endl;\n    } else if (i % 3 == 0) {\n        std::cout << "Fizz" << std::endl;\n    } else if (i % 5 == 0) {\n        std::cout << "Buzz" << std::endl;\n    } else {\n        std::cout << i << std::endl;\n    }\n}`,
    },
    "Sorting Algorithm": {
        Python: `arr = [64, 25, 12, 22, 11]\nfor i in range(len(arr)):\n    min_idx = i\n    for j in range(i+1, len(arr)):\n        if arr[j] < arr[min_idx]:\n            min_idx = j\n    arr[i], arr[min_idx] = arr[min_idx], arr[i]\nprint(arr)`,
        JavaScript: `let arr = [64, 25, 12, 22, 11];\nfor (let i = 0; i < arr.length; i++) {\n    let minIdx = i;\n    for (let j = i + 1; j < arr.length; j++) {\n        if (arr[j] < arr[minIdx]) minIdx = j;\n    }\n    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];\n}\nconsole.log(arr);`,
        Ruby: `arr = [64, 25, 12, 22, 11]\nfor i in 0...(arr.length - 1)\n    min_idx = i\n    for j in (i + 1)...arr.length\n        min_idx = j if arr[j] < arr[min_idx]\n    arr[i], arr[min_idx] = arr[min_idx], arr[i]\nend\np arr`,
    },
    "HTTP Request Handling": {
        Python: `import requests\nresponse = requests.get('https://jsonplaceholder.typicode.com/posts')\nprint(response.json())`,
        JavaScript: `fetch('https://jsonplaceholder.typicode.com/posts')\n    .then(response => response.json())\n    .then(data => console.log(data));`,
        Java: `import java.net.*;\nimport java.io.*;\nURL url = new URL("https://jsonplaceholder.typicode.com/posts");\nHttpURLConnection con = (HttpURLConnection) url.openConnection();\ncon.setRequestMethod("GET");\nBufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));\nString inputLine;\nStringBuffer content = new StringBuffer();\nwhile ((inputLine = in.readLine()) != null) {\n    content.append(inputLine);\n}\nin.close();\nSystem.out.println(content.toString());`,
    },
};

const contributors = [
    { name: "Jane Doe", country: "United States", language: "Python", problem: "FizzBuzz", likes: 21 },
    { name: "Akira Sato", country: "Japan", language: "JavaScript", problem: "Sorting Algorithm", likes: 15 },
    { name: "Carlos Mendez", country: "Spain", language: "Java", problem: "HTTP Request Handling", likes: 30 },
];

const GlobalCodeExchange = () => {
    const [selectedProblem, setSelectedProblem] = useState(exampleProblems[0].name);
    const [sourceLanguage, setSourceLanguage] = useState("Python");
    const [targetLanguage, setTargetLanguage] = useState("JavaScript");
    const [copied, setCopied] = useState(null);
    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setCopied(code);
        setTimeout(() => setCopied(null), 2000); // Reset copied state after 2 seconds
    };
    return (
        <div className="bg-gray-50 min-h-screen p-6">
            {/* Hero Section with Gradient */}
            <header className="text-center mb-8 p-6 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 rounded-md shadow-lg text-white">
                <h1 className="text-4xl font-bold">Global Code Exchange</h1>
                <p className="text-lg mt-2">
                    Share, translate, and learn code across languages and cultures.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">Submit Code</button>
                    <button className="bg-gray-300 text-blue-600 px-4 py-2 rounded-md font-semibold">Browse Solutions</button>
                </div>
            </header>

            {/* Interactive Code Translation Box */}
            <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">Translate Code Snippets</h2>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <select
                        className="p-2 border rounded-md w-40"
                        value={selectedProblem}
                        onChange={(e) => setSelectedProblem(e.target.value)}
                    >
                        {exampleProblems.map((problem) => (
                            <option key={problem.name} value={problem.name}>
                                {problem.name}
                            </option>
                        ))}
                    </select>
                    <div className="flex gap-2 items-center">
                        <select
                            className="p-2 border rounded-md w-32"
                            value={sourceLanguage}
                            onChange={(e) => setSourceLanguage(e.target.value)}
                        >
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                        <span className="text-xl">→</span>
                        <select
                            className="p-2 border rounded-md w-32"
                            value={targetLanguage}
                            onChange={(e) => setTargetLanguage(e.target.value)}
                        >
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="bg-gray-100 p-4 rounded-md shadow-sm mb-4 relative">
                        <p className="text-gray-600">Code in {sourceLanguage} for {selectedProblem}:</p>
                        <pre className="bg-gray-800 text-green-400 p-4 mt-2 rounded-md overflow-auto">
                            <code>{codeExamples[selectedProblem][sourceLanguage]}</code>
                        </pre>
                        <button
                            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded"
                            onClick={() => handleCopy(codeExamples[selectedProblem][sourceLanguage])}
                        >
                            {copied === codeExamples[selectedProblem][sourceLanguage] ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md shadow-sm relative">
                        <p className="text-gray-600">Translated Code in {targetLanguage}:</p>
                        <pre className="bg-gray-800 text-blue-400 p-4 mt-2 rounded-md overflow-auto">
                            <code>{codeExamples[selectedProblem][targetLanguage]}</code>
                        </pre>
                        <button
                            className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded"
                            onClick={() => handleCopy(codeExamples[selectedProblem][targetLanguage])}
                        >
                            {copied === codeExamples[selectedProblem][targetLanguage] ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
            </section>

            {/* Global Community Contributions */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Featured Translations from Around the World</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contributors.map((contributor, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                            <div className="flex items-center mb-2">
                                <img
                                    src={`/images/flags/${contributor.country.toLowerCase().replace(" ", "-")}.png`} // Placeholder for flag icons
                                    alt={`${contributor.country} flag`}
                                    className="w-6 h-6 mr-2"
                                />
                                <h3 className="font-semibold text-gray-700">{contributor.name} from {contributor.country}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Solution in {contributor.language} for {contributor.problem}</p>
                            <button className="text-blue-600 underline mt-2">View Code</button>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-500 text-sm">{contributor.likes} likes</span>
                                <button className="text-blue-600 underline">Like</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-gray-100 p-6 rounded-md shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <p className="text-gray-700 mb-2">
                    1. Select a programming problem and language to view solutions contributed by developers worldwide.
                </p>
                <p className="text-gray-700 mb-2">
                    2. Translate code snippets between programming languages with the help of community contributions.
                </p>
                <p className="text-gray-700">
                    3. Contribute your own solutions, request translations, or vote on code snippets you find helpful.
                </p>
            </section>

            {/* Subscription Section */}
            <section className="bg-blue-100 p-6 rounded-md mt-8 text-center">
                <h3 className="text-lg font-semibold text-blue-900">Stay Updated with Global Code Exchange</h3>
                <p className="text-blue-700 mt-2">Subscribe to receive the latest translations and updates from around the world.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">Subscribe</button>
            </section>
        </div>
    );
};

export default GlobalCodeExchange;
