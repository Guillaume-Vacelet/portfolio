'use client';
import { useState } from 'react';

export default function InteractiveCard({
    front, 
    back 
}: { 
    front?: React.ReactNode;
    back?: React.ReactNode;
}) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [flipRotation, setFlipRotation] = useState(0);

    const updateRotation = (clientX: number, clientY: number, rect: DOMRect) => {
        // Calculer la position relative (de -1 à 1)
        const x = (clientX - rect.left) / rect.width;
        const y = (clientY - rect.top) / rect.height;

        const mouseHoverCardRotation = 0;
        // Convertir en degrés de rotation (max ±16 degrés)
        const rotateY = (x - 0.5) * mouseHoverCardRotation;
        const rotateX = (0.5 - y) * mouseHoverCardRotation;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        updateRotation(e.clientX, e.clientY, rect);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const touch = e.touches[0];
        updateRotation(touch.clientX, touch.clientY, rect);
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleTouchStart = () => {
        setIsHovered(true);
    };

    const handleTouchEnd = () => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        console.log(e.target)

        if (target.closest('a') || target.closest('button')) {
            return;
        }
        setFlipRotation(prev => prev + 180);
    };

    const isFrontSide = () => {
        return (flipRotation % 360) == 0;
    }

    return (
        <div className="relative perspective-1000 cursor-pointer" style={{ perspective: '1000px' }}>
            <div
                className="relative w-[319px] h-[201px] sm:w-[425px] sm:h-[268px] xl:w-[450px] xl:h-[284px] transition-all duration-700 ease-out pointer-events-none"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y + flipRotation}deg) ${isHovered ? 'translateZ(50px)' : 'translateZ(0px)'}`,
                    transformStyle: 'preserve-3d',
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={handleClick}
            >
                {/* Carte principale */}
                <div 
                    className="relative w-full h-full shadow-sm rounded-2xl pointer-events-auto"
                    style={{
                        boxShadow: '0px 16px 40px 8px rgba(0, 0, 0, 0.15)',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {/* Recto */}
                    <div 
                        className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden ${isFrontSide() ? 'pointer-events-auto' : 'pointer-events-none'}`}
                        style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                        }}
                    >
                        {front}
                    </div>
                    
                    {/* Verso */}
                    <div 
                        className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden ${!isFrontSide() ? 'pointer-events-auto' : 'pointer-events-none'}`}
                        style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                        }}
                    >
                        {back}
                    </div>

                    {/* Bordure métallique brillante */}
                    <div 
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                            padding: '1px',
                            background: isFrontSide()
                                ? 'linear-gradient(40deg, #D2D2D2 0%,  #D2D2D2 50%, #FFFFFF 100%)'
                                : 'linear-gradient(40deg, #FFFFFF 0%,  #D2D2D2 75%, #D2D2D2 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                        }}
                    />
                </div>
            </div>

            {/* <div className="ellipse absolute border-2 border-blue-500 rounded-full"></div> */}
        </div>
  );
}