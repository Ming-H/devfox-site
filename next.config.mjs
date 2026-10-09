/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.r2.dev",
      },
      {
        protocol: "https",
        hostname: "cdn.devfox.ai",
      },
    ],
  },
  async redirects() {
    return [
      // Blog → AI Insights
      {
        source: '/blog',
        destination: 'https://ming-h.github.io/ai-insights/blog/',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: 'https://ming-h.github.io/ai-insights/blog/:slug/',
        permanent: true,
      },
      // Books → AI Insights
      {
        source: '/books',
        destination: 'https://ming-h.github.io/ai-insights/books/',
        permanent: true,
      },
      {
        source: '/books/:slug',
        destination: 'https://ming-h.github.io/ai-insights/books/:slug/',
        permanent: true,
      },
      // Inspiration/Gallery → AI Insights
      {
        source: '/inspiration',
        destination: 'https://ming-h.github.io/ai-insights/gallery/',
        permanent: true,
      },
      // 旧页面收敛到首页（服务定位已改为个人产品站）
      {
        source: '/projects',
        destination: '/#products',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/#products',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cases',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
