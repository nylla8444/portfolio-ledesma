import { useState, useEffect } from 'react';
import { getGitHubContributions, getGitHubProfile } from '../services/githubApi';
import { Github, GitCommit } from 'lucide-react';


export default function GitHubStats() {
    const [contributions, setContributions] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGitHubData() {
            try {
                setLoading(true);

                // Try to get from local storage first
                const cachedData = localStorage.getItem('github-contributions');
                const cachedProfile = localStorage.getItem('github-profile');
                const cacheTime = localStorage.getItem('github-cache-time');
                const currentYear = new Date().getFullYear().toString();
                const cachedYear = localStorage.getItem('github-cache-year');

                // Check if cache is valid (today's date and current year)
                const cacheIsValid = cacheTime &&
                    (Date.now() - parseInt(cacheTime)) < 86400000 && // Less than 24 hours old
                    cachedYear === currentYear; // Same year

                let contributionsData, profileData;

                if (cacheIsValid && cachedData && cachedProfile) {
                    // Use cached data
                    contributionsData = JSON.parse(cachedData);
                    profileData = JSON.parse(cachedProfile);
                } else {
                    // Fetch fresh data
                    [contributionsData, profileData] = await Promise.all([
                        getGitHubContributions(),
                        getGitHubProfile()
                    ]);

                    // Cache the data
                    if (contributionsData && profileData) {
                        localStorage.setItem('github-contributions', JSON.stringify(contributionsData));
                        localStorage.setItem('github-profile', JSON.stringify(profileData));
                        localStorage.setItem('github-cache-time', Date.now().toString());
                        localStorage.setItem('github-cache-year', currentYear);
                    }
                }

                setContributions(contributionsData);
                setProfile(profileData);
            } catch (err) {
                setError('Failed to fetch GitHub data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchGitHubData();
    }, []);

    if (loading) {
        return (
            <div className="bg-secondary-black border border-tertiary-black rounded-lg p-2 w-full max-w-560">
                <div className="animate-pulse">
                    <div className="h-4 bg-tertiary-black rounded w-1/2 mb-4"></div>
                    <div className="overflow-x-auto">
                        <div className="flex gap-1 min-w-[280px]">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    {Array.from({ length: 7 }).map((_, j) => (
                                        <div key={j} className="w-2.5 h-2.5 bg-tertiary-black rounded-sm"></div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !contributions) {
        return (
            <div className="bg-secondary-black border border-tertiary-black rounded-lg p-2 text-center w-full max-w-560">
                <Github className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Unable to load GitHub stats</p>
            </div>
        );
    }

    const getContributionColor = (level) => {
        switch (level) {
            case 'NONE': return 'bg-tertiary-black';
            case 'FIRST_QUARTILE': return 'bg-green-1/30';
            case 'SECOND_QUARTILE': return 'bg-green-1/50';
            case 'THIRD_QUARTILE': return 'bg-green-1/70';
            case 'FOURTH_QUARTILE': return 'bg-green-1';
            default: return 'bg-tertiary-black';
        }
    };

    // All weeks from January to December
    const validWeeks = contributions.contributionCalendar.weeks;

    return (
        <div className="bg-secondary-black border border-tertiary-black rounded-lg p-2 w-full max-w-560 mt-8 md:mt-0">
            {/* Header - Responsive */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-green-1" />
                    <h3 className="text-white font-doto font-bold">GitHub Activity</h3>
                </div>
                <div className="text-sm text-gray-400">
                    <span className="font-medium text-white">{contributions.contributionCalendar.totalContributions}</span> contributions in {new Date().getFullYear()}
                </div>
            </div>

            {/* Graph Container - Table-based with horizontal scrolling */}
            <div className="overflow-x-auto pb-1">
                <table className="border-spacing-1 border-separate" style={{ minWidth: '720px' }}>
                    <tbody>
                        {/* Create 7 rows for days of the week (0 = Sunday, 6 = Saturday) */}
                        {Array(7).fill(0).map((_, dayOfWeek) => (
                            <tr key={dayOfWeek}>
                                {validWeeks.map((week, weekIndex) => {
                                    // Find the day data for this position
                                    const dayData = week.contributionDays.find(d =>
                                        new Date(d.date).getDay() === dayOfWeek
                                    );

                                    return (
                                        <td key={weekIndex} className="p-0">
                                            {dayData ? (
                                                <div
                                                    className={`w-2.5 h-2.5 rounded-sm ${getContributionColor(dayData.contributionLevel)} cursor-pointer hover:ring-1 hover:ring-green-1`}
                                                    title={`${dayData.contributionCount} contributions on ${new Date(dayData.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}`}
                                                />
                                            ) : (
                                                <div className="w-2.5 h-2.5 rounded-sm bg-transparent" />
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Legend - Responsive */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-4">
                <div className="flex items-center gap-2 text-sm">
                    <GitCommit size={14} className="text-green-1" />
                    <span className="text-white font-medium">{profile?.public_repos || 0}</span>
                    <span className="text-gray-400">repositories</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="size-2 md:size-2.5 bg-tertiary-black rounded-sm"></div>
                        <div className="size-2 md:size-2.5 bg-green-1/30 rounded-sm"></div>
                        <div className="size-2 md:size-2.5 bg-green-1/50 rounded-sm"></div>
                        <div className="size-2 md:size-2.5 bg-green-1/70 rounded-sm"></div>
                        <div className="size-2 md:size-2.5 bg-green-1 rounded-sm"></div>
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}
