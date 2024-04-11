/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'], // add this,
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
