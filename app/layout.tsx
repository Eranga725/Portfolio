import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"

const inter = Inter({  variable: "--font-inter",  subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Hansana Eranga",
  description: "Official portfolio of Hansana Eranga showcasing UI/UX design, web development, Next.js projects, and AI-based solutions."
,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
