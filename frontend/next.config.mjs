import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: `${process.env.BACKEND_API_PATH}:path*`,
                destination: `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}${process.env.BACKEND_API_PATH}:path*`,
            }
        ]
    }
};

export default nextConfig;
