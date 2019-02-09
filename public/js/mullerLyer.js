function mullerLyer() {
  let canvasElement = document.getElementById("muller-lyer");
  let context = canvasElement.getContext("2d");

  leftRectangle(context);
  rightRectangle(context);
}

function leftRectangle(context) {
  context.beginPath();
  context.rect(50, 40, 80, 150);
  context.stroke();
  context.closePath();

  // top left line
  context.beginPath();
  context.moveTo(50, 60);
  context.lineTo(90, 50);
  context.stroke();
  context.closePath();

  // top right line
  context.beginPath();
  context.moveTo(90, 50);
  context.lineTo(130, 60);
  context.stroke();
  context.closePath();

  // center line
  context.beginPath();
  context.moveTo(90, 50);
  context.lineTo(90, 180);
  context.stroke();
  context.closePath();

  // bottom left line
  context.beginPath();
  context.moveTo(50, 170);
  context.lineTo(90, 180);
  context.stroke();
  context.closePath();

  // bottom right line
  context.beginPath();
  context.moveTo(90, 180);
  context.lineTo(130, 170);
  context.stroke();
  context.closePath();
}

function rightRectangle(context) {
  context.beginPath();
  context.rect(150, 40, 80, 150);
  context.stroke();
  context.closePath();

  // top left line
  context.beginPath();
  context.moveTo(150, 40);
  context.lineTo(190, 50);
  context.stroke();
  context.closePath();

  // top right line
  context.beginPath();
  context.moveTo(190, 50);
  context.lineTo(230, 40);
  context.stroke();
  context.closePath();

  // center line
  context.beginPath();
  context.moveTo(190, 50);
  context.lineTo(190, 180);
  context.stroke();
  context.closePath();

  // bottom left line
  context.beginPath();
  context.moveTo(150, 190);
  context.lineTo(190, 180);
  context.stroke();
  context.closePath();

  // bottom right line
  context.beginPath();
  context.moveTo(190, 180);
  context.lineTo(230, 190);
  context.stroke();
  context.closePath();
}

export default mullerLyer;
