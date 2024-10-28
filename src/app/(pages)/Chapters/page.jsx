"use client";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ChapterTabs = () => {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState(null);
    const [loadingToastId, setLoadingToastId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const id = toast.loading('Loading data...');
            setLoadingToastId(id);

            try {
                const response = await fetch('/api/chapters', {
                    method: 'GET',
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                setActiveTab(result[0]?.id || null);
                toast.update(id, { render: 'Data loaded successfully!', type: 'success', isLoading: false, autoClose: 3000 });
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.update(id, { render: `Error fetching data: ${error.message}`, type: 'error', isLoading: false, autoClose: 3000 });
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="m-2 text-5xl text-center font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                GDSC Chapters
            </h1>
            <p className="text-center text-gray-500 mb-4">Global chapters</p>

            <div className="flex justify-center space-x-4 border-b mb-6">
                {data.map((region) => (
                    <button
                        key={region.id}
                        onClick={() => setActiveTab(region.id)}
                        className={`px-4 py-2 text-lg font-semibold transition-colors duration-300 rounded-md ${activeTab === region.id ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'}`}
                    >
                        {region.title}
                    </button>
                ))}
            </div>

            <div className="border rounded-lg p-4 bg-white shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Explore by region</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data
                        .find((region) => region.id === activeTab)
                        ?.chapters.map((chapter, index) => (
                            <div key={index} className="flex flex-col items-center border rounded-lg p-4 bg-gray-50 shadow-md hover:shadow-xl transition-shadow duration-300">
                                <h3 className="font-semibold text-gray-800 text-lg mb-2">{chapter.title}</h3>
                                <p className="text-gray-600">{chapter.country}</p>
                                {/* <div className="flex items-center justify-between w-full">
                                    {chapter.flag && (
                                        <img src={chapter.flag} alt={`${chapter.country} flag`} className="w-10 h-6 rounded-md" />
                                    )}
                                </div> */}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ChapterTabs;
