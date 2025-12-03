# 🚀 Portfolio Website - Vladimir Budaev

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Vladimir%20Budaev-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)

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
- **Framework:** Next.js 14.2.5 (App Router)
- **Library:** React 18
- **Styling:** Tailwind CSS, SCSS, CSS Variables
- **Icons:** React Icons (Simple Icons)
- **Language:** JavaScript (ES6+)
- **State Management:** React Context API
- **Animations:** CSS Transitions, Transform

#### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Middleware:** CORS, Morgan
- **File Serving:** Static files (videos, images, CVs)
- **Environment:** dotenv

#### Integration
- **Telegram Bot API** - For contact form submissions
- **Local Storage** - For preferences persistence

### 📁 Project Structure

```
portfolio/
├── frontend/                    # Next.js frontend application
│   ├── app/                    # App directory (Next.js 13+ App Router)
│   │   ├── about/             # About page - Work experience & education
│   │   ├── contact/           # Contact page with Telegram form
│   │   ├── home/              # Home page with hero video
│   │   │   └── _elements/     # Home page sections (1-5)
│   │   ├── projects/          # Projects showcase page
│   │   ├── skills/            # Skills & tech stack page
│   │   └── layout.jsx         # Root layout with providers
│   ├── components/            # Reusable React components
│   │   ├── layout/           # Navbar, Footer
│   │   ├── projectCard.jsx   # Project card component
│   │   ├── techBadge.jsx     # Technology badge
│   │   └── typeWriterComp.jsx # Animated typewriter effect
│   ├── context/              # React Context providers
│   │   ├── LanguageContext.jsx # Multi-language support
│   │   └── ThemeContext.jsx    # Dark/Light theme
│   ├── resources/            # Static assets
│   │   └── styles/           
│   │       └── globals.scss  # Global styles & CSS variables
│   ├── .env.local            # Environment variables (gitignored)
│   └── .env.example          # Example environment file
├── backend/                   # Express.js backend server
│   ├── app/                  # Application logic
│   │   └── app.js           # Express server setup
│   └── resources/           # Server resources
│       ├── files/           
│       │   ├── cv/          # Resume files (cvEn.pdf, cvRu.pdf)
│       │   └── video/       # Hero video file
│       └── images/          # Static images
└── database/                # Database files (future use)
```

### 🚀 Quick Start

#### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Telegram Bot Token (for contact form)

#### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vladimir75vov/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. **Setup environment variables**

**Frontend** - Create `frontend/.env.local`:
```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id_here
```

**Backend** - Create `backend/.env`:
```env
PORT=4000
NODE_ENV=development
```

4. **Add CV files**
Place your resume files in `backend/resources/files/cv/`:
- `cvEn.pdf` - English version
- `cvRu.pdf` - Russian version

5. **Run the application**

**Option 1: Using batch file (Windows)**
```bash
# From root directory
startBackAndFront.bat
```

**Option 2: Manual start**
```bash
# Terminal 1 - Start backend
cd backend
npm run dev

# Terminal 2 - Start frontend
cd frontend
npm run dev
```

4. **Open in browser**
```
Frontend: http://localhost:3000
Backend: http://localhost:8080
```

### 🎮 Available Scripts

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

#### Backend
- `npm run dev` - Start development server
- `npm run lint` - Run ESLint

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
1. Create a bot via [@BotFather](https://t.me/BotFather)
2. Get your bot token
3. Get your chat ID by messaging [@userinfobot](https://t.me/userinfobot)

#### Backend (`backend/.env`)
```env
PORT=4000
NODE_ENV=development
```

#### Root (`.env`)
```env
FRONTEND_IP=localhost
FRONTEND_PORT=3000
BACKEND_IP=localhost
BACKEND_PORT=4000
BACKEND_API_PATH=/api/v1/
```

**Security Notes:**
- ✅ `.env.local` is gitignored
- ✅ CV files (*.pdf) are gitignored
- ✅ Use `.env.example` as template
- ⚠️ Never commit real credentials to Git

### 🧪 Testing

Run API tests:
```bash
cd backend/tests/api
python testApi.py
```

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
- **Окружение:** dotenv

#### Интеграция
- **Telegram Bot API** - Для отправки сообщений из контактной формы
- **Local Storage** - Для сохранения настроек пользователя

### 📁 Структура проекта

```
portfolio/
├── frontend/              # Frontend приложение на Next.js
│   ├── app/              # Директория приложения (структура Next.js 13+)
│   │   ├── about/       # Страница "Обо мне"
│   │   ├── contact/     # Страница контактов
│   │   ├── home/        # Главная страница с секциями
│   │   ├── projects/    # Витрина проектов
│   │   └── skills/      # Страница навыков
│   ├── components/      # Переиспользуемые React компоненты
│   ├── context/         # React Context (управление языком)
│   └── resources/       # Статические ресурсы и стили
├── backend/             # Backend сервер на Express.js
│   ├── app/            # Логика приложения
│   └── resources/      # Ресурсы сервера (видео, изображения)
└── database/           # Файлы базы данных
```

### 🚀 Быстрый старт

#### Требования
- Node.js (v16 или выше)
- npm или yarn

#### Установка

1. **Клонировать репозиторий**
```bash
git clone <repository-url>
cd portfolio
```

2. **Установить зависимости**
```bash
# Установка зависимостей frontend
cd frontend
npm install

# Установка зависимостей backend
cd ../backend
npm install
```

3. **Запустить приложение**

**Вариант 1: Использование batch файла (Windows)**
```bash
# Из корневой директории
startBackAndFront.bat
```

**Вариант 2: Ручной запуск**
```bash
# Терминал 1 - Запуск backend
cd backend
npm run dev

# Терминал 2 - Запуск frontend
cd frontend
npm run dev
```

4. **Открыть в браузере**
```
Frontend: http://localhost:3000
Backend: http://localhost:8080
```

### 🎮 Доступные команды

#### Frontend
- `npm run dev` - Запуск сервера разработки
- `npm run build` - Сборка для продакшена
- `npm run start` - Запуск продакшен сервера
- `npm run lint` - Запуск ESLint

#### Backend
- `npm run dev` - Запуск сервера разработки
- `npm run lint` - Запуск ESLint

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

Создайте `.env` файлы в директориях frontend и backend:

**Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

**Backend (.env)**
```env
PORT=8080
NODE_ENV=development
```

### 🧪 Тестирование

Запуск API тестов:
```bash
cd backend/tests/api
python testApi.py
```

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