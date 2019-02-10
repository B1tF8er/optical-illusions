export default class circle {
  get point() {
    return this.__point__;
  }

  get radius() {
    return this.__radius__;
  }

  set radius(value) {
    this.__radius__ = value;
  }

  get startAngle() {
    return this.__startAngle__;
  }

  set endAngle(value) {
    this.__startAngle__ = value * Math.PI;
  }

  get endAngle() {
    return this.__endAngle__;
  }

  set startAngle(value) {
    this.__endAngle__ = value * Math.PI;
  }

  set counterClockwise(value) {
    this.__counterClockwise__ = value;
  }

  get counterClockwise() {
    return this.__counterClockwise__;
  }

  constructor(point) {
    this.__point__ = point;
  }
}
