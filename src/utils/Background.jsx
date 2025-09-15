import { useState, useEffect } from 'react';

const backgroundThemes = {
    green: "radial-gradient(125% 125% at 50% 10%, #072607 0%, #000000 30%, #072607 100%)",
    blue: "radial-gradient(125% 125% at 50% 10%, #070726 0%, #000000 30%, #070726 100%)",
    red: "radial-gradient(125% 125% at 50% 10%, #260707 0%, #000000 30%, #260707 100%)",
    yellow: "radial-gradient(125% 125% at 50% 10%, #262607 0%, #000000 30%, #262607 100%)"
};

export default function Background({ children }) {
    const [currentTheme, setCurrentTheme] = useState('green');

    useEffect(() => {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('colorTheme') || 'green';
        setCurrentTheme(savedTheme);

        // Listen for theme changes
        const handleThemeChange = () => {
            const theme = localStorage.getItem('colorTheme') || 'green';
            setCurrentTheme(theme);
        };

        // Listen for storage changes (when theme changes)
        window.addEventListener('storage', handleThemeChange);

        // Custom event listener for same-tab changes
        window.addEventListener('themeChange', handleThemeChange);

        return () => {
            window.removeEventListener('storage', handleThemeChange);
            window.removeEventListener('themeChange', handleThemeChange);
        };
    }, []);

    return (
        <div className="min-h-screen w-full relative">
            {/* Dynamic Background */}
            <div
                className="absolute inset-0 z-0 transition-all duration-500"
                style={{
                    background: backgroundThemes[currentTheme],
                }}
            />
            {children}
        </div>
    );
}