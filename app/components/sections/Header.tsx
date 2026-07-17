"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/app/config/site";
import { Menu, X } from "lucide-react";

export function Header() {
  const { company, nav } = siteConfig;
  const [isOpen, setIsOpen] = useState(false);

return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          {company.logo && (
            <Image
              src={company.logo}
              alt={company.name}
              width={32}
              height={32}
              className="object-contain"
            />
          )}
          <span className=" font-display font-bold text-secondary text-lg">
            {company.name}
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-gray-600 hover:text-secondary text-sm font-medium transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:opacity-90 transition"
        >
          {nav.ctaText}
        </a>

        {/* Botón hamburguesa mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-secondary"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Nav mobile */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white border-t border-gray-100">
          {nav.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-secondary text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium text-center"
          >
            {nav.ctaText}
          </a>
        </nav>
      )}
    </header>
  );
}