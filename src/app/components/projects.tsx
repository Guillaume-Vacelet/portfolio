'use client'
import { StaticImageData } from "next/image";
import CardToModal from "./card-to-modal";
import safecheckThumbnail from "/public/static/images/safecheck/thumbnail.png";
import blindspotThumbnail from "/public/static/images/blindspot/thumbnail.png";
import { useRef } from "react";

export interface Project {
    cardThumbnail: StaticImageData;
    cardColor: string;
    title: string;
    subtitle: string;
    desc: string;
    images: string[]
}

export default function ProjectsSection() {
    let modalRef = useRef<HTMLDivElement>(null);

    const projects : Project[] = [
        {
            cardThumbnail: safecheckThumbnail,
            cardColor: '#A0FFCA',
            title: 'Safecheck',
            subtitle: 'Counterfeit authenticator app',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            images: [],
        },
        {
            cardThumbnail: blindspotThumbnail,
            cardColor: '#B4FFF6',
            title: 'Blindspot',
            subtitle: 'Counterfeit authenticator app',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            images: [],
        }
    ]

    return (
        <div id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <div className="h-full w-full flex flex-row gap-[100px] justify-center items-center">
                <div ref={modalRef} className="h-full w-full fixed top-0 left-0 p-[64px] z-100 overflow-auto bg-red-500"></div>
                {projects.map((project, i) =>  <CardToModal project={project} modalRef={modalRef} key={i} /> )}
            </div>
        </div>
    )
}