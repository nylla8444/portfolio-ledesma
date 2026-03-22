import { useState } from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/useTheme.jsx';

export default function ColorSelect() {
    const { themeId, themes, setTheme, theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleThemeChange = (themeId) => {
        setTheme(themeId);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Color Selector Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="theme-accent-button flex items-center gap-2 bg-secondary-black border border-tertiary-black rounded-lg px-3 py-2 text-white text-sm"
                aria-label="Select color theme"
            >
                <Palette size={16} />
                <div
                    className="w-4 h-4 rounded-full border border-gray-600"
                    style={{ backgroundColor: theme.primary }}
                />
                <span className="hidden sm:inline">{theme.name}</span>
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
                            {themes.map((themeOption) => (
                                <button
                                    key={themeOption.id}
                                    onClick={() => handleThemeChange(themeOption.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all text-sm
                                        ${themeId === themeOption.id
                                            ? 'bg-tertiary-black text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-tertiary-black'
                                        }`}
                                >
                                    <div
                                        className="w-4 h-4 rounded-full border border-gray-600"
                                        style={{ backgroundColor: themeOption.primary }}
                                    />
                                    {themeOption.name}
                                    {themeId === themeOption.id && (
                                        <div className="ml-auto w-2 h-2 rounded-full" style={{ backgroundColor: themeOption.primary }} />
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
