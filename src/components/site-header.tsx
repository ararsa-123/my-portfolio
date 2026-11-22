"use client";

import Link from "next/link";
import { useState } from "react";
import { divisions } from "@/data/divisions";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-wide header-inner">
        <Link href="/" className="brand" aria-label="Mekbul Kelifa home">
          <span className="brand-mark" aria-hidden="true">MK</span>
          <span className="brand-copy">
            <span className="brand-name">Mekbul Kelifa</span>
            <span className="brand-tagline">Service · Knowledge · Innovation</span>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-lines" aria-hidden="true" />
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={menuOpen ? "primary-nav is-open" : "primary-nav"}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          {divisions.map((division) => (
            <Link key={division.href} href={division.href} onClick={() => setMenuOpen(false)}>
              {division.shortTitle}
            </Link>
          ))}
          <Link className="nav-about" href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
