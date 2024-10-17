import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import EventsPage from "./(pages)/Events/Events";

export default function Home() {
  return (
    <>
    <Header/>
    <h1 className="text-6xl text-center flex-auto py-[20rem]">WELCOME TO THE GDGRCC WEBSITE</h1>
    <Footer />
    </>
  );
}
