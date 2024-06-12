'use client'
import "/public/static/css/card-to-modal.scss";
import { RefObject, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { Project } from "./projects";
import Image from "next/image";

export default function CardToModal({project, modalRef} : {project : Project, modalRef: RefObject<HTMLDivElement>}) {
    let cardRef = useRef<HTMLDivElement>(null);
    let cardContentRef = useRef<HTMLDivElement>(null);
    let isExpanded = useRef(false);
    const { contextSafe } = useGSAP({ scope: cardRef });
    const animDuration = 0.5;

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
        // let cardContentState = Flip.getState([cardContentRef.current, ".animated"], {
        //     props: "fontSize, padding, borderRadius, opacity"
        // });
    
        // 2) change state
        const expandedState = expand();

        // 3) Flip.from()
        // requestAnimationFrame(() => {
        //     Flip.from(cardContentState, {
        //         duration: animDuration,
        //         ease: "power1.inOut",
        //         absolute: true,
        //         scale: true,
        //         onComplete: onAnimationEnd,
        //     })
        // });
    });

    function expand() : Flip.FlipState {
        // cardRef.current.classList.toggle("fullscreen");

        Flip.fit(cardContentRef.current, modalRef.current, {
            duration: animDuration,
            ease: 'power1.inOut',
            scale: true
        });

        const expandedState = Flip.getState(cardContentRef.current);

        // gsap.set(cardContentRef.current, {
        //     borderRadius: 0,
        //     overflow: "auto",
        //     zIndex: 100,
        //     // padding: 64
        // })

        Flip.from(expandedState, {
            duration: animDuration,
            ease: "power1.inOut",
            absolute: true,
            scale: true,
            onComplete: onAnimationEnd,
        })
        // gsap.set(".title", {
        //     duration: 0.5,
        //     scale: 1,
        // })
        // gsap.set(".subtitle", {
        //     scale: 1,
        //     height: "auto",
        //     opacity: 1
        // })

        // if (isExpanded.current) {
        //     gsap.to(".thumbnail-container", {
        //         duration: animDuration,
        //         scale: 1
        //     });
        // } else {
        //     gsap.from(initialState, {
        //         duration: animDuration,
        //         scale: 4
        //     })
        // }

        return expandedState;
    }

    function onAnimationEnd() {
        console.log("onAnimationEnd()");
        // disable scroll
        gsap.set("body", {overflow: "hidden"})
        isExpanded.current = !isExpanded.current;
    }

    function handleEscapeKey(e: React.KeyboardEvent) {
        if(e.key === 'Escape' && isExpanded.current) {
          toggle();
        }
    }

    return (
        <div ref={cardRef} className="card" tabIndex={0} onKeyDown={(e) => handleEscapeKey(e)}>
            <div ref={cardContentRef} className="card-content" style={{background: project.cardColor}} onClick={() => { !isExpanded.current && toggle() }}>
                <div className="header">
                    {/* <button className="card-close-btn animated" 
                        onClick={() => { isExpanded.current && toggle() }}
                    >
                        <Image alt="close icon"
                            src="/static/images/xmark.svg"
                            width={18}
                            height={18}
                        />
                    </button> */}
                    <h2 className="title animated">{project.title}</h2>
                    {/* <h3 className="subtitle animated">{project.subtitle}</h3> */}
                    {/* <p className="desc animated">{project.desc}</p> */}
                </div>
                
                {/* <div className="thumbnail-container animated">
                    <Image className="thumbnail animated"
                        src={project.cardThumbnail}
                        alt="card-thumbnail"
                        priority
                        quality={100}
                    />
                </div> */}
            </div>
        </div>
    );
}