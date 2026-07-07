"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="#hero"
          className="flex items-center gap group"
        >
          <Image
            src="/logo.png"
            alt="MM Logo"
            width={90}
            height={120}
            className="transition-transform duration-300 group-hover:scale-105"
          />

          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Madhura Melgiri
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}