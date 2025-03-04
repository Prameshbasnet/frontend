import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import StorageProvider from "./StorageProvider";
import NavBar from "@/components/layouts/header/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EazyDine",
  description: "EazyDine Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.google.com/recaptcha/api.js?render=6Lddg6kqAAAAAPxnkRQY-h0CXu-MF4vQ9Qjsbi23"
          strategy="lazyOnload"
        />
        <ToastContainer />
        <StorageProvider>
          <NavBar />
          {children}
          <Footer />
        </StorageProvider>
      </body>
    </html>
  );
}
