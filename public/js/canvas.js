export default class canvas {
  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }

  constructor(contextId) {
    this.canvas = document.getElementById(contextId);
    if (this.canvas.getContext) {
      this.context = this.canvas.getContext("2d");
    }
  }

  addFillRectangle(rectangle) {
    this.context.beginPath();
    this.context.fillRect(
      rectangle.point.x,
      rectangle.point.y,
      rectangle.size.width,
      rectangle.size.height
    );
    this.context.stroke();
    this.context.closePath();
  }

  addCircle(circle) {
    this.context.beginPath();
    this.context.arc(
      circle.point.x,
      circle.point.y,
      circle.radius,
      circle.startAngle,
      circle.endAngle,
      circle.counterClockwise
    );
    this.context.stroke();
    this.context.closePath();
  }

  addTriangle(triangle) {
    this.context.beginPath();
    this.context.moveTo(triangle.startPoint.x, triangle.startPoint.y);
    this.context.lineTo(triangle.leftPoint.x, triangle.leftPoint.y);
    this.context.lineTo(triangle.rightPoint.x, triangle.rightPoint.y);
    this.context.closePath();
  }

  addRectangle(rectangle) {
    this.context.beginPath();
    this.context.rect(
      rectangle.point.x,
      rectangle.point.y,
      rectangle.size.width,
      rectangle.size.height
    );
    this.context.stroke();
    this.context.closePath();
  }

  addLine(line) {
    this.context.beginPath();
    this.context.moveTo(line.from.x, line.from.y);
    this.context.lineTo(line.to.x, line.to.y);
    this.context.stroke();
    this.context.closePath();
  }

  addStyle(style) {
    this.context.fillStyle = style.fillColor;
    this.context.fill();

    this.context.lineWidth = style.lineWidth;
    this.context.strokeStyle = style.strokeColor;
    this.context.stroke();
  }
}
