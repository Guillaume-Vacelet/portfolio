'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toggleModal } from "./navbarModal";
import LocaleSwitcher from "./localeSwitcher/localeSwitcher";
import { useTranslations } from "next-intl";

export const navLinks = ['home', 'works', 'contact'];
export const projectsNavLinks = [];

export function handleScrollToAnchor(event: React.MouseEvent, anchor: string) {
  const sectionId = anchor.replace('#', '');
  const element = document.getElementById(sectionId);

  event.preventDefault();
  if (element) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth'})
  }
}

export default function Navbar({
  hideOnScroll=true,
  homePage=true,
  dark=false
} : { 
  hideOnScroll?: boolean, 
  homePage?: boolean 
  dark?: boolean 
}) {
  const [activeSection, setActiveSection] = useState<string>('');
  const t = useTranslations('navbar');
  const links = homePage ? navLinks : projectsNavLinks;

  useEffect(() => {
    if (!hideOnScroll) return;
    const navbar = document.getElementById('dynamic-navbar');
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    let isFolded: boolean | null = null;

    function handleScroll() {
      const isScrollingDown = window.scrollY > lastScrollY;
      lastScrollY = window.scrollY;

      // Only touch the DOM when the scroll direction changes
      if (!navbar || isScrollingDown === isFolded) return;
      isFolded = isScrollingDown;

      if (isScrollingDown) {
        navbar.classList.remove('unfolding');
        navbar.classList.add('folding');
      } else {
        navbar.style.display = "block";
        navbar.classList.remove('folding');
        navbar.classList.add('unfolding');
      }
    }

    // Initial call reveals the navbar on page load
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideOnScroll]);

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

  // the 'hidden' class is getting overrided by js style injection. It is still necessary to hide it initially. 
  return (
    <header
      id={`${hideOnScroll ? 'dynamic-navbar' : 'navbar'}`}
      className={`h-[var(--sm-header-h)] sm:h-[var(--header-h)] w-full place-content-center px-4 sm:p-6 font-medium border-b ${dark ? 'bg-zinc-950 border-zinc-600' : 'bg-white border-cardBorder'} ${hideOnScroll ? 'hidden fixed top-0 left-0 z-50' : ''}`}>
      <div className="relative w-full flex items-center justify-end sm:justify-center">
        {/* Mobile navbar */}
        <div className={`w-full sm:hidden flex flex-row items-center justify-between`}>
          <Link href="/">
            <Image
              src={`/static/icons/logo-perso-2.svg`}
              alt="logo"
              width={60}
              height={24}
              className={`size-12 ${dark ? 'svg-to-white': ''}`}
            />
          </Link>

          <button onClick={() => toggleModal()} className="size-8 p-2 rounded-md bg-gray-900 z-50">
            <div className="relative size-full">
              <Image
                src={`/static/icons/menu.svg`}
                alt="menu icon"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </button>
        </div>

        {/* Desktop navbar */}
        <div className="w-[300px] lg:w-[400px] hidden sm:flex">
          <Link
            className={`z-50 absolute left-0 self-center ${hideOnScroll ? '' : 'fade-drop-2'}`}
            href="/">
            <Image
              src={`/static/icons/logo-perso-2.svg`}
              alt="logo"
              width={60}
              height={24}
              className={`${dark ? 'svg-to-white': ''}`}
            />
          </Link>

          <ul className="w-full flex flex-row items-center justify-between">
            {links.map((navLink, index) =>
              <li className={`relative group flex flex-col items-center cursor-pointer ${hideOnScroll ? '' : 'fade-drop-' + index}`} key={navLink}>
                <Link
                  href={`#${navLink}`}
                  onClick={(e) => handleScrollToAnchor(e, navLink)}
                  className={`
                    ${navLink === activeSection
                      ? 'text-accent'
                      : 'text-appBlack'
                    }
                    text-base group-hover:text-accent transition-colors
                  `}
                >
                  {t(navLink)}
                </Link>
                <div className={`${navLink === activeSection ? 'bg-accent' : 'bg-transparent'} absolute top-full w-1 h-1 rounded-full`}></div>
              </li>
            )}
          </ul>
          
          <div className={`self-center z-50 absolute right-0 ${hideOnScroll ? '' : 'fade-drop-2'}`}>
            <LocaleSwitcher dark />
          </div>
        </div>
      </div>
    </header>
  );
}

