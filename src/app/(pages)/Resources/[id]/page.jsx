"use client";
import resources from '../resources';
import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

function ResourceDetail() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    const resource = resources.find((res) => res.id === parseInt(id));
    useEffect(() => {
        if (!resource) {
            router.push('/404');
        }
    }, [resource, router]);

    if (!resource) {
        return null;
    }
    // if (!resource) {
    //     return (
    //         <section className="bg-gray-100 text-center py-20">
    //             <div className="max-w-screen-lg mx-auto">
    //                 <h1 className="text-5xl font-bold text-red-600">404</h1>
    //                 <p className="text-lg mt-4 text-gray-600">Resource not found!</p>
    //                 <a href="/" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-md">
    //                     Go back to home
    //                 </a>
    //             </div>
    //         </section>
    //     );
    // }

    return (
        <section className="bg-gray-50 text-black min-h-screen">
            <div className="bg-blue-600 text-white py-16">
                <div className="max-w-screen-lg mx-auto px-8">
                    <h1 className="text-5xl font-bold mb-4">{resource.title}</h1>
                    <p className="text-lg text-blue-200">{resource.description}</p>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto p-8">
                {/* <div className="flex items-center justify-center mb-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-20 w-20 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={resource.icon} />
                    </svg>
                </div> */}
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">In-Depth Roadmap</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {resource.extendedContent}
                    </p>
                </div>
                <div className="mt-12 text-center">
                    <a
                        href="/Resources"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                        Explore More Resources
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ResourceDetail;
