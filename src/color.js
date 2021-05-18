export default class Color {
  constructor() {
    this.color = 'yellow';
  }
  change() {
    this.color = 'red';
  }
  reset() {
    this.color = 'yellow';
  }
  getColor() {
    return this.color;
  }
}