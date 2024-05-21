"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { generalSite } from "@/constants/constants";

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  target?: string;
}
const MobileLink = ({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <HamburgerMenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
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
        </MobileLink>
        <div className="flex flex-col gap-3 mt-5 ml-5">
          <Link
            target="_blank"
            rel="noreferrer"
            href={generalSite.links.github}
          >
            <span className="ml-2">Git Hub</span>
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={generalSite.links.linkedin}
          >
            <span className="ml-2">LinkedIn</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
