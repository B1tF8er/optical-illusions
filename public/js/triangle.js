export default class triangle {
  get startPoint() {
    return this.__startPoint__;
  }

  get leftPoint() {
    return this.__leftPoint__;
  }

  get rightPoint() {
    return this.__rightPoint__;
  }

  constructor(startPoint, leftPoint, rightPoint) {
    this.__startPoint__ = startPoint;
    this.__leftPoint__ = leftPoint;
    this.__rightPoint__ = rightPoint;
  }
}
