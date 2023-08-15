/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  async redirects() {
    return [
      {
        source: '/agb.html',
        destination: '/imprint',
        permanent: true,
      },
      {
        source: '/DeflectionOfRealness.html',
        destination: '/releases/deflection-of-realness',
        permanent: true,
      },
      {
        source: '/DeflectionOfRealnessFR.html',
        destination: '/releases/deflection-of-realness',
        permanent: true,
      },
      {
        source: '/entangled.html',
        destination: '/releases/unguarded-2-entangled',
        permanent: true,
      },
      {
        source: '/in-deaths-eyes.html',
        destination: '/press/in-deaths-eyes',
        permanent: true,
      },
      {
        source: '/info.html',
        destination: '/info',
        permanent: true,
      },
      {
        source: '/newsletter.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/piercingtouch.html',
        destination: '/releases/unguarded-1-piercing-touch',
        permanent: true,
      },
      {
        source: '/releases.html',
        destination: '/releases',
        permanent: true,
      },
      {
        source: '/Vestigios.html',
        destination: '/releases/vestigios',
        permanent: true,
      },
      {
        source: '/youaretrouble.html',
        destination: '/releases/youre-trouble-remixes',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
