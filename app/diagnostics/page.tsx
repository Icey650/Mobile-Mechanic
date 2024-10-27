'use client';
import Head from 'next/head';
import Header from '../components/Header'; 
import { useState, useMemo } from 'react';
import { Cpu, Clock, CheckCircle } from 'lucide-react';
import Image from 'next/image'; // Import Image from next/image

const tabs = [
  { icon: <Cpu className="w-5 h-5" />, label: 'Technology' },
  { icon: <Clock className="w-5 h-5" />, label: 'Convenience' },
  { icon: <CheckCircle className="w-5 h-5" />, label: 'Solutions' },
];

const sections = [
  {
    title: "Advanced Automotive Technology",
    content: "In todays tech-driven world, your vehicle is packed with advanced technology that enhances your driving experience. However, this complexity can make auto repairs challenging if you are not fluent in your car's digital language. Thats where we come in!",
    image: "/images/autotech.png",
  },
  {
    title: "Expert Mobile Mechanics",
    content: "Our mobile mechanics are experts in mobile computer diagnostics, ready to decode what your car is trying to tell us, all from the comfort of your location. Using state-of-the-art diagnostic equipment, we can access your vehicle's systems much like a doctor assesses symptoms before diagnosing an issue.",
    image: "/images/scannerpic.png",
  },
  {
    title: "Convenience at Your Doorstep",
    content: "With our mobile diagnostics service, there is no need to schedule a trip to the shop. We come to you, equipped with the latest technology to diagnose, estimate, and resolve your vehicle's issues efficiently. Our goal is to get you back on the road as quickly as possible, without the hassle of traditional auto repair.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Accurate Solutions",
    content: "This enables us to quickly pinpoint problems and provide accurate solutions. While you could invest in a diagnostic device and tackle the issue yourself, our trained professionals have the expertise to interpret those readings correctly and address the problem on the spot.",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function DiagnosticsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSection = useMemo(() => sections[activeTab], [activeTab]);

  return (
    <>
      <Head>
        <title>Expert Mobile Diagnostics | Your Trusted Mobile Mechanic</title>
        <meta name="description" content="Experience convenient and expert mobile computer diagnostics services at your location. Get your vehicle checked by our skilled mobile mechanics!" />
        <meta name="keywords" content="mobile diagnostics, auto repair, mobile mechanics, automotive technology, vehicle diagnostics" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Expert Mobile Diagnostics" />
        <meta property="og:description" content="Get your vehicle diagnosed by our expert mobile mechanics at your doorstep." />
        <meta property="og:image" content="/images/autotech.png" />
        <meta property="og:url" content="https://yourwebsite.com/diagnostics" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Mobile Diagnostics" />
        <meta name="twitter:description" content="Convenient mobile diagnostics services at your location." />
        <meta name="twitter:image" content="/images/autotech.png" />
      </Head>

      <div className="min-h-screen bg-gray-100 font-sans">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Diagnostic Services</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience convenience and expertise with our mobile computer diagnostics service because your time and safety matter.
            </p>
          </section>

          <section className="mb-16">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex border-b">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="flex items-center justify-center">
                      {tab.icon}
                      <span className="ml-2">{tab.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{activeSection.title}</h3>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <p className="text-gray-600 mb-4">{activeSection.content}</p>
                  </div>
                  <div className="md:w-1/2">
                    <Image 
                      src={activeSection.image}
                      alt={activeSection.title}
                      loading="lazy"
                      width={600} // Set an appropriate width
                      height={400} // Set an appropriate height
                      className="rounded-lg shadow-md w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Ready for Expert Mobile Diagnostics?</h2>
            <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Schedule a Diagnostic
            </button>
          </section>
        </main>

        <footer className="bg-blue-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 Mobile Mechanic. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
