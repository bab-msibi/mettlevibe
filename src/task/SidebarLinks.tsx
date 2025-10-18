import { Home, User, Settings } from "lucide-react";

export default async function SidebarLinks() {
  const links = [
    { name: "Home", icon: <Home size={18} />, href: "/" },
    { name: "Events", icon: <User size={18} />, href: "/events" },
    { name: "Settings", icon: <Settings size={18} />, href: "/settings" },
  ];

  return (
    <nav className="flex flex-col p-4 space-y-3 mt-6">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          {link.icon}
          <span>{link.name}</span>
        </a>
      ))}
    </nav>
  );
}
