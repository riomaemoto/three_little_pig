"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/location", label: "Location & Contact" },
];

type NavLink = {
  href: string;
  label: string;
  className: string;
  onClick?: () => void;
};

function NavLink({ href, label, className, onClick }: NavLink) {
  return (
    <Link
      href={href}
      className={`text-2xl font-bold hover:text-yellow-400 transition-colors ${className}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-sm mt-3 md:text-3xl font-bold text-white"
            >
              3 Little Pigs Samgyupsal
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                className=""
              />
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                className="block px-3 py-2"
                // Close menu when clicking a link
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
