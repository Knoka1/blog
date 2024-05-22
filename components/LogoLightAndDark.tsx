import { generalSite } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoLightAndDark = () => {
  return (
    <Link href="/" className="mr-6 flex items-center ">
      <Image
        src="/icons/logolight.svg"
        width={30}
        height={30}
        alt="Home Icon"
        className="cursor-pointer dark:hidden"
      />
      <Image
        src="/icons/logodark.svg"
        width={30}
        height={30}
        alt="Home Icon"
        className="hidden dark:inline"
      />
      <span className="font-bold">{generalSite.name}</span>
    </Link>
  );
};

export default LogoLightAndDark;
