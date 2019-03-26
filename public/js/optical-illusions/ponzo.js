import { canvas, point, line, style, constants } from "../canvas/index.js";

function ponzo() {
  const ponzoCanvas = new canvas("ponzo");
  
  drawHorizontalLines(ponzoCanvas);
  drawVerticalLines(ponzoCanvas);
  drawPonzoLines(ponzoCanvas);
}

function drawHorizontalLines(ponzoCanvas) {
  const top = 0;
  const bottom = ponzoCanvas.height;

  ponzoCanvas.addStyle(new style(constants.Black, constants.Black, 3));
  ponzoCanvas.addLine(new line(new point(120, top), new point(60, bottom)));
  ponzoCanvas.addLine(new line(new point(180, top), new point(240, bottom)));
}

function drawVerticalLines(ponzoCanvas) {
  let leftX = 110;
  let rightX = 190;

  for (let y = 0, control = 0; y <= ponzoCanvas.height; y += 50, control++) {
    ({ leftX, rightX } = calculateX(control, leftX, rightX));
    ponzoCanvas.addLine(new line(new point(leftX, y), new point(rightX, y)));
  }
}

function calculateX(control, leftX, rightX) {
  if (control > 0 && control % 2 === 0) {
    leftX -= 10;
    rightX += 10;
  } else {
    leftX -= 8;
    rightX += 8;
  }
  return { leftX, rightX };
}

function drawPonzoLines(ponzoCanvas) {
  ponzoCanvas.addLine(new line(new point(80, 75), new point(220, 75)));
  ponzoCanvas.addStyle(new style(constants.Yellow, constants.Yellow, 9));
  ponzoCanvas.addLine(new line(new point(80, 230), new point(220, 230)));
  ponzoCanvas.addStyle(new style(constants.Yellow, constants.Yellow, 9));
}

export default ponzo;
