'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface NavLink {
  label: string;
  anchor: string;
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const navLinks: NavLink[] = [
    { label: 'Home', anchor: 'home' },
    { label: 'About', anchor: 'about' },
    // { label: 'Experiences', anchor: 'experiences' },
    { label: 'Projects', anchor: 'projects' },
  ]

  useEffect(() => {
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

  const handleScroll = debounce(() => {
    let sectionsInViewportPercentages: number[] = [];
    let newActiveSection = "";

    document.querySelectorAll('.section').forEach(section => {
      sectionsInViewportPercentages.push(getElementHeightPercentageInViewport(section as HTMLElement));
    })

    newActiveSection = navLinks[getIndexOfHighestNumber(sectionsInViewportPercentages)].anchor;
    setActiveSection(newActiveSection);
  }, 100);

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

  return (
    <header className="w-[320px] md:w-[400px] flex justify-center px-[10px] pt-8 font-medium fixed top-0 z-50">
      <div className="w-full flex justify-center px-12 pb-2 pt-3 rounded-full bg-black">
        <ul className="w-full flex flex-row items-start justify-between">
          {navLinks.map((navLink, index) =>
            <li className={"group flex flex-col items-center cursor-pointer" + " fade-drop-" + index} key={navLink.anchor}>
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
      </div>
    </header>
  );
}

