import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';
import { useTheme } from '../context/useTheme.jsx';

export default function Background({ children }) {
    const { theme } = useTheme();
    const [particlesReady, setParticlesReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setParticlesReady(true);
        });
    }, []);

    const particlesOptions = useMemo(() => ({
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        fpsLimit: 60,
        detectRetina: true,
        interactivity: {
            events: {
                onHover: { enable: false, mode: 'grab' },
                resize: { enable: true },
            },
            modes: {
                grab: {
                    distance: 140,
                    links: { opacity: 0.35 },
                },
            },
        },
        particles: {
            color: { value: '#ffffff' },
            links: {
                color: '#ffffff',
                distance: 130,
                enable: true,
                opacity: 0.34,
                width: 1.2,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'out' },
                speed: 0.5,
            },
            number: {
                density: { enable: true, area: 900 },
                value: 64,
            },
            opacity: { value: 0.58 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2.8 } },
        },
        responsive: [
            {
                maxWidth: 768,
                options: {
                    particles: {
                        links: { distance: 95, opacity: 0.24 },
                        number: { value: 38 },
                        size: { value: { min: 0.9, max: 2.2 } },
                    },
                },
            },
        ],
    }), []);

    return (
        <div className="min-h-screen w-full relative">
            {/* Dynamic Background */}
            <div
                className="absolute inset-0 z-0 transition-all duration-500"
                style={{
                    background: theme.background,
                }}
            />

            {particlesReady && (
                <Particles
                    id="background-particles"
                    className="absolute inset-0 z-[1] pointer-events-none"
                    options={particlesOptions}
                />
            )}

            {children}
        </div>
    );
}