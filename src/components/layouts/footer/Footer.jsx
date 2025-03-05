"use client";

import { useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";

const FooterLink = ({ href, icon: Icon, label, isActive, onClick }) => (
  <Link
    href={href}
    className={`flex flex-col items-center ${
      isActive ? "text-green-500" : "text-gray-500"
    }`}
    onClick={onClick}
  >
    <Icon className={isActive ? "text-green-500" : "text-gray-500"} />
    {label}
  </Link>
);

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full shadow-md border-t flex justify-around py-3 rounded-t-3xl bg-white">
      <FooterLink
        href="/pages/home"
        icon={HomeIcon}
        label="Home"
        isActive={activeTab === "home"}
        onClick={() => handleTabChange("home")}
      />
      <FooterLink
        href="/pages/order"
        icon={ShoppingBasketIcon}
        label="Order"
        isActive={activeTab === "order"}
        onClick={() => handleTabChange("order")}
      />
      <FooterLink
        href="/pages/profile"
        icon={PersonIcon}
        label="Profile"
        isActive={activeTab === "profile"}
        onClick={() => handleTabChange("profile")}
      />
    </footer>
  );
};

export default Footer;
