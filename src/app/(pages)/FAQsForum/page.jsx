"use client";
import { useState, useEffect } from "react";

import "./Posts.css";
import { motion } from "framer-motion";

const FAQForum = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [faqs, setFAQs] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch("http://localhost:5000/posts");
        const faqsResponse = await fetch("http://localhost:5000/faqs");

        if (!postsResponse.ok || !faqsResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const postsData = await postsResponse.json();
        const faqsData = await faqsResponse.json();

        setPosts(postsData);
        setFAQs(faqsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const cardColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      setPosts([{ id: posts.length + 1, ...newPost }, ...posts]);
      setNewPost({ title: "", content: "" });
    }
  };

  const toggleExpand = (id) => {
    setExpandedPosts(
      expandedPosts.includes(id)
        ? expandedPosts.filter((postId) => postId !== id)
        : [...expandedPosts, id]
    );
  };

  const handleSort = () => {
    const sortedPosts = [...posts].sort((a, b) =>
      sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    setPosts(sortedPosts);
    setSortAsc(!sortAsc);
  };
  return (
    <motion.div
      className="min-h-screen p-8 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center pt-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            FAQs & Forum
          </h1>
          <motion.div
            className="mt-2 mx-auto w-54 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* FAQs Section */}
        <motion.section
          className="mb-16 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-4xl font-semibold text-indigo-600 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`transition duration-300 ease-in-out rounded-lg shadow-md ${cardColors[index % cardColors.length]
                  }`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  className="w-full text-left p-5 text-white rounded-lg focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                      {faq.question}
                    </span>
                    <span
                      className={`text-3xl transition-transform duration-300 transform ${activeIndex === index ? "rotate-180" : ""
                        }`}
                    >
                      +
                    </span>
                  </div>
                </button>
                <motion.div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="p-5 bg-white rounded-lg mt-2 shadow-inner text-gray-600 border-l-4 border-indigo-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Forum Section */}
        <section>
          <h2 className="text-4xl font-semibold text-indigo-600 mb-8 text-center">
            Forum
          </h2>

          <form className="mb-12" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                className="p-4 w-full border border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300"
                placeholder="Post title"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                required
              />
              <textarea
                className="p-4 w-full h-32 border border-indigo-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition duration-300"
                placeholder="Post content"
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                required
              />
            </div>
            <motion.button
              type="submit"
              className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              Submit Post
            </motion.button>
          </form>

          {/* All Posts */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-4xl font-semibold text-indigo-600">
                All Posts
              </h2>
              <button
                className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
                onClick={handleSort}
              >
                Sort
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className={`relative w-full perspective transition-transform duration-300 hover:scale-105`}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="relative w-full h-64 transform-style-3d transition-transform duration-700 hover:rotate-y-180"
                    initial={{ rotateY: 0 }}
                    whileHover={{ rotateY: 180 }}
                  >
                    <div
                      className={`absolute inset-0 p-6 rounded-lg shadow-lg backface-hidden flex items-center justify-center overflow-hidden transition duration-300 ease-in-out hover:shadow-xl ${cardColors[index % cardColors.length]
                        }`}
                    >
                      <h3 className="text-xl font-semibold text-white text-center">
                        {post.title}
                      </h3>
                    </div>

                    <div
                      className={`absolute inset-0 p-6 rounded-lg shadow-lg rotate-y-180 backface-hidden flex flex-col justify-between overflow-hidden transition duration-300 ease-in-out hover:shadow-xl ${cardColors[(index + 1) % cardColors.length]
                        }`}
                    >
                      <p
                        className={`text-white  h-full transition-all duration-300 ${expandedPosts.includes(post.id)
                            ? "h-auto"
                            : "h-16 overflow-hidden"
                          }`}
                      >
                        {post.content}
                      </p>
                      {post.content.length > 150 && (
                        <button
                          className="text-blue-600 mt-2 underline hover:text-blue-700 transition duration-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(post.id);
                          }}
                        >
                          {expandedPosts.includes(post.id)
                            ? "Show Less"
                            : "Read More"}
                        </button>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </section>
      </div>
    </motion.div>
  );
};

export default FAQForum;
