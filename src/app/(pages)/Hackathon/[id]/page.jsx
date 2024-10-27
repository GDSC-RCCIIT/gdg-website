'use client'
import { hackathonProjects } from "@/lib/Hackathon";
import { motion } from "framer-motion";
import { CircleOff, Code, Contact, Cross, LandPlot, Ruler, Scale, TentTree, Timer } from "lucide-react";
import { useRouter } from "next/navigation";


export default function SingleHackathon({ params }) {
    const router = useRouter();
    const { title } = params.id;

    const project = title
    ? hackathonProjects.find((project) => project.title === title)
    : null;

    // if (!project) {
    //     return <p>Loading or Project not found</p>; // Render loading state or error message
    //   }
    return (
        <>
            {/* <div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div> */}
            <div className="text-center pt-10">
          <motion.h1
            className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title || 'Hackathon Title'}
          </motion.h1>

          <motion.p
            className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Girl Hackathon is a program for women students in computer science and allied courses across India.
          </motion.p>
        </div>

            <section className="overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                            quisque ut interdum tincidunt duis.
                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>

            <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto mb-12 xl:px-0 mt-5">
                <h2 class="mb-1 mt-8 text-3xl font-extrabold leading-tight text-gray-900">Tracks</h2>
                <p class="mb-12 text-lg text-gray-500">Here is a few of the awesome Tracks you can select.</p>
                <div class="w-full">
                    <div class="flex flex-col w-full mb-10 sm:flex-row">
                        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                                        decentralized network that combines a smart contract and a frontend user interface.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="relative h-full ml-0 md:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-500 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-red-500 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-red-500 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                                        focus on understanding and analyzing data to provide a semantic web.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full mb-5 sm:flex-row">
                        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Open Ideas</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">You may have any open ideas You wish to showcase to us or apply to implementation during the hackathon.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div class="relative h-full ml-0 mr-0 sm:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                                        defenses and exploiting weaknesses in a computer system or network.</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <div class="relative h-full ml-0 md:mr-10">
                                <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                    <div class="flex items-center -mt-1">
                                        <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                                    </div>
                                    <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                    <p class="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                                        that eliminate a large amount of manual work and accelerate the development process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="">
                <div class="py-12 bg-white">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div class="lg:text-center">
                            <h2 class="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                                Rules and Regulations
                            </h2>
                            <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                Guidelines for All Participants
                            </p>
                            <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                                Please read and adhere to the following rules and regulations to ensure a smooth and fair experience for everyone.
                            </p>
                        </div>

                        <div class="mt-10">
                            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <div class="relative">
                                    <dt>
                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                                            <LandPlot size={42} />
                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Eligibility</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        All participants must be enrolled in an academic institution and meet the criteria outlined in the hackathon details.
                                    </dd>
                                </div>
                                <div class="relative">
                                    <dt>
                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                                            <TentTree size={42} />
                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Team Formation</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        Teams can consist of up to four members, and no participant may be part of more than one team.
                                    </dd>
                                </div>
                                <div class="relative">
                                    <dt>
                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                                            <Ruler size={42} />
                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Code of Conduct</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        All participants must adhere to respectful behavior. Discriminatory or inappropriate conduct will lead to disqualification.
                                    </dd>
                                </div>
                                <div class="relative">
                                    <dt>
                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                                            <Code size={42} />
                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Intellectual Property</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        All projects submitted must be original work. Plagiarism or use of unauthorized resources will result in disqualification.
                                    </dd>
                                </div>
                                <div class="relative">
                                    <dt>
                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                                            <Timer size={42} />
                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Submission Deadline</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        All submissions must be completed by the specified deadline. Late entries will not be accepted.
                                    </dd>
                                </div>
                                <div class="relative">
                                    <dt>
                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                                            <Scale size={42} />
                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Judging Criteria</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        Projects will be judged based on innovation, functionality, design, and presentation.
                                    </dd>
                                </div>
                                <div class="relative">
                                    <dt>
                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                                            <Contact size={42} />
                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Support and Queries</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        Any questions or requests for assistance should be directed to the event organizers.
                                    </dd>
                                </div>
                                <div class="relative">
                                    <dt>
                                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                                            <CircleOff size={42} />
                                        </div>
                                        <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Disqualification</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        Any breach of the rules may lead to immediate disqualification from the hackathon.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}