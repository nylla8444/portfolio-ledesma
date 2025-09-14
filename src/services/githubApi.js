const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_USERNAME = 'nylla8444'; // Your GitHub username

const CONTRIBUTIONS_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
            }
          }
        }
        contributionYears
      }
    }
  }
`;

export async function getGitHubContributions() {
  // Use current year (Jan 1 to Dec 31)
  const currentYear = new Date().getFullYear();
  const from = `${currentYear}-01-01T00:00:00Z`;
  const to = `${currentYear}-12-31T23:59:59Z`;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: {
          username: GITHUB_USERNAME,
          from,
          to,
        },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error('GitHub API Errors:', data.errors);
      return null;
    }

    return data.data.user.contributionsCollection;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return null;
  }
}

// Get user profile data
export async function getGitHubProfile() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
}

// Get repository stats
export async function getGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return null;
  }
}