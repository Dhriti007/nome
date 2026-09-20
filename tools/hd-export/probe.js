const puppeteer = require('puppeteer-core');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu-sandbox', '--force-device-scale-factor=1', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
  });
  const page = await browser.newPage();
  page.on('console', m => { const t = m.text(); if (!t.includes('font')) console.log('CON:', t.slice(0, 200)); });
  page.on('requestfailed', r => console.log('FAIL:', r.url().slice(0, 140)));

  const url = process.env.FIGURL || 'https://embed.figma.com/design/pZPAgzLpD6H5e5tuy6OpV4/Xposure-web-page?embed-host=share&page-selector=1';
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('loaded, waiting for canvas...');
  await new Promise(r => setTimeout(r, 25000));
  await page.screenshot({ path: 'probe1.png' });
  console.log('title:', await page.title());
  console.log('url:', page.url());
  // dump visible buttons / overlays
  const info = await page.evaluate(() => {
    const els = [...document.querySelectorAll('button, [role=button], a')].slice(0, 60);
    return els.map(e => (e.getAttribute('aria-label') || e.textContent || '').trim().slice(0, 60)).filter(Boolean);
  });
  console.log(JSON.stringify(info, null, 1));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
