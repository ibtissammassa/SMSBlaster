import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SMSBlaster",
  description: "A web application for sending bulk text messages to multiple recipients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+"bg-gray-50/90 w-full"}>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
