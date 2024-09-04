import React from "react";
import { Inter } from "next/font/google";
import Sidebar from "./_components/Sidebar";

import Header from "./_components/Header";
import Footer from "./_components/Footer";
import MobileSidebar from "./_components/MobileSidebar";

const inter = Inter({ subsets: ["latin"] });
import "../app/_styles/global.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className=" flex">
          <MobileSidebar />

          <Sidebar />
          <main className="bg-[#00010a00] w-full max-lg:px-10 ">
            <div className="max-w-6xl mx-auto relative pt-24">
              <Header />
              <section className="max-lg:px-4">{children}</section>
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
