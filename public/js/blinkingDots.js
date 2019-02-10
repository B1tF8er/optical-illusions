import canvas from "./canvas.js";
import point from "./point.js";
import size from "./size.js";
import circle from "./circle.js";
import rectangle from "./rectangle.js";
import style from "./style.js";
import constants from "./constants.js"

function blinkingDots() {
  const bdCanvas = new canvas("blinking-dots");

  addBoxes(bdCanvas);
  addCircles(bdCanvas);
}

function addBoxes(bdCanvas) {
  const boxSize = 20;

  for (let x = 0; x <= bdCanvas.width; x += 25) {
    for (let y = 0; y <= bdCanvas.height; y += 25) {
      bdCanvas.addFillRectangle(
        new rectangle(new point(x, y), new size(boxSize, boxSize))
      );
    }
  }
}

function addCircles(bdCanvas) {
  for (let x = 22; x <= bdCanvas.width; x += 25) {
    for (let y = 22; y <= bdCanvas.height; y += 25) {
      bdCanvas.addCircle(new circle(new point(x, y), 5, 0, 2, constants.Clockwise));
      bdCanvas.addStyle(new style(constants.White, constants.Black, 1));
    }
  }
}

export default blinkingDots;
