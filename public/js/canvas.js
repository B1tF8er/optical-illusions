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

  addFillRectangle(dimensions) {
    this.context.beginPath();
    this.context.fillRect(
      dimensions.position.x,
      dimensions.position.y,
      dimensions.size.width,
      dimensions.size.height
    );
    this.context.stroke();
    this.context.closePath();
  }

  addCircle(circle, style) {
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

    // the fill color
    this.context.fillStyle = style.fillStyle;
    this.context.fill();

    // the outline
    this.context.lineWidth = style.lineWidth;
    this.context.strokeStyle = style.strokeStyle;
  }

  addTriangle(triangle, style) {
    this.context.beginPath();
    this.context.moveTo(triangle.startPoint.x, triangle.startPoint.y);
    this.context.lineTo(triangle.leftPoint.x, triangle.leftPoint.y);
    this.context.lineTo(triangle.rightPoint.x, triangle.rightPoint.y);
    this.context.closePath();

    // the fill color
    this.context.fillStyle = style.fillStyle;
    this.context.fill();

    // the outline
    this.context.lineWidth = style.lineWidth;
    this.context.strokeStyle = style.strokeStyle;
    this.context.stroke();
  }

  addRectangle(dimensions) {
    this.context.beginPath();
    this.context.rect(
      dimensions.position.x,
      dimensions.position.y,
      dimensions.size.width,
      dimensions.size.height
    );
    this.context.stroke();
    this.context.closePath();
  }

  addLine(from, to) {
    this.context.beginPath();
    this.context.moveTo(from.x, from.y);
    this.context.lineTo(to.x, to.y);
    this.context.stroke();
    this.context.closePath();
  }
}
