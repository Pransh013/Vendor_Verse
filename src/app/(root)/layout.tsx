import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 px-4 sm:px-16 lg:px-20 xl:px-28">{children}</div>
      <Footer />
    </main>
  );
}
