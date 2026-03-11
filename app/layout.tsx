import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased selection:bg-[#0E3B2E]/50 selection:text-[#9EFFBF] bg-[#0B0B0F]`}
      >
        <div className="noise-overlay" />
        <ClientLayout />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-24 sm:pt-0">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
