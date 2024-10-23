import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://coachellavalleyhandyman.com',
  generateRobotsTxt: true,  // Generate robots.txt file
  exclude: ['/admin'],  // Exclude /admin directory from sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/admin'],
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

export default config;
