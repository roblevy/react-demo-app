class Circle extends Div {
  constructor(top, left) {
    // All circles are blue:
    super(top, left, 'blue');
    this.shape = 'circle';
    this.element.style.borderRadius = '100%';
  }

  radius() {
    return parseInt(this.element.style.width) / 2;
  }
}
