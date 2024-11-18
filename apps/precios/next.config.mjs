/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: 'tsconfig.build.json'
  },
  images: {
    domains: ['altered-prod-eu.s3.amazonaws.com']
  }
};

export default nextConfig;
