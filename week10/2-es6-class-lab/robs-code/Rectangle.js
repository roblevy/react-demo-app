/* global Div */
/* eslint-disable no-unused-vars */
class Rectangle extends Div {
  constructor(top, left, height) {
    super(top, left, 'papayawhip');
    this.element.style.height = `${height}px`;
    this.element.style.width = `${2 * height}px`;
    this.element.addEventListener('click', () => this.changeTo('yellow'));
  }

  changeTo(colour) {
    this.element.style.backgroundColor = colour;
  }
}
