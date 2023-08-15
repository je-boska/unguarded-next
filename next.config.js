/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  async redirects() {
    returns[
      {
        source: '/in-deaths-eyes.html',
        destination: '/press/in-deaths-eyes',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
