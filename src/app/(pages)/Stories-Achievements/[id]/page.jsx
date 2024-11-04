"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const AchievementDetail = () => {
  const params = useParams();
  const { id } = params;
  const [achievementDetails, setAchievementDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/achievements/${id}`)
        .then((response) => {
          setAchievementDetails(response.data);
          console.log("first", response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching hackathon details:", error);
        });
    }
  }, [id]);

  if (loading || !id) return <p>Loading...</p>;

  return (
    <>
      <div className="mt-24">
        <section
          id="home"
          class="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800"
        >
          <div class="md:w-1/2">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white text-black mb-4">
              Hello, I’m {achievementDetails.name}{" "}
            </h1>
            <p class=" text-sm dark:text-gray-300 text-gray-600">
              {achievementDetails.job}
            </p>
            <p class="text-lg sm:text-xl md:text-2xl italic font-medium dark:text-gray-300 text-gray-600">
              {achievementDetails.testimonial}
            </p>
          </div>
          <div class="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={achievementDetails.imageUrl}
              alt="Profile Picture"
              class="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-indigo-500 object-cover"
            />
          </div>
        </section>

        <div class="w-full h-8 mt-12">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
              class="fill-current text-gray-400"
            ></path>
          </svg>
        </div>

        <section className="mt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold dark:text-white text-black mt-8 mb-4">
            My Top Achievements
          </h1>
          <p className="text-center text-sm text-gray-400 italic">
            Duration of my Project was {achievementDetails.duration}
          </p>
          <div class="flex flex-wrap justify-center mt-10">
            {achievementDetails.achievementsDetails.map((ach, index) => (
              <div key={index} class="p-4 max-w-sm">
                <div class="flex rounded-lg h-full dark:bg-gray-800 bg-indigo-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 class="text-black dark:text-white text-lg font-medium">
                      Feature {index + 1}
                    </h2>
                  </div>
                  <div class="flex flex-col justify-between flex-grow">
                    <p class="leading-relaxed text-base text-black dark:text-gray-300">
                      {ach}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div class="max-w-4xl mx-auto px-5 mt-16">
            <div class="text-center">
              <h2 class="font-semibold text-3xl">
                Challenges I faced and the Lessons I learned
              </h2>
              <p class="max-w-md mx-auto mt-2 text-gray-500">
                Know what I faced and know what I learned so you can grow!
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-10 mt-10">
              <div>
                {achievementDetails.challenges.map((challenge, index) => (
                  <div key={index} class="flex gap-4 items-start mb-10">
                    <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                      >
                        <path
                          d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <div>
                      <h3 class="font-semibold text-xl">{challenge}</h3>
                      {/* <p class="mt-1 text-gray-500">
                      {" "}
                      You don't need to be an expert to customize this plugin.
                      Our code is very readable and well documented.
                    </p> */}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                {achievementDetails.lessonsLearned.map((lesson, index) => (
                  <div key={index} class="flex gap-4 items-start mb-10">
                    <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                      >
                        <path
                          d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <div>
                      <h3 class="font-semibold text-xl">{lesson}</h3>
                      {/* <p class="mt-1 text-gray-500">
                    {" "}
                    We make sure our plugins are working perfectly with all
                    modern browsers available such as Chrome, Firefox, Safari.{" "}
                  </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="items-center">
          <div class="mx-auto max-w-full mt-20  border-4 border-indigo-600 shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 max-w-5xl mx-5 p-4 md:p-10 flex flex-col items-center justify-center text-center">
            <p class="text-indigo-900 text-xl md:text-2xl font-bold border-b-4 border-b-indigo-300">
              Let's Connect
            </p>

            <ul class="flex flex-row items-center justify-center text-center mt-5">
              <li class="mx-2">
                <a href={achievementDetails?.twitterLink} target="_blank" aria-label="Share on Twitter">
                  <svg
                    class="h-8 text-indigo-700 hover:text-indigo-300"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
              </li>

              <li class="mx-2">
                <a href={achievementDetails?.link} target="_blank" aria-label="Share on LinkedIn">
                  <svg
                    class="h-8 text-indigo-700 hover:text-indigo-300"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </li>

              <li class="mx-2">
                <a href={achievementDetails?.facebookLink} target="_blank" aria-label="Share on Facebook">
                  <svg
                    class="h-8 text-indigo-700 hover:text-indigo-300"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default AchievementDetail;
