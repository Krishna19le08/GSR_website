"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { authNav, donateNav, mainNav } from "./navbar-data";

function ChevronDown() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="size-3.5 shrink-0 transition-transform duration-200 group-hover:rotate-180"
      aria-hidden="true"
    >
      <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="size-3.5 shrink-0"
      aria-hidden="true"
    >
      <path d="m7.5 5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopDropdownItem({ item }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function handleEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className="block px-4 py-2 text-sm text-ink-soft hover:bg-paper-deep hover:text-banyan"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <Link
        href={item.href}
        className="flex items-center justify-between gap-2 px-4 py-2 text-sm text-ink-soft hover:bg-paper-deep hover:text-banyan"
      >
        {item.label}
        <ChevronRight />
      </Link>
      <div
        className={`absolute left-full top-0 z-50 ml-0.5 min-w-56 border border-clay bg-paper py-2 shadow-lg transition duration-150 ${
          open ? "visible translate-x-0 opacity-100" : "invisible -translate-x-1 opacity-0"
        }`}
        role="menu"
      >
        {item.children.map((child) => (
          <DesktopDropdownItem key={child.label} item={child} />
        ))}
      </div>
    </div>
  );
}

function DesktopNavItem({ item }) {
  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className="px-3 py-2 text-sm font-medium text-ink-soft hover:text-banyan"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink-soft hover:text-banyan"
      >
        {item.label}
        <ChevronDown />
      </Link>
      <div
        className="invisible absolute left-0 top-full z-50 min-w-64 -translate-y-1 border border-clay bg-paper py-2 opacity-0 shadow-lg transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
        role="menu"
      >
        {item.children.map((child) => (
          <DesktopDropdownItem key={child.label} item={child} />
        ))}
      </div>
    </div>
  );
}

function MobileNavItem({ item, depth = 0, expanded, onToggle, onNavigate }) {
  const key = `${depth}-${item.label}`;
  const isOpen = expanded.has(key);
  const hasChildren = !!item.children?.length;

  return (
    <div className={depth > 0 ? "border-clay/60" : ""}>
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex-1 py-2.5 text-sm font-medium text-ink"
          style={{ paddingLeft: depth * 16 }}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            onClick={() => onToggle(key)}
            aria-expanded={isOpen}
            aria-label={`Toggle ${item.label} submenu`}
            className="flex h-9 w-9 items-center justify-center text-ink-soft"
          >
            <span
              className={`inline-block transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            >
              <ChevronDown />
            </span>
          </button>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className="border-l border-clay">
          {item.children.map((child) => (
            <MobileNavItem
              key={child.label}
              item={child}
              depth={depth + 1}
              expanded={expanded}
              onToggle={onToggle}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(new Set());

  function toggleExpanded(key) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  function closeMobile() {
    setMobileOpen(false);
    setExpanded(new Set());
  }

  return (
    <header className="sticky top-0 z-50 border-b border-clay bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/GSR_v7.png"
            alt="GSR"
            width={160}
            height={54}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={authNav.href}
            className="px-3 py-2 text-sm font-medium text-ink-soft hover:text-banyan"
          >
            {authNav.label}
          </Link>
          <Link
            href={donateNav.href}
            className="bg-marigold px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-marigold-deep hover:text-paper"
          >
            {donateNav.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-soft lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="size-6"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-clay bg-paper px-4 pb-6 lg:hidden">
          <nav aria-label="Primary mobile" className="divide-y divide-clay/60">
            {mainNav.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                expanded={expanded}
                onToggle={toggleExpanded}
                onNavigate={closeMobile}
              />
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-clay/60 pt-4">
            <Link
              href={authNav.href}
              onClick={closeMobile}
              className="border border-ink/25 px-4 py-2 text-center text-sm font-medium text-ink-soft"
            >
              {authNav.label}
            </Link>
            <Link
              href={donateNav.href}
              onClick={closeMobile}
              className="bg-marigold px-4 py-2 text-center text-sm font-semibold text-ink hover:bg-marigold-deep hover:text-paper"
            >
              {donateNav.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
