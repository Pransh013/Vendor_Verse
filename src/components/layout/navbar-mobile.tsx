"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { NavItems } from "./nav-items";

export type NavbarMobileProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const NavbarMobile = ({ open, onOpenChange }: NavbarMobileProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-64 max-w-full">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <NavItems
          containerClassName="flex flex-col gap-2 p-4"
          buttonClassName="justify-start w-full text-base"
          buttonWrapper={(children, key) => (
            <SheetClose asChild key={key}>
              {children}
            </SheetClose>
          )}
        />
        <div className="mt-auto flex flex-col gap-2 p-4 border-t">
          <Button className="w-full">Log in</Button>
          <Button variant="outline" className="w-full border-black">
            Start selling
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
