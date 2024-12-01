import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import  Header from "../components/Header"
import Hero from "../components/Hero"

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
  title: "AKHAIZEL",
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
        <Header/>
          <Hero/>
            {children}
      </body>
    </html>
  );
}
