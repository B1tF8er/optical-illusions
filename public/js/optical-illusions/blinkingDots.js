import { canvas, point, size, circle, rectangle, style, constants } from "../canvas/index.js";

function blinkingDots() {
  const blinkingDotsCanvas = new canvas("blinking-dots");

  addBoxes(blinkingDotsCanvas);
  addCircles(blinkingDotsCanvas);
}

function addBoxes(blinkingDotsCanvas) {
  const initialPoint = 0;
  const step = 25;
  const boxSize = 20;

  for (let x = initialPoint; x <= blinkingDotsCanvas.width; x += step) {
    for (let y = initialPoint; y <= blinkingDotsCanvas.height; y += step) {
      blinkingDotsCanvas.addFillRectangle(new rectangle(new point(x, y), new size(boxSize, boxSize)));
    }
  }
}

function addCircles(blinkingDotsCanvas) {
  const initialPoint = 22;
  const step = 25;
  const radius = 5;
  const startAngle = 0;
  const endAngle = 2;

  for (let x = initialPoint; x <= blinkingDotsCanvas.width; x += step) {
    for (let y = initialPoint; y <= blinkingDotsCanvas.height; y += step) {
      blinkingDotsCanvas.addCircle(new circle(new point(x, y), radius, startAngle, endAngle, constants.Clockwise));
      blinkingDotsCanvas.addStyle(new style(constants.White, constants.Black, 1));
    }
  }
}

export default blinkingDots;
