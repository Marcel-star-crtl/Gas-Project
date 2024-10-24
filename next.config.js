// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['localhost', 'picsum.photos'],
//   },
// }

// module.exports = nextConfig









// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['localhost', 'picsum.photos', 'test.ulevus.com', 'http://test.ulevus.com/'],
//   },
//   output: 'standalone',
// }

// module.exports = nextConfig








/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'picsum.photos', 'test.ulevus.com'],
  },
  output: 'standalone',
  // Add this section for local development
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig