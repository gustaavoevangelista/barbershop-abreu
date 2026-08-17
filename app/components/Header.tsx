"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconWhatsapp } from "./icons";
import { WHATSAPP_URL } from "../content";

const LINKS = [
  { href: "#oficio", label: "Ofício" },
  { href: "#equipa", label: "Equipa" },
  { href: "#servicos", label: "Serviços" },
  { href: "#ritual", label: "O Ritual" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="rule-brass absolute inset-x-0 bottom-0 opacity-0 transition-opacity duration-500 data-[on=true]:opacity-100" data-on={scrolled} />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center py-2">
          <Image
            src="/logo.jpg"
            alt="BarberShop Abreu"
            width={200}
            height={200}
            priority
            className="h-14 w-14 rounded-lg sm:h-16 sm:w-16"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm tracking-wide text-parchment/80 transition-colors hover:text-parchment"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-brass/60 px-5 py-2 text-sm font-medium tracking-wide text-brass-bright transition-colors hover:bg-brass hover:text-ink sm:inline-flex"
          >
            <IconWhatsapp className="h-4 w-4" />
            Marcar Horário
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-parchment transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-parchment transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`grid overflow-hidden bg-ink/95 backdrop-blur-md transition-[grid-template-rows] duration-400 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 border-t border-steel/40 px-6 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-steel/20 py-3 text-base text-parchment/90"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brass px-5 py-3 text-sm font-semibold text-ink"
            >
              <IconWhatsapp className="h-4 w-4" />
              Marcar Horário
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
