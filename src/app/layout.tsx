import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { JetBrains_Mono, Roboto_Mono } from 'next/font/google';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import { Services } from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});
const roboto = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'akhaizel',
  description: 'Site by Aaron Haizel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`flex flex-col bg-custom-gradient gap-3 md:gap-5 lg:gap-10 px-5 sm:px-7 md:px-10 lg:px-15 my-5 ${geistSans.variable} ${geistMono.variable} ${jetbrains.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
        {children}
      </body>
    </html>
  );
}
