import Image from "next/image";
import aiImg from "../images/ai_img.jpg";
import team from "../images/teamMember.jpg";
import { SiGooglemeet,SiFirebase ,SiTensorflow,SiFlutter,SiGoogleassistant} from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { AiOutlineKubernetes } from "react-icons/ai";
import { FaAngular, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Homepage()
{
    return (
        <div className="ml-[20px]">
            <div className="flex justify-center lg:mt-[130px]">
                logo
            </div>
            <div className="lg:text-5xl lg:text-center font-bold text-3xl my-[30px] ">
                Empowering <text className="text-blue-500">developers</text>, <text className="text-green-500">building</text> <text className="text-red-500">the</text> <text className="text-yellow-500">Future</text>
            </div>
            <div className="lg:text-center lg:mt-[50px] lg:text-xl lg:mx-[240px]">
                Whether you're a beginner or an expert, GDG RCCIIT is the perfect place to grow your skills, network with like-minded individuals, and stay updated with the latest tech trends.
            </div>
            <div className="flex justify-center">
                <button className="bg-yellow-500 px-6 py-2 my-3 lg:my-10 rounded-lg lg:text-lg text-blue-600">Join us!</button>
                <button className=""></button>
            </div>

            <div>
                <div className="text-center text-2xl lg:text-5xl my-4 lg:my-10 font-bold">Our events</div>
                    <div className="grid lg:grid-cols-4 lg:gap-4 grid-cols-2 lg:px-5 ">
                        <div className="lg:w-[350px] w-[180px]">
                            <div className="lg:flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[160px] h-[140px]"/></div><br/>
                            <div className="">Join us for an exciting hands-on workshop of AI! </div>
                            <div className="lg:flex justify-center py-3"><button className="bg-blue-500 px-6 py-1 rounded-lg">Register</button></div>
                        </div>

                        <div className="lg:w-[350px] w-[180px]">
                            <div className="lg:flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[160px] h-[140px]"/></div><br/>
                            <div className=" ">Join us for an exciting hands-on workshop of AI! </div>
                            <div className="lg:flex justify-center py-3"><button className="bg-blue-500 px-6 py-1 rounded-lg">Register</button></div>
                        </div>

                        <div className="lg:w-[350px] w-[180px]">
                            <div className="lg:flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[160px] h-[140px]"/></div><br/>
                            <div className="lg:text-center ">Join us for an exciting hands-on workshop of AI! </div>
                            <div className="lg:flex justify-center py-3"><button className="bg-blue-500 px-6 py-1 rounded-lg">Register</button></div>
                        </div>

                        <div className="lg:w-[350px] w-[180px]">
                            <div className="lg:flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[160px] h-[140px]"/></div><br/>
                            <div className="lg:text-center ">Join us for an exciting hands-on workshop of AI!</div>
                            <div className="lg:flex justify-center py-3"><button className="bg-blue-500 px-6 py-1 rounded-lg">Register</button></div>
                        </div>

                    </div>
            </div>

            <div>
                <div className="text-center text-2xl lg:text-5xl my-4 lg:my-20 font-bold">Featured Projects</div>
                <div className="grid lg:grid-cols-4 lg:gap-4 grid-cols-2 lg:px-5 ">
                    <div className="lg:w-[350px] w-[160px] bg-white py-2 rounded-lg mb-2">
                            <div className="flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[150px] h-[140px]"/></div><br/>
                                <div className="grid lg:grid-cols-2 grid-col-1">
                                <div className="text-center text-black font-bold lg:text-2xl">Immersifier</div>
                                <div className="flex justify-center"><button className="bg-blue-500 lg:px-6 py-1 px-3 rounded-lg">Know more</button></div>

                            </div>
                    </div>
                    <div className="lg:w-[350px] w-[160px] bg-white py-2 rounded-lg mb-2">
                            <div className="flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[150px] h-[140px]"/></div><br/>
                                <div className="grid lg:grid-cols-2 grid-col-1">
                                <div className="text-center text-black font-bold lg:text-2xl">Immersifier</div>
                                <div className="flex justify-center"><button className="bg-blue-500 lg:px-6 py-1 px-3 rounded-lg">Know more</button></div>

                            </div>
                    </div>
                    <div className="lg:w-[350px] w-[160px] bg-white py-2 rounded-lg mb-2">
                            <div className="flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[150px] h-[140px]"/></div><br/>
                                <div className="grid lg:grid-cols-2 grid-col-1">
                                <div className="text-center text-black font-bold lg:text-2xl">Immersifier</div>
                                <div className="flex justify-center"><button className="bg-blue-500 lg:px-6 py-1 px-3 rounded-lg">Know more</button></div>

                            </div>
                    </div>
                    <div className="lg:w-[350px] w-[160px] bg-white py-2 rounded-lg mb-2">
                            <div className="flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[150px] h-[140px]"/></div><br/>
                                <div className="grid lg:grid-cols-2 grid-col-1">
                                <div className="text-center text-black font-bold lg:text-2xl">Immersifier</div>
                                <div className="flex justify-center"><button className="bg-blue-500 lg:px-6 py-1 px-3 lg:rounded-lg rounded-md">Know more</button></div>

                            </div>
                    </div>

                    </div>
                </div>

                <div>
                    <div className="text-center text-2xl lg:text-5xl my-4 lg:mt-20 font-bold">Google Technologies</div>
                    <div className="my-[20px] text-center">At GDGRCCIIT we use various google Technologies </div>
                    <div className="grid lg:grid-cols-6 grid-cols-3 ml-8">
                        <div><SiTensorflow className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"/></div>
                        <div><SiFirebase className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"/></div>
                        <div><SiFlutter className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"/></div>
                        <div><IoLogoAndroid className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"/></div>
                        <div><AiOutlineKubernetes className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"/></div>
                        <div><FaAngular className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"/></div>
                    </div>
                </div>

                <div>
                    <div className="text-center text-2xl lg:text-5xl my-7 lg:mt-20 font-bold">What Our Team Members</div>
                        <div className="grid lg:grid-cols-4 mt-10">
                            <div className="">
                                <div className="flex justify-center"><Image src={team} className="lg:w-[250px] w-[150px] rounded-full"/></div>
                                <div className="text-center mx-5 mt-3">"Working with GDG has been an incredible learning experience. I've grown both as a developer and a community leader."</div>
                            </div>

                            <div className="">
                                <div className="flex justify-center"><Image src={team} className="lg:w-[250px] w-[150px] rounded-full"/></div>
                                <div className="text-center mx-5 mt-3">"Working with GDG has been an incredible learning experience. I've grown both as a developer and a community leader."</div>
                            </div>

                            <div className="">
                                <div className="flex justify-center"><Image src={team} className="lg:w-[250px] w-[150px] rounded-full"/></div>
                                <div className="text-center mx-5 mt-3">"Working with GDG has been an incredible learning experience. I've grown both as a developer and a community leader."</div>
                            </div>

                            <div className="">
                                <div className="flex justify-center"><Image src={team} className="lg:w-[250px]  w-[150px] rounded-full"/></div>
                                <div className="text-center mx-5 mt-3">"Working with GDG has been an incredible learning experience. I've grown both as a developer and a community leader."</div>
                            </div>
                        </div>
                </div>

                <div className="border-t-[1px] my-[20px]">
                    <div className="lg:text-3xl">GDG</div>
                    <div>RCCIIT</div>
                    <div className="w-1/5 flex justify-start">
                    <div><FaInstagram className="w-[20px] h-[20px]"/></div>
                    <div className="mx-3"><FaTwitter className="w-[20px] h-[20px]"/></div>
                    <div><FaFacebook className="w-[20px] h-[20px]"/></div>
                    </div>
                    
                </div>
            </div>
    
    )
}