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

  push(); // 儲存當前繪圖設定
  translate(x + capture.width, y); // 將畫布原點移動到影像右側
  scale(-1, 1); // 水平翻轉影像
  image(capture, 0, 0, capture.width, capture.height); // 繪製攝影機影像
  pop(); // 恢復繪圖設定
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 調整影像大小
}
