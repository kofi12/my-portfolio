import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import { Services } from '../components/Services';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'akhaizel — Web Design for Small Business',
  description: 'Fast, polished websites for trades, small businesses, and law firms. Every deliverable personally by Aaron Haizel.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSerif.variable} ${inter.variable}`}
        style={{ fontFamily: 'var(--sans)' }}
      >
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        {children}
      </body>
    </html>
  );
}
