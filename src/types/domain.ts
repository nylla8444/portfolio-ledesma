export type ProjectStatus = 'completed' | 'in-progress' | 'paused' | 'archived';

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  techStack: string[];
  tags: string[];
  sourceCodeUrl: string;
  demoUrl: string;
  thumbnail: string;
  status: ProjectStatus;
  features: string[];
}

export interface TechStackItem {
  id: string;
  name: string;
  icon: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export interface GitHubProfile {
  avatarUrl: string;
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  repositories: {
    totalCount: number;
  };
}

export interface GitHubContributionWeek {
  contributionDays: Array<{
    date: string;
    contributionCount: number;
    contributionLevel: string;
  }>;
}

export interface GitHubContributionsCollection {
  contributionCalendar: {
    totalContributions: number;
    weeks: GitHubContributionWeek[];
  };
}

export interface GitHubContributionsResponse {
  data: {
    user: {
      contributionsCollection: GitHubContributionsCollection;
    };
  };
}