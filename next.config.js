/** @type {import('next').NextConfig} */
module.exports = {
  concurrentFeatures: true,
  fastRefresh: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};
