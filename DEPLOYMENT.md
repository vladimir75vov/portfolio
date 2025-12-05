# 📦 Инструкция по деплою на GitHub Pages | Deployment Guide

**[English](#english) | [Русский](#russian)**

---

## <a name="english"></a>🇬🇧 English

## Repository Setup

### 1. Initialize Git Repository

```bash
# Navigate to project directory
cd c:\Users\vladimir75vov\Desktop\portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website with Next.js 15.5.7"
```

### 2. Create GitHub Repository

There are two options:

#### Option A: User Repository (recommended)
1. Go to https://github.com/new
2. Repository name: `vladimir75vov.github.io`
3. Type: **Public**
4. **Do NOT** initialize with README, .gitignore, or license
5. Site will be available at: `https://vladimir75vov.github.io`
6. **Does not require** changes in `next.config.mjs` ✅

#### Option B: Project Repository
1. Go to https://github.com/new
2. Repository name: any name (e.g., `portfolio`)
3. Type: **Public**
4. Site will be available at: `https://vladimir75vov.github.io/portfolio`
5. **Requires** uncommenting lines in `frontend/next.config.mjs`:
   ```javascript
   basePath: '/portfolio',  // Replace 'portfolio' with your repository name
   assetPrefix: '/portfolio',
   ```

### 3. Connect to GitHub

```bash
# Add remote repository (replace URL with yours)
# For Option A (recommended):
git remote add origin https://github.com/vladimir75vov/vladimir75vov.github.io.git

# Or for Option B:
# git remote add origin https://github.com/vladimir75vov/portfolio.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

**Note:** If you get an authentication error:
- Windows: Install [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager)
- Or use Personal Access Token instead of password
- Generate token: https://github.com/settings/tokens

### 4. Configure GitHub Secrets

Go to **Settings → Secrets and variables → Actions → New repository secret**

Add these 2 secrets:

#### Secret 1: NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
1. Open [@BotFather](https://t.me/BotFather) in Telegram
2. Send command: `/newbot`
3. Follow instructions to create bot
4. Copy the token (format: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)
5. In GitHub: **Name** = `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`, **Secret** = your token

#### Secret 2: NEXT_PUBLIC_TELEGRAM_CHAT_ID
1. Open [@userinfobot](https://t.me/userinfobot) in Telegram
2. Send any message to the bot
3. Bot will reply with your ID (format: `123456789`)
4. In GitHub: **Name** = `NEXT_PUBLIC_TELEGRAM_CHAT_ID`, **Secret** = your ID

**Important:** These secrets are required for contact form to work. Without them, build will succeed but form won't send messages.

### 5. Enable GitHub Pages

1. Go to **Settings → Pages**
2. In "Build and deployment" section:
   - **Source:** Select **GitHub Actions** (NOT "Deploy from a branch"!)
3. Save changes (no branch selection needed with GitHub Actions)

**Why GitHub Actions?**
- ✅ Automatically builds and deploys on every push
- ✅ Runs tests and linting before deploy
- ✅ Supports environment variables (secrets)
- ✅ Better for Next.js static export

### 6. Deploy

After push to `main` branch, GitHub Actions workflow will start automatically:

```bash
# Make any change
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

**What happens:**
1. GitHub Actions workflow triggers (`.github/workflows/deploy.yml`)
2. Installs Node.js and dependencies
3. Runs `npm run build` (creates `out/` directory)
4. Deploys `out/` to GitHub Pages
5. Site goes live in 2-3 minutes

**Check deployment progress:**
- Go to **Actions** tab in your repository
- Click on latest workflow run
- Watch the progress

**Site will be available at:**
- Option A: `https://vladimir75vov.github.io` (user repository)
- Option B: `https://vladimir75vov.github.io/portfolio` (project repository)

## Verification

### Check Files Deployed

After deployment, verify these URLs work:

```
https://vladimir75vov.github.io/          # Homepage
https://vladimir75vov.github.io/about/    # About page
https://vladimir75vov.github.io/contact/  # Contact page
https://vladimir75vov.github.io/projects/ # Projects page
https://vladimir75vov.github.io/skills/   # Skills page
https://vladimir75vov.github.io/video/kek.mp4      # Video (9.3 MB)
https://vladimir75vov.github.io/cv/cvEn.pdf        # Resume EN (208.8 KB)
https://vladimir75vov.github.io/cv/cvRu.pdf        # Resume RU (208.8 KB)
https://vladimir75vov.github.io/manifest.json      # PWA manifest
https://vladimir75vov.github.io/robots.txt         # Robots file
https://vladimir75vov.github.io/sitemap.xml        # Sitemap
```

### Test Functionality

1. ✅ **Video plays** - Hero background video should autoplay
2. ✅ **CV download** - Click "Download CV" button (both EN and RU)
3. ✅ **Language switch** - Toggle between English and Russian
4. ✅ **Theme switch** - Toggle between Dark and Light themes
5. ✅ **Contact form** - Fill and submit (should send to Telegram)
6. ✅ **Navigation** - All menu items work
7. ✅ **Responsive** - Test on mobile/tablet screen sizes

## Pre-Deployment Check

### Local Build Test

Before pushing to GitHub, test the build locally:

```bash
# Using automation script (recommended):
build.bat  # Windows
./build.sh # Linux/Mac

# Or manually:
cd frontend
npm install
npm run lint
npm run build
```

**Expected output:**
```
✓ Linting and checking validity of types
✓ Creating an optimized production build
✓ Collecting page data
✓ Generating static pages (6/6)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    ...      ... kB
├ ○ /about                               ...      ... kB
├ ○ /contact                             ...      ... kB
├ ○ /projects                            ...      ... kB
├ ○ /skills                              ...      ... kB
└ ○ /_not-found                          ...      ... kB

○  (Static)  prerendered as static content

Export successful. Files written to out
```

### Validation Script

Run comprehensive pre-deployment check:

```powershell
# Windows PowerShell
cd c:\Users\vladimir75vov\Desktop\portfolio
.\check-deployment.ps1
```

**What it checks:**
- ✅ Node.js 18+ installed
- ✅ npm 9+ installed
- ✅ Git installed
- ✅ All required files present:
  - Video: `frontend/public/video/kek.mp4` (9.3 MB)
  - Resumes: `frontend/public/cv/cvEn.pdf`, `cvRu.pdf` (208.8 KB each)
  - Icons: favicon.ico, icon-192.png, icon-512.png, etc.
  - PWA: manifest.json, robots.txt, sitemap.xml, .nojekyll
  - Config: next.config.mjs, package.json
- ✅ Dependencies installed
- ✅ Build completes successfully
- ✅ Output directory created with all files

Should have:
- ✅ 0 compilation errors
- ✅ All 6 pages exported (/, /about/, /contact/, /projects/, /skills/, /404/)
- ✅ `out/` directory created (contains all static files)

### File Verification

```powershell
# Check video file (should be 9.3 MB)
Get-ChildItem frontend\public\video\kek.mp4

# Check resume files (should be 208.8 KB each)
Get-ChildItem frontend\public\cv\*.pdf

# Check sizes
Get-ChildItem frontend\public\video\*.mp4, frontend\public\cv\*.pdf | `
  Select-Object Name, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB,2)}}
```

**Expected output:**
```
Name       Size(MB)
----       --------
kek.mp4    9.3
cvEn.pdf   0.20
cvRu.pdf   0.20
```

## File Structure for GitHub Pages

```
frontend/
├── public/                    # Static files (deployed as-is)
│   ├── .nojekyll             # Disables Jekyll on GitHub Pages
│   ├── manifest.json         # PWA manifest (758 B)
│   ├── robots.txt            # Search engine directives (136 B)
│   ├── sitemap.xml           # Site map (2 KB)
│   ├── favicon.ico           # Browser icon (15 KB)
│   ├── apple-icon.png        # iOS icon (1.4 KB)
│   ├── icon-192.png          # PWA icon (4 KB)
│   ├── icon-512.png          # PWA icon (15 KB)
│   ├── icon.png              # Default icon (479 B)
│   ├── icon.svg              # Vector icon (537 B)
│   ├── video/
│   │   └── kek.mp4          # ✅ Hero video (9.3 MB)
│   ├── cv/
│   │   ├── cvEn.pdf         # ✅ Resume EN (208.8 KB)
│   │   └── cvRu.pdf         # ✅ Resume RU (208.8 KB)
│   └── images/
│       ├── og-image.svg      # Open Graph image (1 KB)
│       └── macbook.svg       # Laptop image (15 KB)
└── out/                      # Generated during build (auto-deployed)
    ├── index.html            # Homepage
    ├── about/index.html      # About page
    ├── contact/index.html    # Contact page
    ├── projects/index.html   # Projects page
    ├── skills/index.html     # Skills page
    ├── 404/index.html        # 404 page
    ├── _next/                # JS/CSS bundles
    ├── video/                # Copied from public/
    ├── cv/                   # Copied from public/
    ├── images/               # Copied from public/
    └── .nojekyll             # Copied from public/
```

## Important Notes

### Files in Git
- ✅ Video `kek.mp4` **included** in git (9.3 MB)
- ✅ PDF resume files **included** in git (208.8 KB each)
- ✅ All static resources available on GitHub Pages
- ✅ `.env.local` **excluded** from git (contains secrets)
- ✅ `node_modules/` **excluded** from git (dependencies)
- ✅ `out/` **excluded** from git (generated on each build)

### Repository Size
- Video: 9.3 MB
- Resumes: 0.42 MB (2 files)
- Icons & Images: ~0.1 MB
- Code & Config: ~0.5 MB
- **Total repository size:** ~10-15 MB (acceptable for GitHub, limit is 1 GB)

### Build Output
- 6 static HTML pages
- JavaScript bundles: 102-115 KB First Load JS per page
- All media files copied to `out/` directory
- PWA files ready (manifest, icons, service worker ready)

### Optimization Recommendations (Optional)

If repository becomes too large in future:

1. **Use Git LFS** for large files:
   ```bash
   git lfs install
   git lfs track "*.mp4"
   git lfs track "*.pdf"
   git add .gitattributes
   ```

2. **Optimize video** (can reduce size 2-3x):
   ```bash
   # Convert to WebM format with better compression
   ffmpeg -i kek.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus kek.webm
   
   # Or reduce MP4 quality
   ffmpeg -i kek.mp4 -vcodec h264 -crf 28 kek_optimized.mp4
   ```

3. **Use CDN** for large files:
   - Cloudflare (free tier)
   - AWS S3 + CloudFront
   - Vercel Blob Storage
   
4. **Alternative hosting** for video:
   - YouTube (embed)
   - Vimeo (embed)
   - Google Drive (direct link)

## Post-Deployment Verification

After successful deployment (2-3 minutes), check:

### Required Tests
1. ✅ **Homepage loads** - https://vladimir75vov.github.io
2. ✅ **Video plays** - Hero background should autoplay with controls
3. ✅ **Resume download** - Both EN and RU buttons work
4. ✅ **All images display** - MacBook SVG, OG image, icons
5. ✅ **Navigation works** - All menu items lead to correct pages
6. ✅ **Language switching** - Toggle EN ↔ RU, text changes
7. ✅ **Theme switching** - Toggle Dark ↔ Light mode
8. ✅ **Contact form** - Submit form, check Telegram for message
9. ✅ **Responsive design** - Test on mobile/tablet sizes (DevTools)
10. ✅ **PWA features** - manifest.json loads, icons present

### Page URLs to Test
```
https://vladimir75vov.github.io/          # Homepage
https://vladimir75vov.github.io/about/    # About page
https://vladimir75vov.github.io/contact/  # Contact page  
https://vladimir75vov.github.io/projects/ # Projects page
https://vladimir75vov.github.io/skills/   # Skills page
```

### Asset URLs to Test
```
https://vladimir75vov.github.io/video/kek.mp4      # Video (should load 9.3 MB)
https://vladimir75vov.github.io/cv/cvEn.pdf        # Resume EN (208.8 KB)
https://vladimir75vov.github.io/cv/cvRu.pdf        # Resume RU (208.8 KB)
https://vladimir75vov.github.io/manifest.json      # PWA manifest
https://vladimir75vov.github.io/robots.txt         # Robots.txt
https://vladimir75vov.github.io/sitemap.xml        # Sitemap
https://vladimir75vov.github.io/favicon.ico        # Favicon
```

### Browser DevTools Checks
```
F12 → Console: No errors (except expected warnings)
F12 → Network: All resources load (200 status)
F12 → Application → Manifest: Valid PWA manifest
F12 → Lighthouse: Run audit for Performance, Accessibility, SEO
```

## Automatic Updates

Workflow configured for automatic deploy on every push to `main`:

```yaml
on:
  push:
    branches: [ main ]
  workflow_dispatch:  # Manual trigger via GitHub UI
```

For manual run:
1. Go to Actions → Deploy to GitHub Pages
2. Click "Run workflow"
3. Select `main` branch
4. Click "Run workflow"

## Troubleshooting

### Video not loading
**Symptoms:** Video player shows black screen or error
**Solutions:**
- Check file exists: `frontend/public/video/kek.mp4`
- Check file size: Should be ~9.3 MB, not 0 bytes
- Check path in code: `/video/kek.mp4` (not `/public/video/kek.mp4`)
- Clear browser cache and reload
- Check browser console for errors (F12)
- Verify file deployed: https://vladimir75vov.github.io/video/kek.mp4

### Resume not downloading
**Symptoms:** Download button doesn't work or downloads wrong file
**Solutions:**
- Check files exist: `frontend/public/cv/cvEn.pdf` and `cvRu.pdf`
- Check file sizes: Should be ~208.8 KB each
- Check path in code: `/cv/${cvFile}` where cvFile is "cvEn.pdf" or "cvRu.pdf"
- Verify deployed: https://vladimir75vov.github.io/cv/cvEn.pdf
- Test in different browser (some block downloads)

### 404 errors on GitHub Pages
**Symptoms:** Page not found after navigation
**Solutions:**
- Check GitHub Pages is enabled: Settings → Pages → Source: GitHub Actions
- Check `basePath` in `next.config.mjs`:
  - For `username.github.io`: Should be commented out ✅
  - For `username.github.io/repo`: Uncomment and set to `/repo`
- Wait for workflow completion (check Actions tab)
- Check trailing slashes: URLs should end with `/` (e.g., `/about/`)
- Verify `trailingSlash: true` in `next.config.mjs`

### Build errors in GitHub Actions
**Symptoms:** Workflow fails with red X
**Solutions:**
- Check logs: Actions → Latest workflow → View logs
- Verify secrets configured: Settings → Secrets and variables → Actions
  - `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` (required)
  - `NEXT_PUBLIC_TELEGRAM_CHAT_ID` (required)
- Test build locally: `npm run build`
- Check dependencies: `npm install` (no errors)
- Verify Node.js version in workflow matches local (18+)

### Contact form not working
**Symptoms:** Form submits but no message in Telegram
**Solutions:**
- Check GitHub Secrets are set correctly (Settings → Secrets)
- Verify bot token is valid (message @BotFather)
- Verify chat ID is correct (message @userinfobot)
- Check bot started: Open bot in Telegram and click "START"
- Check browser console for errors (F12)
- Test locally with `.env.local` file

### Styles not loading / Broken layout
**Symptoms:** Page looks unstyled or elements misaligned
**Solutions:**
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check `basePath` in `next.config.mjs` (should match repository type)
- Verify `assetPrefix` matches `basePath`
- Check browser console for 404 errors on CSS files
- Rebuild: Delete `out/` folder and run `npm run build`

### Images not showing
**Symptoms:** Broken image icons instead of images
**Solutions:**
- Check files exist in `frontend/public/images/`
- Check file extensions match code (`.svg`, `.png`, etc.)
- Check paths use `/images/` not `/public/images/`
- Verify `images: { unoptimized: true }` in `next.config.mjs`
- For SVGs: Check they're valid XML (open in browser)

### Language/Theme not persisting
**Symptoms:** Settings reset on page reload
**Solutions:**
- Check localStorage works (browser privacy settings)
- Check LanguageContext.jsx and ThemeContext.jsx have `useEffect` with localStorage
- Test in incognito/private mode (localStorage might be disabled)
- Check browser console for localStorage errors

## Additional Information

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## <a name="russian"></a>🇷🇺 Русский

## Подготовка репозитория

### 1. Инициализация Git репозитория

```bash
# Перейдите в директорию проекта
cd c:\Users\vladimir75vov\Desktop\portfolio

# Инициализируйте git (если ещё не сделано)
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: Portfolio website with Next.js 15.5.7"
```

### 2. Создание репозитория на GitHub

Есть два варианта:

#### Вариант A: Репозиторий пользователя (рекомендуется)
1. Перейдите на https://github.com/new
2. Имя репозитория: `vladimir75vov.github.io`
3. Тип: **Public**
4. **НЕ** инициализируйте с README, .gitignore или license
5. Сайт будет доступен по адресу: `https://vladimir75vov.github.io`
6. **Не требует** изменений в `next.config.mjs` ✅

#### Вариант B: Проектный репозиторий
1. Перейдите на https://github.com/new
2. Имя репозитория: любое (например, `portfolio`)
3. Тип: **Public**
4. Сайт будет доступен по адресу: `https://vladimir75vov.github.io/portfolio`
5. **Требует** раскомментировать строки в `frontend/next.config.mjs`:
   ```javascript
   basePath: '/portfolio',  // Замените 'portfolio' на название вашего репозитория
   assetPrefix: '/portfolio',
   ```

### 3. Подключение к GitHub

```bash
# Добавьте удаленный репозиторий (замените URL на ваш)
# Для варианта A (рекомендуется):
git remote add origin https://github.com/vladimir75vov/vladimir75vov.github.io.git

# Или для варианта B:
# git remote add origin https://github.com/vladimir75vov/portfolio.git

# Отправьте код на GitHub
git branch -M main
git push -u origin main
```

**Примечание:** Если возникает ошибка аутентификации:
- Windows: Установите [Git Credential Manager](https://github.com/git-ecosystem/git-credential-manager)
- Или используйте Personal Access Token вместо пароля
- Создать токен: https://github.com/settings/tokens

### 4. Настройка GitHub Secrets

Перейдите в **Settings → Secrets and variables → Actions → New repository secret**

Добавьте 2 секрета:

#### Секрет 1: NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
1. Откройте [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду: `/newbot`
3. Следуйте инструкциям для создания бота
4. Скопируйте токен (формат: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)
5. В GitHub: **Name** = `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`, **Secret** = ваш токен

#### Секрет 2: NEXT_PUBLIC_TELEGRAM_CHAT_ID
1. Откройте [@userinfobot](https://t.me/userinfobot) в Telegram
2. Отправьте любое сообщение боту
3. Бот ответит с вашим ID (формат: `123456789`)
4. В GitHub: **Name** = `NEXT_PUBLIC_TELEGRAM_CHAT_ID`, **Secret** = ваш ID

**Важно:** Эти секреты необходимы для работы контактной формы. Без них сборка пройдёт успешно, но форма не будет отправлять сообщения.

### 5. Включение GitHub Pages

1. Перейдите в **Settings → Pages**
2. В разделе "Build and deployment":
   - **Source:** Выберите **GitHub Actions** (НЕ "Deploy from a branch"!)
3. Сохраните изменения (выбор ветки не нужен при использовании GitHub Actions)

**Почему GitHub Actions?**
- ✅ Автоматически собирает и деплоит при каждом push
- ✅ Запускает тесты и линтинг перед деплоем
- ✅ Поддерживает переменные окружения (секреты)
- ✅ Лучше подходит для Next.js static export

### 6. Деплой

После push в ветку `main` автоматически запустится GitHub Actions workflow:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Через 2-3 минуты сайт будет доступен по адресу:
- `https://vladimir75vov.github.io` (для репозитория пользователя)
- `https://vladimir75vov.github.io/portfolio` (для обычного репозитория)

## Проверка перед деплоем

### Локальная сборка

```bash
cd frontend
npm run build
```

Должно быть:
- ✅ 0 ошибок компиляции
- ✅ Все 6 страниц экспортированы
- ✅ Директория `out` создана

### Проверка файлов

```bash
# Видео должно быть в репозитории (8.87 MB)
Get-ChildItem frontend\public\video\kek.mp4

# Резюме должны быть в репозитории
Get-ChildItem frontend\public\cv\*.pdf

# Проверка размеров
Get-ChildItem frontend\public\video\*.mp4, frontend\public\cv\*.pdf | Select-Object Name, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB,2)}}
```

## Структура файлов для GitHub Pages

```
frontend/
├── public/
│   ├── .nojekyll              # Отключает Jekyll на GitHub Pages
│   ├── manifest.json          # PWA манифест
│   ├── robots.txt             # Правила для поисковых роботов
│   ├── sitemap.xml            # Карта сайта
│   ├── video/
│   │   └── kek.mp4           # ✅ Видео (8.87 MB)
│   ├── cv/
│   │   ├── cvEn.pdf          # ✅ Резюме EN
│   │   └── cvRu.pdf          # ✅ Резюме RU
│   └── images/
│       ├── og-image.svg       # Open Graph изображение
│       └── macbook.svg        # Изображение ноутбука
└── out/                       # Генерируется при сборке
    └── .nojekyll              # Копируется автоматически
```

## Важные заметки

### Файлы в Git
- ✅ Видео `kek.mp4` теперь **включено** в git (удален `.gitignore`)
- ✅ PDF файлы резюме теперь **включены** в git (удален `.gitignore`)
- ✅ Все статические ресурсы будут доступны на GitHub Pages

### Размер репозитория
- Видео: 8.87 MB
- Резюме: 0.40 MB (2 файла)
- Общий размер репозитория: ~15-20 MB (приемлемо для GitHub)

### Рекомендации по оптимизации

Если репозиторий станет слишком большим:

1. **Используйте Git LFS** для больших файлов:
   ```bash
   git lfs install
   git lfs track "*.mp4"
   git lfs track "*.pdf"
   ```

2. **Оптимизируйте видео**:
   ```bash
   # Конвертируйте в WebM для лучшего сжатия (может уменьшить размер в 2-3 раза)
   ffmpeg -i kek.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 kek.webm
   ```

3. **Храните большие файлы отдельно**:
   - Используйте CDN (Cloudflare, AWS S3)
   - Или внешний хостинг (Google Drive с прямыми ссылками)

## Проверка после деплоя

После успешного деплоя проверьте:

1. ✅ Главная страница загружается
2. ✅ Видео воспроизводится
3. ✅ Кнопка скачивания резюме работает (EN/RU)
4. ✅ Все изображения отображаются
5. ✅ Навигация между страницами работает
6. ✅ Переключение языка работает
7. ✅ Форма контактов отправляет сообщения в Telegram

## Автоматические обновления

Workflow настроен на автоматический деплой при каждом push в `main`:

```yaml
on:
  push:
    branches: [ main ]
  workflow_dispatch:  # Ручной запуск через GitHub UI
```

Для ручного запуска:
1. Перейдите в Actions → Deploy to GitHub Pages
2. Нажмите "Run workflow"
3. Выберите ветку `main`
4. Нажмите "Run workflow"

## Troubleshooting

### Видео не загружается
- Проверьте, что файл есть в репозитории: `frontend/public/video/kek.mp4`
- Проверьте размер файла (должен быть ~8.87 MB, не 0 байт)
- Проверьте путь в `videoElem.jsx`: `/video/kek.mp4`

### Резюме не скачивается
- Проверьте файлы: `frontend/public/cv/cvEn.pdf` и `cvRu.pdf`
- Проверьте путь в `page.jsx`: `/cv/${cvFile}`

### 404 на GitHub Pages
- Проверьте, что включен GitHub Pages в Settings
- Проверьте правильность `basePath` в `next.config.mjs`
- Дождитесь завершения workflow (2-3 минуты)

### Ошибки при сборке
- Проверьте секреты в GitHub (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)
- Проверьте логи в Actions → Deploy to GitHub Pages
- Запустите локально: `npm run build`

## Дополнительная информация

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
