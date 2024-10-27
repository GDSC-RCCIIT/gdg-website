"use client";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function SingleProject() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "1";
  console.log("Project ID:", id);

  const [projectDetails, setProjectDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/projects/${id}`)
        .then((response) => {
          setProjectDetails(response.data);
          console.log("Project details:", response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching project details:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!projectDetails) return <p>No details found for this project.</p>;

  return (
    <>
      <div class="bg-white py-8 sm:py-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="text-center">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {projectDetails.projectTitle}
              </h2>
              <p class="mt-4 text-lg leading-8 text-gray-600">
                {projectDetails.projectOverview}
              </p>
            </div>
            <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-md font-semibold leading-6 text-gray-600">
                  {projectDetails.projectStartDate}
                </dt>
                <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900">
                  Start Date
                </dd>
              </div>
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-md font-semibold leading-6 text-gray-600">
                  {" "}
                  {projectDetails.projectEndDate}
                </dt>
                <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900">
                  {" "}
                  End Date:
                </dd>
              </div>
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-md font-semibold leading-6 text-gray-600">
                  {" "}
                  {projectDetails.projectManager.name} -{" "}
                  {projectDetails.projectManager.contact}
                </dt>
                <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900">
                  {" "}
                  Project Manager
                </dd>
              </div>
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-md font-semibold leading-6 text-gray-600">
                  {" "}
                  ${projectDetails.totalProjectBudget}
                </dt>
                <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900">
                  {" "}
                  Total Budget
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div class="p-4 mt-4">
        <h1 className="text-5xl text-center mb-4 font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Current Status
        </h1>
        <div class="container">
          <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i class="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 class="font-semibold text-lg mb-1">Completed Tasks</h3>
                <p class="leading-tight text-justify w-full">
                  <ul className="list-disc list-inside">
                    {projectDetails.currentStatus.completedTasks.map(
                      (task, index) => (
                        <li key={index}>{task}</li>
                      )
                    )}
                  </ul>
                </p>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-indigo-500 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow text-center">
                  <i class="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div class="bg-indigo-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 class="font-semibold text-lg mb-1 text-gray-50">
                  Ongoing Tasks
                </h3>
                <p class="leading-tight text-justify">
                  <ul className="list-disc list-inside">
                    {projectDetails.currentStatus.ongoingTasks.map(
                      (task, index) => (
                        <li key={index}>{task}</li>
                      )
                    )}
                  </ul>
                </p>
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-500 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                  <i class="fas fa-exclamation-circle text-gray-500"></i>
                </div>
              </div>
              <div class="bg-gray-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 class="font-semibold text-lg mb-1 text-white">
                  Upcoming Milestones
                </h3>
                <p class="leading-tight text-justify">
                  <ul className="list-disc list-inside">
                    {projectDetails.currentStatus.upcomingMilestones.map(
                      (milestone, index) => (
                        <li key={index}>{milestone}</li>
                      )
                    )}
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-8 px-6 md:px-16 ml-40 mr-40">
        <motion.h2
          className="text-5xl text-center mb-4 font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Goals & Objectives
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-center mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/vision.webp"
            alt="Vision"
            className="w-full md:w-1/2 h-64 object-contain rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="md:ml-8 text-center md:text-left mt-6 md:mt-0 md:w-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">
              🌟 Primary Goals
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              <ul className="list-disc list-inside">
                {projectDetails.primaryGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>{" "}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/mission.webp"
            alt="Mission"
            className="w-full md:w-1/2 h-64 object-contain rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="md:mr-8 text-center md:text-left mt-6 md:mt-0 md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">
              🎯 Specific Objectives
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              <ul className="list-disc list-inside">
                {projectDetails.specificObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
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
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">
              🚀 Milestone Schedule
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              <ul className="list-disc list-inside">
                {projectDetails.milestoneSchedule.map((milestone) => (
                  <li key={milestone.milestone}>
                    <strong>{milestone.milestone}</strong> -{" "}
                    {milestone.targetCompletionDate}
                  </li>
                ))}
              </ul>
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-6 lg:max-w-screen-xl py-8">
        <div class="">
          <h3 className="text-5xl text-center mb-4 font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Our Team
          </h3>
          <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
            Our Team who put their sweat in to building the project!!!
          </p>
        </div>
        <div class="grid lg:grid-cols-3 lg:gap-4 mt-4 lg:mt-8">
          {projectDetails.projectTeamMembers.map((member) => (
            <div
              key={member.name}
              class="lg:flex lg:items-center lg:justify-between border p-4 rounded mt-4 lg:mt-0"
            >
              <div class="flex-1 min-w-0 mt-5 lg:mt-0">
                <a href="#">
                  <div class="flex">
                    <div>
                      <div class="flex lg:mt-0 lg:ml-0">
                        <span class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-400 mt-1">
                          <img
                            class="rounded-full"
                            src="https://loremflickr.com/g/320/240/girl"
                          />
                        </span>
                      </div>
                    </div>

                    <div class="ml-4">
                      <h2 class="text-xl font-semibold text-indigo-600">
                        {member.name}
                      </h2>
                      <div class="text-gray-500 text-xs">
                        {member.responsibilities}
                      </div>
                      <div class="text-gray-900 text-md">
                        <strong> Designated Work: </strong>
                        {member.designatedWork}
                      </div>
                      <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                        <div class="mt-2 flex gap-2 items-center leading-5 text-gray-600 sm:mr-6 text-sm">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600"
                          >
                            <FaLinkedin />
                          </a>

                          {member.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="container bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w mx-auto mb-10">
        <div class="text-3xl font-bold mb-4">Additional Links!</div>
        <div class="text-lg mb-4">
          Look at the <span class="text-yellow-400 font-bold">Project </span> Plan
        </div>
        {/* <div class="text-base mb-4">Use coupon code:</div> */}
        <div class="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
          <span class="text-2xl font-semibold">Plan Doc</span>
          <button class="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <a
            href={projectDetails.projectPlan}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Visit
            </a>
          </button>
        </div>
        <div class="text-sm mt-4">
          <p className="flex gap-2 mb-2">
            <FaYoutube size={20}/>
            Youtube Link: <span class="font-semibold text-white">
            <a
            href={projectDetails.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            HERE
          </a></span>
          </p>
          <p className="flex gap-2">
            <FaGithub  size={20}/>
            Github Link: <span class="font-semibold text-white"> <a
            href={projectDetails?.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            HERE
          </a>
          </span>
           </p>
        </div>
      </div>

      
    </>
  );
}
