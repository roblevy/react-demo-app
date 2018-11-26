/* global Circle */
/* eslint-disable no-unused-vars */
class PinkCircle extends Circle {
  constructor(top, left) {
    super(top, left, 'hotpink');
    this.element.textContent = '😀';
    this.element.style.display = 'flex';
    this.element.style.justifyContent = 'center';
    this.element.style.alignItems = 'center';
  }
}
