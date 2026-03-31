import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo-navbar.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md text-white px-6 py-4 sticky top-0 z-50 shadow-md">

      <div className="flex justify-between items-center">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="NextGen IT Solutions" 
            className="h-10 w-auto object-contain hover:scale-105 transition"
          />
        </NavLink>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 text-sm md:text-base">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "hover:text-primary"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* DESKTOP WHATSAPP BUTTON */}
        <a
          href="https://wa.me/26771489392"
          className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] px-4 py-2 rounded-lg text-sm font-semibold transition transform hover:scale-105 shadow-md"
        >
          <FaWhatsapp />
          WhatsApp
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-black/95 p-6 rounded-xl border border-white/10 shadow-lg">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary"
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary"
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-primary"
          >
            Contact
          </NavLink>

          {/* MOBILE WHATSAPP BUTTON */}
          <a
            href="https://wa.me/26772284537"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] px-4 py-3 rounded-lg text-sm font-semibold transition transform hover:scale-105 shadow-md mt-2"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

        </div>
      )}
    </nav>
  );
}