'use client'

import Head from "next/head";
import Header from "../components/Header";
import { useState } from 'react'
import Image from 'next/image'
import { Wrench, Thermometer, Clock, Zap, Droplet, Compass, Cog, Disc } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const repairSections = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Major Engine Repair",
      content: "Engine trouble can be one of the most daunting challenges for vehicle owners, often resulting in costly repairs and frustration. But don’t let the stress weigh you down! With Mobile Mechanic, you can get your vehicle back to 100% without the hassle of leaving your home or paying expensive towing fees. Just give us a call, and we’ll help you determine the best next steps right over the phone!",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Overheating Engines",
      content: "If your temperature gauge is spiking, your engine is likely overheating—a problem that requires immediate attention. Whether it&apos;s a stuck thermostat or a blown head gasket, our trained mobile mechanics will diagnose the issue and get it resolved quickly. Don&apos;t risk further damage by trying to fix it yourself—let us handle it!",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timing Belts",
      content: "Keeping your vehicle&apos;s timing belt in check is crucial for reliable performance. It&apos;s recommended to replace it every 60,000 to 90,000 miles. If you notice symptoms like unusual noises or your engine refusing to start, call us right away! Our mechanics are ready to replace your timing belt and keep your vehicle running smoothly.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Alternators",
      content: "The alternator plays a vital role in your vehicle&apos;s electrical system, charging the battery and powering essential components. If you see a low volt gauge or a battery light on your dashboard, don&apos;t wait until you&apos;re stranded. Our skilled mechanics will come to you, inspect your alternator, and ensure it&apos;s in top condition.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Fuel Injectors",
      content: "Clogged fuel injectors can lead to starting issues and poor fuel efficiency. If your engine is running rough or consuming too much fuel, it's time to act! Our mobile repair services can diagnose and clean or replace your fuel injectors, ensuring your vehicle stays healthy and efficient.",
      image: "/images/fuelinjector.png",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Steering & Suspension",
      content: "Your steering and suspension systems are vital for your vehicle&apos;s health and your driving comfort. These systems help keep your vehicle balanced and absorb shocks from bumps and potholes, directly impacting how your car handles on the road. Regular maintenance is crucial to prevent wear and tear, which can lead to expensive damage and safety hazards.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Struts & Shocks",
      content: "Have you ever felt like you were on a roller coaster instead of a smooth ride? Worn struts and shocks can make a vehicle handle poorly. These components are essential for maintaining balance and comfort while driving. It&apos;s crucial to inspect and replace them every 60,000 to 100,000 miles to prevent bigger problems down the road.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: <Disc className="w-6 h-6" />,
      title: "Clutch",
      content: "For manual transmission drivers, the clutch is one of the most critical components. Regular maintenance is essential to keep your vehicle shifting smoothly. You don't have to worry about scheduling a time to visit the shop; our mobile mechanics will bring the repair shop to you!",
      image: "/images/clutchkit.png",
    },
];

export default function RepairPage() {
    const [activeTab, setActiveTab] = useState("major-engine-repair");

    return (
        <>
        <Head>
            <title>Repairs</title>
        </Head>

        <div className="min-h-screen bg-gray-100 font-sans">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <section className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-6">Repair Services</h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Experience convenience and expertise with our mobile repair services. We bring the repair shop to your driveway, providing professional service on your schedule.
                    </p>
                </section>

                <section className="mb-16">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="flex flex-wrap gap-4 mb-16">
                            {repairSections.map((section) => (
                                <TabsTrigger
                                    key={section.title}
                                    value={section.title.toLowerCase().replace(/\s+/g, '-')}
                                    className="flex items-center justify-center gap-2 py-2 px-4 flex-grow"
                                >
                                    {section.icon}
                                    <span className="hidden sm:inline">{section.title}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            {repairSections.map((section) => (
                                <TabsContent
                                    key={section.title}
                                    value={section.title.toLowerCase().replace(/\s+/g, '-')}
                                >
                                    <Card className="p-8">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">{section.title}</CardTitle>
                                            <CardDescription className="text-lg">Expert mobile repair services at your doorstep</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-col md:flex-row items-center gap-8">
                                                <div className="md:w-1/2">
                                                    <p className="text-gray-600 mb-4 text-lg">{section.content}</p>
                                                </div>
                                                <div className="md:w-1/2">
                                                    <Image
                                                        src={section.image}
                                                        alt={section.title}
                                                        width={600}
                                                        height={400}
                                                        className="rounded-lg shadow-md w-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        At Mobile Pros, we use cutting-edge tools and techniques to accurately diagnose your vehicle&apos;s problems. After narrowing down the issue over the phone, we&apos;ll schedule a visit to provide an estimate that fits your budget. Our goal is to get you back on the road safely and efficiently!
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Signs You Need Major Engine Repair</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        If you&apos;re hearing loud knocking sounds from under the hood, seeing excessive exhaust smoke, or just feel that something isn&apos;t right, reach out to us immediately. Ignoring these symptoms can lead to significant financial setbacks and unsafe driving conditions. Our expert mechanics are here to help you navigate these issues before they escalate.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Why Choose Mobile Pros?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        We bring the repair shop to your driveway, providing convenient service on your schedule. Our friendly and professional mechanics are committed to getting the job done right—swiftly and thoroughly. With Mobile Pros, vehicle maintenance has never been easier!
                    </p>
                </section>

                <section className="text-center">
                    <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Give us a call today! We&apos;ll help you diagnose your vehicle&apos;s needs and provide a solution that fits your budget, all without disrupting your daily routine. Let&apos;s get you back on the road safely!
                    </p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Schedule a Repair
                    </Button>
                </section>
            </main>

            <footer className="bg-blue-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2023 Mobile Pros. All rights reserved.</p>
                </div>
            </footer>
        </div>
        </>
    )
}
