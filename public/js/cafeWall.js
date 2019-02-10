import canvas from "./canvas.js";
import point from "./point.js";
import line from "./line.js";
import rectangle from "./rectangle.js";
import size from "./size.js";

function cafeWall() {
  const cafeWallCanvas = new canvas("cafe-wall");

  addLines(cafeWallCanvas);
  addRectangles(cafeWallCanvas);
}

function addLines(cafeWallCanvas) {
  for (let x = 0; x < cafeWallCanvas.width; x += 40) {
    for (let y = 0; y < cafeWallCanvas.height; y += 20) {
      cafeWallCanvas.addLine(
        new line(new point(0, 20 + y), new point(300, 20 + y))
      );
    }
  }
}

function addRectangles(cafeWallCanvas) {
  const boxSize = 20;

  for (let x = 0; x < cafeWallCanvas.width; x += 40) {
    for (let index = 1, y = 0; y < cafeWallCanvas.height; index++, y += 20) {
      let newX = index % 2 === 0 ? 10 + x : 15 + x;
      cafeWallCanvas.addFillRectangle(
        new rectangle(new point(newX, y), new size(boxSize, boxSize))
      );
    }
  }
}

export default cafeWall;
