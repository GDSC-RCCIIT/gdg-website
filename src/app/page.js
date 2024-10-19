import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import EventsPage from "./(pages)/Events/Events";
// import { NavigationMenu } from "@/components/Global/Header";

export default function Home() {
  return (
    <>
    {/* <NavigationMenu/> */}
    <Header/>
    <EventsPage/>
    <h1 className="text-6xl text-center flex-auto py-[20rem]">WELCOME TO THE GDGRCC WEBSITE</h1>
    <Footer />
    </>
  );
}
