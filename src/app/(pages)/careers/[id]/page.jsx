"use client";
import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import spotlightJobs from "../opportunities";

const OpportunityDetail = () => {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    const job = spotlightJobs.find((job) => job.id === parseInt(id));

    useEffect(() => {
        if (!job) {
            router.push("/404");
        }
    }, [job, router]);

    if (!job) {
        return null;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <p className="text-gray-500 text-sm">{job.location}</p>
            <p className="text-gray-500 text-sm">{job.office}</p>

            <div className="mt-4">
                <img
                    src={job.image}
                    alt={job.title}
                    className="rounded-lg w-full h-64 object-cover shadow-lg"
                />
            </div>

            <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
                <p className="text-gray-700 mb-2">{job.job_description.philosophy}</p>
                <p className="text-gray-700 mb-2">{job.job_description.role_overview}</p>
                <p className="text-gray-700 mb-2">{job.job_description.impact}</p>
                <p className="text-gray-700">{job.job_description.mission}</p>
            </div>

            <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Minimum Qualifications</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>{job.minimum_qualifications.degree}</li>
                    {job.minimum_qualifications.experience.map((exp, index) => (
                        <li key={index}>{exp}</li>
                    ))}
                </ul>
            </div>

            <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Preferred Qualifications</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>{job.preferred_qualifications.coding_experience}</li>
                    <li>{job.preferred_qualifications.programming_skills}</li>
                    <li>{job.preferred_qualifications.passion}</li>
                </ul>
            </div>
            <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    {job.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
            <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Diversity Statement</h2>
                <p className="text-gray-700">{job.diversity_statement}</p>
            </div>

            <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">English Proficiency</h2>
                <p className="text-gray-700">{job.english_proficiency}</p>
            </div>

            <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Note for Agencies</h2>
                <p className="text-gray-700">{job.note_for_agencies}</p>
            </div>
            <button
                onClick={() => router.back()}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
                Back to Opportunities
            </button>
        </div>
    );
};

export default OpportunityDetail;
