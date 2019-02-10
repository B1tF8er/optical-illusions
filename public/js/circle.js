export default class circle {
  get point() {
    return this.__point__;
  }

  get radius() {
    return this.__radius__;
  }

  get startAngle() {
    return this.__startAngle__;
  }

  get endAngle() {
    return this.__endAngle__;
  }

  get counterClockwise() {
    return this.__counterClockwise__;
  }

  constructor(point, radius, startAngle, endAngle, counterClockwise) {
    this.__point__ = point;
    this.__radius__ = radius;
    this.__startAngle__ = startAngle * Math.PI;
    this.__endAngle__ = endAngle * Math.PI;
    this.__counterClockwise__ = counterClockwise;
  }
}
