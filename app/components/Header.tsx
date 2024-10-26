'use client';

import { useState } from 'react';
import { Wrench } from 'lucide-react';
import Head from 'next/head'; // Import Head for SEO
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Mobile Mechanic | Your Trusted Auto Services</title>
        <meta name="description" content="Mobile Mechanic provides reliable on-site auto services including diagnostics, repairs, and maintenance. Contact us today!" />
        <meta name="keywords" content="mobile mechanic, auto services, vehicle diagnostics, car repairs, mobile auto repair" />
        <meta name="author" content="Your Company Name" />
      </Head>

      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Wrench className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">Mobile Mechanic</span>
          </div>
          <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-blue-200 transition">Home</Link>
            <a href="#services" className="hover:text-blue-200 transition">Services</a>
            <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-blue-500">
            <a href="#home" className="block py-2 px-4 text-sm hover:bg-blue-600">Home</a>
            <a href="#services" className="block py-2 px-4 text-sm hover:bg-blue-600">Services</a>
            <a href="#contact" className="block py-2 px-4 text-sm hover:bg-blue-600">Contact</a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
