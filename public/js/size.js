export default class size {
  get width() {
    return this.__width__;
  }

  get height() {
    return this.__height__;
  }

  constructor(width, height) {
    this.__width__ = width;
    this.__height__ = height;
  }
}
