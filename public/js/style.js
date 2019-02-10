export default class style {
  get fillColor() {
    return this.__fillColor__;
  }

  get strokeColor() {
    return this.__strokeColor__;
  }

  get lineWidth() {
    return this.__lineWidth__;
  }

  constructor(fillColor, strokeColor, lineWidth) {
    this.__fillColor__ = fillColor;
    this.__strokeColor__ = strokeColor;
    this.__lineWidth__ = lineWidth;
  }
}
