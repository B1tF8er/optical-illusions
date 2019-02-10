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

  addCircle(dimensions, style) {
    this.context.beginPath();
    this.context.arc(
      dimensions.position.centerX,
      dimensions.position.centerY,
      dimensions.radius,
      dimensions.startAngle * Math.PI,
      dimensions.endAngle * Math.PI,
      dimensions.counterClockwise
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

  addTriangle(dimensions, style) {
    this.context.beginPath();
    this.context.moveTo(dimensions.startPosition.x, dimensions.startPosition.y);
    this.context.lineTo(dimensions.leftPosition.x, dimensions.leftPosition.y);
    this.context.lineTo(dimensions.rightPosition.x, dimensions.rightPosition.y);
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
