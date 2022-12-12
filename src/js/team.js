/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.current = 0;
    this.chars =[];
  }

  addChar(char) {
    this.chars.push(char);
  }

  * [Symbol.iterator]() {
    const last = this.chars.length;
    while (this.current < last) yield this.chars[this.current++];
  }
  

  next() {
    return this[Symbol.iterator]().next();
  }
}
