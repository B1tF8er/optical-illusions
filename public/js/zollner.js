import canvas from "./canvas.js";
import point from "./point.js";
import line from "./line.js";
import style from "./style.js";
import constants from "./constants.js";

function zollner() {
  const zCanvas = new canvas("zollner");

  addDiagonalLines(zCanvas);
}

function addDiagonalLines(zCanvas) {
  const fromX = 0;
  const fromY = 50;
  const toX = 600;
  const toY = 350;

  let iterationControl = 1;

  for (let y = -300; y < zCanvas.height; y += 50) {
    zCanvas.addLine(
      new line(new point(fromX, fromY + y), new point(toX, toY + y))
    );
    zCanvas.addStyle(new style(constants.Black, constants.Black, 3));

    let isModuloOfTwo = iterationControl % 2 === 0;
    let x = isModuloOfTwo ? 0 : -150;

    isModuloOfTwo
      ? addVerticalLines(x, y, zCanvas)
      : addHorizontalLines(x, y, zCanvas);

    iterationControl++;
  }
}

function addVerticalLines(x, y, zCanvas) {
  for (; y < zCanvas.width; y += 10, x += 20) {
    zCanvas.addLine(
      new line(new point(10 + x, 40 + y), new point(10 + x, 70 + y))
    );
  }
}

function addHorizontalLines(x, y, zCanvas) {
  for (; y < zCanvas.width; y += 10, x += 20) {
    zCanvas.addLine(
      new line(new point(40 + x, 10 + y), new point(100 + x, 10 + y))
    );
  }
}

export default zollner;
