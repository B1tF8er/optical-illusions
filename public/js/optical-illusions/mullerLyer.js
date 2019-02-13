import { canvas, point, size, line, rectangle, style, constants } from "../canvas/index.js";

function mullerLyer() {
  const mullerLyerCanvas = new canvas("muller-lyer");

  addLeftRectangle(mullerLyerCanvas);
  addRightRectangle(mullerLyerCanvas);
}

function addLeftRectangle(mullerLyerCanvas) {
  mullerLyerCanvas.addRectangle(new rectangle(new point(50, 40), new size(80, 150)));
  mullerLyerCanvas.addStyle(new style(constants.Transparent, constants.Black, 3));

  mullerLyerCanvas.addLine(new line(new point(50, 60), new point(90, 50)));
  mullerLyerCanvas.addLine(new line(new point(90, 50), new point(130, 60)));
  mullerLyerCanvas.addLine(new line(new point(90, 50), new point(90, 180)));
  mullerLyerCanvas.addLine(new line(new point(50, 170), new point(90, 180)));
  mullerLyerCanvas.addLine(new line(new point(90, 180), new point(130, 170)));
  mullerLyerCanvas.addStyle(new style(constants.Black, constants.Black, 3));
}

function addRightRectangle(mullerLyerCanvas) {
  mullerLyerCanvas.addRectangle(new rectangle(new point(150, 40), new size(80, 150)));
  mullerLyerCanvas.addStyle( new style(constants.Transparent, constants.Black, 3));

  mullerLyerCanvas.addLine(new line(new point(150, 40), new point(190, 50)));
  mullerLyerCanvas.addLine(new line(new point(190, 50), new point(230, 40)));
  mullerLyerCanvas.addLine(new line(new point(190, 50), new point(190, 180)));
  mullerLyerCanvas.addLine(new line(new point(150, 190), new point(190, 180)));
  mullerLyerCanvas.addLine(new line(new point(190, 180), new point(230, 190)));
  mullerLyerCanvas.addStyle(new style(constants.Black, constants.Black, 3));
}

export default mullerLyer;
