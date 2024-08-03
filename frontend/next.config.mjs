/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/api/v1/:path*',
                destination: 'http://127.0.0.1:7000/api/v1/:path*',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
