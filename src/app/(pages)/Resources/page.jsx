// import React from 'react';
// import Image from 'next/image';
// function Resource() {
//   return (
//     <>

//     <section className="bg-white text-black">
//   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//     <div className="mx-auto max-w-lg text-center">
//       <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your Delevlopment</h2>

//       <p className="mt-4 text-gray-900">
//       Roadmaps for Beginners
//       </p>
//     </div>

//     <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//       <a
//         className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
//         href="https://roadmap.sh/frontend"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="size-10 text-pink-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path d="M12 14l9-5-9-5-9 5 9 5z" />
//           <path
//             d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
//           />
//         </svg>

//         <h2 className="mt-4 text-xl font-bold text-black">frontend Development</h2>

//         <p className="mt-1 text-sm text-gray-900">
//         To learn frontend, follow this roadmap
//         </p>
//       </a>

//       <a
//         className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
//         href="https://roadmap.sh/backend"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="size-10 text-pink-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path d="M12 14l9-5-9-5-9 5 9 5z" />
//           <path
//             d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
//           />
//         </svg>

//         <h2 className="mt-4 text-xl font-bold text-black">Backend Development</h2>

//         <p className="mt-1 text-sm text-gray-900">
//         To learn backend, follow this roadmap
//         </p>
//       </a>

//       <a
//         className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
//         href="https://roadmap.sh/ux-design"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="size-10 text-pink-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path d="M12 14l9-5-9-5-9 5 9 5z" />
//           <path
//             d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
//           />
//         </svg>

//         <h2 className="mt-4 text-xl font-bold text-black">UI/UX Development </h2>

//         <p className="mt-1 text-sm text-gray-900">
//         To learn UX design, follow this roadmap
//         </p>
//       </a>


//       <a
//         className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
//         href="https://roadmap.sh/cpp"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="size-10 text-pink-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path d="M12 14l9-5-9-5-9 5 9 5z" />
//           <path
//             d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
//           />
//         </svg>

//         <h2 className="mt-4 text-xl font-bold text-black">C++ Learning Track </h2>

//         <p className="mt-1 text-sm text-gray-900">
//         To learn C++, follow this roadmap
//         </p>
//       </a>

//       <a
//         className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
//         href="https://roadmap.sh/computer-science"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="size-10 text-pink-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path d="M12 14l9-5-9-5-9 5 9 5z" />
//           <path
//             d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
//           />
//         </svg>

//         <h2 className="mt-4 text-xl font-bold text-black">DSA Learning Track </h2>

//         <p className="mt-1 text-sm text-gray-900">
//         To learn DSA, follow this roadmap
//         </p>
//       </a>

//       <a
//         className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
//         href="https://codeforces.com/blog/entry/65133"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="size-10 text-pink-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path d="M12 14l9-5-9-5-9 5 9 5z" />
//           <path
//             d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
//           />
//         </svg>

//         <h2 className="mt-4 text-xl font-bold text-black">Competitive Programming </h2>

//         <p className="mt-1 text-sm text-gray-900">
//         To learn CP, follow this roadmap
//         </p>
//       </a>

//     </div>

//     <div className="mt-12 text-center">
//       <a
//         href="/signup"
//         className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
//       >
//         Get Started Today
//       </a>
//     </div>
//   </div>
// </section>
//     </>
//   );
// }

// export default Resource;

'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Resource() {
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
            {/* Card Component */}
            {[
              {
                href: "https://roadmap.sh/frontend",
                title: "Frontend Development",
                description: "To learn frontend, follow this roadmap",
              },
              {
                href: "https://roadmap.sh/backend",
                title: "Backend Development",
                description: "To learn backend, follow this roadmap",
              },
              {
                href: "https://roadmap.sh/ux-design",
                title: "UI/UX Development",
                description: "To learn UX design, follow this roadmap",
              },
              {
                href: "https://roadmap.sh/cpp",
                title: "C++ Learning Track",
                description: "To learn C++, follow this roadmap",
              },
              {
                href: "https://roadmap.sh/computer-science",
                title: "Computer Science Fundamentals",
                description: "To learn Computer Science, follow this roadmap",
              },
              {
                href: "https://roadmap.sh/datastructures-and-algorithms",
                title: "Data Structures and Algorithms",
                description: "To learn DSA, follow this roadmap",
              },
            ].map((card, index) => (
              <motion.a
                key={index}
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href={card.href}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // staggered animation
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

                <h2 className="mt-4 text-xl font-bold text-black">{card.title}</h2>

                <p className="mt-1 text-sm text-gray-900">
                  {card.description}
                </p>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 text-center">
          <motion.p
              className="mt-4 text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
            >
            <a
              href="/signup"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
              Get Started Today
            </a>
              </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resource;
