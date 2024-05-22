"use client";
import React from "react";
import LogoLightAndDark from "./LogoLightAndDark";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <LogoLightAndDark />
      <div className="inline-flex">
        <div className="flex flex-wrap gap-1">
          <Link href="/new-post">
            <p className="font-bold">NovoPost</p>
          </Link>
        </div>
        <div className="mt-1 ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
