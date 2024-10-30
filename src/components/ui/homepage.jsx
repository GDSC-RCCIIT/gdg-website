// export default function Homepage() {
//     return (
//         <div className="bg-white text-gray-900 select-none">
//             <section className="py-12 px-6 md:px-16 ml-40 mr-40">
//                 <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Path to Success</h2>
//                 <div className="flex flex-col md:flex-row items-center mb-16">
//                     <img
//                         src="/vision.webp"
//                         alt="Vision"
//                         className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
//                     />
//                     <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
//                         <h3 className="text-4xl font-semibold text-gray-800 mb-4">🌟 Vision</h3>
//                         <p className="text-xl text-gray-600 leading-relaxed">
//                             Our vision is to create a world where technology and innovation lead to the betterment of human lives, driving progress and success.
//                             We aim to bridge gaps and create opportunities through collaboration and forward-thinking strategies that inspire change and growth across all sectors.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="flex flex-col md:flex-row-reverse items-center mb-16">
//                     <img
//                         src="/mission.webp"
//                         alt="Mission"
//                         className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
//                     />
//                     <div className="md:mr-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
//                         <h3 className="text-4xl font-semibold text-gray-800 mb-4">🎯 Mission</h3>
//                         <p className="text-xl text-gray-600 leading-relaxed">
//                             Our mission is to empower individuals and organizations through cutting-edge technological solutions, fostering growth and innovation.
//                             By providing comprehensive support and resources, we strive to cultivate an environment where creativity and technology thrive together.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="flex flex-col md:flex-row items-center mb-16">
//                     <img
//                         src="/goal.webp"
//                         alt="Goal"
//                         className="w-full md:w-1/2 h-64 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
//                     />
//                     <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2">
//                         <h3 className="text-4xl font-semibold text-gray-800 mb-4">🚀 Goal</h3>
//                         <p className="text-xl text-gray-600 leading-relaxed">
//                             Our goal is to continuously push the boundaries of what's possible and lead the way towards a more prosperous, tech-driven future.
//                             We aim to inspire and equip the next generation of innovators to tackle challenges and seize opportunities that arise in a rapidly evolving digital landscape.
//                         </p>
//                     </div>
//                 </div>
//             </section>
//             <section className="bg-blue-600 py-16 px-8">
//                 <div className="max-w-4xl mx-auto text-center relative bg-white rounded-lg shadow-lg p-12 transform transition-transform duration-500 hover:scale-105">
//                     <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>

//                     <blockquote className="relative text-3xl font-semibold text-gray-800 italic mb-6">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11V9a6 6 0 0112 0v1a6 6 0 01-6 6h-3v2a6 6 0 11-12 0v-1" />
//                         </svg>
//                         "Coming together is a beginning, staying together is progress, and working together is success."
//                     </blockquote>

//                     <cite className="relative text-lg font-medium text-gray-700">
//                         - Henry Ford
//                     </cite>
//                 </div>
//             </section>
//         </div>
//     );
// }
'use client'
import { motion } from "framer-motion";
import Slider from "react-slick"; // Make sure to install react-slick and slick-carousel
import "slick-carousel/slick/slick.css"; // Corrected import
import "slick-carousel/slick/slick-theme.css"; // Corrected import

export default function Homepage() {
    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Slide every 3 seconds
    };

    return (
        <div className="bg-white text-gray-900 select-none">
    <section className="py-12 px-6 md:px-16 lg:ml-40 lg:mr-40">
        <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            Path to Success
        </motion.h2>

        <motion.div 
            className="flex flex-col md:flex-row items-center mb-12 md:mb-16"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.img
                src="/vision.webp"
                alt="Vision"
                className="w-full md:w-1/2 h-48 md:h-64 object-contain rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div 
                className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">🌟 Vision</h3>
                <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                    Our vision is to create a world where technology and innovation lead to the betterment of human lives, driving progress and success.
                    We aim to bridge gaps and create opportunities through collaboration and forward-thinking strategies that inspire change and growth across all sectors.
                </p>
            </motion.div>
        </motion.div>


                <motion.div 
                    className="flex flex-col md:flex-row items-center mb-16"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.img
                        src="/goal.webp"
                        alt="Goal"
                        className="w-full md:w-1/2 h-64 object-contain rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                        className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-4xl font-semibold text-gray-800 mb-4">🚀 Goal</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Our goal is to continuously push the boundaries of what's possible and lead the way towards a more prosperous, tech-driven future.
                            We aim to inspire and equip the next generation of innovators to tackle challenges and seize opportunities that arise in a rapidly evolving digital landscape.
                        </p>
                    </motion.div>
                </motion.div>

                <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">User Testimonials & Achievements</h2>
                
                <div className="flex flex-col md:flex-row justify-around mb-16">
                    <div className="bg-white shadow-lg rounded-lg p-6 m-4 md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">🏆 Hackathon Winner</h3>
                        <p className="text-gray-600">
                            "Participating in the annual hackathon was a transformative experience. Our team won first place with our innovative project!"
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 m-4 md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">🌟 Successful Project</h3>
                        <p className="text-gray-600">
                            "Our project not only met the goals but also exceeded expectations, leading to a successful launch and positive feedback from users."
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 m-4 md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">🎉 Impactful Event</h3>
                        <p className="text-gray-600">
                            "The recent event brought together industry leaders and aspiring innovators, creating a platform for collaboration and inspiration."
                        </p>
                    </div>
                </div>

                <section className="py-12 px-6 md:px-16 ml-40 mr-40">
                    <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">User Reviews</h2>
                    
                    <Slider {...sliderSettings}>
                        <div className="bg-blue-50 shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
                            <p className="text-gray-800 text-lg">
                                "This platform has transformed the way I approach my projects. The resources available are top-notch! 🚀"
                            </p>
                            <cite className="block text-right text-blue-600 font-semibold">- User 1</cite>
                        </div>
                        <div className="bg-blue-50 shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
                            <p className="text-gray-800 text-lg">
                                "I had an amazing experience collaborating with others. The community is incredibly supportive! 🤝"
                            </p>
                            <cite className="block text-right text-blue-600 font-semibold">- User 2</cite>
                        </div>
                        <div className="bg-blue-50 shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
                            <p className="text-gray-800 text-lg">
                                "The events organized are insightful and provide great networking opportunities. 🌐"
                            </p>
                            <cite className="block text-right text-blue-600 font-semibold">- User 3</cite>
                        </div>
                        <div className="bg-blue-50 shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
                            <p className="text-gray-800 text-lg">
                                "I learned so much from the workshops. Highly recommend to anyone looking to grow their skills! 📚"
                            </p>
                            <cite className="block text-right text-blue-600 font-semibold">- User 4</cite>
                        </div>
                        <div className="bg-blue-50 shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
                            <p className="text-gray-800 text-lg">
                                "The support from mentors has been invaluable. I feel more confident in my abilities now. 💪"
                            </p>
                            <cite className="block text-right text-blue-600 font-semibold">- User 5</cite>
                        </div>
                        <div className="bg-blue-50 shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
                            <p className="text-gray-800 text-lg">
                                "A fantastic platform for innovation and collaboration. I can't wait for the next event! 🎉"
                            </p>
                            <cite className="block text-right text-blue-600 font-semibold">- User 6</cite>
                        </div>
                        <div className="bg-blue-50 shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105">
                            <p className="text-gray-800 text-lg">
                                "The community is filled with passionate individuals. It's inspiring to be a part of it! 🌟"
                            </p>
                            <cite className="block text-right text-blue-600 font-semibold">- User 7</cite>
                        </div>
                    </Slider>
                </section>
            </section>

        <motion.div 
            className="flex flex-col md:flex-row-reverse items-center mb-12 md:mb-16"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.img
                src="/mission.webp"
                alt="Mission"
                className="w-full md:w-1/2 h-48 md:h-64 object-contain rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div 
                className="md:mr-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">🎯 Mission</h3>
                <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                    Our mission is to empower individuals and organizations through cutting-edge technological solutions, fostering growth and innovation.
                    By providing comprehensive support and resources, we strive to cultivate an environment where creativity and technology thrive together.
                </p>
            </motion.div>
        </motion.div>


        <motion.div 
            className="flex flex-col md:flex-row items-center mb-12 md:mb-16"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.img
                src="/goal.webp"
                alt="Goal"
                className="w-full md:w-1/2 h-48 md:h-64 object-contain rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div 
                className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">🚀 Goal</h3>
                <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                    Our goal is to continuously push the boundaries of what's possible and lead the way towards a more prosperous, tech-driven future.
                    We aim to inspire and equip the next generation of innovators to tackle challenges and seize opportunities that arise in a rapidly evolving digital landscape.
                </p>
            </motion.div>
        </motion.div>
    </section>

    <motion.section 
        className="bg-blue-600 py-16 px-6 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
    >
        <motion.div 
            className="max-w-2xl md:max-w-4xl mx-auto text-center relative bg-white rounded-lg shadow-lg p-8 md:p-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
        >
            <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>

            <blockquote className="relative text-xl md:text-3xl font-semibold text-gray-800 italic mb-4 md:mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 md:w-12 h-8 md:h-12 text-blue-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11V9a6 6 0 0112 0v1a6 6 0 01-6 6h-3v2a6 6 0 11-12 0v-1" />
                </svg>
                "Coming together is a beginning, staying together is progress, and working together is success."
            </blockquote>

            <cite className="relative text-base md:text-lg font-medium text-gray-700">
                - Henry Ford
            </cite>
        </motion.div>
    </motion.section>
</div>

    );
}
