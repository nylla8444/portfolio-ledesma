export const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'nylla8444';

export const GITHUB_CACHE_KEYS = {
    contributions: 'github-contributions',
    profile: 'github-profile',
    cacheTime: 'github-cache-time',
    cacheYear: 'github-cache-year',
};

export const GITHUB_CACHE_TTL_MS = 24 * 60 * 60 * 1000;