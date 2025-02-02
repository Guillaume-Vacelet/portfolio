'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import LangDropdownList from "./langDropdownList";

interface NavLink {
  label: string;
  anchor: string;
}

export default function Navbar({ hideOnScroll=false } : { hideOnScroll?: boolean }) {
  const [activeSection, setActiveSection] = useState<string>('');
  const lastScrollY = useRef<number>(0);
  const [hide, setHide] = useState<boolean>(true);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: 'Home', anchor: 'home' },
    { label: 'About', anchor: 'about' },
    // { label: 'Experiences', anchor: 'experiences' },
    { label: 'Projects', anchor: 'projects' },
  ]

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  function getIndexOfHighestNumber(arr: number[]) {
    let res = 0;
    let diffMargin = 15;

    arr.forEach((x, i) => {
      if (x > arr[res] + diffMargin) {
        res = i;
      }
    })
    return res;
  }

  function handleScroll() {
    if (hideOnScroll) {
      setHide(window.scrollY >= lastScrollY.current);
      lastScrollY.current = window.scrollY;
    }

    handleActiveSection();
  }

  const handleActiveSection = debounce(() => {
    let sectionsInViewportPercentages: number[] = [];
    let newActiveSection = "";

    document.querySelectorAll('.section').forEach(section => {
      sectionsInViewportPercentages.push(getElementHeightPercentageInViewport(section as HTMLElement));
    })

    newActiveSection = navLinks[getIndexOfHighestNumber(sectionsInViewportPercentages)].anchor;
    setActiveSection(newActiveSection);
  }, 100)

  function handleOnClick(event: React.MouseEvent, sectionId: string) {
    const element = document.getElementById(sectionId);

    event.preventDefault();
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
  
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 500)
    }
  }

  function handleMobileMenuVisibility() {
    const modal = document.getElementById('navbar-modal');

    if (!modal) return;
    
    modal.style.display = 'flex';
    modal.classList.add(!showMobileMenu ? 'fade-in' : 'fade-out');
    modal.classList.remove(!showMobileMenu ? 'fade-out' : 'fade-in');

    if (!showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <header className={
      `size-full font-medium z-50
      ${hideOnScroll ? 'bg-black' : 'bg-none'}
      ${hideOnScroll && hide ? '-translate-y-full opacity-0' : 'translate-y-0'}
      `}>
      <div className="relative w-full flex items-center justify-end sm:justify-center p-[26px] sm:p-[30px] md:p-10">
        <button onClick={() => handleMobileMenuVisibility()} className="sm:hidden size-8 p-2 rounded-md bg-gray-900 z-50">
          <div className="relative size-full">
            <Image
              src={`/static/images/${showMobileMenu ? 'close' : 'menu'}.svg`}
              alt="menu icon"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </button>

        <div className="w-[320px] md:w-[400px] hidden sm:flex">
          <ul className="h-10 md:h-12 w-full flex flex-row items-center justify-between">
            {navLinks.map((navLink, index) =>
              <li className={`group flex flex-col items-center cursor-pointer ${'fade-drop-' + index}`} key={navLink.anchor}>
                <Link
                  href={`#${navLink.anchor}`}
                  onClick={(e) => handleOnClick(e, navLink.anchor)}
                  className="text-stone-500 text-xs md:text-base group-hover:text-white"
                  style={{ color: activeSection === navLink.label.toLowerCase() ? 'white' : ''}}>
                  {navLink.label}
                </Link>
                {navLink.anchor === activeSection
                  ? <div className="w-1 h-1 bg-white rounded-full"></div>
                  : null
                }
              </li>
            )}
          </ul>
          
          <div className="absolute right-[30px] md:right-10 fade-drop-2">
            <LangDropdownList />
          </div>
        </div>
      </div>

      <div id="navbar-modal" className={`absolute top-0 left-0 w-full h-[100vh] hidden items-center justify-center bg-black z-40`}>
        <div className="fixed top-0 left-0 p-6">
          <LangDropdownList />
        </div>
        <ul className="flex flex-col justify-end gap-6">
          {navLinks.map((navLink) =>
            <li className="group flex flex-col justify-center items-center gap-2 cursor-pointer" key={navLink.anchor}>
              <Link
                href={`#${navLink.anchor}`}
                onClick={(e) => {
                  handleMobileMenuVisibility();
                  handleOnClick(e, navLink.anchor);
                }}
                className="text-stone-500 text-2xl group-hover:text-white"
                style={{ color: activeSection === navLink.label.toLowerCase() ? 'white' : ''}}>
                {navLink.label}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

