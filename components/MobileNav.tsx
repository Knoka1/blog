"use client";
import React, { useState } from "react";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
    </Sheet>
  );
};

export default MobileNav;
