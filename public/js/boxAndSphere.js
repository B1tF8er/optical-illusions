import canvas from "./canvas.js";
import point from "./point.js";
import line from "./line.js";
import circle from "./circle.js";
import style from "./style.js";
import constants from "./constants.js";

function boxAndSphere() {
  const boxAndSphereCanvas = new canvas("box-and-sphere");

  addCube(boxAndSphereCanvas);
  addSphere(boxAndSphereCanvas);
}

function addCube(boxAndSphereCanvas) {
  boxAndSphereCanvas.addStyle(new style(constants.Red, constants.Red, 4));
  boxAndSphereCanvas.addLine(new line(new point(50, 50), new point(150, 20)));
  boxAndSphereCanvas.addLine(new line(new point(50, 50), new point(50, 200)));
  boxAndSphereCanvas.addLine(new line(new point(150, 20), new point(150, 150)));
  boxAndSphereCanvas.addLine(new line(new point(150, 150), new point(50, 200)));
  boxAndSphereCanvas.addLine(new line(new point(150, 20), new point(250, 30)));
  boxAndSphereCanvas.addLine(new line(new point(250, 30), new point(250, 180)));
  boxAndSphereCanvas.addLine(new line(new point(250, 180), new point(150, 150)));
  boxAndSphereCanvas.addLine(new line(new point(250, 180), new point(160, 250)));
  boxAndSphereCanvas.addLine(new line(new point(160, 250), new point(50, 200)));
  boxAndSphereCanvas.addLine(new line(new point(160, 250), new point(160, 70)));
  boxAndSphereCanvas.addLine(new line(new point(160, 70), new point(50, 50)));
  boxAndSphereCanvas.addLine(new line(new point(160, 70), new point(250, 30)));
  boxAndSphereCanvas.addStyle(new style(constants.Red, constants.Red, 4));
}

function addSphere(boxAndSphereCanvas) {
  const radius = 15;
  const startAngle = 0;
  const endAngle = 2;

  boxAndSphereCanvas.addStyle(new style(constants.Purple, constants.Transparent, 1));
  boxAndSphereCanvas.addCircle(
    new circle(
      new point(230, 70),
      radius,
      startAngle,
      endAngle,
      constants.Clockwise
    )
  );
  boxAndSphereCanvas.addStyle(new style(constants.Purple, constants.White, 1));
}

export default boxAndSphere;
