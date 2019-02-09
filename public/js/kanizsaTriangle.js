function kanizsaTriangle() {
  let canvasElement = document.getElementById("kanizsa-triangle");
  let context = canvasElement.getContext("2d");

  firstCircle(context);
  secondCircle(context);
  thirdCircle(context);
  firstTriangle(context);
  secondTriangle(context);
}

function firstCircle(context) {
    context.beginPath();
    context.arc(80, 60, 30, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();

    context.fillStyle = "#000";
    context.fill();
}

function secondCircle(context) {
    context.beginPath();
    context.arc(220, 60, 30, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();

    context.fillStyle = "#000";
    context.fill();
}

function thirdCircle(context) {
    context.beginPath();
    context.arc(150, 190, 30, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();

    context.fillStyle = "#000";
    context.fill();
}

function firstTriangle(context) {
    context.beginPath();
    context.moveTo(150, 20);
    context.lineTo(75, 150);
    context.lineTo(225, 150);
    context.closePath();
    // the outline
    context.lineWidth = 5;
    context.strokeStyle = "#000";
    context.stroke();
    // the fill color
    context.fillStyle = "#FFF";
    context.fill();
}

function secondTriangle(context) {
    context.beginPath();
    context.moveTo(150, 180);
    context.lineTo(75, 60);
    context.lineTo(225, 60);
    context.closePath();
    // the outline
    context.lineWidth = 5;
    context.strokeStyle = "#FFF";
    context.stroke();
    // the fill color
    context.fillStyle = "#FFF";
    context.fill();
}

export default kanizsaTriangle;
