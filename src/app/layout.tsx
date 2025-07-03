import type { Metadata } from "next";
import { Raleway, Atma } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const atma = Atma({
  variable: "--font-atma",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vendor Verse",
  description: "A multi-vendor e-commerce marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} ${atma.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
