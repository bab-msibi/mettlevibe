import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MettleVibe",
  description: "Level up your gaming experience with MettleVibe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* Fixed Header */}
        <Header />

        {/* Page layout below header */}
        <div className="flex pt-16 min-h-[calc(100vh-160px)] bg-dark-theme text-white">
          {/* Sidebar (fixed) sits at left, so main content gets padding-left */}
          <div className="flex-1 md:ml-64 p-6">{children}</div>
        </div>

        <div className="flex-1 md:ml-64 ">
          <Footer />
        </div>
      </body>
    </html>
  );
}
