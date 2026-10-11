'use client'
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import LocaleSwitcher from "./localeSwitcher/localeSwitcher";
import { useTranslations } from "next-intl";

// Same breakpoint as Tailwind's `sm`, above which the desktop navbar is shown
const desktopQuery = '(min-width: 640px)';

export default function NavbarModal({
  links,
  isOpen,
  onClose,
  menuButtonRef,
} : {
  links: string[],
  isOpen: boolean,
  onClose: () => void,
  // Gets the focus back when the menu closes
  menuButtonRef: React.RefObject<HTMLButtonElement | null>,
}) {
  const t = useTranslations("navbar");
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    // Give the focus back to the menu button before the menu becomes inert
    if (modalRef.current?.contains(document.activeElement)) {
      menuButtonRef.current?.focus({ preventScroll: true });
    }
    onClose();
  }, [onClose, menuButtonRef]);

  useEffect(() => {
    if (!isOpen) return;
    const desktop = window.matchMedia(desktopQuery);

    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') close();
    }
    // The menu only exists on mobile: close it when the screen gets wider
    function handleScreenChange() {
      if (desktop.matches) onClose();
    }

    window.addEventListener('keydown', handleKeyDown);
    desktop.addEventListener('change', handleScreenChange);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      desktop.removeEventListener('change', handleScreenChange);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, onClose]);

  return (
    <div
      ref={modalRef}
      id="navbar-modal"
      role="dialog"
      aria-modal="true"
      aria-label={t('mainNav')}
      inert={!isOpen}
      className={`fixed top-0 left-0 w-full h-[100vh] flex flex-col bg-black p-[26px] z-50 transition-[opacity,visibility] duration-300 ease-out ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className="w-full flex flex-row justify-between">
        <LocaleSwitcher />
        <button ref={closeButtonRef} type="button" onClick={close} aria-label={t('closeMenu')} className="sm:hidden size-8 p-2 rounded-md bg-gray-900 z-50">
          <div className="relative size-full">
            <Image
              src={`/static/icons/close.svg`}
              alt=""
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </button>
      </div>

      <ul className="size-full flex flex-col justify-center gap-6">
        {links.map((navLink) =>
          <li className="flex flex-col justify-center items-center gap-2 cursor-pointer" key={navLink}>
            <a
              href={`#${navLink}`}
              onClick={close}
              className="text-white text-2xl">
              {t(navLink)}
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
