"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { FaBell, FaChevronRight } from "react-icons/fa6";

const user = {
  name: "Pramesh Basnet",
  email: "bpramesh742@gmail.com",
};

export default function Profile() {
  if (!user) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-2 text-center">
          No Account Found
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          You do not have an account. Please create one to enjoy our services!
        </p>
        <Link href="/pages/security/signup">
          <Button variant="contained" color="primary">
            Create Account
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <div className="rounded-xl shadow-lg mb-4 overflow-hidden bg-gradient-to-r from-green-400 to-green-600 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-600 text-xl font-bold uppercase">
              {user.name?.charAt(0)}
            </div>
            <div>
              <h2 className="text-white text-lg font-bold">{user.name}</h2>
              <p className="text-white text-sm">{user.email}</p>
            </div>
          </div>

          <div className="relative">
            <button className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors">
              <FaBell className="w-5 h-5 text-white" />
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full ring-2 ring-green-500"></span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <Link
            href="/"
            className="flex items-center justify-between py-3 border-b border-gray-100 transition-colors hover:bg-gray-50"
          >
            <span className="text-gray-700 font-medium">Account Setting</span>
            <FaChevronRight className="text-gray-400" />
          </Link>

          <Link
            href="/"
            className="flex items-center justify-between py-3 border-b border-gray-100 transition-colors hover:bg-gray-50"
          >
            <span className="text-gray-700 font-medium">Feedback</span>
            <FaChevronRight className="text-gray-400" />
          </Link>

          <Link
            href="/"
            className="flex items-center justify-between py-3 transition-colors hover:bg-gray-50"
          >
            <span className="text-gray-700 font-medium">Favourite</span>
            <FaChevronRight className="text-gray-400" />
          </Link>
        </div>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#dc2626",
            "&:hover": {
              backgroundColor: "#b91c1c",
            },
            textTransform: "none",
            fontWeight: "bold",
            width: "100%",
            paddingY: "0.75rem",
            borderRadius: "0.75rem",
          }}
          onClick={() => alert("Logout successfull.")}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
