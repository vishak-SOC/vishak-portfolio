// Configuration file for environment variables
export const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://vishak-portfolio-two.vercel.app',
    rssApiUrl: process.env.NEXT_PUBLIC_RSS_API_URL || 'https://api.rss2json.com/v1/api.json',
    externalLinks: {
        github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/vishak-SOC',
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/vishaksp',
    },
} as const;
