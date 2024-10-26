'use client';
// start building your certificates page

import Head from 'next/head'; // Import Head for SEO
import { useState } from 'react';
import { Phone, Wrench, Car, Clock, CreditCard, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileMechanic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; 
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Your Trusted Mobile Mechanic | Convenient Auto Services</title>
        <meta name="description" content="Get reliable mobile mechanic services at your location. We offer diagnostics, repairs, maintenance, and more!" />
        <meta name="keywords" content="mobile mechanic, auto services, vehicle diagnostics, car repairs, mobile auto repair" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Your Trusted Mobile Mechanic" />
        <meta property="og:description" content="Convenient auto services at your doorstep." />
        <meta property="og:image" content="/images/colorhero.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Trusted Mobile Mechanic" />
        <meta name="twitter:description" content="Mobile mechanic services available 24/7." />
        <meta name="twitter:image" content="/images/colorhero.png" />
      </Head>

      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Header */}
        <header className="bg-blue-600 text-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <Wrench className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">Mobile Mechanic</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a href="#home" className="hover:text-blue-200 transition">Home</a>
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
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-blue-500">
              <a href="#home" className="block py-2 px-4 text-sm hover:bg-blue-600">Home</a>
              <a href="#services" className="block py-2 px-4 text-sm hover:bg-blue-600">Services</a>
              <a href="#contact" className="block py-2 px-4 text-sm hover:bg-blue-600">Contact</a>
            </div>
          )}
        </header>

        <section
          id="home"
          className="text-white"
          style={{
            backgroundImage: 'url("/images/colorhero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Trusted Mobile Mechanic</h1>
            <p className="text-xl mb-8">We bring the auto shop to you!</p>
            <a
              href="#contact"
              className="bg-white text-blue-700 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              Book Now
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Car, title: "Diagnostics", description: "Accurate problem identification", backgroundImage: "/images/diag.png", link: "/diagnostics" },
                { icon: Wrench, title: "Repairs", description: "Expert fixes for all makes and models", backgroundImage: "/images/brakeinspection.jpg", link: "/repairs" },
                { icon: Clock, title: "Maintenance", description: "Regular scheduled preventative maintenance", backgroundImage: "/images/oilcheck.jpg", link: "/maintenance" },
                { icon: Car, title: "No Start Service", description: "Quick solutions for vehicles that won&apos;t start", backgroundImage: "/images/engine.jpg", link: "no-start-service" },
              ].map((service, index) => (
                <Link key={index} href={service.link || '#'} passHref>
                  <div className="relative bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 overflow-hidden group cursor-pointer h-64">
                    {service.backgroundImage && (
                      <Image
                        src={service.backgroundImage}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-100 opacity-20"
                      />
                    )}
                    <div className="relative z-10">
                      <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-white group-hover:bg-black group-hover:bg-opacity-50 transition duration-300">{service.title}</h3>
                      <p className="text-gray-600 group-hover:text-white group-hover:bg-black group-hover:bg-opacity-50 transition duration-300">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
                </form>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-blue-600" />
                    (123) 456-7890
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Serving the greater metropolitan area
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Available 24/7 for emergencies
                  </p>
                  <p className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                    We accept all major credit cards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 Mobile Mechanic. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
