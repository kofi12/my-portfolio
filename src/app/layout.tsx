import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import  Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from '../components/About'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "akhaizel",
  description: "Site by Aaron Haizel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
          <Hero/>
            <About/>
            {children}
      </body>
    </html>
  );
}
