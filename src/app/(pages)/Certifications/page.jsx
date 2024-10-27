"use client";
import { useEffect, useState } from "react";

const GoogleCertificationPage = () => {
    const [certifications, setCertifications] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/certifications");
                const data = await response.json();
                setCertifications(data);
            } catch (error) {
                console.error("Error fetching certifications:", error);
            }
        };

        fetchData();
    }, []);

    const filteredCertifications = certifications.filter(cert =>
        cert.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + "...";
        }
        return description;
    };

    return (
        <div className="p-6">
            <header className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Google Certifications</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
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
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCertifications.map((cert, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <img
                            src={`/certi ${((index % 3) + 1)}.svg`}
                            alt={cert.title}
                            className="w-full h-32 object-cover rounded-md mb-4"
                        />
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h2>
                        </a>
                        <p className="text-gray-600 mb-4">{truncateDescription(cert.description, 100)}</p>

                        <div>
                            {cert.playlist.learningActivities.slice(0, 10).map((activity, idx) => (
                                <div key={idx} className="mb-3">
                                    <a href={activity.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
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
                                    className="mt-2 text-blue-600 underline"
                                >
                                    Read More
                                </button>
                            )}
                            <div id={`activities-${index}`} className="hidden">
                                {cert.playlist.learningActivities.slice(7).map((activity, idx) => (
                                    <div key={idx} className="mb-3">
                                        <a href={activity.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
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
