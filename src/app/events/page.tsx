"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function Page() {
    const [activeTab, setActiveTab] = useState("eventdetails");

  const tabs = [
    { id: "eventdetails", label: "Event Details" },
    { id: "LeaderBoard", label: "Leaderboard" },
    { id: "Faqs", label: "FAQs" },
    { id: "Rules", label: "Rules" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "eventdetails":
        return (
          <div>
            <div className="mb-8 flex justify-center">
              <Image
                src="/hero1.jpg"
                alt="event deatails"
                width={400}
                height={100}
                className="rounded-md object-contain"
              />
            </div>

            <div className="text-center">
              <h2>
                <span className="date">Date & Time:</span> August 10, 2025 at
                6PM SAST | <span className="date">Location:</span> Online -
                Streamed live on Twitch
              </h2>
              <br></br>
              <h2>
                <span className="date">Price Pool:</span> R50,000 |{" "}
                <span className="date">Format:</span> Round Robin, Double
                Elimination
              </h2>
            </div>
          </div>
        );
      case "LeaderBoard":
        return (
          <p>
            Meet our verified providers and check their ratings and reviews.
          </p>
        );
      case "Faqs":
        return (
          <p>
            Learn more about MettleState and how we connect you with trusted
            professionals.
          </p>
        );
      case "Rules":
        return (
          <p>Need help? Reach out to us via chat or email for quick support.</p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-1">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 text-center">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white rounded-2xl p-20 mb-10 overflow-hidden"
          style={{
            backgroundImage: "url('/hero1.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-2xl" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-bold mb-3">
              Legends of Victory: Battle Royale Cup
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Compete for glory. Only one can win.
            </p>
            <button className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:opacity-90">
              Register Now
            </button>
          </div>
        </section>

        {/* Tabs Section */}
        <div className="mb-8 border-b border-slate-700 flex space-x-6 relative">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-2 text-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-blue-400"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}

              {/* Animated underline */}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator" 
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-400 rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        <section className="mb-6 mt-20">
          <h1 className="text-3xl font-semibold">Discover Tournaments</h1>
          <p className="text-slate-500 mt-1">
            Choose a game & Join the Tournament.
          </p>
        </section>


      </main>
    </div>
  );
}