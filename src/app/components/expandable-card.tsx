'use client'
import { ReactNode, useRef } from "react";
import "/public/static/css/expandable-card.scss";
import Image from "next/image";

export interface ExpandableCardProps {
    children: ReactNode;
}

export function ExpandableCard({children} : ExpandableCardProps) {
    let isExpanded = useRef(false);
    let cardRef = useRef<HTMLDivElement>(null);
    let cardContentRef = useRef<HTMLDivElement>(null);
    let initialProperties: {rect: DOMRect, opacity: number}[] = [];
    let finalProperties: {rect: DOMRect, opacity: number}[] = [];
    let cardClip: { top: number, right: number, bottom: number, left: number } = { top: 0, right: 0, bottom: 0, left: 0 };
    let expandAnimation : Animation;
    let collapseAnimation : Animation;

    /* EXPAND */

    function expand() {
        if (isExpanded.current || !cardRef.current || !cardContentRef.current) {
            return;
        }
        cardContentRef.current.addEventListener('transitionend', onExpandTransitionEnd);

        disablePageScroll();
        getInitialProperties();

        cardRef.current.classList.add('card-expanded');

        getFinalProperties();
        invertAnimatedElementsProperties();

        requestAnimationFrame(() => {
            cardRef.current?.classList.add('animated')
            expandAnimatedElements();
        });
    }

    function getInitialProperties() : void {
        let animatedEls = getAnimatedElements();

        if (!animatedEls || !cardRef.current) {
            return;
        }

        const cardRect = cardRef.current.getBoundingClientRect()
        
        animatedEls.forEach(el => {
            initialProperties.push({
              rect: el.getBoundingClientRect(),
              opacity: parseFloat(window.getComputedStyle(el).opacity)
            })
        })
        cardClip = {
          top: cardRect.top,
          right: window.innerWidth - cardRect.right,
          bottom: window.innerHeight - cardRect.bottom,
          left: cardRect.left,
        }
    }

    function getFinalProperties() : void {
        let animatedEls = getAnimatedElements();

        if (!animatedEls) {
            return;
        }
        animatedEls.forEach(el => {
            finalProperties.push({
                rect: el.getBoundingClientRect(),
                opacity: parseFloat(window.getComputedStyle(el).opacity)
            })
        })
    }

    function invertAnimatedElementsProperties() : void  {
        let animatedEls = getAnimatedElements();

        if (!animatedEls) {
            return;
        }
        animatedEls.forEach((el: HTMLElement, i) => {
            const left = initialProperties[i].rect.left - finalProperties[i].rect.left;
            const top = initialProperties[i].rect.top - finalProperties[i].rect.top;
            const scale = initialProperties[i].rect.width / finalProperties[i].rect.width;

            el.style.transform = `translate(${left}px, ${top}px) scale(${scale})`;
            el.style.opacity = `${initialProperties[i].opacity}`
        });
    }

    function onExpandTransitionEnd(e: Event) {
        console.log("onExpandTransitionEnd()");
        if (!cardRef.current || !cardContentRef.current) {
            return;
        }

        cardRef.current.classList.remove('card-animated');
        removeStyles();
        isExpanded.current = true;
    }

    function expandAnimatedElements() {
        console.log("expandAnimatedElements()");
        let animatedEls = getAnimatedElements();

        if (!animatedEls || !cardContentRef.current) {
            return;
        }
        animatedEls.forEach((el: HTMLElement, i) => {
            el.style.transform = 'translate(0, 0) scale(1)';
            el.style.opacity = `${finalProperties[i].opacity}`;
        });
        cardContentRef.current.style.clipPath = 'inset(0)';
    }

    /* COLLAPSE */

    function collapse() : void {
        console.log("collapse()");
        if (!isExpanded.current || !cardRef.current || !cardContentRef.current) {
            return;
        }

        setAnimatedElementsCollapsingInitialStyles();
        invertAnimatedElementsProperties();

        collapseAnimation = cardContentRef.current?.animate(
            [
                { clipPath: `inset(0)` },
                { clipPath: `inset(${cardClip.top}px ${cardClip.right}px ${cardClip.bottom}px ${cardClip.left}px round 5px`},
            ],
            { duration: 400, easing: 'cubic-bezier(0,0,0.21,1)' }
        );
        collapseAnimation.addEventListener('finish', onCollapseTransitionEnd);
    }

    function onCollapseTransitionEnd(e: Event) {
        console.log("onCollapseTransitionEnd()");
        if (!cardRef.current || !cardContentRef.current) {
            return;
        }
      
        cardRef.current.classList.remove('card-expanded')
        cardContentRef.current.removeEventListener('finish', onCollapseTransitionEnd);

        removeStyles();
        enablePageScroll();
        isExpanded.current = false;
    }

    function setAnimatedElementsCollapsingInitialStyles() {
        let animatedEls = getAnimatedElements();

        if (!animatedEls || !cardContentRef.current) {
            return;
        }
        animatedEls.forEach((el: HTMLElement) => {
            el.style.transform = 'translate(0, 0) scale(1)';
        });
    }

    function removeStyles() {
        let animatedEls = getAnimatedElements();

        if (!animatedEls || !cardContentRef.current) {
            return;
        }
        animatedEls.forEach(el => {
            el.style.removeProperty('transform');
            el.style.removeProperty('opacity');
        });
        cardContentRef.current.style.removeProperty('clipPath');
    }

    /* helper functions */

    function disablePageScroll() {
        document.body.style.overflow = 'hidden';
    }

    function enablePageScroll() {
        document.body.style.overflow = '';
    }

    function getAnimatedElements() : NodeListOf<HTMLElement> | null {
        if (!cardRef.current) {
            return null;
        }
        return cardRef.current.querySelectorAll('.animated');
    }

    function handleEscapeKey(e: React.KeyboardEvent) {
        if(e.key === 'Escape') {
          collapse();
        }
    }

    return (
        <div className="card"
            ref={cardRef}
            tabIndex={0}
            onClick={(e) => {expand()}} 
            onKeyDown={(e) => handleEscapeKey(e)}
        >
            <div className="card-content"
                ref={cardContentRef}
                onTransitionEnd={(e) => {isExpanded ? onCollapseTransitionEnd : onExpandTransitionEnd}}
            >
                <button className="card-close-btn" onClick={(e) => {collapse()}} >
                    <Image alt="close icon"
                        src="/static/images/xmark.svg"
                        width={18}
                        height={18}
                    />
                </button>
                {/* {children} */}

                <div className="container">
                    <div className="header">
                        <h2 className="title animated">Safecheck</h2>
                        <h3 className="subtitle animated">Counterfeit authenticator app</h3>
                    </div>

                    {/* 
                    <div className="flex p-[8px] rounded-full bg-black text-white hidden">react-native</div>
                    <p className="size-[16px] font-normal"></p> */}
                    {/* <div className="imgContainer">
                        <img src="/static/images/safecheck/mobile-screens.png"/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}