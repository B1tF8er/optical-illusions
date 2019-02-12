import { canvas, point, size, circle, rectangle, style, constants } from "../canvas/index.js";

function blinkingDots() {
  const blinkingDotsCanvas = new canvas("blinking-dots");

  addBoxes(blinkingDotsCanvas);
  addCircles(blinkingDotsCanvas);
}

function addBoxes(blinkingDotsCanvas) {
  const boxSize = 20;

  for (let x = 0; x <= blinkingDotsCanvas.width; x += 25) {
    for (let y = 0; y <= blinkingDotsCanvas.height; y += 25) {
      blinkingDotsCanvas.addFillRectangle(
        new rectangle(new point(x, y), new size(boxSize, boxSize))
      );
    }
  }
}

function addCircles(blinkingDotsCanvas) {
  const radius = 5;
  const startAngle = 0;
  const endAngle = 2;

  for (let x = 22; x <= blinkingDotsCanvas.width; x += 25) {
    for (let y = 22; y <= blinkingDotsCanvas.height; y += 25) {
      blinkingDotsCanvas.addCircle(
        new circle(
          new point(x, y),
          radius,
          startAngle,
          endAngle,
          constants.Clockwise
        )
      );
      blinkingDotsCanvas.addStyle(
        new style(constants.White, constants.Black, 1)
      );
    }
  }
}

export default blinkingDots;
