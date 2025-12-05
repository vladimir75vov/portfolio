# CI/CD Configuration | Конфигурация CI/CD

**[English](#english) | [Русский](#russian)**

---

## <a name="english"></a>🇬🇧 English

This project uses GitHub Actions for CI/CD automation.

## Workflows

### 1. CI (`ci.yml`)
**Triggers:** Push and Pull Request to `main` and `develop` branches

**Tasks:**
- Lint check (ESLint)
- Prettier formatting
- TypeScript type checking (if available)
- Application build
- Testing on Node.js 18.x and 20.x

### 2. Deploy (`deploy.yml`)
**Triggers:** Push to `main` branch or manual trigger

**Tasks:**
- Build Next.js application
- Static export
- Deploy to GitHub Pages

**Required secrets:**
- `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` - Telegram bot token
- `NEXT_PUBLIC_TELEGRAM_CHAT_ID` - Chat ID for notifications

### 3. CodeQL (`codeql.yml`)
**Triggers:** 
- Push to `main`, `develop`
- Pull Request to `main`
- Weekly (on Mondays)

**Tasks:**
- Code security analysis
- Vulnerability detection

### 4. Dependency Update (`dependency-update.yml`)
**Triggers:** Weekly (on Mondays) or manual trigger

**Tasks:**
- Update npm dependencies
- Fix vulnerabilities
- Create Pull Request with updates

## GitHub Pages Setup

1. Go to Settings → Pages
2. Source: GitHub Actions
3. URL: `https://vladimir75vov.github.io/`

## Secrets Configuration

1. Go to Settings → Secrets and variables → Actions
2. Add secrets:
   - `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`
   - `NEXT_PUBLIC_TELEGRAM_CHAT_ID`

## Local Development

```bash
# Frontend
cd frontend
npm install
npm run dev
```

## Commands

```bash
# Run linter
npm run lint

# Build
npm run build

# Check formatting
npx prettier --check "**/*.{js,jsx,json,css,scss,md}"

# Auto-format
npx prettier --write "**/*.{js,jsx,json,css,scss,md}"
```

---

## <a name="russian"></a>🇷🇺 Русский

Этот проект использует GitHub Actions для автоматизации CI/CD процессов.

## Workflows

### 1. CI (`ci.yml`)
**Триггеры:** Push и Pull Request в ветки `main` и `develop`

**Задачи:**
- Lint проверка (ESLint)
- Prettier форматирование
- TypeScript проверка типов (если есть)
- Сборка приложения
- Тестирование на Node.js 18.x и 20.x

### 2. Deploy (`deploy.yml`)
**Триггеры:** Push в ветку `main` или ручной запуск

**Задачи:**
- Сборка Next.js приложения
- Статический экспорт
- Деплой на GitHub Pages

**Требуемые секреты:**
- `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` - токен Telegram бота
- `NEXT_PUBLIC_TELEGRAM_CHAT_ID` - ID чата для уведомлений

### 3. CodeQL (`codeql.yml`)
**Триггеры:** 
- Push в `main`, `develop`
- Pull Request в `main`
- Еженедельно (по понедельникам)

**Задачи:**
- Анализ безопасности кода
- Поиск уязвимостей

### 4. Dependency Update (`dependency-update.yml`)
**Триггеры:** Еженедельно (по понедельникам) или ручной запуск

**Задачи:**
- Обновление npm зависимостей
- Исправление уязвимостей
- Создание Pull Request с обновлениями

## Настройка GitHub Pages

1. Перейдите в Settings → Pages
2. Source: GitHub Actions
3. URL: `https://vladimir75vov.github.io/`

## Настройка секретов

1. Перейдите в Settings → Secrets and variables → Actions
2. Добавьте секреты:
   - `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`
   - `NEXT_PUBLIC_TELEGRAM_CHAT_ID`

## Локальная разработка

```bash
# Frontend
cd frontend
npm install
npm run dev
```

## Команды

```bash
# Запуск линтера
npm run lint

# Сборка
npm run build

# Проверка форматирования
npx prettier --check "**/*.{js,jsx,json,css,scss,md}"

# Авто-форматирование
npx prettier --write "**/*.{js,jsx,json,css,scss,md}"
```
