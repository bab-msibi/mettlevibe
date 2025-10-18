import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white border-b border-black/10 z-50 flex items-center justify-between px-6">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/next.svg"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li>
            <Link href="/blog" className="hover:text-black transition-colors">
              John Doe
            </Link>
          </li>
          <li>
            <Link href="/logout" className="hover:text-black transition-colors">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
