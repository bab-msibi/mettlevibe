import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaSnapchatGhost,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black-sec text-white py-10 px-6 border-t border-slate-800 mt-auto">
      {/* Main content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Left Section (Logo + tagline) */}
        <div className="flex items-center space-x-4">
          <Image
            src="/red-logo-horizontal.webp"
            alt="BookMe Logo"
            width={150}
            height={150}
            className="object-contain"
          />
          <div>
            <p className="text-sm text-slate-400">
              Esports Tournaments Platform
            </p>
          </div>
        </div>

        {/* Right Section (Contact Info + Socials) */}
        <div className="text-center md:text-right">
          <p className="text-white font-bold text-sm">Follow Us On Socials</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-3 mt-4">
            <a
              href="#"
              className="bg-[#3b5998] p-2 rounded-full hover:opacity-80"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-[#1DA1F2] p-2 rounded-full hover:opacity-80"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="bg-[#0077B5] p-2 rounded-full hover:opacity-80"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              className="bg-[#E1306C] p-2 rounded-full hover:opacity-80"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="bg-[#FF0000] p-2 rounded-full hover:opacity-80"
            >
              <FaYoutube size={16} />
            </a>
            <a
              href="#"
              className="bg-[#E60023] p-2 rounded-full hover:opacity-80"
            >
              <FaPinterestP size={16} />
            </a>
            <a
              href="#"
              className="bg-[#FFFC00] text-black p-2 rounded-full hover:opacity-80"
            >
              <FaSnapchatGhost size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-slate-500 text-sm mt-8 border-t border-slate-800 pt-4">
        © {new Date().getFullYear()} MettleState. All rights reserved.
      </div>
    </footer>
  );
}
