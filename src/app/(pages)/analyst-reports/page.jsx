"use client"
import React, { useState, useEffect } from 'react';

const AnalystReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('http://localhost:5000/reports');
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md rounded-lg">
        <div>
          <h1 className="text-3xl font-bold">Analyst Reports</h1>
          <p className="mt-2">Learn what top industry analyst firms are saying about Google Cloud.</p>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">Contact us</button>
      </header>

      {/* Sidebar and Content */}
      <div className="flex flex-wrap lg:flex-nowrap mt-8 gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">More from Google Cloud</h2>
          <ul className="space-y-2 text-blue-600">
            <li><a href="#" className="hover:underline">Solutions</a></li>
            <li><a href="#" className="hover:underline">Whitepapers</a></li>
            <li><a href="#" className="hover:underline">Executive insights</a></li>
          </ul>
          <h2 className="text-lg font-semibold mt-6 mb-4">Filter by</h2>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="momentum" className="w-4 h-4" />
            <label htmlFor="momentum" className="text-gray-700">Learn more about Google Cloud’s momentum</label>
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-full lg:w-3/4">
          <div className="flex items-center space-x-4 mb-6">
            <input type="text" placeholder="Search" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">Search</button>
          </div>

          <h2 className="text-2xl font-bold mb-4">Learn more about Google Cloud’s momentum</h2>
          <p className="text-gray-700 mb-6">
            Read what industry analysts are saying about Google Cloud. The reports listed here are written by third-party industry analysts that cover Google Cloud’s strategy, product portfolio, and differentiation. You can also learn more by reading whitepapers written by Google and the Google community.
          </p>
          {loading ? (
            <div className="text-center">Loading reports...</div>
          ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200">
                <h3 className="font-semibold text-lg mb-2">{report.title}</h3>
                <p className="text-gray-700 mb-4">{report.description}</p>
                <button className="text-blue-600 underline font-semibold">Read more</button>
              </div>
            ))}
          </div>
          )}
        </section>
      </div>

      {/* Call to Action */}
      <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-8 mt-12 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Take the next step</h2>
        <p className="text-lg mb-6">Tell us what you’re solving for. A Google Cloud expert will help you find the best solution.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold">Contact sales</button>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold">Find a partner</button>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold">Go to console</button>
        </div>
      </footer>
    </div>
  );
};

export default AnalystReportsPage;
