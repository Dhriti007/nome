// Usage: node capture.js <fileKey> <slug> <outDir> [nodeId]
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const { execSync } = require('child_process');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const [,, KEY, SLUG, OUT, NODEID = '0-1'] = process.argv;
const MAXZ = parseFloat(process.env.MAXZ || '66');
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function zoomPct(page) {
  return page.evaluate(() => {
    for (const b of document.querySelectorAll('button')) {
      const m = (b.textContent || '').trim().match(/^(\d+(?:\.\d+)?)%$/);
      if (m) return parseFloat(m[1]);
    }
    return null;
  });
}

async function canvasBox(page) {
  return page.evaluate(() => {
    const c = document.querySelector('canvas');
    const r = c.getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height };
  });
}

async function hideUI(page) {
  await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    document.querySelectorAll('body *').forEach(e => {
      if (e !== canvas && !e.contains(canvas) && e.tagName !== 'SCRIPT' && e.tagName !== 'STYLE') {
        e.style.visibility = 'hidden';
      }
    });
  });
}

async function zoomToFit(page) {
  for (let i = 0; i < 3; i++) {
    await page.keyboard.down('Shift'); await page.keyboard.press('Digit1'); await page.keyboard.up('Shift');
    await sleep(1600);
  }
}

async function panBy(page, dx, dy, box) {
  const cx = box.x + box.w / 2, cy = box.y + box.h / 2;
  await page.keyboard.down('Space');
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  const steps = 14;
  for (let i = 1; i <= steps; i++) {
    await page.mouse.move(cx + dx * i / steps, cy + dy * i / steps);
    await sleep(18);
  }
  await page.mouse.up();
  await page.keyboard.up('Space');
  await page.mouse.move(cx, cy);
  await sleep(350);
}

async function shoot(page, path) {
  await hideUI(page);
  await sleep(120);
  await page.screenshot({ path });
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME, headless: false,
    userDataDir: 'C:\\Users\\DHRITIMAN\\AppData\\Local\\Temp\\fig-puppeteer-profile',
    args: ['--no-sandbox', '--window-size=1920,1040', '--disable-blink-features=AutomationControlled',
      '--disable-backgrounding-occluded-windows', '--disable-renderer-backgrounding',
      '--force-device-scale-factor=2'],
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(`https://www.figma.com/design/${KEY}/${SLUG}?node-id=${NODEID}`, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await sleep(25000);
  const box = await canvasBox(page);
  console.log('canvas box:', JSON.stringify(box));
  await page.mouse.move(box.x + box.w / 2, box.y + box.h / 2);
  await zoomToFit(page);
  const zFit = await zoomPct(page);
  console.log('fit zoom:', zFit);
  await shoot(page, `${OUT}/fit.png`);

  const blobs = JSON.parse(execSync(
    `python detect_blobs.py "${OUT}/fit.png" ${box.x} ${box.y} ${box.w} ${box.h}`,
    { cwd: __dirname }).toString());
  console.log('blobs:', blobs.length);

  for (let i = 0; i < blobs.length; i++) {
    const bl = blobs[i];
    const bwCss = bl.w / 2, bhCss = bl.h / 2;
    let target = zFit * Math.min(0.8 * box.w / bwCss, 0.8 * box.h / bhCss);
    target = Math.max(20, Math.min(MAXZ, target));
    const cssCx = box.x + bl.cx / 2, cssCy = box.y + bl.cy / 2;
    await panBy(page, (box.x + box.w / 2) - cssCx, (box.y + box.h / 2) - cssCy, box);
    let guard = 0;
    while (guard++ < 30) {
      const z = await zoomPct(page);
      if (z === null || z >= target) break;
      await page.keyboard.press('Equal');
      await sleep(650);
    }
    await sleep(900);
    bl.zoom = await zoomPct(page);
    const span = (bl.zoom || target) / zFit;
    bl.screenW = bwCss * span; bl.screenH = bhCss * span;
    const nx = Math.max(1, Math.ceil(bl.screenW / (box.w * 0.65)));
    const ny = Math.max(1, Math.ceil(bl.screenH / (box.h * 0.65)));
    bl.tiles = [];
    const stepX = box.w * 0.65, stepY = box.h * 0.65;
    if (nx > 1 || ny > 1) await panBy(page, stepX * (nx - 1) / 2, stepY * (ny - 1) / 2, box);
    for (let ty = 0; ty < ny; ty++) {
      for (let tx = 0; tx < nx; tx++) {
        if (tx > 0) await panBy(page, -stepX, 0, box);
        else if (ty > 0) await panBy(page, stepX * (nx - 1), -stepY, box);
        await sleep(400);
        const name = `cap_${String(i).padStart(3, '0')}_${tx}_${ty}.png`;
        await shoot(page, `${OUT}/${name}`);
        bl.tiles.push({ name, tx, ty });
      }
    }
    console.log(`blob ${i}: zoom=${bl.zoom} tiles=${nx}x${ny}`);
    await zoomToFit(page);
  }
  fs.writeFileSync(`${OUT}/meta.json`, JSON.stringify({ box, zFit, blobs }, null, 1));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
