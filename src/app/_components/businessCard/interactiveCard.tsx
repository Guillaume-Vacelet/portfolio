'use client';
import { useState } from 'react';

export default function InteractiveCard({
    front, 
    back 
}: { 
    front?: React.ReactNode;
    back?: React.ReactNode;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [flipRotation, setFlipRotation] = useState(0);

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleTouchStart = () => {
        setIsHovered(true);
    };

    const handleTouchEnd = () => {
        setIsHovered(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;

        if (target.closest('a') || target.closest('button')) {
            return;
        }
        setFlipRotation(prev => prev + 180);
    };

    const isFrontSide = () => {
        return (flipRotation % 360) == 0;
    }

    return (
        <div className="relative cursor-pointer" style={{ perspective: '1000px' }}>
            <div
                className="relative w-[319px] h-[201px] sm:w-[425px] sm:h-[268px] xl:w-[450px] xl:h-[284px] transition-all duration-700 ease-out pointer-events-none"
                style={{
                    transform: `rotateY(${flipRotation}deg) ${isHovered ? 'translateZ(50px)' : 'translateZ(0px)'}`,
                    transformStyle: 'preserve-3d',
                }}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onTouchStart={handleTouchStart}
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