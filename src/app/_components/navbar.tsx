'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toggleModal } from "./navbarModal";
import debounce from "@/app/_utils/debounce";
import LocaleSwitcher from "./localeSwitcher/localeSwitcher";
import { useTranslations } from "next-intl";

export const navLinks = ['home', 'about', 'projects']

export function handleScrollToAnchor(event: React.MouseEvent, sectionId: string) {
  const element = document.getElementById(sectionId);

  event.preventDefault();
  if (element) {
    element.scrollIntoView({behavior: 'smooth'})
  }
}

export default function Navbar({ hideOnScroll=false, hideOnTop=true } : { hideOnScroll?: boolean, hideOnTop?: boolean }) {
  const [activeSection, setActiveSection] = useState<string>('');
  const lastScrollY = useRef<number>(0);
  const t = useTranslations('navbar');

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
    const navbar = document.getElementById('mobile-navbar');
    const isScrollingDown = window.scrollY > lastScrollY.current;
    const isThresholdReached = hideOnTop ? window.scrollY <= 25 : false;

    if (!navbar) return;

    lastScrollY.current = window.scrollY;

    if (isScrollingDown || isThresholdReached) {
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

    newActiveSection = navLinks[getIndexOfHighestNumber(sectionsInViewportPercentages)];
    setActiveSection(newActiveSection);
  }, 100);

  return (
    <header
      id={`${hideOnScroll ? 'mobile-navbar' : 'navbar'}`}
      className={`w-full font-medium z-50 bg-black ${hideOnScroll ? 'hidden py-2 px-[26px]' : ''}`}>
      <div className="relative w-full flex items-center justify-end sm:justify-center">
        {/* Mobile navbar */}
        <div className={`relative w-full sm:hidden flex flex-row justify-between ${hideOnScroll ? '' : 'fade-in-right'}`}>
          <Link href="#home" onClick={(e) => handleScrollToAnchor(e,"home")}>
            <div className="relative size-8 svg-to-white">
              <Image
                src={`/static/images/logo-perso.svg`}
                alt="menu icon"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </Link>

          <button onClick={() => toggleModal()} className="size-8 p-2 rounded-md bg-gray-900 z-50">
            <div className="relative size-full">
              <Image
                src={`/static/images/menu.svg`}
                alt="menu icon"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </button>
        </div>

        {/* Desktop navbar */}
        <div className="w-[320px] md:w-[400px] hidden sm:flex">
          <Link className={`z-50 absolute left-4 self-center ${hideOnScroll ? '' : 'fade-drop-2'}`}
            href="#home"
            onClick={(e) => handleScrollToAnchor(e,"home")}>
            <div className="relative sm:size-10 md:size-12 svg-to-white">
              <Image
                src={`/static/images/logo-perso.svg`}
                alt="menu icon"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </Link>

          <ul className="h-10 md:h-12 w-full flex flex-row items-center justify-between">
            {navLinks.map((navLink, index) =>
              <li className={`group flex flex-col items-center cursor-pointer ${hideOnScroll ? '' : 'fade-drop-' + index}`} key={navLink}>
                <Link
                  href={`#${navLink}`}
                  onClick={(e) => handleScrollToAnchor(e, navLink)}
                  className="text-stone-500 text-xs md:text-base group-hover:text-white"
                  style={{ color: activeSection === navLink ? 'white' : ''}}>
                  {t(navLink)}
                </Link>
                {navLink === activeSection
                  ? <div className="w-1 h-1 bg-white rounded-full"></div>
                  : null
                }
              </li>
            )}
          </ul>
          
          <div className={`self-center z-50 absolute right-0 ${hideOnScroll ? '' : 'fade-drop-2'}`}>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

