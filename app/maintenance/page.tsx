'use client'

import Head from "next/head";
import Header from "../components/Header";
import Image from 'next/image'
import { Wrench, Calendar, Clock, Zap, Droplet, Gauge, Cog, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const maintenanceSections = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "General Maintenance",
    content: "Our mobile maintenance service brings expert care right to your doorstep. We'll handle all your vehicle&apos;s maintenance needs at a time and place that works for you. Regular maintenance not only keeps your car running smoothly but also helps with fuel efficiency—who doesn&apos;t love that?",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Scheduled Services",
    content: "Want to keep your vehicle feeling fresh and performing at its best? Scheduling regular maintenance is the way to go! Our friendly mobile mechanics will take care of important wear-and-tear parts, like air filters, spark plugs, fuel filters, and more.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Timely Tune-Ups",
    content: "If your car seems to be running a little sluggish or if you&apos;ve noticed a dip in gas mileage, it might be time for some maintenance love! Our timely tune-ups will get your vehicle back to peak performance.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Electrical System Check",
    content: "We&apos;ll inspect your vehicle&apos;s electrical system, including the battery, alternator, and starter, to ensure everything is working as it should. This helps prevent unexpected breakdowns and keeps your car&apos;s electrical components in top shape.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Fluid Services",
    content: "Regular fluid checks and changes are crucial for your vehicle&apos;s health. We&apos;ll top off or replace essential fluids like oil, coolant, brake fluid, and transmission fluid to keep your car running smoothly.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Tire Maintenance",
    content: "Proper tire maintenance is essential for safety and fuel efficiency. We&apos;ll check your tire pressure, perform rotations, and inspect for wear and tear to ensure your vehicle is safe on the road.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Belt and Hose Inspection",
    content: "We&apos;ll inspect and replace belts and hoses as needed. These components are critical for your engine&apos;s operation and can cause significant problems if they fail unexpectedly.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Safety Inspections",
    content: "Our comprehensive safety inspections cover all major systems in your vehicle, ensuring that everything is working correctly and your car is safe to drive.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function MaintenancePage() {
  return (
    <> 
      <Head>
        <title>Maintenance</title>
      </Head>
      <Header /> 
      <div className="min-h-screen bg-background font-sans">
        <main className="container mx-auto px-4 py-12">
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-6">Maintenance Services</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Experience convenient and expert mobile maintenance services at your location. We bring the care your vehicle needs right to your doorstep!
            </p>
          </section>
          <section className="mb-16">
            <Tabs defaultValue="general-maintenance" className="w-full">
              <TabsList className="flex flex-wrap gap-4 mb-16">
                {maintenanceSections.map((section) => (
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
              <div className="mt-16 pt-8 border-t border-border">
                {maintenanceSections.map((section) => (
                  <TabsContent
                    key={section.title}
                    value={section.title.toLowerCase().replace(/\s+/g, '-')}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{section.title}</CardTitle>
                        <CardDescription>Expert mobile maintenance services at your convenience</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                          <div className="md:w-1/2">
                            <p className="text-muted-foreground mb-4 text-lg">{section.content}</p>
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
            <h2 className="text-3xl font-bold mb-6">Our Approach to Maintenance</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Getting the job done has never been easier! Our skilled mechanics come equipped with the latest tools and techniques to ensure your car stays in top shape. Just give us a call, and we&apos;ll chat about any concerns you might have. We&apos;ll send one of our friendly experts to diagnose the issue and guide you through the necessary maintenance steps, all while providing a budget-friendly estimate.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Signs You Need Maintenance</h2>
            <p className="text-xl text-muted-foreground mb-8">
              If your car seems to be running a little sluggish or if you&apos;ve noticed a dip in gas mileage, it might be time for some maintenance love! Regular check-ups can prevent small issues from becoming big problems. Don&apos;t wait until something breaks - preventive maintenance can save you time and money in the long run.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Mobile Maintenance?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We bring the maintenance service to your driveway, providing convenient care on your schedule. Our friendly and professional mechanics are committed to keeping your vehicle in top condition—efficiently and thoroughly. With our mobile maintenance service, taking care of your car has never been easier!
            </p>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Ready to Keep Your Ride Happy and Reliable?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Give us a call today! We&apos;ll help you set up a maintenance schedule that fits your needs and budget, all without disrupting your daily routine. Let&apos;s keep your vehicle running smoothly for years to come!
            </p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Schedule Maintenance
            </Button>
          </section>
        </main>

        <footer className="bg-blue-600 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 Mobile Pros. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
