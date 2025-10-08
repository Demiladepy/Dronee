
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname(); // ✅ get current path

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNav(false);
      } else {
        // scrolling up → show navbar
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // ✅ function to check active link
  const linkClasses = (href: string) =>
    pathname === href
      ? 'text-purple-400 font-semibold'
      : 'hover:text-purple-400';

  return (
    <nav
      className={`fixed top-6 w-full flex justify-center z-50 transition-transform duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-32'
      }`}
    >
      {/* Pill Navbar */}
      <div className="w-[90%] max-w-7xl flex items-center justify-between bg-white opacity-80 px-6 py-3 rounded-full shadow-lg">
        {/* Brand */}
        <Link href="/" className="flex items-center text-lg font-bold tracking-wide">
          NEXT-GEN DRONES
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/ShopAll" className={linkClasses('/ShopAll')}>
            Shop All
          </Link>

          <Link href="/Contact" className={linkClasses('/Contact')}>
            Contact
          </Link>

          <Link href="/about" className={linkClasses('/about')}>
            About
          </Link>
        </div>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-6">
          {/* Profile */}
          <Link href="/profile" className={`${linkClasses('/profile')} hidden md:block`}>
            <User className="w-5 h-5" />
          </Link>

          {/* Cart */}
          <Link href="/Cart" className={`${linkClasses('/Cart')} hidden md:block`}>
            <ShoppingCart className="w-5 h-5" />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] max-w-7xl bg-white rounded-2xl shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-6 py-6 text-sm font-medium">
            <Link href="/ShopAll" onClick={() => setMenuOpen(false)} className={linkClasses('/ShopAll')}>
              Shop All
            </Link>
            <Link href="/Contact" onClick={() => setMenuOpen(false)} className={linkClasses('/Contact')}>
              Contact
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className={linkClasses('/about')}>
              About
            </Link>
            <Link href="/profile" onClick={() => setMenuOpen(false)} className={`${linkClasses('/profile')} flex items-center gap-2`}>
              <User className="w-5 h-5" /> Profile
            </Link>
            <Link href="/Cart" onClick={() => setMenuOpen(false)} className={`${linkClasses('/Cart')} flex items-center gap-2`}>
              <ShoppingCart className="w-5 h-5" /> Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
