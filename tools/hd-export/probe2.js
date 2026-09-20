const puppeteer = require('puppeteer-core');
const path = require('path');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
  });
  const page = await browser.newPage();
  const embed = 'https://embed.figma.com/design/pZPAgzLpD6H5e5tuy6OpV4/Xposure-web-page?embed-host=oembed&page-selector=1&theme=light';
  const wrapper = 'file://' + path.resolve('embed.html').replace(/\\/g, '/') + '?src=' + encodeURIComponent(embed);
  console.log('wrapper:', wrapper);
  await page.goto(wrapper, { waitUntil: 'domcontentloaded', timeout: 60000 });
  const frame = await new Promise(res => {
    const t = setInterval(() => {
      const f = page.frames().find(f => f.url().includes('figma'));
      if (f) { clearInterval(t); res(f); }
    }, 500);
    setTimeout(() => { clearInterval(t); res(null); }, 30000);
  });
  console.log('frame url:', frame && frame.url());
  await new Promise(r => setTimeout(r, 25000));
  await page.screenshot({ path: 'probe2.png' });
  if (frame) {
    const info = await frame.evaluate(() => ({
      title: document.title,
      buttons: [...document.querySelectorAll('button,[role=button],a')].slice(0, 50)
        .map(e => (e.getAttribute('aria-label') || e.textContent || '').trim().slice(0, 50)).filter(Boolean),
      canvases: [...document.querySelectorAll('canvas')].map(c => `${c.width}x${c.height}`),
    })).catch(e => ({ err: String(e) }));
    console.log(JSON.stringify(info, null, 1));
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
