import canvas from "./canvas.js";
import point from "./point.js";
import size from "./size.js";
import line from "./line.js";
import rectangle from "./rectangle.js";

function mullerLyer() {
  const mullerLyerCanvas = new canvas("muller-lyer");

  leftRectangle(mullerLyerCanvas);
  rightRectangle(mullerLyerCanvas);
}

function leftRectangle(mullerLyerCanvas) {
  mullerLyerCanvas.addRectangle(new rectangle(new point(50, 40), new size(80, 150)));
  mullerLyerCanvas.addLine(new line(new point(50, 60), new point(90, 50)));
  mullerLyerCanvas.addLine(new line(new point(90, 50), new point(130, 60)));
  mullerLyerCanvas.addLine(new line(new point(90, 50), new point(90, 180)));
  mullerLyerCanvas.addLine(new line(new point(50, 170), new point(90, 180)));
  mullerLyerCanvas.addLine(new line(new point(90, 180), new point(130, 170)));
}

function rightRectangle(mullerLyerCanvas) {
  mullerLyerCanvas.addRectangle(new rectangle(new point(150, 40), new size(80, 150)));
  mullerLyerCanvas.addLine(new line(new point(150, 40), new point(190, 50)));
  mullerLyerCanvas.addLine(new line(new point(190, 50), new point(230, 40)));
  mullerLyerCanvas.addLine(new line(new point(190, 50), new point(190, 180)));
  mullerLyerCanvas.addLine(new line(new point(150, 190), new point(190, 180)));
  mullerLyerCanvas.addLine(new line(new point(190, 180), new point(230, 190)));
}

export default mullerLyer;
