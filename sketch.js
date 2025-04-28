let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#ffc2d1'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始攝影機影像

  // 建立與攝影機畫面大小相同的圖層
  overlayGraphics = createGraphics(capture.width, capture.height);
}

function draw() {
  background('#ffc2d1'); // 每次繪製時重設背景
  let x = (width - capture.width) / 2; // 計算影像的水平居中位置
  let y = (height - capture.height) / 2; // 計算影像的垂直居中位置

  // 在 overlayGraphics 上繪製內容
  overlayGraphics.clear(); // 清除之前的內容
  overlayGraphics.background(0); // 設定背景為黑色
  overlayGraphics.fill(255, 0, 0, 150); // 半透明紅色

  // 每隔 80px 繪製一個圓，圓的寬與高為 70
  for (let i = 0; i < overlayGraphics.width; i += 80) {
    for (let j = 0; j < overlayGraphics.height; j += 80) {
      overlayGraphics.ellipse(i + 40, j + 40, 70, 70); // 繪製圓形
    }
  }

  // 水平翻轉攝影機畫面
  push();
  translate(x + capture.width, y); // 將畫布原點移動到影像右側
  scale(-1, 1); // 水平翻轉影像
  image(capture, 0, 0, capture.width, capture.height); // 繪製攝影機影像
  pop();

  // 繪製 overlayGraphics 到畫布上
  image(overlayGraphics, x, y, capture.width, capture.height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 調整影像大小
  overlayGraphics = createGraphics(capture.width, capture.height); // 重新建立圖層
}
