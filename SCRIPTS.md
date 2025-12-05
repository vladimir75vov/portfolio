# Portfolio - Quick Start Scripts | Скрипты быстрого запуска

**[English](#english) | [Русский](#russian)**

---

## <a name="english"></a>🇬🇧 English

## Windows

### Development
```bash
# Double click on file or:
start-dev.bat
```

### Production Build
```bash
build.bat
```

## Linux/Mac

### Development
```bash
chmod +x start-dev.sh
./start-dev.sh
```

### Production Build
```bash
chmod +x build.sh
./build.sh
```

## Deployment Check

```powershell
.\check-deployment.ps1
```

## What Scripts Do

### start-dev (.bat / .sh)
1. ✅ Checks Node.js installation
2. ✅ Checks/installs dependencies
3. ✅ Starts dev server at http://localhost:3000

### build (.bat / .sh)
1. ✅ Checks Node.js
2. ✅ Installs dependencies (npm ci)
3. ✅ Runs ESLint check
4. ✅ Builds production build
5. ✅ Shows statistics

### check-deployment.ps1
1. ✅ Checks all dependencies
2. ✅ Verifies required files
3. ✅ Checks configuration
4. ✅ Runs test build
5. ✅ Generates report

## Requirements

- Node.js 18+ (recommended: 20+)
- npm 9+ (comes with Node.js)
- Git (for deployment) - https://git-scm.com/download/win

**Check versions:**
```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be 9.0.0 or higher
git --version   # Should be 2.0.0 or higher
```

## First Run

```bash
# 1. Clone repository
git clone https://github.com/vladimir75vov/portfolio.git
cd portfolio

# 2. Create .env.local file
cp frontend/.env.example frontend/.env.local

# 3. Add your tokens to .env.local
# NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_token
# NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id

# 4. Start development
./start-dev.bat  # Windows
./start-dev.sh   # Linux/Mac
```

## Troubleshooting

### Port 3000 busy
Script automatically frees port 3000

### Dependency installation error
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Build error
```bash
cd frontend
npm run build
# Check errors in output
```

---

## <a name="russian"></a>🇷🇺 Русский

## Windows

### Разработка (Development)
```bash
# Двойной клик на файл или:
start-dev.bat
```

### Production сборка
```bash
build.bat
```

## Linux/Mac

### Разработка (Development)
```bash
chmod +x start-dev.sh
./start-dev.sh
```

### Production сборка
```bash
chmod +x build.sh
./build.sh
```

## Проверка готовности к деплою

```powershell
.\check-deployment.ps1
```

## Что делают скрипты

### start-dev (.bat / .sh)
1. ✅ Проверяет установку Node.js
2. ✅ Проверяет/устанавливает зависимости
3. ✅ Запускает dev сервер на http://localhost:3000

### build (.bat / .sh)
1. ✅ Проверяет Node.js
2. ✅ Устанавливает зависимости (npm ci)
3. ✅ Запускает ESLint проверку
4. ✅ Собирает production build
5. ✅ Показывает статистику

### check-deployment.ps1
1. ✅ Проверяет все зависимости
2. ✅ Проверяет наличие файлов
3. ✅ Проверяет конфигурацию
4. ✅ Запускает тестовую сборку
5. ✅ Готовит отчет

## Требования

- Node.js 18+ 
- npm 9+
- Git (для деплоя)

## Первый запуск

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/vladimir75vov/portfolio.git
cd portfolio

# 2. Создайте .env.local файл
cp frontend/.env.example frontend/.env.local

# 3. Добавьте свои токены в .env.local
# NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_token
# NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id

# 4. Запустите разработку
./start-dev.bat  # Windows
./start-dev.sh   # Linux/Mac
```

## Troubleshooting

### Port 3000 занят
Скрипт автоматически освобождает порт 3000

### Ошибка установки зависимостей
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Ошибка при сборке
```bash
cd frontend
npm run build
# Проверьте ошибки в выводе
```
