"use client";
import { useState } from "react";
import { FAQs } from "./FAQs";
import { posts as initialPosts } from "./Posts";
import "./Posts.css";

const FAQForum = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

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
  const [expandedPosts, setExpandedPosts] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

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
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center pt-6">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            FAQs & Forum
          </h1>
          <div className="mt-2 mx-auto w-54 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
        </div>

        {/* FAQs Section */}
        <section className="mb-16 mt-10">
          <h2 className="text-4xl font-semibold text-indigo-600 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQs.map((faq, index) => (
              <div
                key={index}
                className={`transition duration-300 ease-in-out rounded-lg shadow-md ${
                  cardColors[index % cardColors.length]
                }`}
              >
                <button
                  className="w-full text-left p-5 text-white rounded-lg focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                      {faq.question}
                    </span>
                    {/* Icon rotation logic */}
                    <span
                      className={`text-3xl transition-transform duration-300 transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-5 bg-white rounded-lg mt-2 shadow-inner text-gray-600 border-l-4 border-indigo-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Submit Post
            </button>
          </form>

          {/* All Posts */}
          <section>
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
                <div
                  key={post.id}
                  className={`relative w-full perspective transition-transform duration-300 hover:scale-105`}
                >
                  <div className="relative w-full h-64 transform-style-3d transition-transform duration-700 hover:rotate-y-180">
                    {/* Front of the Card */}
                    <div
                      className={`absolute inset-0 p-6 rounded-lg shadow-lg backface-hidden flex items-center justify-center overflow-hidden transition duration-300 ease-in-out hover:shadow-xl ${
                        cardColors[index % cardColors.length]
                      }`}
                    >
                      <h3 className="text-xl font-semibold text-white text-center">
                        {post.title}
                      </h3>
                    </div>

                    {/* Back of the Card */}
                    <div
                      className={`absolute inset-0 p-6 rounded-lg shadow-lg rotate-y-180 backface-hidden flex flex-col justify-between overflow-hidden transition duration-300 ease-in-out hover:shadow-xl ${
                        cardColors[(index + 1) % cardColors.length]
                      }`}
                    >
                      <p
                        className={`text-white  h-full transition-all duration-300 ${
                          expandedPosts.includes(post.id)
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
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default FAQForum;
