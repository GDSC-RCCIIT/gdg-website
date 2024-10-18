import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Subscribe() {
    return (
        <>
            <div className="relative bg-white -top-8 h-fit md2:h-screen lg:h-screen flex flex-col lg:flex-row my-8">
                <div className="left__container w-full lg:w-1/2 h-fit md2:h-1/3 xl:h-full flex justify-center items-center lg:border-r">
                    <Image src="/Newsletter.png" width={400} height={300} alt="Your Logo" />
                </div>

                <div className="right__container w-full lg:w-1/2 h-fit md2:h-1/3 xl:h-full flex justify-center items-center lg:border-l">
                    <div className="flex flex-col items-center gap-8 w-full px-8">
                        <div className="flex flex-col gap-1">
                            <h1 className="relative font-bold text-black text-4xl text-center">Subscribe to our Newsletter!</h1>
                            <p className="relative text-gray-900 text-center">Get the latest updates delivered to your inbox.</p>
                        </div>
                        <div className="flex flex-col gap-2 w-full lg:w-2/3">
                            <input
                                type="email"
                                id="email"
                                placeholder="youremail@gmail.com"
                                className="relative bg-gray-100 rounded-lg w-full text-center h-12 focus:outline-slate-400"
                            />
                            <Button>Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}