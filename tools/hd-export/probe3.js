const puppeteer = require('puppeteer-core');
const http = require('http');
const fs = require('fs');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'text/html');
  res.end(`<!doctype html><body style="margin:0"><iframe style="border:0;width:100vw;height:100vh" src="${process.env.EMBED}"></iframe>`);
}).listen(8931);

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
  });
  const page = await browser.newPage();
  page.on('response', r => { if (r.url().includes('figma')) console.log(r.status(), r.url().slice(0, 120)); });
  await page.goto('http://localhost:8931/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await new Promise(r => setTimeout(r, 30000));
  const frames = page.frames().map(f => f.url());
  console.log('frames:', frames);
  await page.screenshot({ path: 'probe3.png' });
  await browser.close();
  server.close();
})().catch(e => { console.error(e); server.close(); process.exit(1); });
