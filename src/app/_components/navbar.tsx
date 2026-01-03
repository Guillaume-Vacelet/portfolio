'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toggleModal } from "./navbarModal";
import debounce from "@/app/_utils/debounce";
import LocaleSwitcher from "./localeSwitcher/localeSwitcher";
import { useTranslations } from "next-intl";

export const navLinks = ['home', 'works', 'contact'];
export const projectsNavLinks = [];

export function handleScrollToAnchor(event: React.MouseEvent, anchor: string) {
  const sectionId = anchor.replace('#', '');
  const element = document.getElementById(sectionId);

  event.preventDefault();
  if (element) {
    element.scrollIntoView({behavior: 'smooth'})
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
  const lastScrollY = useRef<number>(0);
  const t = useTranslations('navbar');
  const links = homePage ? navLinks : projectsNavLinks;

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getElementHeightPercentageInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const elTotalHeight = rect.bottom - rect.top;
    let elVisibleHeight = window.innerHeight - rect.top;

    if (rect.top <= 0) {
      if (rect.bottom > window.innerHeight) {
        elVisibleHeight = window.innerHeight;
      } else {
        elVisibleHeight = rect.bottom;
      }
    }

    return elVisibleHeight / elTotalHeight * 100;
  }

  function getIndexOfHighestNumber(arr: number[]) {
    let res = 0;
    const diffMargin = 15;

    arr.forEach((x, i) => {
      if (x > arr[res] + diffMargin) {
        res = i;
      }
    })
    return res;
  }

  function handleHideOnScroll() {
    const navbar = document.getElementById('dynamic-navbar');
    const isScrollingDown = window.scrollY > lastScrollY.current;

    if (!navbar) return;

    lastScrollY.current = window.scrollY;

    if (isScrollingDown) {
      navbar.classList.remove('unfolding');
      navbar.classList.add('folding');
    } else {
      navbar.style.display = "block";
      navbar.classList.remove('folding');
      navbar.classList.add('unfolding');
    }
  }

  function handleScroll() {
    if (hideOnScroll) {
      handleHideOnScroll();
    }
    handleActiveSection();
  }

  const handleActiveSection = debounce(() => {
    const sectionsInViewportPercentages: number[] = [];
    let newActiveSection = "";

    document.querySelectorAll('.section').forEach(section => {
      sectionsInViewportPercentages.push(getElementHeightPercentageInViewport(section as HTMLElement));
    })

    newActiveSection = links[getIndexOfHighestNumber(sectionsInViewportPercentages)];
    setActiveSection(newActiveSection);
  }, 100);

  // the 'hidden' class is getting overrided by js style injection. It is still necessary to hide it initially. 
  return (
    <header
      id={`${hideOnScroll ? 'dynamic-navbar' : 'navbar'}`}
      className={`h-[var(--sm-header-h)] sm:h-[var(--header-h)] w-full place-content-center px-4 sm:p-6 font-medium border-b ${dark ? 'bg-zinc-950 border-zinc-600' : 'bg-white border-cardBorder'} ${hideOnScroll ? 'hidden fixed top-0 left-0 z-50' : ''}`}>
      <div className="relative w-full flex items-center justify-end sm:justify-center">
        {/* Mobile navbar */}
        <div className={`w-full sm:hidden flex flex-row items-center justify-between ${hideOnScroll ? '' : 'fade-in-right'}`}>
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
                    text-base group-hover:text-accent
                  `}
                >
                  {t(navLink)}
                </Link>
                <div className={`${navLink === activeSection ? 'bg-accent' : 'bg-none'} absolute top-full w-1 h-1 rounded-full`}></div>
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

