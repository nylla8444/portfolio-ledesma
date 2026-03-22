const THEME_STORAGE_KEY = 'colorTheme';

export const THEMES = {
    green: {
        id: 'green',
        name: 'Green',
        primary: '#35ff61',
        background: 'radial-gradient(125% 125% at 50% 10%, #072607 0%, #000000 30%, #072607 100%)',
    },
    blue: {
        id: 'blue',
        name: 'Blue',
        primary: '#3561ff',
        background: 'radial-gradient(125% 125% at 50% 10%, #070726 0%, #000000 30%, #070726 100%)',
    },
    red: {
        id: 'red',
        name: 'Red',
        primary: '#ff3561',
        background: 'radial-gradient(125% 125% at 50% 10%, #260707 0%, #000000 30%, #260707 100%)',
    },
    yellow: {
        id: 'yellow',
        name: 'Yellow',
        primary: '#ffff35',
        background: 'radial-gradient(125% 125% at 50% 10%, #262607 0%, #000000 30%, #262607 100%)',
    },
};

export const THEME_OPTIONS = Object.values(THEMES);

export function normalizeThemeId(themeId) {
    if (themeId && THEMES[themeId]) {
        return themeId;
    }

    return 'green';
}

export function loadTheme() {
    try {
        const themeId = localStorage.getItem(THEME_STORAGE_KEY);
        return normalizeThemeId(themeId);
    } catch {
        return 'green';
    }
}

export function saveTheme(themeId) {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, normalizeThemeId(themeId));
    } catch {
        // no-op when storage is unavailable
    }
}

export function applyThemeVariables(themeId) {
    const normalizedThemeId = normalizeThemeId(themeId);
    const theme = THEMES[normalizedThemeId];

    document.documentElement.style.setProperty('--theme-primary', theme.primary);

    return normalizedThemeId;
}

export { THEME_STORAGE_KEY };