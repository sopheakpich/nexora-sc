const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(__dirname, 'boq-tender-review.html'), { waitUntil: 'networkidle0' });
  await page.pdf({
    path: path.resolve(__dirname, 'MULTICON_TENDER_REVIEW_WH6080_RevB.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  await browser.close();
  console.log('Done');
})();
