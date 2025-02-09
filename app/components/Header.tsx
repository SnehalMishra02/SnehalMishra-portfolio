'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const sections = ["Me", "Skills", "Projects", "TimeLine", "Connect"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[10vh] flex items-center justify-center p-1 top-0 sticky z-10">
      <div className="h-full w-[90%] rounded-3xl border-2 border-white bg-black bg-opacity-50 backdrop-blur-md flex justify-between items-center p-2">
        
        {/* Logo */}
        <div className="flex items-center pl-4">
          <Link href="/#">
            <img className="max-h-[50px] w-auto cursor-pointer" src="/Logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          {sections.map((section, i) => (
            <Link 
              href={`/#${section}`} 
              key={i}
              className="bg-white/30 shadow-xl backdrop-blur-[5.5px] border border-white/20 font-semibold text-blue-100 hover:text-slate-800 hover:bg-white/70 hover:shadow-md hover:shadow-purple-400 p-3 rounded-2xl"
            >
              {section}
            </Link>
          ))}
          <Link 
            href="/Blogs" 
            className="bg-white/30 shadow-xl backdrop-blur-[5.5px] border border-white/20 font-semibold text-blue-100 hover:text-slate-800 hover:bg-white/70 hover:shadow-md hover:shadow-purple-400 p-3 rounded-2xl"
          >
            Blogs
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center top-0 fixed">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-black bg-opacity-90 backdrop-blur-md p-4 flex flex-col items-center md:hidden">
          {sections.map((section, i) => (
            <Link 
              href={`/#${section}`} 
              key={i}
              className="w-full text-center py-2 text-white font-semibold hover:bg-white/20 transition"
              onClick={() => setMenuOpen(false)}
            >
              {section}
            </Link>
          ))}
          <Link 
            href="/Blogs" 
            className="w-full text-center py-2 text-white font-semibold hover:bg-white/20 transition"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
