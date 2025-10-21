"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Leaderboard from "../../tasks/Leaderboard";
import Discover from "../../tasks/Discover";
import GameFormat from "../../tasks/GameFormat";
import Rules from "../../tasks/Rules";
import Rform from "../../tasks/Rform";
import Lfaqs from "../../tasks/Lfaqs";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
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
              <h1 className="text-2xl font-bold mt-4">
                <span className="text-amber-700">Date & Time:</span> August 10,
                2025 at 6PM SAST |{" "}
                <span className="text-amber-700">Location:</span> Online -
                Streamed live on Twitch
              </h1>
              <br></br>
              <h1 className="text-2xl font-bold mb-2">
                <span className="text-amber-700">Price Pool:</span> R50,000 |{" "}
                <span className="text-amber-700">Format:</span> Round Robin,
                Double Elimination
              </h1>
            </div>
            <div>
              <GameFormat />
            </div>
          </div>
        );
      case "LeaderBoard":
        return (
          <div>
            <Leaderboard />
          </div>
        );
      case "Faqs":
        return <></>;
      case "Rules":
        return (
          <div>
            <Rules />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-1">
      <Sidebar />

      <main className="flex-1">
        <section
          className="relative bg-cover bg-center text-white rounded-2xl p-20 mb-10 overflow-hidden"
          style={{
            backgroundImage: "url('/lov-hero.jpg')",
          }}
        >
          <div className="relative inset-0 bg-black/50 rounded-2xl" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold mb-3 text-white shadow-lg shadow-black/90">
              Legends of Victory: Battle Royale Cup
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Compete for glory. Only one can win.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Register
            </button>

            {isOpen && (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="bg-black-sec rounded-xl shadow-lg w-full max-w-md relative">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-gray-200 hover:text-black text-2xl"
                  >
                    &times;
                  </button>
                  <Rform />
                </div>
              </div>
            )}
          </div>
        </section>

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

        <div>
          <Lfaqs />
        </div>

        <div>
          <Discover />
        </div>
      </main>
    </div>
  );
}
