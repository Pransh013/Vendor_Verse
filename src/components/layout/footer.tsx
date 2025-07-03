"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background text-foreground">
      <div className="px-4 sm:px-16 lg:px-20 xl:px-28 mx-auto py-4 md:py-8 flex flex-col md:flex-row md:justify-between gap-4 md:gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-atma font-bold mb-2">vendor_verse</h2>
          <p className="text-muted-foreground max-w-md mb-4">
            A multi-vendor e-commerce marketplace enabling multiple sellers to
            manage their stores within a unified platform. Discover, sell, and
            grow—all in one place.
          </p>
        </div>
        <nav className="flex-1 flex flex-col md:items-end gap-2">
          <span className="text-lg font-semibold mb-1 md:mb-2">
            Quick Links
          </span>
          <Link
            href="/about"
            className="hover:underline text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/features"
            className="hover:underline text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="hover:underline text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="hover:underline text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="border-t border-border text-center py-4 text-sm text-muted-foreground bg-background">
        &copy; {new Date().getFullYear()} vendor_verse. All rights reserved.
      </div>
    </footer>
  );
};
