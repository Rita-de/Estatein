import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const listItem = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Properties", path: "/prop" },
  { id: 4, title: "Services", path: "/service" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <nav>
        {/* Top Banner */}
        <div className="text-white flex items-center justify-center pt-2 bg-[url(/home/navbg.png)] bg-cover bg-no-repeat bg-[#262626] h-fit pb-2">
          <h2 className="text-xs md:text-sm text-center px-2">
            ✨ Discover your Dream Property with Estatein
            <span className="pl-2 underline text-purple-700 hover:text-white hover:cursor-pointer">
              Learn More
            </span>
          </h2>
        </div>

        {/* Main Nav */}
        <div className="flex justify-between items-center bg-[#1A1A1A] p-4 md:px-8 lg:px-[162px]">
          {/* Logo */}
          <Link to = "/"><img src="/home/logo2.png" alt="Logo" width={120} className="z-20 hover:scale-105" /></Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-white text-lg">
            {listItem.map((item) => (
              <li
                key={item.id}
                className="hover:cursor-pointer rounded-lg p-[10px_16px] hover:bg-[#141414] hover:border border-[#262626] transition"
              >
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>

          {/* Contact Button (Desktop) */}
          <button className="hidden md:block p-2 px-4 border border-white rounded hover:bg-white hover:text-black transition">
           <Link to="/contact">Contact</Link>
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex z-20">
            {menuOpen ? (
              <X
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <Menu
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1A1A1A] flex flex-col items-center gap-4 py-6 animate-slide-down">
            <ul className="flex flex-col gap-4 text-white text-lg">
              {listItem.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-purple-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
            <button className="p-2 px-4 border border-white rounded hover:bg-white hover:text-black transition">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

