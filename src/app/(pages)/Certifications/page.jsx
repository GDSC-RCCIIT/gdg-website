"use client";
import { useEffect, useState } from "react";

const GoogleCertificationPage = () => {
    const [certifications, setCertifications] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCertifications, setFilteredCertifications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/certifications");
                const data = await response.json();
                setCertifications(data);
                setFilteredCertifications(data); // Initialize with all certifications
            } catch (error) {
                console.error("Error fetching certifications:", error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        const filtered = certifications.filter(cert =>
            cert.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCertifications(filtered);
    };

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + "...";
        }
        return description;
    };

    return (
        <div className="p-6">
            <header className="mb-8 text-center">
                <h1 className="m-2 text-5xl text-center font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Google Certifications
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Explore Google’s free certifications and learning pathways to enhance your skills in various technologies.
                    From AI to Android development, these certifications will guide you through hands-on learning experiences
                    and practical projects.
                </p>
            </header>

            <div className="mb-8 flex justify-center">
                <input
                    type="text"
                    placeholder="Search certifications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
                >
                    Search
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCertifications.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col transition-transform duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        <img
                            src={`/certi ${((index % 3) + 1)}.svg`}
                            alt={cert.title}
                            className="w-full h-32 object-cover rounded-md mb-4"
                        />
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition duration-200">{cert.title}</h2>
                        </a>
                        <p className="text-gray-600 mb-4">{truncateDescription(cert.description, 100)}</p>

                        <div className="flex-grow">
                            {cert.playlist.learningActivities.slice(0, 10).map((activity, idx) => (
                                <div key={idx} className="mb-3">
                                    <a href={activity.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition duration-200">
                                        <h3 className="font-medium">{activity.title}</h3>
                                    </a>
                                </div>
                            ))}

                            {cert.playlist.learningActivities.length > 10 && (
                                <button
                                    onClick={() => {
                                        const activityContainer = document.getElementById(`activities-${index}`);
                                        activityContainer.classList.toggle("hidden");
                                    }}
                                    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
                                >
                                    Read More
                                </button>
                            )}
                            <div id={`activities-${index}`} className="hidden">
                                {cert.playlist.learningActivities.slice(10).map((activity, idx) => (
                                    <div key={idx} className="mb-3">
                                        <a href={activity.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition duration-200">
                                            <h3 className="font-medium">{activity.title}</h3>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GoogleCertificationPage;
