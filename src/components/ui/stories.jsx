

import React from 'react';

const testimonials = [
    {
      title: "Pioneering Innovation in AI and Machine Learning",
      content: [
        "Ananya's journey started at RCCIIT, where she became an active member of the Google Developer Student Club (GDSC). Her curiosity and dedication led her to explore the depths of artificial intelligence.",
        "As a developer, she quickly rose through the ranks, contributing to groundbreaking projects that pushed the boundaries of what's possible with AI.",
        "Today, as a Developer at Open AI, Ananya is a shining example of what passion and perseverance can achieve."
      ],
      author: "Ananya Sen",
      jobTitle: "Developer at Open AI",
      imgUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
    },
    {
      title: "Designing the Future of Digital Experiences",
      content: [
        "Priya's career in design took off when she joined the GDSC at RCCIIT, where she honed her skills and grew her professional network.",
        "Her attention to detail and innovative approach to user experience made her an invaluable asset to any team.",
        "Now, as the Lead Designer at Dropbox, Priya shapes user experiences that make a difference to millions around the world."
      ],
      author: "Priya Chatterjee",
      jobTitle: "Lead Designer at Dropbox",
      imgUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
    },
    {
      title: "Revolutionizing Social Media Platforms",
      content: [
        "Arjun's early work with the Google Developer Student Club at RCCIIT allowed him to explore new technologies and collaborate with like-minded individuals.",
        "His technical expertise and innovative spirit have driven him to create seamless, engaging user experiences in the social media space.",
        "Now a Software Engineer at Facebook, Arjun continues to push the envelope, making social media more interactive and accessible."
      ],
      author: "Arjun Roy",
      jobTitle: "Software Engineer at Facebook",
      imgUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
    },
    {
      title: "Leading Technological Innovation at Scale",
      content: [
        "Ritwik's path to becoming the CTO of Google began during his time at RCCIIT, where he played an active role in the Google Developer Student Club.",
        "His ability to combine technical knowledge with leadership skills quickly set him apart as a visionary leader.",
        "With a deep understanding of both technology and strategy, Ritwik now oversees cutting-edge projects that impact millions worldwide."
      ],
      author: "Ritwik Basu",
      jobTitle: "CTO at Google",
      imgUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
    }
  ];
  
const Achievements = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Stories</h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the sucess stoeries of the previous GDSC members from our campus who are now in prestigous parts of world.
          </p>
        </div> 
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <figure 
              key={index} 
              className={`flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? 'lg:border-r' : ''}`}
            >
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.title}</h3>
                {testimonial.content.map((paragraph, i) => (
                  <p className="my-4" key={i}>{paragraph}</p>
                ))}
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src={testimonial.imgUrl} alt="profile picture"/>
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{testimonial.author}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">{testimonial.jobTitle}</div>
                </div>
              </figcaption>    
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
