const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  const filePath = 'file://' + path.resolve(__dirname, 'boq-detail.html');
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: path.resolve(__dirname, 'MULTICON_BOQ_WH6080_Rev_A.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  await browser.close();
  console.log('PDF generated: MULTICON_BOQ_WH6080_Rev_A.pdf');
})();
