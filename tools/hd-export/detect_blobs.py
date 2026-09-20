import sys, json, cv2, numpy as np

img_path, x, y, w, h = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5])
img = cv2.imread(img_path)
if img is None:
    print('[]'); sys.exit(0)
H, W = img.shape[:2]
# canvas box is in CSS px; image px per css px = imgW / canvasCssW
sx = W / float(w) if w else 2.0
x0, y0 = int(x * sx), int(y * sx)
x1, y1 = min(W, int((x + w) * sx)), min(H, int((y + h) * sx))
roi = img[y0:y1, x0:x1]

# background = dominant color (canvas gray). Sample border.
border = np.concatenate([roi[0:10].reshape(-1, 3), roi[-10:].reshape(-1, 3),
                         roi[:, 0:10].reshape(-1, 3), roi[:, -10:].reshape(-1, 3)])
bg = np.median(border, axis=0)
diff = np.abs(roi.astype(np.int16) - bg.astype(np.int16)).max(axis=2).astype(np.uint8)
mask = (diff > 14).astype(np.uint8) * 255
# fine granularity: keep individual frames separate
k = cv2.getStructuringElement(cv2.MORPH_RECT, (7, 7))
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, k)
mask = cv2.dilate(mask, cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5)))
n, labels, stats, cents = cv2.connectedComponentsWithStats(mask)
blobs = []
for i in range(1, n):
    bx, by, bw, bh, area = stats[i]
    if bw < 24 or bh < 24:
        continue
    blobs.append({'cx': float(cents[i][0]), 'cy': float(cents[i][1]),
                  'x': int(bx), 'y': int(by), 'w': int(bw), 'h': int(bh)})
blobs.sort(key=lambda b: (b['y'], b['x']))
print(json.dumps(blobs))
