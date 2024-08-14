import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    async rewrites() {
        return [
            {
                source: `${process.env.BACKEND_API_PATH}:path*`,
                destination: `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}${process.env.BACKEND_API_PATH}:path*`,
            }
        ]
    },
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
