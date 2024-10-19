import Image from "next/image";
import aiImg from "../../app/images/ai_img.jpg";
import team from "../../app/images/teamMember.jpg";
import { SiGooglemeet,SiFirebase ,SiTensorflow,SiFlutter,SiGoogleassistant} from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { AiOutlineKubernetes } from "react-icons/ai";
import { FaAngular, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Homepage()
{
    return (
        <div className="ml-[20px]">
            

            <div>
                <div className="text-center text-2xl lg:text-5xl my-4 lg:my-10 font-bold">Our events</div>
                    <div className="grid lg:grid-cols-4 lg:gap-4 grid-cols-2 lg:px-5">
                        <div className="lg:w-[320px] w-[180px] border-[1px] border-black border-r-2 rounded-md shadow-md shadow-black">
                            <div className="lg:flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[160px] h-[140px]"/></div><br/>
                            <div className="px-2">Join us for an exciting hands-on workshop of AI! </div>
                            <div className="px-2 py-3"><button className="bg-blue-500 px-6 py-1 rounded-lg">Register</button></div>
                        </div>

                        <div className="lg:w-[320px] w-[180px] border-[1px] border-black border-r-2 rounded-md shadow-md shadow-black">
                            <div className="lg:flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[160px] h-[140px]"/></div><br/>
                            <div className=" px-2">Join us for an exciting hands-on workshop of AI! </div>
                            <div className="px-2 py-3"><button className="bg-blue-500 px-6 py-1 rounded-lg">Register</button></div>
                        </div>

                        <div className="lg:w-[320px] w-[180px] border-[1px] border-black border-r-2 rounded-md shadow-md shadow-black">
                            <div className="lg:flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[160px] h-[140px]"/></div><br/>
                            <div className=" px-2">Join us for an exciting hands-on workshop of AI! </div>
                            <div className="px-2 py-3"><button className="bg-blue-500 px-6 py-1 rounded-lg">Register</button></div>
                        </div>

                        <div className="lg:w-[320px] w-[180px] border-[1px] border-black border-r-2 rounded-md shadow-md shadow-black">
                            <div className="lg:flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[160px] h-[140px]"/></div><br/>
                            <div className=" px-2">Join us for an exciting hands-on workshop of AI!</div>
                            <div className="px-2  py-3"><button className="bg-blue-500 px-6 py-1 rounded-lg">Register</button></div>
                        </div>

                    </div>
            </div>

            <div>
                <div className="text-center text-2xl lg:text-5xl my-4 lg:my-20 font-bold">Featured Projects</div>
                <div className="grid lg:grid-cols-4 lg:gap-4 grid-cols-2 lg:px-5 ">
                    <div className="lg:w-[350px] w-[160px] bg-black py-5 rounded-lg mb-2">
                            <div className="flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[150px] h-[140px]"/></div><br/>
                                <div className="grid lg:grid-cols-2 grid-col-1">
                                <div className="text-center text-white font-bold lg:text-2xl">Immersifier</div>
                                <div className="flex justify-center"><button className="bg-blue-500 lg:px-6 py-1 px-3 rounded-lg">Know more</button></div>

                            </div>
                    </div>
                    <div className="lg:w-[350px] w-[160px] bg-black py-5 rounded-lg mb-2">
                            <div className="flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[150px] h-[140px]"/></div><br/>
                                <div className="grid lg:grid-cols-2 grid-col-1">
                                <div className="text-center text-white font-bold lg:text-2xl">Immersifier</div>
                                <div className="flex justify-center"><button className="bg-blue-500 lg:px-6 py-1 px-3 rounded-lg">Know more</button></div>

                            </div>
                    </div>
                    <div className="lg:w-[350px] w-[160px] bg-black py-5 rounded-lg mb-2">
                            <div className="flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[150px] h-[140px]"/></div><br/>
                                <div className="grid lg:grid-cols-2 grid-col-1">
                                <div className="text-center text-white font-bold lg:text-2xl">Immersifier</div>
                                <div className="flex justify-center"><button className="bg-blue-500 lg:px-6 py-1 px-3 rounded-lg">Know more</button></div>

                            </div>
                    </div>
                    <div className="lg:w-[350px] w-[160px] bg-black py-5 rounded-lg mb-2">
                            <div className="flex justify-center"><Image src={aiImg} className="lg:w-[320px] lg:h-[260px] w-[150px] h-[140px]"/></div><br/>
                                <div className="grid lg:grid-cols-2 grid-col-1">
                                <div className="text-center text-white font-bold lg:text-2xl">Immersifier</div>
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

                <div className="mb-10">
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

            </div>
    
    )
}