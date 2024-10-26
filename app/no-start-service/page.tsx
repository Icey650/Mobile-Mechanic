'use client'

import Head from "next/head";
import Header from "../components/Header";

export default function NoStartService() {

return (
    <> 
        <Head>
        <title>No Start Service</title>
        </Head>

        <div className="min-h-screen bg-gray-100 font-sans">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">No Start Service</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience convenience and expertise with our mobile computer diagnostics service because your time and safety matter.
            </p>
          </section>
          </main>    
        </div>
    </>
  );
 }