# CV Generator

Генератор резюме в PDF формате на основе данных портфолио.

## Файлы

- `cv-en.html` - Резюме на английском языке
- `cv-ru.html` - Резюме на русском языке

## Как конвертировать в PDF

### Способ 1: Через браузер (рекомендуется)

1. Откройте файл `cv-en.html` или `cv-ru.html` в браузере (Chrome, Edge, Firefox)
2. Нажмите `Ctrl + P` (или `Cmd + P` на Mac)
3. В настройках печати:
   - Назначение: **Сохранить как PDF**
   - Поля: **По умолчанию** или **Минимальные**
   - Масштаб: **По умолчанию (100%)**
   - Цвет: **Цветная печать**
   - Фон: **✓ Фоновые изображения**
4. Нажмите **Сохранить**

### Способ 2: С помощью Node.js и Puppeteer

```bash
# Установка зависимостей
npm install puppeteer

# Создайте файл convert.js
node convert.js
```

**convert.js:**
```javascript
const puppeteer = require('puppeteer');
const path = require('path');

async function convertToPDF(htmlFile, pdfFile) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto(`file://${path.resolve(htmlFile)}`, {
    waitUntil: 'networkidle0'
  });
  
  await page.pdf({
    path: pdfFile,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });
  
  await browser.close();
  console.log(`✓ Created ${pdfFile}`);
}

// Конвертация обеих версий
(async () => {
  await convertToPDF('cv-en.html', 'cvEn.pdf');
  await convertToPDF('cv-ru.html', 'cvRu.pdf');
})();
```

### Способ 3: Онлайн-конвертер

1. Загрузите файл на https://html2pdf.com или https://www.sejda.com/html-to-pdf
2. Скачайте сгенерированный PDF

## Перенос в портфолио

После генерации PDF файлов:

```bash
# Скопируйте PDF файлы в папку public/cv
cp cvEn.pdf ../frontend/public/cv/
cp cvRu.pdf ../frontend/public/cv/

# Или используйте PowerShell
Copy-Item cvEn.pdf ..\frontend\public\cv\
Copy-Item cvRu.pdf ..\frontend\public\cv\
```

## Настройка контента

Отредактируйте HTML файлы для изменения:
- Контактной информации
- Опыта работы
- Навыков
- Проектов
- Образования

## Стиль

CSS стили встроены в HTML файлы для простоты использования и гарантии корректного отображения при печати в PDF.

Основные цвета:
- Основной синий: `#2563eb`
- Темный синий: `#1e40af`
- Серый текст: `#374151`
- Фон карточек: `#f3f4f6`
