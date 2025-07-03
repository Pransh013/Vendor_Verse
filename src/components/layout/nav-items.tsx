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
              "hover:bg-transparent text-base hover:underline dark:hover:bg-transparent",
              pathname === href &&
                "bg-primary hover:bg-primary dark:hover:bg-foreground text-primary-foreground hover:text-primary-foreground hover:no-underline",
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
