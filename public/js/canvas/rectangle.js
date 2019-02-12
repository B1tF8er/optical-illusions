export default class rectangle {
  get point() {
    return this.__point__;
  }

  get size() {
    return this.__size__;
  }

  constructor(point, size) {
    this.__point__ = point;
    this.__size__ = size;
  }
}
