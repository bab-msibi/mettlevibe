"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import SidebarLinks from "@/task/SidebarLinks";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-gray-100 rounded-lg shadow-md"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-50 border-r border-gray-200 shadow-md transform transition-transform duration-300 z-40
  ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <SidebarLinks />
      </aside>
    </>
  );
}
