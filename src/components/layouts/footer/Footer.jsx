"use client";

import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";

const Footer = () => {
  return (
    <footer>
      <div className="fixed bottom-0 left-0 w-full  shadow-md border-t flex justify-around py-3 rounded-t-3xl">
        <div className="flex flex-col items-center">
          <Link
            href={{
              pathname: "/pages/home",
              query: { name: "Home" },
            }}
          >
            <div className="flex flex-col items-center">
              <HomeIcon />
              Home
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            href={{
              pathname: "/pages/order",
              query: { name: "Order" },
            }}
          >
            <div className="flex flex-col items-center">
              <ShoppingBasketIcon />
              Order
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            href={{
              pathname: "/pages/profile",
              query: { name: "Profile" },
            }}
          >
            <div className="flex flex-col items-center">
              <PersonIcon />
              Profile
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
