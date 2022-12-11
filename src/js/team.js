/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.counter = 0;
    this.current = 0;
  }

  addChar(char) {
    this[`char${this.counter++}`] = char;
  }

  * [Symbol.iterator]() {
    const last = 2;
    while (this.current < last) yield this[`char${this.current++}`];
  }

  next() {
    return this[Symbol.iterator]().next();
  }
}
