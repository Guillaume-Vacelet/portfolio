'use client'
import { useState } from "react"

interface SocialLinkIconButtonProps {
    label?: string;
    link: string;
    icon: string;
    hoverIcon?: string;
};

export default function SocialLinkIconButton({ label, link, icon, hoverIcon } : SocialLinkIconButtonProps) {
    const [iconState, setIconState] = useState(icon);
    const buttonStyle = "h-[40px] flex flex-row items-center justify-center rounded-full bg-accent text-accent-text "

    function switchIconOnHover(icon: string | undefined) {
        if (!hoverIcon || !icon) {
            return;
        }
        setIconState(icon);
    }

    return (
        <button 
            className={label
                ? buttonStyle + "gap-2 px-[12px] py-[8px]"
                : buttonStyle + "p-[8px] w-[40px]"
            }
            onMouseOver={e => switchIconOnHover(hoverIcon)}
            onMouseOut={e => switchIconOnHover(icon)}
        >
            <a href={link} target="_blank">{label}</a>
            <img src={iconState} className="h-[24px] w-[24px]"/>
        </button>
    );
}