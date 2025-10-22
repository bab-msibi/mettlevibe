"use client";

import Sidebar from "@/components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Leaderboard from "./Leaderboard";
import Discover from "./Discover";
import GameFormat from "./GameFormat";
import Rules from "./Rules";
import Rform from "./Rform";
import Lfaqs from "./Lfaqs";
import TinkiesAd from "./TinkiesAd";
import Participants from "./Participants";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { id: "Overview", label: "Overview" },
    { id: "LeaderBoard", label: "Leaderboard" },
    { id: "Participants", label: "Participants" },
    { id: "Rules", label: "Rules" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="flex flex-col gap-10">
            <div className="text-center flex flex-wrap justify-center items-center gap-10">
              <h1 className="text-2xl font-bold mt-4">
                <span className="text-amber-700">Date & Time:</span> August 10, 2025 at 6PM SAST <br />
                <span className="text-amber-700 mt-6">Location:</span> Online - Streamed live on Twitch
              </h1>
              <h1 className="text-2xl font-bold mt-4">
                <span className="text-amber-700">Prize Pool:</span> R50,000 <br /> 
                <span className="text-amber-700 mt-6">Format:</span> Round Robin, Double Elimination
              </h1>
            </div>

            <GameFormat />
            <Lfaqs />
            <Discover />
          </div>
        );

      case "LeaderBoard":
        return <Leaderboard />;

      case "Participants":
        return <Participants />;

      case "Rules":
        return <Rules />;

      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <section
          className="relative bg-cover bg-center text-white rounded-2xl p-10 sm:p-16 lg:p-20 mb-10 overflow-hidden"
          style={{ backgroundImage: "url('/hero2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-2xl" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold mb-3 text-white shadow-lg shadow-black/90">
              Legends of Victory: Battle Royale Cup
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Compete for glory. Only one can win.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-950 cursor-pointer"
            >
              Register
            </button>

            {isOpen && (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="bg-black-sec rounded-xl shadow-lg w-full max-w-md relative">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-gray-200 hover:text-gray-400 text-2xl"
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
                  ? "text-amber-700"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}

              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-700 rounded-full"
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

        <TinkiesAd />

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
      </main>
    </div>
  );
}
