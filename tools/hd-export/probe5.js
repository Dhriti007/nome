const puppeteer = require('puppeteer-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL0 = 'https://www.figma.com/design/pZPAgzLpD6H5e5tuy6OpV4/Xposure-web-page?node-id=0-1';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME, headless: false,
    userDataDir: 'C:\\Users\\DHRITIMAN\\AppData\\Local\\Temp\\fig-puppeteer-profile',
    args: ['--no-sandbox', '--window-size=1920,1040', '--disable-blink-features=AutomationControlled',
      '--disable-backgrounding-occluded-windows', '--disable-renderer-backgrounding'],
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(URL0, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await new Promise(r => setTimeout(r, 20000));

  // dismiss signup banner
  const btns = await page.$$('button');
  for (const b of btns) {
    const t = (await b.evaluate(e => e.getAttribute('aria-label') || e.textContent || '')).trim();
    if (t === 'Close') { await b.click().catch(() => {}); console.log('dismissed banner'); }
  }
  await new Promise(r => setTimeout(r, 1000));

  // click on a visible frame (center-ish where the dark frames are)
  for (const [x, y] of [[520, 90], [640, 160], [840, 250], [900, 45]]) {
    await page.mouse.click(x, y);
    await new Promise(r => setTimeout(r, 1200));
    console.log(`click ${x},${y} ->`, page.url());
  }
  // try zoom-to-selection shortcut
  await page.keyboard.press('Shift+Digit2').catch(e => console.log('shift2 err', e.message));
  await new Promise(r => setTimeout(r, 2000));
  console.log('after shift+2:', page.url());
  await page.screenshot({ path: 'probe5.png' });
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
