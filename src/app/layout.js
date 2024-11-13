import localFont from "next/font/local";
import "./globals.css";
import NavigationMenu from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import ScrollToTop from "@/components/ui/back2top";
import ScrollProgressBar from "@/components/ui/progress-bar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from "react";
import Loader from "@/components/Global/SuspenseLoader";
import Sidebar from '@/components/Global/Sidebar';

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
  title: "GDG-RCCIIT",
  description: "Welcome to the GDG-RCIIT Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollProgressBar />
        <NavigationMenu />
        <div className="layout-container">
          {/* Left Sidebar */}
          <Sidebar />
          
          {/* Main content area */}
          <main className="content-area">
            <div className="gtranslate_wrapper">
              <Suspense fallback={<Loader />}>
                {children}
              </Suspense>
            </div>
          </main>
        </div>
        <Footer />
        <ScrollToTop />
        <ToastContainer />
      </body>
    </html>
  );
}
