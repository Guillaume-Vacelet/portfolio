'use client'
import Link from "next/link";
import router, { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export interface NavLink {
  label: string;
  anchor: string;
}

export default function Navbar({navLinks} : { navLinks: NavLink[] }) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // 50% of the section must be visible
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // window.history.replaceState(null, '', `${window.location.pathname}#${activeSection}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (target: string) => {router.push(target)};

  return (
    <div className="w-[456px] pt-4 sticky top-0 left-0 z-50">
      <ul className="w-full flex flex-row justify-around rounded-[16px] py-2 px-2 gap-2 bg-slate-950">
        {navLinks.map(navLink => 
          <li onClick={() => handleNavClick(`#${navLink.anchor}`)}
            className="w-full flex justify-center py-1 px-6 rounded-[8px] group"
            style={{
              background: activeSection ===  navLink.label.toLowerCase()
              ? 'rgb(15 23 42)'
              : ''
            }}
            key={navLink.label}>
            {/* <a className="text-stone-500 text-xs group-hover:text-white"
              style={{ color: activeSection ===  navLink.label.toLowerCase() ? 'white' : ''}}>
              {navLink.label}
            </a> */}
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

