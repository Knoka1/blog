import { generalSite } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoLightAndDark = ({
  noText = false,
  size = "normal",
}: {
  noText?: boolean;
  size?: "normal" | "big";
}) => {
  return (
    <Link href="/" className="mr-6 flex items-center ">
      <Image
        src="/icons/logolight.svg"
        width={size === "normal" ? 30 : 55}
        height={size === "normal" ? 30 : 55}
        alt="Home Icon"
        className="cursor-pointer dark:hidden"
      />
      <Image
        src="/icons/logodark.svg"
        width={size === "normal" ? 30 : 55}
        height={size === "normal" ? 30 : 55}
        alt="Home Icon"
        className="hidden dark:inline"
      />
      {noText ? "" : <span className="font-bold">{generalSite.name}</span>}
    </Link>
  );
};

export default LogoLightAndDark;
