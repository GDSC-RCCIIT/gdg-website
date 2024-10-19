import localFont from "next/font/local";
import "./globals.css";
import { NavigationMenu } from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import ScrollToTop from "@/components/ui/back2top";

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
        <NavigationMenu />
        <main className="mt-16">{children}</main>
        <Footer />
        <ScrollToTop/>
      </body>
    </html>
  );
}
