# 🚀 Portfolio Website - Vladimir Budaev

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Vladimir%20Budaev-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5.7-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Static Export](https://img.shields.io/badge/Deployment-GitHub%20Pages-222222?style=for-the-badge&logo=github)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions)

**[English](#english) | [Русский](#russian)**

</div>

---

## <a name="english"></a>🇬🇧 English

### 📋 Description

Modern, responsive portfolio website showcasing projects and skills of a Full Stack Developer with 4+ years of experience. Features smooth animations, multi-language support (EN/RU), cinematic hero video background, real-time contact form with Telegram integration, and CV download functionality.

### ✨ Key Features

- 🎨 **Modern Design** - Clean, professional interface with gradient effects and smooth animations
- 🌐 **Multi-language** - Complete support for English and Russian with persistent preferences
- 🎬 **Hero Video** - Cinematic background video with custom controls, volume slider, and toggleable filters
- 📱 **Fully Responsive** - Perfect display on all devices (mobile, tablet, desktop)
- ⚡ **Optimized Performance** - Built with Next.js 14 for blazing-fast speed
- 🎯 **SEO Friendly** - Best practices for search engine visibility
- 📧 **Contact Form** - Real-time message delivery to Telegram via Bot API
- 📄 **CV Download** - Automatic language-specific resume download (EN/RU)
- 🔒 **Secure** - Environment variables for sensitive data protection
- 💾 **State Persistence** - User preferences saved to localStorage
- 🌙 **Dark/Light Theme** - Theme switcher with smooth transitions

### 🛠️ Tech Stack

#### Frontend
- **Framework:** Next.js 15.5.7 (App Router, Static Export)
- **Library:** React 18.3.1
- **Styling:** Tailwind CSS 3.4.15, SCSS, CSS Variables
- **Icons:** React Icons 5.3.0 (Simple Icons)
- **Language:** JavaScript (ES6+)
- **State Management:** React Context API
- **Animations:** CSS Transitions, Transform
- **Deployment:** GitHub Pages (Static Export)

#### DevOps
- **CI/CD:** GitHub Actions
- **Linting:** ESLint 8.57.1, Prettier 3.4.1
- **Build:** Next.js Static Export
- **Hosting:** GitHub Pages
- **PWA:** Manifest, Service Worker Ready

#### Integration
- **Telegram Bot API** - For contact form submissions (via GitHub Actions secrets)
- **Local Storage** - For preferences persistence

### 📁 Project Structure

```
portfolio/
├── .github/
│   ├── workflows/            # GitHub Actions CI/CD
│   │   ├── ci.yml           # Code quality checks
│   │   ├── deploy.yml       # Deployment to GitHub Pages
│   │   ├── codeql.yml       # Security scanning
│   │   └── dependency-update.yml # Weekly updates
│   ├── CICD.md              # CI/CD documentation
│   ├── CODE_OF_CONDUCT.md   # Code of conduct
│   └── CONTRIBUTING.md      # Contribution guide
├── frontend/                 # Next.js application
│   ├── app/                 # App Router (Next.js 15+)
│   │   ├── _files/         # Startup scripts
│   │   ├── about/          # About page - experience & education
│   │   ├── contact/        # Contact page with Telegram form
│   │   ├── home/           # Home page with hero video
│   │   │   └── _elements/  # Home page sections (1-5)
│   │   ├── projects/       # Projects showcase
│   │   ├── skills/         # Skills & tech stack
│   │   └── layout.jsx      # Root layout with metadata
│   ├── components/         # Reusable React components
│   │   ├── layout/        # Navbar, Footer
│   │   ├── LoadingScreen.jsx
│   │   ├── projectCard.jsx
│   │   ├── techBadge.jsx
│   │   └── typeWriterComp.jsx
│   ├── context/           # React Context providers
│   │   ├── LanguageContext.jsx # EN/RU support
│   │   └── ThemeContext.jsx    # Dark/Light theme
│   ├── public/            # Static files (served as-is)
│   │   ├── cv/           # Resume PDFs (EN/RU) - 208.8 KB each
│   │   ├── images/       # SVG images (macbook.svg, og-image.svg)
│   │   ├── video/        # Hero video (kek.mp4 - 9.3 MB)
│   │   ├── .nojekyll     # GitHub Pages configuration
│   │   ├── apple-icon.png # iOS icon - 1.4 KB
│   │   ├── favicon.ico   # Browser icon - 15 KB
│   │   ├── icon-192.png  # PWA icon - 4 KB
│   │   ├── icon-512.png  # PWA icon - 15 KB
│   │   ├── icon.png      # Default icon - 479 B
│   │   ├── icon.svg      # Vector icon - 537 B
│   │   ├── manifest.json # PWA manifest - 758 B
│   │   ├── robots.txt    # SEO directives - 136 B
│   │   └── sitemap.xml   # Site map - 2 KB
│   ├── resources/
│   │   └── styles/
│   │       └── globals.scss # Global styles
│   ├── .env.example      # Environment variables template
│   ├── .env.local        # Environment variables (gitignored)
│   ├── next.config.mjs   # Next.js configuration
│   └── package.json      # Dependencies
├── build.bat / build.sh   # Production build scripts
├── check-deployment.ps1   # Pre-deploy validation
├── DEPLOYMENT.md          # Deployment instructions
├── QUICKSTART-DEPLOY.md   # Quick start guide
├── READY.md               # Deployment checklist
├── SCRIPTS.md             # Scripts documentation
├── start-dev.bat / .sh    # Development server scripts
├── QUICKSTART-DEPLOY.md   # Quick start guide
└── READY.md              # Deployment checklist
```

### 🚀 Quick Start

#### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git
- Telegram Bot Token (for contact form, optional)

#### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/vladimir75vov/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
cd frontend
npm install
```

3. **Setup environment variables**

Create `frontend/.env.local`:
```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id_here
```

4. **Add your files**
Place your files in `frontend/public/`:
- `public/cv/cvEn.pdf` - English resume
- `public/cv/cvRu.pdf` - Russian resume
- `public/video/kek.mp4` - Hero background video

5. **Run development server**

**Quick Start:**
```bash
# Windows - двойной клик или:
start-dev.bat

# Linux/Mac
chmod +x start-dev.sh
./start-dev.sh
```

**Or manually:**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:3000`

#### 🌐 Deploy to GitHub Pages

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions.

**Quick Deploy:**
```bash
# 1. Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# 2. Create repository on GitHub named 'vladimir75vov.github.io'

# 3. Push to GitHub
git remote add origin https://github.com/vladimir75vov/vladimir75vov.github.io.git
git branch -M main
git push -u origin main

# 4. Configure GitHub Secrets (Settings → Secrets):
#    - NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
#    - NEXT_PUBLIC_TELEGRAM_CHAT_ID

# 5. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
```

Your site will be live at `https://vladimir75vov.github.io` in 2-3 minutes!

### 🎮 Available Scripts

#### Quick Start Scripts
See [SCRIPTS.md](SCRIPTS.md) for detailed documentation.

**Development:**
- `start-dev.bat` / `start-dev.sh` - Auto-setup and start dev server
- `build.bat` / `build.sh` - Production build with checks
- `check-deployment.ps1` - Pre-deployment validation (PowerShell)

**Features:**
- ✅ Auto-install dependencies
- ✅ Port conflict resolution
- ✅ Build statistics
- ✅ Error handling

#### NPM Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production (static export to `out/`)
- `npm run lint` - Run ESLint

### 📦 Build & Deploy

#### Local Build
```bash
cd frontend
npm run build
```

This creates a `frontend/out/` directory with:
- All static HTML files
- Optimized JavaScript bundles
- All media files (video, PDFs, images)
- PWA files (manifest, sitemap, robots.txt)

#### Automated Deployment

GitHub Actions automatically deploys on every push to `main`:
- ✅ Lints code
- ✅ Runs tests
- ✅ Builds static site
- ✅ Deploys to GitHub Pages
- ✅ Security scanning (CodeQL)
- ✅ Weekly dependency updates

### 🌍 Language Support

Switch between English and Russian using the language selector in the navigation bar. Preferences are automatically saved to localStorage.

### 🎨 Features Overview

#### 🏠 Home Page
- **Hero Section** with full-screen cinematic video background
- **Video Controls:** Mute/unmute, volume slider, filter toggle (light/dark)
- **Typewriter Effect:** Animated text with gradient styling
- **Download CV Button:** Language-specific resume download
- **5 Interactive Sections:**
  - Section 1: Services offered (Frontend, Backend, Testing, Automation)
  - Section 2: Tech stack with badges
  - Section 3: Companies worked with (CODD, Leroy Merlin, Rosguard)
  - Section 4: Why choose me (6 benefits)
  - Section 5: Professional achievements stats

#### 👤 About Page
- Professional background and bio
- **Work Experience:** Detailed history at major companies
  - CODD Moscow (Aug 2024 - Present)
  - Leroy Merlin (Jun 2021 - Jun 2023)
  - Other positions
- **Education:** Institute and college details
- **Contact Information:** Email, phone, location

#### 💼 Projects Page
- **6 Real Projects** with descriptions:
  - CODD Automated System
  - Leroy Merlin Employee Portal
  - AI-Powered Automation
  - Portfolio Website
  - Linux Administration Tools
  - E-Commerce Backend
- Technology badges for each project
- Links to GitHub repositories

#### 🛠️ Skills Page
- **3 Skill Categories:**
  - Frontend (HTML5, CSS3, React, TypeScript, Tailwind)
  - Backend (Node.js, C#, Python, Java, .NET, MySQL)
  - Tools & Architecture (Git, OOP, SOLID, MVVM, Linux)
- **Proficiency Levels** with animated progress bars
- Interactive hover effects

#### 📬 Contact Page
- **Working Contact Form** - Messages sent to Telegram in real-time
- **Contact Information:** Email, phone, location with links
- **Social Media Links:** 
  - Telegram (@vladimir75vov)
  - VK
  - WhatsApp
  - Discord
  - GitHub
- Form validation and success notifications

### 📝 Environment Variables

#### Frontend (`frontend/.env.local`)
```env
# Telegram Bot Configuration (for contact form)
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id_here
```

**How to get Telegram credentials:**
1. Create a bot via [@BotFather](https://t.me/BotFather) - Send `/newbot` command
2. Copy your bot token from BotFather
3. Get your chat ID by messaging [@userinfobot](https://t.me/userinfobot)

**Template file:** See `frontend/.env.example` for complete template.

**Security Notes:**
- ✅ `.env.local` is gitignored - won't be committed
- ✅ Use `.env.example` as template
- ✅ For GitHub Actions: Add secrets in Settings → Secrets and variables → Actions
  - `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`
  - `NEXT_PUBLIC_TELEGRAM_CHAT_ID`
- ⚠️ Never commit real credentials to Git

### 🧪 Testing

This project is ready for deployment. Use the validation script to check readiness:

```powershell
# Windows PowerShell
.\check-deployment.ps1
```

This script checks:
- ✅ All required files present (video, PDFs, icons, config files)
- ✅ Dependencies installed (Node.js, npm, Git)
- ✅ Build successfully completes
- ✅ Environment variables configured
- ✅ PWA files present

### 🎯 Post-Deployment

After deploying to GitHub Pages, verify:
1. ✅ Site loads at https://vladimir75vov.github.io
2. ✅ Video plays correctly
3. ✅ CV downloads work (EN/RU)
4. ✅ Contact form sends to Telegram
5. ✅ Language switching works (EN ↔ RU)
6. ✅ All pages accessible (home, about, contact, projects, skills)

### 📄 License

This project is private and proprietary.

### 👤 Author

**Vladimir Budaev**
- 🎯 Full Stack Developer
- 📍 Moscow, Russia
- 💼 4+ years of experience
- 📧 vladimir75vov@gmail.com
- 📱 +7 (903) 709-5173
- 🔗 [GitHub](https://github.com/vladimir75vov)
- 💬 [Telegram](https://t.me/vladimir75vov)

**Experience:**
- **CODD Moscow** - Full Stack Developer (Aug 2024 - Present)
- **Leroy Merlin** - Full Stack Developer (Jun 2021 - Jun 2023)
- **Rosguard** - System Administrator & Developer

**Tech Stack:**
- Frontend: HTML5, CSS3, JavaScript, React, TypeScript, Tailwind CSS
- Backend: Node.js, C#, Python, Java, .NET Core
- Databases: MySQL, MS SQL, Firebase
- Tools: Git, OOP, SOLID, MVVM, Linux (Astra, Kali, Manjaro)

### 🤝 Contributing

This is a personal portfolio project. If you have suggestions, feel free to open an issue.

---

## <a name="russian"></a>🇷🇺 Русский

### 📋 Описание

Современный, адаптивный веб-сайт портфолио, демонстрирующий проекты и навыки Full Stack разработчика с опытом работы 4+ года. Включает плавные анимации, поддержку нескольких языков (EN/RU), кинематографичный фоновый видео-фон, контактную форму с интеграцией Telegram и функцию скачивания резюме.

### ✨ Ключевые особенности

- 🎨 **Современный дизайн** - Чистый, профессиональный интерфейс с градиентными эффектами и плавными анимациями
- 🌐 **Мультиязычность** - Полная поддержка английского и русского языков с сохранением настроек
- 🎬 **Видео-фон** - Кинематографичное фоновое видео с настраиваемыми элементами управления, ползунком громкости и переключаемыми фильтрами
- 📱 **Полная адаптивность** - Идеальное отображение на всех устройствах (мобильные, планшеты, десктопы)
- ⚡ **Оптимизированная производительность** - Создано на Next.js 14 для максимальной скорости
- 🎯 **SEO дружественность** - Лучшие практики для видимости в поисковых системах
- 📧 **Контактная форма** - Отправка сообщений в Telegram через Bot API в реальном времени
- 📄 **Скачивание резюме** - Автоматическое скачивание резюме в зависимости от языка (EN/RU)
- 🔒 **Безопасность** - Защита конфиденциальных данных через переменные окружения
- 💾 **Сохранение состояния** - Пользовательские предпочтения сохраняются в localStorage
- 🌙 **Тёмная/Светлая тема** - Переключатель тем с плавными переходами

### 🛠️ Технологический стек

#### Frontend
- **Фреймворк:** Next.js 14.2.5 (App Router)
- **Библиотека:** React 18
- **Стилизация:** Tailwind CSS, SCSS, CSS переменные
- **Иконки:** React Icons (Simple Icons)
- **Язык:** JavaScript (ES6+)
- **Управление состоянием:** React Context API
- **Анимации:** CSS переходы, трансформации

#### Backend
- **Среда выполнения:** Node.js
- **Фреймворк:** Express.js
- **Middleware:** CORS, Morgan
- **Раздача файлов:** Статические файлы (видео, изображения, резюме)
#### Интеграция
- **Telegram Bot API** - Для отправки сообщений из контактной формы (через GitHub Actions secrets)
- **Local Storage** - Для сохранения настроек пользователя (язык, тема)

### 📁 Структура проекта

```
portfolio/
├── .github/
│   ├── workflows/            # GitHub Actions CI/CD
│   │   ├── ci.yml           # Проверка качества кода
│   │   ├── deploy.yml       # Деплой на GitHub Pages
│   │   ├── codeql.yml       # Сканирование безопасности
│   │   └── dependency-update.yml # Еженедельные обновления
│   ├── CICD.md              # Документация CI/CD
│   ├── CODE_OF_CONDUCT.md   # Кодекс поведения
│   └── CONTRIBUTING.md      # Руководство по участию
├── frontend/                 # Next.js приложение
│   ├── app/                 # App Router (Next.js 15+)
│   │   ├── _files/         # Скрипты запуска
│   │   ├── about/          # Страница "Обо мне"
│   │   ├── contact/        # Страница контактов с формой Telegram
│   │   ├── home/           # Главная страница с видео-фоном
│   │   │   └── _elements/  # Секции главной страницы (1-5)
│   │   ├── projects/       # Витрина проектов
│   │   ├── skills/         # Навыки и технологический стек
│   │   └── layout.jsx      # Корневой layout с метаданными
│   ├── components/         # Переиспользуемые React компоненты
│   │   ├── layout/        # Navbar, Footer
│   │   ├── LoadingScreen.jsx
│   │   ├── projectCard.jsx
│   │   ├── techBadge.jsx
│   │   └── typeWriterComp.jsx
│   ├── context/           # React Context провайдеры
│   │   ├── LanguageContext.jsx # Поддержка EN/RU
│   │   └── ThemeContext.jsx    # Темная/Светлая тема
│   ├── public/            # Статические файлы (отдаются как есть)
│   │   ├── cv/           # Резюме в PDF (EN/RU) - по 208.8 КБ
│   │   ├── images/       # SVG изображения (macbook.svg, og-image.svg)
│   │   ├── video/        # Видео для фона (kek.mp4 - 9.3 МБ)
│   │   ├── .nojekyll     # Конфигурация GitHub Pages
│   │   ├── apple-icon.png # iOS иконка - 1.4 КБ
│   │   ├── favicon.ico   # Иконка браузера - 15 КБ
│   │   ├── icon-192.png  # PWA иконка - 4 КБ
│   │   ├── icon-512.png  # PWA иконка - 15 КБ
│   │   ├── icon.png      # Основная иконка - 479 Б
│   │   ├── icon.svg      # Векторная иконка - 537 Б
│   │   ├── manifest.json # PWA манифест - 758 Б
│   │   ├── robots.txt    # SEO директивы - 136 Б
│   │   └── sitemap.xml   # Карта сайта - 2 КБ
│   ├── resources/
│   │   └── styles/
│   │       └── globals.scss # Глобальные стили
│   ├── .env.example      # Шаблон переменных окружения
│   ├── .env.local        # Переменные окружения (в .gitignore)
│   ├── next.config.mjs   # Конфигурация Next.js
│   └── package.json      # Зависимости
├── build.bat / build.sh   # Скрипты production сборки
├── check-deployment.ps1   # Валидация перед деплоем
├── DEPLOYMENT.md          # Инструкции по деплою
├── QUICKSTART-DEPLOY.md   # Краткое руководство
├── READY.md               # Чеклист готовности к деплою
├── SCRIPTS.md             # Документация скриптов
└── start-dev.bat / .sh    # Скрипты запуска dev сервера
```

### 🚀 Быстрый старт

#### Требования
- Node.js (v18 или выше)
- npm 9+ или yarn
- Git (для деплоя)
- Telegram Bot Token (для контактной формы, необязательно для локального запуска)

#### Локальная разработка

1. **Клонировать репозиторий**
```bash
git clone https://github.com/vladimir75vov/portfolio.git
cd portfolio
```

2. **Создать файл с переменными окружения**
```bash
cp frontend/.env.example frontend/.env.local
```

Отредактируйте `frontend/.env.local` и добавьте ваши Telegram учётные данные:
```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=ваш_токен_бота
NEXT_PUBLIC_TELEGRAM_CHAT_ID=ваш_chat_id
```

**Как получить учётные данные Telegram:**
- Токен бота: [@BotFather](https://t.me/BotFather) → команда `/newbot`
- Chat ID: [@userinfobot](https://t.me/userinfobot) → отправьте сообщение боту

3. **Запустить приложение**

**Быстрый старт (рекомендуется):**
```bash
# Windows - двойной клик или:
start-dev.bat

# Linux/Mac
chmod +x start-dev.sh
./start-dev.sh
```

Скрипт автоматически:
- ✅ Проверит установку Node.js
- ✅ Установит зависимости (если нужно)
- ✅ Освободит порт 3000
- ✅ Запустит dev сервер

**Или вручную:**
```bash
cd frontend
npm install
npm run dev
```

4. **Открыть в браузере**
```
http://localhost:3000
```

#### 🌐 Деплой на GitHub Pages

См. [QUICKSTART-DEPLOY.md](QUICKSTART-DEPLOY.md) для краткого руководства  
См. [DEPLOYMENT.md](DEPLOYMENT.md) для полной документации

**Быстрый деплой:**
```bash
# 1. Инициализировать git (если ещё не сделано)
git init
git add .
git commit -m "Initial commit: Portfolio website"

# 2. Создать репозиторий на GitHub с именем 'vladimir75vov.github.io'

# 3. Отправить код на GitHub
git remote add origin https://github.com/vladimir75vov/vladimir75vov.github.io.git
git branch -M main
git push -u origin main

# 4. Настроить GitHub Secrets (Settings → Secrets and variables → Actions):
#    - NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
#    - NEXT_PUBLIC_TELEGRAM_CHAT_ID

# 5. Включить GitHub Pages (Settings → Pages → Source: GitHub Actions)
```

Ваш сайт будет доступен по адресу `https://vladimir75vov.github.io` через 2-3 минуты!

### 🎮 Доступные команды

#### Скрипты быстрого запуска
См. [SCRIPTS.md](SCRIPTS.md) для подробной документации.

**Разработка:**
```bash
start-dev.bat / start-dev.sh   # Авто-настройка и запуск dev сервера
build.bat / build.sh           # Production сборка с проверками
check-deployment.ps1           # Валидация перед деплоем (PowerShell)
```

**Возможности скриптов:**
- ✅ Автоматическая установка зависимостей
- ✅ Решение конфликтов портов
- ✅ Статистика сборки
- ✅ Обработка ошибок

#### NPM команды (требуется cd frontend)
```bash
npm run dev      # Запуск dev сервера на порту 3000
npm run build    # Сборка для production (статический экспорт в out/)
npm run start    # Запуск production сервера (не работает со static export)
npm run lint     # Запуск ESLint
```

### 📦 Сборка и деплой

#### Локальная сборка
```bash
# Автоматическая (рекомендуется):
build.bat  # Windows
./build.sh # Linux/Mac

# Или вручную:
cd frontend
npm install
npm run lint
npm run build
```

Это создаст директорию `frontend/out/` с:
- Всеми статическими HTML файлами (6 страниц)
- Оптимизированными JavaScript бандлами (102-115 KB First Load JS)
- Всеми медиа-файлами (видео 9.3 МБ, PDF 208.8 КБ каждый, изображения)
- PWA файлами (manifest, sitemap, robots.txt, иконки)

#### Автоматический деплой

GitHub Actions автоматически выполняет деплой при каждом push в `main`:
- ✅ Проверяет код (ESLint + Prettier)
- ✅ Выполняет сборку статического сайта
- ✅ Деплоит на GitHub Pages
- ✅ Сканирование безопасности (CodeQL)
- ✅ Еженедельное обновление зависимостей

См. [.github/CICD.md](.github/CICD.md) для подробностей о CI/CD.

### 🌍 Поддержка языков

Переключайтесь между английским и русским языками используя переключатель языка в навигационной панели. Предпочтения автоматически сохраняются в localStorage.

### 🎨 Обзор функций

#### Секция Hero
- Полноэкранное кинематографичное фоновое видео
- Пользовательские элементы управления видео (включение/выключение звука, громкость, переключение фильтра)
- Анимированный эффект печатной машинки
- Анимация градиентного текста

#### Секция проектов
- Карточки проектов с изображениями
- Бейджи технологий
- Ссылки на демо и GitHub репозитории

#### Секция навыков
- Интерактивные карточки навыков
- Визуализация технологического стека

#### Секция "Обо мне"
- Профессиональная биография
- Основные моменты опыта

#### Секция контактов
- Контактная форма
- Ссылки на социальные сети

### 📝 Переменные окружения

#### Frontend (`frontend/.env.local`)
```env
# Конфигурация Telegram бота (для контактной формы)
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=ваш_токен_бота
NEXT_PUBLIC_TELEGRAM_CHAT_ID=ваш_chat_id
```

**Как получить учётные данные Telegram:**
1. Создайте бота через [@BotFather](https://t.me/BotFather) - отправьте команду `/newbot`
2. Скопируйте токен бота от BotFather
3. Получите ваш chat ID, отправив сообщение [@userinfobot](https://t.me/userinfobot)

**Файл-шаблон:** См. `frontend/.env.example` для полного шаблона.

**Примечания по безопасности:**
- ✅ `.env.local` в .gitignore - не будет закоммичен
- ✅ Используйте `.env.example` как шаблон
- ✅ Для GitHub Actions: Добавьте секреты в Settings → Secrets and variables → Actions
  - `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`
  - `NEXT_PUBLIC_TELEGRAM_CHAT_ID`
- ⚠️ Никогда не коммитьте реальные учётные данные в Git

### 🧪 Тестирование

Проект готов к деплою. Используйте скрипт валидации для проверки готовности:

```powershell
# Windows PowerShell
.\check-deployment.ps1
```

Скрипт проверяет:
- ✅ Наличие всех необходимых файлов (видео, PDF, иконки, конфиг файлы)
- ✅ Установленные зависимости (Node.js, npm, Git)
- ✅ Успешное завершение сборки
- ✅ Настроенные переменные окружения
- ✅ Наличие PWA файлов

### 🎯 После деплоя

После деплоя на GitHub Pages, проверьте:
1. ✅ Сайт загружается по адресу https://vladimir75vov.github.io
2. ✅ Видео воспроизводится корректно
3. ✅ Скачивание резюме работает (EN/RU)
4. ✅ Контактная форма отправляет в Telegram
5. ✅ Переключение языка работает (EN ↔ RU)
6. ✅ Все страницы доступны (home, about, contact, projects, skills)

### 📄 Лицензия

Этот проект является частным и проприетарным.

### 👤 Автор

**Владимир Будаев**
- 🎯 Full Stack Разработчик
- 📍 Москва, Россия
- 💼 Опыт работы 4+ года
- 📧 vladimir75vov@gmail.com
- 📱 +7 (903) 709-5173
- 🔗 [GitHub](https://github.com/vladimir75vov)
- 💬 [Telegram](https://t.me/vladimir75vov)

**Опыт работы:**
- **ЦОДД Москва** - Full Stack разработчик (Авг 2024 - Настоящее время)
- **Леруа Мерлен** - Full Stack разработчик (Июнь 2021 - Июнь 2023)
- **Росгвардия** - Системный администратор и разработчик

**Технологический стек:**
- Frontend: HTML5, CSS3, JavaScript, React, TypeScript, Tailwind CSS
- Backend: Node.js, C#, Python, Java, .NET Core
- Базы данных: MySQL, MS SQL, Firebase
- Инструменты: Git, ООП, SOLID, MVVM, Linux (Astra, Kali, Manjaro)

### 🤝 Участие в разработке

Это личный портфолио проект. Если у вас есть предложения, не стесняйтесь создавать issue.

---

<div align="center">

### ⭐ Если вам понравился этот проект, поставьте звезду!

**Made with ❤️ by Vladimir Budaev**

</div>