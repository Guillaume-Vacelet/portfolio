'use client'
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"

export default function Header() {
    const [selectedLink, setSelectedLink] = useState("#home");

    return (
        <div id="app-header" className="h-[var(--header-height)] w-full flex flex-row gap-16 fixed top-0 items-center justify-center z-50">
            <AnchorLink href='#home'
                className={`cursor-pointer hover:text-accent ${selectedLink === '#home' ? 'text-accent' : ''}`}
                onClick={() => setSelectedLink("#home")}
            >Home</AnchorLink>

            <AnchorLink href='#projects'
                className={`cursor-pointer hover:text-accent ${selectedLink === '#projects' ? 'text-accent' : ''}`}
                onClick={() => setSelectedLink("#projects")}
            >Projects</AnchorLink>
        </div>
    )
}