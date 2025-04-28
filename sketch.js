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

  // 繪製攝影機畫面
  image(capture, x, y, capture.width, capture.height); // 直接繪製攝影機影像

  // 在 overlayGraphics 上繪製內容
  overlayGraphics.clear(); // 清除之前的內容
  overlayGraphics.background(0, 150); // 設定背景為半透明黑色

  // 繪製網格
  for (let i = 0; i < overlayGraphics.width; i += 20) {
    for (let j = 0; j < overlayGraphics.height; j += 20) {
      let col = capture.get(i, j); // 從 capture 中取得對應位置的顏色
      let r = red(col); // 提取紅色分量
      let g = green(col); // 提取綠色分量
      let b = blue(col); // 提取藍色分量
      let gray = (r + g + b) / 3; // 計算灰階值
      overlayGraphics.fill(gray); // 設定圓形顏色為灰階
      overlayGraphics.noStroke();
      overlayGraphics.ellipse(i + 10, j + 10, 15, 15); // 繪製圓形，居中於單位格
    }
  }

  // 繪製 overlayGraphics 到畫布上
  image(overlayGraphics, x, y, capture.width, capture.height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 調整影像大小
  overlayGraphics = createGraphics(capture.width, capture.height); // 重新建立圖層
}
