'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toggleModal } from "./navbarModal";
import debounce from "@/app/_utils/debounce";
import LocaleSwitcher from "./localeSwitcher/localeSwitcher";
import { useTranslations } from "next-intl";

export const navLinks = ['home', 'about', 'projects']

export function handleScrollToAnchor(event: React.MouseEvent, anchor: string) {
  const sectionId = anchor.replace('#', '');
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
    const navbar = document.getElementById('dynamic-navbar');
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

  // the 'hidden' class is getting overrided by js style injection. It is still necessary to hide it initially. 
  return (
    <header
      id={`${hideOnScroll ? 'dynamic-navbar' : 'navbar'}`}
      className={`w-full font-medium z-50 ${hideOnScroll ? 'hidden py-2 px-[26px] bg-black fixed top-0 left-0 w-full z-50' : ''}`}>
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
              <li className={`relative group flex flex-col items-center cursor-pointer ${hideOnScroll ? '' : 'fade-drop-' + index}`} key={navLink}>
                <Link
                  href={`#${navLink}`}
                  onClick={(e) => handleScrollToAnchor(e, navLink)}
                  className="text-white text-xs md:text-base group-hover:text-white"
                  style={{ color: activeSection === navLink ? 'white' : ''}}>
                  {t(navLink)}
                </Link>
                <div className={`${navLink === activeSection ? 'bg-white' : 'bg-none'} absolute top-full w-1 h-1 rounded-full`}></div>
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

