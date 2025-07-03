"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { navItems } from "@/constants";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export type NavItemsProps = {
  containerClassName?: string;
  buttonClassName?: string;
  buttonWrapper?: (children: React.ReactNode, key: string) => React.ReactNode;
};

export const NavItems = ({
  containerClassName = "",
  buttonClassName = "",
  buttonWrapper,
}: NavItemsProps) => {
  const pathname = usePathname();
  return (
    <div className={containerClassName}>
      {navItems.map(({ href, label }) => {
        const btn = (
          <Button
            key={href}
            variant="ghost"
            asChild
            className={cn(
              "hover:bg-transparent text-base hover:underline",
              pathname === href &&
                "bg-primary hover:bg-primary text-primary-foreground hover:text-primary-foreground",
              buttonClassName
            )}
          >
            <Link href={href}>{label}</Link>
          </Button>
        );
        return buttonWrapper ? buttonWrapper(btn, href) : btn;
      })}
    </div>
  );
};
