/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'], // add this,
    compiler: {
      // Remove console logs in production
      removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.sanity.io"
          }
        ]
      }
};

export default nextConfig;
