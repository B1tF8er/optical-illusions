import canvas from "./canvas.js";
import point from "./point.js";
import size from "./size.js";

function blinkingDots() {
  const bdCanvas = new canvas("blinking-dots");

  addBoxes(bdCanvas);
  addCircles(bdCanvas);
}

function addBoxes(bdCanvas) {
  for (let x = 0; x <= bdCanvas.width; x += 25) {
    for (let y = 0; y <= bdCanvas.height; y += 25) {
      bdCanvas.addFillRectangle({
        position: new point(x, y),
        size: new size(20, 20)
      });
    }
  }
}

function addCircles(bdCanvas) {
  for (let x = 22; x <= bdCanvas.width; x += 25) {
    for (let y = 22; y <= bdCanvas.height; y += 25) {
      bdCanvas.addCircle(
        {
          position: new point(x, y),
          radius: 5,
          startAngle: 0,
          endAngle: 2,
          counterClockwise: false
        },
        {
          fillStyle: "#fff",
          strokeStyle: "#000",
          lineWidth: 1
        }
      );
    }
  }
}

export default blinkingDots;
