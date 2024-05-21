import React from "react";
import { generalSite } from "@/constants/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import MainNav from "./MainNav";
import Image from "next/image";
import MobileNav from "./MobileNav";
import ModeToggle from "./ModeToggle";

const Header = () => {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={generalSite.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Image
                  src="icons/github.svg"
                  height={20}
                  width={20}
                  alt="github"
                  className="dark:hidden"
                />
                <Image
                  src="icons/github-light.svg"
                  height={20}
                  width={20}
                  alt="github"
                  className="hidden dark:inline"
                />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={generalSite.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Image
                  src="icons/linkedin.svg"
                  height={20}
                  width={20}
                  alt="linkedin"
                />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
