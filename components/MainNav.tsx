"use client";
import { generalSite } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoLightAndDark from "./LogoLightAndDark";

const MainNav = () => {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <LogoLightAndDark />
    </nav>
  );
};

export default MainNav;
