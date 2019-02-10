import canvas from "./canvas.js";
import point from "./point.js";
import line from "./line.js";
import style from "./style.js";
import constants from "./constants.js";

function zollner() {
  const zollnerCanvas = new canvas("zollner");

  addDiagonalLines(zollnerCanvas);
}

function addDiagonalLines(zollnerCanvas) {
  for (let index = 1, y = -300; y < zollnerCanvas.height;  index++, y += 50) {
    zollnerCanvas.addLine(
      new line(new point(0, 50 + y), new point(600, 350 + y))
    );
    zollnerCanvas.addStyle(new style(constants.Black, constants.Black, 5));

    let isModuloOfTwo = index % 2 === 0;
    let x = isModuloOfTwo ? 0 : -150;

    isModuloOfTwo
      ? addVerticalLines(x, y, zollnerCanvas)
      : addHorizontalLines(x, y, zollnerCanvas);
  }
}

function addVerticalLines(x, y, zollnerCanvas) {
  for (; y < zollnerCanvas.width; y += 10, x += 20) {
    zollnerCanvas.addLine(
      new line(new point(10 + x, 40 + y), new point(10 + x, 70 + y))
    );
    zollnerCanvas.addStyle(new style(constants.Black, constants.Black, 3));
  }
}

function addHorizontalLines(x, y, zollnerCanvas) {
  for (; y < zollnerCanvas.width; y += 10, x += 20) {
    zollnerCanvas.addLine(
      new line(new point(40 + x, 10 + y), new point(100 + x, 10 + y))
    );
    zollnerCanvas.addStyle(new style(constants.Black, constants.Black, 3));
  }
}

export default zollner;
