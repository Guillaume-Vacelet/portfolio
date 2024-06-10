interface FLIPAnimation<T> {
    el: HTMLElement;
    initialProperties: T;
    finalProperties: T;
    lastPosClass: string;

    getFirstPosition() : void;

    moveElementToLastPosition() : void;

    getLastPosition() : void;

    invertPosition() : void;

    playAnimation() : void;

    onAnimationEnd(e: Event) : void;

    removeStyles() : void;
}

class CardToModal implements FLIPAnimation<{rect: DOMRect, opacity: number}> {
    constructor(element: HTMLElement, lastPositionClassname: string) {
        this.el = element;
        this.initialProperties = {rect: new DOMRect, opacity: 0};
        this.finalProperties = {rect: new DOMRect, opacity: 0};
        this.cardClip = { top: 0, right: 0, bottom: 0, left: 0 };
        this.expandAnimation = new Animation();
        this.collapseAnimation = new Animation();
        this.lastPosClass = lastPositionClassname;
    }

    el: HTMLElement;
    initialProperties: {rect: DOMRect, opacity: number};
    finalProperties: {rect: DOMRect, opacity: number};
    cardClip: { top: number, right: number, bottom: number, left: number };
    expandAnimation: Animation;
    collapseAnimation: Animation;
    lastPosClass: string;

    getFirstPosition() : void {
        const cardRect = this.el.getBoundingClientRect()

        this.initialProperties = {
            rect: this.el.getBoundingClientRect(),
            opacity: parseFloat(window.getComputedStyle(this.el).opacity)
        }
        this.cardClip = {
            top: cardRect.top,
            right: window.innerWidth - cardRect.right,
            bottom: window.innerHeight - cardRect.bottom,
            left: cardRect.left,
          }
    }

    moveElementToLastPosition() : void {
        this.el.classList.add(this.lastPosClass);
    }

    getLastPosition() : void {
        this.finalProperties = {
            rect: this.el.getBoundingClientRect(),
            opacity: parseFloat(window.getComputedStyle(this.el).opacity)
        }
    }

    invertPosition() : void {
        const left = this.initialProperties.rect.left - this.initialProperties.rect.left;
        const top = this.initialProperties.rect.top - this.initialProperties.rect.top;
        const scale = this.initialProperties.rect.width / this.initialProperties.rect.width;

        this.el.style.transform = `translate(${left}px, ${top}px) scale(${scale})`;
        this.el.style.opacity = `${this.initialProperties.opacity}`
    }

    playAnimation() : void {
        var player = this.el.animate(
            [
                { clipPath: `inset(${this.cardClip.top}px ${this.cardClip.right}px ${this.cardClip.bottom}px ${this.cardClip.left}px round 5px`},
                { clipPath: `inset(0)` },
            ],
            { duration: 400, easing: 'cubic-bezier(0, 0, 0.21, 1)' }
        );

        player.addEventListener('finish', this.onAnimationEnd);
    }

    onAnimationEnd(e: Event) : void {
        this.el.classList.remove(this.lastPosClass);
        this.expandAnimation.removeEventListener('finish',this.onAnimationEnd);
        this.removeStyles();
    }

    removeStyles() : void {
        this.el.style.removeProperty('transform');
        this.el.style.removeProperty('opacity');
    }

}