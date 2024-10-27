"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import resources from './resources';

const Skeleton = ({ width, height, className }) => (
  <div
    style={{ width, height }}
    className={`animate-pulse bg-gray-300 rounded ${className}`}
  ></div>
);

function Resource() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="bg-white text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <motion.h2
              className="text-3xl font-bold sm:text-4xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Kickstart your Development
            </motion.h2>
            <motion.p
              className="mt-4 text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Roadmaps for Beginners
            </motion.p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} width="100%" height="200px" className="rounded-xl" />
              ))
              : resources.map((resource, index) => (
              <motion.a
                key={index}
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href={`/Resources/${resource.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-black">{resource.title}</h2>
                <p className="mt-1 text-sm text-gray-900">{resource.description}</p>
              </motion.a>
              ))}
          </div>

          <div className="mt-12 text-center">
            {loading ? (
              <Skeleton width="200px" height="40px" className="mx-auto rounded" />
            ) : (
            <motion.a
              href="/signup"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get Started Today
            </motion.a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Resource;