import canvas from "./canvas.js";

function blinkingDots() {
  const bdCanvas = new canvas("blinking-dots");

  addBoxes(bdCanvas);
  addCircles(bdCanvas);
}

function addBoxes(bdCanvas) {
  for (let x = 0; x <= bdCanvas.width; x += 25) {
    for (let y = 0; y <= bdCanvas.height; y += 25) {
      bdCanvas.addFillRectangle({
        position: {
          x: x,
          y: y
        },
        width: 20,
        height: 20
      });
    }
  }
}

function addCircles(bdCanvas) {
  for (let centerX = 22; centerX <= bdCanvas.width; centerX += 25) {
    for (let centerY = 22; centerY <= bdCanvas.height; centerY += 25) {
      bdCanvas.addCircle(
        {
          position: {
            centerX: centerX,
            centerY: centerY
          },
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
