"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Over ons", href: "#over-ons" },
  { label: "Voor wie", href: "#voor-wie" },
  { label: "Wat we doen", href: "#wat-we-doen" },
  { label: "Impact", href: "#impact" },
  { label: "Samenwerken", href: "#samenwerken" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-3 text-foreground "
          aria-label="Tech for Impact home"
        >
          <Image
            src="/logo.png"
            alt="Tech for Impact logo"
            width={48}
            height={48}
            priority
            className="w-32 h-10 rounded-md object-contain"
          />
          {/* <span className="font-heading text-xl font-bold tracking-tight">
            Tech for Impact
          </span> */}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-[#FFF200] px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          Contact
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label={open ? "Sluit menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-lg bg-[#FFF200] px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
