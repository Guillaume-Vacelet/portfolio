'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface NavLink {
  label: string;
  anchor: string;
}

export default function Navbar({navLinks} : { navLinks: NavLink[] }) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
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
        elVisibleHeight = window.innerHeight; // le haut & le bas de l'élément dépassent le viewport
      } else {
        elVisibleHeight = rect.bottom; // le haut de l'élément dépasse le viewport
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

    arr.forEach((x, i) => {
      if (x > arr[res] + 15) {
        res = i;
      }
    })
    return res;
  }

  const handleScroll = debounce(() => {
    let sectionsInViewportPercentages: number[] = [];

    document.querySelectorAll('.section').forEach(section => {
      sectionsInViewportPercentages.push(getElementHeightPercentageInViewport(section as HTMLElement));
    })

    setActiveSection(navLinks[getIndexOfHighestNumber(sectionsInViewportPercentages)].anchor);
  }, 100);

  async function handleOnClick(target: any) {
    console.log(target);
    setIsScrolling(true);
  
    const element = document.getElementById(target);
  
    if (element) {
      router.push(`#${target}`)
      element.scrollIntoView({behavior: 'smooth'})
  
      setTimeout(() => {
        setIsScrolling(false);
        setActiveSection(target);
      }, 500)
    }
  }

  return (
    <div className="w-[456px] pt-4 sticky top-0 left-0 z-50">
      <ul className="w-full flex flex-row justify-around rounded-[16px] py-2 px-2 gap-2 bg-slate-950">
        {navLinks.map(navLink => 
          <li onClick={() => handleOnClick(navLink.anchor)}
            className="w-full flex justify-center py-1 px-6 rounded-[8px] group"
            style={{
              background: activeSection ===  navLink.label.toLowerCase()
              ? 'rgb(15 23 42)'
              : ''
            }}
            key={navLink.label}>
            <Link
              href={`#${navLink.anchor}`}
              className="text-stone-500 text-xs group-hover:text-white"
              style={{ color: activeSection ===  navLink.label.toLowerCase() ? 'white' : ''}}>
              {navLink.label}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

