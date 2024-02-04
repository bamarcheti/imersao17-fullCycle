/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "source.unsplash.com",
    //   },

    //   {
    //     protocol: "http",
    //     hostname: "localhost",
    //   },
    // ],
    domains: ["www.google.com", "source.unsplash.com", "localhost"],
  },
};

module.exports = nextConfig;
