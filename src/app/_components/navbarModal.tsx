'use client'
import Image from "next/image";
import LangDropdownList from "@/_components/langDropdownList";
import { navLinks, handleScrollToAnchor } from "@/_components/navbar";
import Link from "next/link";
import SocialLinkList from "@/_components/socialLinkList";
import React, { useEffect } from "react";
import debounce from "@/_utils/debounce";

export function toggleModal() {
  const modal = document.getElementById('navbar-modal');

  if (!modal) return;

  modal.style.display = "flex";
  if (modal.classList.contains('fade-in')) {
    fadeModalOut(modal);
  } else {
    fadeModalIn(modal);
  }
}

function fadeModalIn(modal: HTMLElement) {
  document.body.style.overflow = 'hidden';
  modal.classList.add('fade-in');
  modal.classList.remove('fade-out');
  modal.style.zIndex = '50';
}

function fadeModalOut(modal: HTMLElement) {
  console.log("fade-out")
  document.body.style.overflow = 'scroll';
  modal.classList.add('fade-out');
  modal.classList.remove('fade-in');
  modal.style.zIndex = '0';
}

export default function NavbarModal() {
  useEffect(() => {
    window.addEventListener('resize', debounce(
      (event: Event) => {
        const win = event.target as Window;
        const mobileScreenThreshold = 640;
        const modal = document.getElementById('navbar-modal');

        if (win.innerWidth < mobileScreenThreshold) return;
        if (!modal) return;

        fadeModalOut(modal);
      }, 200), true);
  }, [])

  return (
    <div id="navbar-modal" className="fixed top-0 left-0 w-full h-[100vh] hidden flex-col bg-black p-[26px] z-50">
      <div className="w-full flex flex-row justify-between">
        <LangDropdownList />
        <button onClick={() => toggleModal()} className="sm:hidden size-8 p-2 rounded-md bg-gray-900 z-50">
          <div className="relative size-full">
            <Image
              src={`/static/images/close.svg`}
              alt="close icon"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </button>
      </div>

      <ul className="size-full flex flex-col justify-center gap-6">
        {navLinks.map((navLink) =>
          <li className="flex flex-col justify-center items-center gap-2 cursor-pointer" key={navLink.anchor}>
            <Link
              href={`#${navLink.anchor}`}
              onClick={(e) => {
                toggleModal();
                handleScrollToAnchor(e, navLink.anchor);
              }}
              className="text-white text-2xl">
              {navLink.label}
            </Link>
          </li>
        )}
      </ul>

      <div className="w-full flex justify-center">
        <SocialLinkList />
      </div>
    </div>
  )
}