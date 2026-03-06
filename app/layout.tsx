import type { Metadata } from "next";
import { Poppins, Lexend } from "next/font/google";
import "./globals.css";
import { MiniNavbar } from "@/components/ui/mini-navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Chopra | Generalist Builder",
  description: "Startup generalist working across product, marketing, AI and design.",
  openGraph: {
    title: "Dev Chopra | Generalist Builder",
    description: "Startup generalist working across product, marketing and AI.",
    url: "https://devchopra.life",
    siteName: "Dev Chopra Portfolio",
    type: "website",
  },
  icons: {
    icon: [],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${poppins.variable} ${lexend.variable} antialiased selection:bg-indigo-500/40 selection:text-white bg-[#030303]`}
      >
        {/* V: 1.0.2-CLEAN-BUILD */}
        <div className="noise-overlay" />
        <ClientLayout />
        <div className="relative z-10 min-h-screen flex flex-col">
          <MiniNavbar />
          <main className="flex-grow pt-24 sm:pt-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
