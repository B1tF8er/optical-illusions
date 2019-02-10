import canvas from "./canvas.js";
import point from "./point.js";
import size from "./size.js";
import line from "./line.js";
import rectangle from "./rectangle.js";

function mullerLyer() {
  const mlCanvas = new canvas("muller-lyer");

  leftRectangle(mlCanvas);
  rightRectangle(mlCanvas);
}

function leftRectangle(mlCanvas) {
  mlCanvas.addRectangle(new rectangle(new point(50, 40), new size(80, 150)));

  mlCanvas.addLine(new line(new point(50, 60), new point(90, 50)));

  mlCanvas.addLine(new line(new point(90, 50), new point(130, 60)));

  mlCanvas.addLine(new line(new point(90, 50), new point(90, 180)));

  mlCanvas.addLine(new line(new point(50, 170), new point(90, 180)));

  mlCanvas.addLine(new line(new point(90, 180), new point(130, 170)));
}

function rightRectangle(mlCanvas) {
  mlCanvas.addRectangle(new rectangle(new point(150, 40), new size(80, 150)));

  mlCanvas.addLine(new line(new point(150, 40), new point(190, 50)));

  mlCanvas.addLine(new line(new point(190, 50), new point(230, 40)));

  mlCanvas.addLine(new line(new point(190, 50), new point(190, 180)));

  mlCanvas.addLine(new line(new point(150, 190), new point(190, 180)));

  mlCanvas.addLine(new line(new point(190, 180), new point(230, 190)));
}

export default mullerLyer;
