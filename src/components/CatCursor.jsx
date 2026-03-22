import { useEffect, useState } from 'react';

export default function CatCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return undefined;
        }

        const mediaQuery = window.matchMedia('(pointer: fine) and (hover: hover)');

        const handleMediaQueryChange = (event) => {
            setIsDesktop(event.matches);
            if (!event.matches) {
                setIsVisible(false);
            }
        };

        setIsDesktop(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) {
            return undefined;
        }

        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDesktop]);

    if (!isDesktop) {
        return null;
    }

    return (
        <div
            aria-hidden="true"
            className={`cat-cursor ${isVisible ? 'cat-cursor-visible' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            🐱
        </div>
    );
}