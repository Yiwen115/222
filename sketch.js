let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#ffc2d1'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始攝影機影像
}

function draw() {
  background('#ffc2d1'); // 每次繪製時重設背景
  let x = (width - capture.width) / 2; // 計算影像的水平居中位置
  let y = (height - capture.height) / 2; // 計算影像的垂直居中位置

  // 繪製攝影機影像，確保不翻轉
  image(capture, x, y, capture.width, capture.height); // 繪製攝影機影像
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 調整影像大小
}
