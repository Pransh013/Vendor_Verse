"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

import { NavItems } from "./nav-items";
import { Button } from "../ui/button";
import { NavbarMobile } from "./navbar-mobile";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <nav className="border-b h-20 px-4 sm:px-16 lg:px-20 xl:px-28 flex justify-between items-center">
      <Link href="/" className="text-3xl lg:text-4xl font-atma font-semibold">
        vendor_verse
      </Link>
      <NavItems containerClassName="lg:space-x-1 space-x-2 lg:block hidden" />
      <div className="space-x-3 lg:block hidden">
        <Button asChild>
          <Link href="/sign-in">Log in</Link>
        </Button>
        <Button variant="outline" className="border-black" asChild>
          <Link href="/sign-in">Start selling</Link>
        </Button>
      </div>
      <Button
        size="icon"
        variant="ghost"
        asChild
        className="p-1 lg:hidden"
        onClick={() => setIsSidebarOpen(() => true)}
      >
        <MenuIcon />
      </Button>
      <NavbarMobile open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
    </nav>
  );
};
