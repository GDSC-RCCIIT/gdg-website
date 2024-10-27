import localFont from "next/font/local";
import "./globals.css";
import { NavigationMenu } from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import ScrollToTop from "@/components/ui/back2top";
import ScrollProgressBar from "@/components/ui/progress-bar"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GDG-RCIIT Website",
  description: "Welcome to the GDG-RCIIT Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollProgressBar />
        <NavigationMenu />
        <main className="mt-16">
        <div className="gtranslate_wrapper">
          {children}
          </div>
          </main>
        <Footer />
        <ScrollToTop />
        <ToastContainer />
      </body>
    </html>
  );
}