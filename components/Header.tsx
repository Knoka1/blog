import React from "react";
import { generalSite } from "@/constants/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
// import { Icons } from "./icons";
import MainNav from "./MainNav";
// import { MobileNav } from "./mobile-nav";
// import { ModeToggle } from "./mode-toggle";

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
                {/* <Icons.gitHub className="h-4 w-4" /> */}
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            {/* <Link
              href={generalSite.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
            {/* <ModeToggle />
            <MobileNav /> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
