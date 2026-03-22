import { useEffect, useMemo, useState } from 'react';
import {
    applyThemeVariables,
    loadTheme,
    normalizeThemeId,
    saveTheme,
    THEMES,
    THEME_OPTIONS,
} from '../services/themeService';
import { ThemeContext } from './themeContextInstance.jsx';

export function ThemeProvider({ children }) {
    const [themeId, setThemeId] = useState(() => loadTheme());

    useEffect(() => {
        const normalizedThemeId = applyThemeVariables(themeId);
        saveTheme(normalizedThemeId);

        if (normalizedThemeId !== themeId) {
            setThemeId(normalizedThemeId);
        }
    }, [themeId]);

    const value = useMemo(() => ({
        themeId,
        setTheme: (nextThemeId) => setThemeId(normalizeThemeId(nextThemeId)),
        theme: THEMES[themeId],
        themes: THEME_OPTIONS,
        themeMap: THEMES,
    }), [themeId]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

