"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import StorageProvider from "./StorageProvider";
import NavBar from "@/components/layouts/header/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata"; // Import metadata

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showNavBar = pathname === "/" || pathname === "/pages/home";
  const showFooter =
    pathname === "/" ||
    pathname === "/pages/home" ||
    pathname === "/pages/order" ||
    pathname === "/pages/profile";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Script
          src="https://www.google.com/recaptcha/api.js?render=6Lddg6kqAAAAAPxnkRQY-h0CXu-MF4vQ9Qjsbi23"
          strategy="lazyOnload"
        />
        <ToastContainer />
        <StorageProvider>
          {showNavBar && <NavBar />}
          {children}
          {showFooter && <Footer />}
        </StorageProvider>
      </body>
    </html>
  );
}
