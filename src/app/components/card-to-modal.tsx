'use client'
import "/public/static/css/card-to-modal.scss";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import Image from "next/image";

export default function CardToModal() {
    let cardRef = useRef<HTMLDivElement>(null);
    let cardContentRef = useRef<HTMLDivElement>(null);
    let isExpanded = useRef(false);
    const { contextSafe } = useGSAP({ scope: cardRef });

    gsap.registerPlugin(Flip);

    const toggle = contextSafe(() => {
        console.log("toggle()");
        if (!cardRef.current || !cardContentRef.current) {
            return;
        }
        if (Flip.isFlipping(cardContentRef.current)) {
            return;
        }

        // 1) get the initial state
        let cardContentState = Flip.getState([cardContentRef.current, ".animated"], {
            props: "fontSize, padding"
        });
        console.log(cardContentState);
    
        // 2) change state
        cardRef.current.classList.toggle("fullscreen");

        // 3) Flip.from()
        requestAnimationFrame(() => {
            Flip.from(cardContentState, {
                duration: 0.5,
                ease: "power1.inOut",
                absolute: true,
                onComplete: onAnimationEnd,
            });
        });
    });

    function onAnimationEnd() {
        console.log("onAnimationEnd()");
        // disable scroll
        gsap.set("body", {overflow: "hidden"})
        isExpanded.current = !isExpanded.current;
    }

    function handleEscapeKey(e: React.KeyboardEvent) {
        if(e.key === 'Escape') {
          toggle();
        }
    }

    return (
        <div ref={cardRef} className="card" tabIndex={0} onKeyDown={(e) => handleEscapeKey(e)}>
            <div ref={cardContentRef} className="card-content" onClick={() => { !isExpanded.current && toggle() }}>
                <div className="header">
                    <button className="card-close-btn animated" 
                        onClick={() => { isExpanded.current && toggle() }}
                    >
                        <Image alt="close icon"
                            src="/static/images/xmark.svg"
                            width={18}
                            height={18}
                        />
                    </button>
                    <h2 className="title animated">Safecheck</h2>
                    <h3 className="subtitle animated">Counterfeit authenticator app</h3>
                    <p className="desc animated">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
                <div className="imgContainer animated">
                    <img src="/static/images/safecheck/mobile-screens.png"/>
                </div>
            </div>
        </div>
    );
}