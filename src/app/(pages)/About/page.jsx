'use client'
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; 

export default function About() {
    const [email, setEmail] = useState("");

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address!");
        } else {
            toast.success("Thank you for subscribing! We will get back to you soon");
            setEmail("");
        }
    };

    return (
        <>
            <motion.section
    initial={{ opacity: 0, y: 50 }} // Initial state for animation
    animate={{ opacity: 1, y: 0 }} // Animation to apply
    transition={{ duration: 0.5 }} // Duration of the animation
>
    <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Blue background div with centered text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Initial state for animation
                animate={{ opacity: 1, y: 0 }} // Animation to apply
                transition={{ duration: 1 }} // Duration of the animation (0.5 + 0.5)
                className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24 text-center flex flex-col justify-center items-center"
            >
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                        About GSG at RCIIT
                    </h2>
                    <p className="hidden text-white/90 sm:mt-4 sm:block">
                        GDG on Campus RCCIIT stands for Google Developer Group on
                        Campus RCCIIT. It's a community of developers, designers, and
                        students affiliated with the RCCIIT (Rajiv Gandhi Institute of
                        Technology) campus who are passionate about Google
                        technologies.
                    </p>
                    <div className="mt-4 md:mt-8">
                        <a
                            href="/"
                            className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                <motion.img
                    alt=""
                    src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                    className="h-40 w-full object-cover sm:h-56 md:h-full"
                    initial={{ opacity: 0, y: 50 }} // Initial state for animation
                    animate={{ opacity: 1, y: 0 }} // Animation to apply
                    transition={{ duration: 1.5 }} // Duration of the animation (1 + 0.5)
                />
                <motion.img
                    alt=""
                    src="https://images.unsplash.com/photo-1613980790147-f4f449df0dd9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="h-40 w-full object-cover sm:h-56 md:h-full"
                    initial={{ opacity: 0, y: 50 }} // Initial state for animation
                    animate={{ opacity: 1, y: 0 }} // Animation to apply
                    transition={{ duration: 2 }} // Duration of the animation (1.5 + 0.5)
                />
            </div>
        </div>
    </div>
</motion.section>


            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }} // Slight delay for the next section
                className="mx-auto max-w-screen-xl px-4 py-8"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">We Are a Community!!!</h2>
                </div>

                <div className="flex justify-center gap-x-4">
                    {/* Articles */}
                    {["We are a community of developers", "We are here to guide and help our own", "We are always ready for the world"].map((title, index) => (
                        <article
                            key={index}
                            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] w-[450px]"
                        >
                            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                                <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                                    10th Oct 2024
                                </time>

                                <a href="#">
                                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                        {title}
                                    </h3>
                                </a>

                                <div className="mt-4 flex flex-wrap gap-1">
                                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                        Developer
                                    </span>
                                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                        Community
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }} // Further delay for the next section
                className="bg-gray-50"
            >
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Get in touch with Us!
                        </h2>
                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            If you're a student or developer interested in Google technologies and want to connect with like-minded individuals, GDG on Campus RCCIIT would be a great place to join.
                        </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-xl">
                        <form onSubmit={handleSubmit} className="sm:flex sm:gap-4" noValidate>
                            <div className="sm:flex-1">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email address"
                                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 hover:bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
                            >
                                <span className="text-sm font-medium"> Sign Up </span>
                                <svg
                                    className="size-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
