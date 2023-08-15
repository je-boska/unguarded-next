/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  async redirects() {
    return [
      {
        source: '/in-deaths-eyes.html',
        destination: '/press/in-deaths-eyes',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
