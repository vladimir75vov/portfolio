/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',  // Статический экспорт для GitHub Pages
    // Для репозитория не типа username.github.io раскомментируйте следующую строку:
    // basePath: '/portfolio',  // Замените 'portfolio' на название вашего репозитория
    // assetPrefix: '/portfolio',  // Замените 'portfolio' на название вашего репозитория
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
