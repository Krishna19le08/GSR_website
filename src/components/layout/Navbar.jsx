"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { donateNav, isActive, mainNav, visibleNav } from "@/config/navbar-data";

const NAV = visibleNav(mainNav);

function Chevron({ open = false, className = "size-4" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={`${className} shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Flattens children (and any visible grandchildren) into one indented list,
// so the desktop dropdown never needs fly-out sub-menus.
function flatten(items, depth = 0) {
  return items.flatMap((item) => [
    { ...item, depth },
    ...(item.children?.length ? flatten(item.children, depth + 1) : []),
  ]);
}

function DesktopNavItem({ item, pathname, openKey, setOpenKey }) {
  const closeTimer = useRef(null);
  const toggleRef = useRef(null);
  const hasChildren = item.children?.length > 0;
  const open = openKey === item.label;
  const active = isActive(item, pathname);
  const exact = item.href === pathname;
  const panelId = `nav-panel-${item.label.replace(/\W+/g, "-").toLowerCase()}`;

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const baseText = `relative inline-flex h-11 items-center whitespace-nowrap gap-1 rounded-full px-3 text-[0.9375rem] font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-[3px] after:h-0.5 after:rounded-full after:transition-colors ${
    active ? "text-banyan after:bg-marigold" : "text-ink-soft hover:text-banyan after:bg-transparent"
  }`;

  if (!hasChildren) {
    return (
      <Link href={item.href} aria-current={exact ? "page" : undefined} className={baseText}>
        {item.label}
      </Link>
    );
  }

  function enter() {
    clearTimeout(closeTimer.current);
    setOpenKey(item.label);
  }
  function leave() {
    closeTimer.current = setTimeout(() => setOpenKey((k) => (k === item.label ? null : k)), 160);
  }
  function onKeyDown(e) {
    if (e.key === "Escape" && open) {
      e.stopPropagation();
      setOpenKey(null);
      toggleRef.current?.focus();
    }
  }
  function onBlur(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) leave();
  }

  const linkable = item.href && !item.pageSoon;

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave} onKeyDown={onKeyDown} onBlur={onBlur}>
      <div className="flex items-center">
        {linkable ? (
          <>
            <Link
              href={item.href}
              aria-current={exact ? "page" : undefined}
              className={`${baseText} pr-1`}
            >
              {item.label}
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpenKey(open ? null : item.label)}
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={`${open ? "Hide" : "Show"} ${item.label} pages`}
              className={`-ml-1 inline-flex size-8 items-center justify-center rounded-full transition-colors hover:bg-paper hover:text-banyan ${
                active ? "text-banyan" : "text-ink-soft"
              }`}
            >
              <Chevron open={open} className="size-3.5" />
            </button>
          </>
        ) : (
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpenKey(open ? null : item.label)}
            aria-expanded={open}
            aria-controls={panelId}
            className={baseText}
          >
            {item.label}
            <Chevron open={open} className="size-3.5" />
          </button>
        )}
      </div>

      <div
        id={panelId}
        className={`absolute left-0 top-full z-50 pt-3 transition duration-150 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <ul className="min-w-64 rounded-2xl border border-clay/70 bg-surface p-2 shadow-[0_20px_40px_-16px_rgb(11_38_24/0.3)]">
          {flatten(item.children).map((child) => {
            const childActive = child.href === pathname;
            return (
              <li key={`${child.depth}-${child.label}`}>
                <Link
                  href={child.href}
                  aria-current={childActive ? "page" : undefined}
                  onClick={() => setOpenKey(null)}
                  className={`flex min-h-11 items-center rounded-xl px-3 text-[0.9375rem] transition-colors ${
                    child.depth > 0 ? "pl-7 text-sm" : ""
                  } ${
                    childActive
                      ? "bg-paper font-semibold text-banyan"
                      : "text-ink-soft hover:bg-paper hover:text-banyan"
                  }`}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// Key under which a mobile drawer group's open state is tracked.
function mobileKey(item, depth) {
  return `${depth}-${item.label}`;
}

// Keys of every group on the path to the current page, so the drawer opens
// with the visitor's own section already expanded.
function activeKeys(items, pathname, depth = 0) {
  return items.flatMap((item) =>
    item.children?.length && isActive(item, pathname)
      ? [mobileKey(item, depth), ...activeKeys(item.children, pathname, depth + 1)]
      : [],
  );
}

// On touch screens the whole parent row toggles its group: a tap on
// "About Us" should reveal its pages, not navigate away before the visitor
// sees them. The parent's own page is listed as the group's first link when
// the children don't already include it.
function MobileNavItem({ item, depth = 0, pathname, expanded, onToggle, onNavigate }) {
  const key = mobileKey(item, depth);
  const isOpen = expanded.has(key);
  const hasChildren = item.children?.length > 0;
  const exact = item.href === pathname;
  const active = hasChildren ? isActive(item, pathname) : exact;
  const linkable = item.href && !item.pageSoon;
  const textClass = `flex min-h-12 flex-1 items-center gap-3 text-left ${
    depth === 0 ? "text-base font-semibold" : "text-[0.9375rem] font-medium"
  } ${active ? "text-banyan" : "text-ink"}`;
  const groupId = `mobile-group-${key.replace(/\W+/g, "-").toLowerCase()}`;

  const children = hasChildren
    ? linkable && !item.children.some((c) => c.href === item.href)
      ? [{ label: `${item.label} overview`, href: item.href }, ...item.children]
      : item.children
    : [];

  return (
    <div>
      <div className="flex items-center" style={{ paddingLeft: depth * 16 }}>
        {hasChildren ? (
          <button
            type="button"
            onClick={() => onToggle(key)}
            aria-expanded={isOpen}
            aria-controls={groupId}
            className={`${textClass} justify-between pr-1`}
          >
            {item.label}
            <span
              className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                isOpen ? "bg-paper text-banyan" : "text-ink-soft"
              }`}
              aria-hidden="true"
            >
              <Chevron open={isOpen} />
            </span>
          </button>
        ) : (
          <Link href={item.href} onClick={onNavigate} aria-current={exact ? "page" : undefined} className={textClass}>
            {active && <span className="h-5 w-0.5 rounded-full bg-marigold" aria-hidden="true" />}
            {item.label}
          </Link>
        )}
      </div>
      {hasChildren && isOpen && (
        <div id={groupId} className="mb-2 ml-1 border-l-2 border-clay pl-2">
          {children.map((child) => (
            <MobileNavItem
              key={child.label}
              item={child}
              depth={depth + 1}
              pathname={pathname}
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
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(new Set());
  const [openKey, setOpenKey] = useState(null);
  const menuButtonRef = useRef(null);

  // Escape closes whichever menu is open.
  useEffect(() => {
    function onKey(e) {
      if (e.key !== "Escape") return;
      setOpenKey(null);
      setMobileOpen((wasOpen) => {
        if (wasOpen) menuButtonRef.current?.focus();
        return false;
      });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // While the drawer is open the page behind it must not scroll: on phones a
  // swipe past the end of the menu would otherwise drag the page instead.
  useEffect(() => {
    if (!mobileOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [mobileOpen]);

  function openMobile() {
    setExpanded(new Set(activeKeys(NAV, pathname)));
    setMobileOpen(true);
  }

  function toggleExpanded(key) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function closeMobile() {
    setMobileOpen(false);
    setExpanded(new Set());
  }

  const donateActive = pathname === donateNav.href;

  return (
    <header className="sticky top-0 z-50 border-b border-clay/70 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center rounded-md" aria-label="GSR home">
          <Image
            src="/brand/gsr-logo.webp"
            alt="GSR, Global Social Responsibility Welfare Foundation"
            width={360}
            height={136}
            preload
            sizes="160px"
            className="h-11 w-auto lg:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              pathname={pathname}
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={donateNav.href}
            aria-current={donateActive ? "page" : undefined}
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-marigold px-5 text-sm font-semibold text-ink transition-colors hover:bg-gold-hover lg:min-h-11 lg:px-6 lg:text-[0.9375rem]"
          >
            {donateNav.label}
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => (mobileOpen ? closeMobile() : openMobile())}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper xl:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-6" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-clay/70 bg-surface px-4 pb-8 pt-2 shadow-[0_24px_40px_-24px_rgb(11_38_24/0.4)] sm:px-6 xl:hidden"
        >
          <nav aria-label="Primary mobile" className="divide-y divide-clay/60">
            {NAV.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                pathname={pathname}
                expanded={expanded}
                onToggle={toggleExpanded}
                onNavigate={closeMobile}
              />
            ))}
          </nav>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link
              href="/join"
              onClick={closeMobile}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-banyan text-[0.9375rem] font-semibold text-banyan"
            >
              Volunteer
            </Link>
            <Link
              href="/contact"
              onClick={closeMobile}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-banyan text-[0.9375rem] font-semibold text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
