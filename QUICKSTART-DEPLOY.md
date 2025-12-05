# 🚀 Быстрый старт деплоя | Quick Start Deployment

**[English](#english) | [Русский](#russian)**

---

## <a name="english"></a>🇬🇧 English

## ✅ Readiness Check

All necessary files are in place:
- ✅ Video: `frontend/public/video/kek.mp4` (9.3 MB)
- ✅ Resumes: `frontend/public/cv/cvEn.pdf`, `cvRu.pdf` (208.8 KB each)
- ✅ Icons: favicon.ico (15 KB), icon-192.png (4 KB), icon-512.png (15 KB), apple-icon.png (1.4 KB)
- ✅ PWA files: manifest.json (758 B), robots.txt (136 B), sitemap.xml (2 KB), .nojekyll
- ✅ GitHub Actions: CI/CD configured (4 workflows)
- ✅ Build: Successfully passes (all 6 pages, 102-115 KB First Load JS)
- ✅ Environment: .env.example template created

## 📋 What to Do

### 1. Install Git (if not already installed)

Download and install: https://git-scm.com/download/win

After installation, open new PowerShell and run:
```powershell
git config --global user.name "Vladimir Budaev"
git config --global user.email "vladimir75vov@gmail.com"
```

### 2. Initialize Repository

```powershell
cd c:\Users\vladimir75vov\Desktop\portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website with all resources"
```

### 3. Create GitHub Repository

Go to https://github.com/new and create repository:

**Option A (recommended):** 
- Name: `vladimir75vov.github.io`
- Type: Public
- Site will be: `https://vladimir75vov.github.io`

**Option B:**
- Name: `portfolio`
- Type: Public  
- Site will be: `https://vladimir75vov.github.io/portfolio`
- ⚠️ Requires changing `next.config.mjs` (see DEPLOYMENT.md)

### 4. Connect and Push Code

```powershell
# For option A (recommended):
git remote add origin https://github.com/vladimir75vov/vladimir75vov.github.io.git

# Or for option B:
# git remote add origin https://github.com/vladimir75vov/portfolio.git

git branch -M main
git push -u origin main
```

### 5. Configure GitHub Secrets

Go to Settings → Secrets and variables → Actions → New repository secret

Add 2 secrets:

1. **Name:** `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`
   - **Value:** Your token from @BotFather
   - How to get: https://t.me/BotFather → `/newbot` command
   - Format: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`

2. **Name:** `NEXT_PUBLIC_TELEGRAM_CHAT_ID`  
   - **Value:** Your chat ID
   - How to get: https://t.me/userinfobot → message the bot
   - Format: `123456789`

**Important:** Without these secrets, contact form won't work (but site will deploy successfully).

### 6. Enable GitHub Pages

Go to Settings → Pages:
- **Source:** GitHub Actions (not Deploy from a branch!)
- Save

### 7. Deploy!

GitHub Actions will start automatically after push.

In 2-3 minutes site will be available:
- https://vladimir75vov.github.io (option A)
- https://vladimir75vov.github.io/portfolio (option B)

## 🔍 Post-Deployment Check

After deployment (2-3 minutes), verify:

### Essential Tests
1. ✅ Site opens - https://vladimir75vov.github.io
2. ✅ Video loads and plays (9.3 MB, may take a moment)
3. ✅ Download CV button downloads PDF (EN/RU) - 208.8 KB each
4. ✅ All pages accessible - /, /about/, /contact/, /projects/, /skills/
5. ✅ Navigation works - All menu items lead to correct pages
6. ✅ Language switch works - Toggle EN ↔ RU
7. ✅ Theme switch works - Toggle Dark ↔ Light
8. ✅ Contact form sends to Telegram (if secrets configured)
9. ✅ All images display (MacBook SVG, icons, OG image)
10. ✅ Responsive design - Test on mobile/tablet in DevTools

### Browser DevTools Check (F12)
- Console: No critical errors (warnings are OK)
- Network: All resources load with 200 status
- Application → Manifest: PWA manifest valid
- Lighthouse: Run audit (should score 90+ in Performance, SEO, Accessibility)
4. ✅ All images display
5. ✅ Language switching works
6. ✅ Contact form sends to Telegram

## 🛠️ Local Pre-Deployment Check

```powershell
cd c:\Users\vladimir75vov\Desktop\portfolio
.\check-deployment.ps1
```

Should show "ALL CHECKS PASSED" (except Git if not installed).

## 📚 Full Documentation

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions and troubleshooting.

## ⚡ Automatic Updates

On every push to `main` GitHub Actions automatically:
- Checks code (ESLint)
- Runs tests
- Builds static site
- Deploys to GitHub Pages
- Scans security (CodeQL)

Also checks dependency updates weekly.

## 🎉 Done!

After completing all steps your portfolio will be online with:
- ✅ Automatic updates
- ✅ SSL certificate (HTTPS)
- ✅ PWA support
- ✅ SEO optimization
- ✅ All media files

---

## <a name="russian"></a>🇷🇺 Русский

## ✅ Проверка готовности

Все необходимые файлы на месте:
- ✅ Видео: `frontend/public/video/kek.mp4` (9.3 МБ)
- ✅ Резюме: `frontend/public/cv/cvEn.pdf`, `cvRu.pdf` (по 208.8 КБ)
- ✅ Иконки: favicon.ico (15 КБ), icon-192.png (4 КБ), icon-512.png (15 КБ), apple-icon.png (1.4 КБ)
- ✅ PWA файлы: manifest.json (758 Б), robots.txt (136 Б), sitemap.xml (2 КБ), .nojekyll
- ✅ GitHub Actions: CI/CD настроен (4 workflow)
- ✅ Сборка: Успешно проходит (все 6 страниц, 102-115 КБ First Load JS)
- ✅ Окружение: Создан шаблон .env.example

## 📋 Что нужно сделать

### 1. Установить Git (если еще не установлен)

Скачайте и установите: https://git-scm.com/download/win

После установки откройте новый PowerShell и выполните:
```powershell
git config --global user.name "Vladimir Budaev"
git config --global user.email "vladimir75vov@gmail.com"
```

### 2. Инициализировать репозиторий

```powershell
cd c:\Users\vladimir75vov\Desktop\portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website with all resources"
```

### 3. Создать репозиторий на GitHub

Перейдите на https://github.com/new и создайте репозиторий:

**Вариант A (рекомендуется):** 
- Имя: `vladimir75vov.github.io`
- Тип: Public
- Сайт будет: `https://vladimir75vov.github.io`

**Вариант B:**
- Имя: `portfolio`
- Тип: Public  
- Сайт будет: `https://vladimir75vov.github.io/portfolio`
- ⚠️ Требует изменить `next.config.mjs` (см. DEPLOYMENT.md)

### 4. Подключить и отправить код

```powershell
# Для варианта A (рекомендуется):
git remote add origin https://github.com/vladimir75vov/vladimir75vov.github.io.git

# Или для варианта B:
# git remote add origin https://github.com/vladimir75vov/portfolio.git

git branch -M main
git push -u origin main
```

### 5. Настроить GitHub Secrets

Перейдите в Settings → Secrets and variables → Actions → New repository secret

Добавьте 2 секрета:

1. **Name:** `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`
   - **Value:** Ваш токен от @BotFather
   - Как получить: https://t.me/BotFather → /newbot

2. **Name:** `NEXT_PUBLIC_TELEGRAM_CHAT_ID`  
   - **Value:** Ваш chat ID
   - Как получить: https://t.me/userinfobot → напишите боту

### 6. Включить GitHub Pages

Перейдите в Settings → Pages:
- **Source:** GitHub Actions (не Deploy from a branch!)
- Сохраните

### 7. Деплой!

GitHub Actions автоматически запустится после push.

Через 2-3 минуты сайт будет доступен:
- https://vladimir75vov.github.io (вариант A)
- https://vladimir75vov.github.io/portfolio (вариант B)

## 🔍 Проверка деплоя

После деплоя проверьте:
1. ✅ Сайт открывается
2. ✅ Видео загружается и воспроизводится
3. ✅ Кнопка Download CV скачивает PDF (EN/RU)
4. ✅ Все изображения отображаются
5. ✅ Переключение языка работает
6. ✅ Форма контактов отправляет в Telegram

## 🛠️ Локальная проверка перед деплоем

```powershell
cd c:\Users\vladimir75vov\Desktop\portfolio
.\check-deployment.ps1
```

Должно быть "ALL CHECKS PASSED" (кроме Git, если не установлен).

## 📚 Полная документация

См. [DEPLOYMENT.md](DEPLOYMENT.md) для подробных инструкций и troubleshooting.

## ⚡ Автоматические обновления

При каждом push в `main` GitHub Actions автоматически:
- Проверяет код (ESLint)
- Запускает тесты
- Собирает статический сайт
- Деплоит на GitHub Pages
- Сканирует безопасность (CodeQL)

Также каждую неделю проверяет обновления зависимостей.

## 🎉 Готово!

После выполнения всех шагов ваше портфолио будет доступно онлайн с:
- ✅ Автоматическими обновлениями
- ✅ SSL сертификатом (HTTPS)
- ✅ PWA поддержкой
- ✅ SEO оптимизацией
- ✅ Всеми медиа файлами
