/* eslint-disable no-unused-vars */
class Div {
  constructor(top, left, colour) {
    this.element = document.createElement('div');
    this.element.style.top = `${top}px`;
    this.element.style.left = `${left}px`;
    this.element.style.height = '200px';
    this.element.style.width = '200px';
    this.element.style.backgroundColor = colour;
    this.element.style.position = 'fixed';
    this.render();
  }

  render() {
    // Draw my DOM element to the page
    document.body.appendChild(this.element);
  }
}
