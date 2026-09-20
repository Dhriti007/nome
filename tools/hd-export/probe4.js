const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: false,
    userDataDir: 'C:\\Users\\DHRITIMAN\\AppData\\Local\\Temp\\fig-puppeteer-profile',
    args: [
      '--no-sandbox', '--window-size=1920,1040', '--window-position=40,40',
      '--disable-blink-features=AutomationControlled',
      '--disable-backgrounding-occluded-windows', '--disable-renderer-backgrounding',
    ],
    defaultViewport: null,
  });
  const page = await browser.newPage();
  page.on('response', r => { if (r.url().includes('figma.com/design')) console.log(r.status(), r.url().slice(0, 110)); });
  const url = process.env.FIGURL || 'https://www.figma.com/design/pZPAgzLpD6H5e5tuy6OpV4/Xposure-web-page?node-id=0-1';
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
  console.log('nav done, waiting for render...');
  await new Promise(r => setTimeout(r, 30000));
  console.log('title:', await page.title());
  console.log('url:', page.url());
  await page.screenshot({ path: 'probe4.png' });
  const info = await page.evaluate(() => ({
    canvases: [...document.querySelectorAll('canvas')].map(c => `${c.width}x${c.height} ${c.getAttribute('data-testid')||''}`),
    buttons: [...document.querySelectorAll('button,[role=button]')].slice(0, 80)
      .map(e => (e.getAttribute('aria-label') || e.textContent || '').trim().slice(0, 50)).filter(Boolean).slice(0, 40),
  })).catch(e => ({ err: String(e) }));
  console.log(JSON.stringify(info, null, 1));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
