/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "upload.wikimedia.org",
      "raw.githubusercontent.com",
      "pokeapi.co",
    ],
  },
};

export default nextConfig;
