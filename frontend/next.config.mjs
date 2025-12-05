/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',  // Статический экспорт для GitHub Pages
    basePath: '/portfolio',  // Для репозитория vladimir75vov.github.io/portfolio
    assetPrefix: '/portfolio',  // Для репозитория vladimir75vov.github.io/portfolio
    images: {
        unoptimized: true,  // Отключение оптимизации изображений для статического экспорта
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    trailingSlash: true,  // Добавляет слэш в конце URL для совместимости с GitHub Pages
    // rewrites и redirects не поддерживаются в статическом экспорте
};

export default nextConfig;
