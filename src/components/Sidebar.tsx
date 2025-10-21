"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Calendar,
  Settings,
  Gamepad2,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", icon: <Home size={18} />, href: "/" },
    { name: "Events", icon: <Calendar size={18} />, href: "/events" },
    { name: "Games", icon: <Gamepad2 size={18} />, href: "/games" },
    { name: "FAQs", icon: <HelpCircle size={18} />, href: "/faqs" },
    { name: "Settings", icon: <Settings size={18} />, href: "/settings" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-red-700 rounded-lg shadow-md"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-black-sec border-r border-black shadow-md transform transition-transform duration-300 z-40
  ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <nav className="flex flex-col p-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-950 transition-colors"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
