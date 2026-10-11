"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandMark from "../brand-mark";

const mainLinks = [
  { href: "/system", label: "The system" },
  { href: "/specs", label: "Specifications" },
  { href: "/installers", label: "Installers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const audienceLinks = [
  { href: "/architects", label: "Architects & specifiers" },
  { href: "/builders", label: "Construction companies & developers" },
  { href: "/pco", label: "Pest control companies" },
  { href: "/homeowners", label: "Homeowners" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line bg-bg">
      <div className="wrap flex min-h-17 items-center justify-between gap-5">
        <Link
          href="/"
          aria-label="Termipore home"
          className="flex items-center gap-2.5 no-underline"
        >
          <BrandMark className="size-7.5 flex-none" />
          <span className="font-sans text-[1.3rem] leading-none font-extrabold tracking-[0.04em] text-head">
            TERMIPORE
            <small className="mt-1 block font-mono text-[0.6rem] font-normal tracking-[0.14em] text-muted">
              SRI LANKA
            </small>
          </span>
        </Link>

        <button
          type="button"
          className="hidden cursor-pointer rounded-r border border-line bg-transparent px-3 py-2 font-sans text-[0.9rem] font-semibold text-fg max-[960px]:block"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>

        <nav
          id="nav"
          aria-label="Main"
          className={`flex items-center gap-1 max-[960px]:absolute max-[960px]:inset-x-0 max-[960px]:top-full max-[960px]:flex-col max-[960px]:items-stretch max-[960px]:border-b max-[960px]:border-line max-[960px]:bg-bg max-[960px]:px-4 max-[960px]:pt-3 max-[960px]:pb-4.5 ${open ? "" : "max-[960px]:hidden"}`}
        >
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={current(link.href)}
              onClick={() => setOpen(false)}
              className="rounded-r px-3 py-2 text-[0.9rem] font-medium text-fg no-underline hover:bg-surface aria-[current=page]:text-accent-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary ml-2 px-4.5 py-2.5 max-[960px]:mx-0 max-[960px]:mt-2 max-[960px]:justify-center"
          >
            Request a quote
          </Link>
        </nav>
      </div>

      <div className="border-t border-line bg-surface">
        <div className="wrap flex min-h-11 items-center gap-1.5 overflow-x-auto [scrollbar-width:none]">
          <span className="mr-2 font-mono text-[0.7rem] tracking-[0.12em] whitespace-nowrap text-muted uppercase">
            For
          </span>
          {audienceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={current(link.href)}
              className="rounded-full px-3 py-1.5 text-[0.85rem] whitespace-nowrap text-fg no-underline hover:bg-band aria-[current=page]:bg-brand aria-[current=page]:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
