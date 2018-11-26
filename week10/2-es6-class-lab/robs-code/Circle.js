/* global Div */
/* eslint-disable no-unused-vars */
class Circle extends Div {
  constructor(top, left, colour) {
    // All circles are blue by default:
    colour = colour || 'blue';
    super(top, left, colour);
    this.shape = 'circle';
    this.element.style.borderRadius = '100%';
  }

  radius() {
    return parseInt(this.element.style.width) / 2;
  }
}
