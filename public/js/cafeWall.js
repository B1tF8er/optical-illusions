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
  for (let x = 0; x < cafeWallCanvas.width; x += 50) {
    for (let y = 0; y < cafeWallCanvas.height; y += 50) {
      cafeWallCanvas.addLine(
        new line(new point(0, y), new point(300, y))
      );
    }
  }
}

function addRectangles(cafeWallCanvas) {
  for (let x = 0; x < cafeWallCanvas.width; x += 60) {
    for (let index = 1, y = 0; y < cafeWallCanvas.height; index++, y += 50) {
      let newX = index % 2 === 0 ? 10 + x : 20 + x;
      cafeWallCanvas.addFillRectangle(
        new rectangle(new point(newX, y), new size(30, 50))
      );
    }
  }
}

export default cafeWall;
