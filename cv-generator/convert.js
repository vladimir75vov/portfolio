const puppeteer = require('puppeteer');
const path = require('path');

async function convertToPDF(htmlFile, pdfFile) {
  console.log(`Converting ${htmlFile} to ${pdfFile}...`);
  
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  
  const page = await browser.newPage();
  
  // Загрузка HTML файла
  await page.goto(`file://${path.resolve(htmlFile)}`, {
    waitUntil: 'networkidle0'
  });
  
  // Генерация PDF
  await page.pdf({
    path: pdfFile,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '15px',
      right: '15px',
      bottom: '15px',
      left: '15px'
    }
  });
  
  await browser.close();
  console.log(`✓ Successfully created ${pdfFile}`);
}

// Конвертация обеих версий резюме
(async () => {
  try {
    console.log('Starting CV generation...\n');
    
    await convertToPDF('cv-en.html', 'cvEn.pdf');
    await convertToPDF('cv-ru.html', 'cvRu.pdf');
    
    console.log('\n✓ All CVs generated successfully!');
    console.log('\nNext steps:');
    console.log('1. Copy PDF files to frontend/public/cv/');
    console.log('   cp cvEn.pdf ../frontend/public/cv/');
    console.log('   cp cvRu.pdf ../frontend/public/cv/');
    console.log('\n2. Or use PowerShell:');
    console.log('   Copy-Item cvEn.pdf ..\\frontend\\public\\cv\\');
    console.log('   Copy-Item cvRu.pdf ..\\frontend\\public\\cv\\');
    
  } catch (error) {
    console.error('Error generating PDFs:', error);
    process.exit(1);
  }
})();
