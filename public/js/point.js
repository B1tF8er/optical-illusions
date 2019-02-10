export default class point {
  get x() {
    return this.__x__;
  }

  get y() {
    return this.__y__;
  }

  constructor(x, y) {
    this.__x__ = x;
    this.__y__ = y;
  }
}
