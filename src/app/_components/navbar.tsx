'use client'
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import NavbarModal from "./navbarModal";
import LocaleSwitcher from "./localeSwitcher/localeSwitcher";
import { useTranslations } from "next-intl";

// Ids of the home page sections. Smooth scrolling to them is handled in CSS.
const navLinks = ['home', 'works', 'contact'];

export default function Navbar({
  homePage=true,
  dark=false
} : { 
  homePage?: boolean,
  dark?: boolean 
}) {
  const [activeSection, setActiveSection] = useState<string>('');
  // null until the first scroll check: the navbar stays hidden until then
  const [isFolded, setIsFolded] = useState<boolean | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  // Stable, so the menu's effects don't re-run on every navbar render
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const t = useTranslations('navbar');
  const links = homePage ? navLinks : [];

  // Folds the navbar when scrolling down, unfolds it when scrolling up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      // React skips the render when the direction has not changed
      setIsFolded(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    }

    // Initial call reveals the navbar on page load
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlights the section taking up the largest share of its own height in the viewport.
  // A later section must beat the earlier ones by `diffMargin` to win, to avoid flickering.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.section'));
    const visibleRatios = new Map<Element, number>();
    const diffMargin = 0.15;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => visibleRatios.set(entry.target, entry.intersectionRatio));

      let best = sections[0];
      sections.forEach(section => {
        if ((visibleRatios.get(section) ?? 0) > (visibleRatios.get(best) ?? 0) + diffMargin) {
          best = section;
        }
      });
      if (best) setActiveSection(best.id);
    }, { threshold: Array.from({ length: 21 }, (_, i) => i / 20) });

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const foldClass = isFolded === null ? 'hidden' : isFolded ? 'folding' : 'unfolding';

  return (
    <>
      <header
        className={`h-[var(--sm-header-h)] sm:h-[var(--header-h)] w-full place-content-center px-4 sm:p-6 font-medium border-b ${dark ? 'bg-zinc-950 border-zinc-600' : 'bg-white border-cardBorder'} ${foldClass} fixed top-0 left-0 z-50`}>
        <div className="relative w-full flex items-center justify-end sm:justify-center">
          {/* Mobile navbar */}
          <div className={`w-full sm:hidden flex flex-row items-center justify-between`}>
            <Link href="/">
              <Image
                src={`/static/icons/logo-perso-2.svg`}
                alt="Guillaume Vacelet"
                width={60}
                height={24}
                className={`size-12 ${dark ? 'svg-to-white': ''}`}
              />
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label={t('openMenu')}
              aria-controls="navbar-modal"
              aria-expanded={isMenuOpen}
              className="size-8 p-2 rounded-md bg-gray-900 z-50">
              <div className="relative size-full">
                <Image
                  src={`/static/icons/menu.svg`}
                  alt=""
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
            </button>
          </div>

          {/* Desktop navbar */}
          <div className="w-[300px] lg:w-[400px] hidden sm:flex">
            <Link
              className="z-50 absolute left-0 self-center"
              href="/">
              <Image
                src={`/static/icons/logo-perso-2.svg`}
                alt="Guillaume Vacelet"
                width={60}
                height={24}
                className={`${dark ? 'svg-to-white': ''}`}
              />
            </Link>

            <nav aria-label={t('mainNav')} className="w-full">
            <ul className="w-full flex flex-row items-center justify-between">
              {links.map(navLink =>
                <li className="relative group flex flex-col items-center cursor-pointer" key={navLink}>
                  <a
                    href={`#${navLink}`}
                    aria-current={navLink === activeSection ? 'location' : undefined}
                    className={`
                      ${navLink === activeSection
                        ? 'text-accent'
                        : 'text-appBlack'
                      }
                      text-base group-hover:text-accent transition-colors
                    `}
                  >
                    {t(navLink)}
                  </a>
                  <div className={`${navLink === activeSection ? 'bg-accent' : 'bg-transparent'} absolute top-full w-1 h-1 rounded-full`}></div>
                </li>
              )}
            </ul>
            </nav>
          
            <div className="self-center z-50 absolute right-0">
              <LocaleSwitcher dark />
            </div>
          </div>
        </div>
      </header>

      <NavbarModal
        links={links}
        isOpen={isMenuOpen}
        onClose={closeMenu}
        menuButtonRef={menuButtonRef}
      />
    </>
  );
}
