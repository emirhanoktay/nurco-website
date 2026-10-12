"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Wordmark } from "./brand";

const links = [
  { href: "#waffle", text: "Lezzetler" },
  { href: "#menu", text: "Menü" },
  { href: "#hikaye", text: "Biz Kimiz" },
  { href: "#subeler", text: "Şubeler & İletişim" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>
      <div className="announcement">
        <span>HAYATIN TATLI TARAFINDA BULUŞALIM</span>
        <span aria-hidden="true">✳</span>
        <span>WAFFLE & KUMPİR</span>
      </div>
      <header className="site-header">
        <div className="nav-inner page-width">
          <a
            className="home-link"
            href="#"
            aria-label="Nurço ana sayfa"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
          </a>
          <nav className="desktop-nav" aria-label="Ana menü">
            {links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.text}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#subeler">
            Bir mola ver <ArrowUpRight size={17} />
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Mobil menü"
          hidden={!open}
        >
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.text}
              <ArrowUpRight size={20} />
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
