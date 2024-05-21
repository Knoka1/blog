"use client";
import { generalSite } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainNav = () => {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center ">
        <Image
          src="icons/logolight.svg"
          width={30}
          height={30}
          alt="Home Icon"
          className="cursor-pointer dark:hidden"
        />
        <Image
          src="icons/logodark.svg"
          width={30}
          height={30}
          alt="Home Icon"
          className="hidden dark:inline"
        />
        <span className="font-bold">{generalSite.name}</span>
      </Link>
    </nav>
  );
};

export default MainNav;
