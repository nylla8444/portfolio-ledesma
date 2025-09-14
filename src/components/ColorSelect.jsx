import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const colorThemes = [
    {
        id: 'green',
        name: 'Green',
        primary: '#35ff61',
        cssVar: '--color-green-1'
    },
    {
        id: 'blue',
        name: 'Blue',
        primary: '#3561ff',
        cssVar: '--color-blue-1'
    },
    {
        id: 'red',
        name: 'Red',
        primary: '#ff3561',
        cssVar: '--color-red-1'
    },
    {
        id: 'yellow',
        name: 'Yellow',
        primary: '#ffff35',
        cssVar: '--color-yellow-1'
    }
];

export default function ColorSelect() {
    const [selectedTheme, setSelectedTheme] = useState('green');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('colorTheme') || 'green';
        setSelectedTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (themeId) => {
        const theme = colorThemes.find(t => t.id === themeId);
        if (theme) {
            // Update CSS custom property
            document.documentElement.style.setProperty('--color-green-1', theme.primary);

            // Save to localStorage
            localStorage.setItem('colorTheme', themeId);

            // Dispatch custom event for same-tab changes
            window.dispatchEvent(new CustomEvent('themeChange', { detail: themeId }));
        }
    };

    const handleThemeChange = (themeId) => {
        setSelectedTheme(themeId);
        applyTheme(themeId);
        setIsOpen(false);
    };

    const currentTheme = colorThemes.find(t => t.id === selectedTheme);

    return (
        <div className="relative">
            {/* Color Selector Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-secondary-black border border-tertiary-black rounded-lg px-3 py-2 text-white hover:border-green-1 transition-all text-sm"
                style={{
                    boxShadow: `2px 2px 0px 0px var(--color-green-1)`
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-green-1)';
                    e.currentTarget.style.boxShadow = '1px 1px 0px 0px var(--color-green-1)';
                    e.currentTarget.style.transform = 'translate(2px, 2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.boxShadow = '2px 2px 0px 0px var(--color-green-1)';
                    e.currentTarget.style.transform = 'translate(0px, 0px)';
                }}
                aria-label="Select color theme"
            >
                <Palette size={16} />
                <div
                    className="w-4 h-4 rounded-full border border-gray-600"
                    style={{ backgroundColor: currentTheme.primary }}
                />
                <span className="hidden sm:inline">{currentTheme.name}</span>
            </button>

            {/* Color Dropdown */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown Menu */}
                    <div className="absolute top-full mt-2 right-0 bg-secondary-black border border-tertiary-black rounded-lg p-2 z-50 min-w-[160px]">
                        <div className="space-y-2">
                            {colorThemes.map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => handleThemeChange(theme.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all text-sm
                                        ${selectedTheme === theme.id
                                            ? 'bg-tertiary-black text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-tertiary-black'
                                        }`}
                                >
                                    <div
                                        className="w-4 h-4 rounded-full border border-gray-600"
                                        style={{ backgroundColor: theme.primary }}
                                    />
                                    {theme.name}
                                    {selectedTheme === theme.id && (
                                        <div className="ml-auto w-2 h-2 rounded-full" style={{ backgroundColor: theme.primary }} />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}