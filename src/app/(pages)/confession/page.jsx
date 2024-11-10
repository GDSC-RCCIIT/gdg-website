"use client";
import React from "react";
import { Laugh, Frown } from "lucide-react";

const confessions = [
  {
    id: 1,
    content: "I once spent an entire day debugging, only to realize I was working on the wrong branch.",
  },
  {
    id: 2,
    content: "Accidentally pushed my API keys to a public GitHub repo. Got an email from AWS about it an hour later.",
  },
  {
    id: 3,
    content: "Deleted the production database instead of the staging one. Thankfully, we had backups... but still, that was terrifying.",
  },
  {
    id: 4,
    content: "I thought a 'minor' change wouldn't need testing. It broke half the website.",
  },
  {
    id: 5,
    content: "Wrote a script to automate a task, but forgot to include a safety check. It ended up emailing all our customers twice!",
  },
  {
    id: 6,
    content: "Missed a semicolon in my JavaScript code and spent hours figuring out why the script wasn't working.",
  },
  {
    id: 7,
    content: "I accidentally swapped '==' with '=' in an if statement and couldn't understand why my logic was broken.",
  },
];

const TechConfessions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 sm:p-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Tech Confessions</h1>
        <p className="text-xl sm:text-2xl mb-8">
          A fun section where developers anonymously share their funniest or most embarrassing tech-related mistakes.
        </p>
        <Laugh size={48} className="text-yellow-400 mx-auto mb-4 animate-bounce" />
        <p className="text-lg sm:text-xl italic">"Laugh, learn, and share – we’ve all been there!"</p>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {confessions.map((confession) => (
          <div
            key={confession.id}
            className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 rounded-xl shadow-xl p-6 sm:p-8 transition-transform transform hover:scale-110 hover:shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <Frown size={32} className="text-yellow-300" />
              <p className="text-lg text-white/90">"{confession.content}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Share Your Confession Section */}
      <section className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Share Your Confession</h2>
        <p className="text-lg mb-6">Have a funny or embarrassing tech story to share? We'd love to hear it!</p>
        <form className="space-y-6">
          <textarea
            placeholder="Write your confession here..."
            rows="4"
            className="w-full p-4 rounded-md text-black"
          ></textarea>
          <button className="bg-gradient-to-r from-yellow-400 to-red-500 text-white p-3 rounded-full hover:from-red-500 hover:to-yellow-400 transition-colors font-semibold">
            Submit Confession
          </button>
        </form>
      </section>
    </div>
  );
};

export default TechConfessions;
