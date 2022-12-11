/* eslint-disable no-plusplus */
export default class Team {
  #counter = 0;

  #current = 0;

  addChar(char) {
    this[`char${this.#counter++}`] = char;
  }

  * [Symbol.iterator]() {
    const last = 2;
    while (this.#current < last) yield this[`char${this.#current++}`];
  }

  next() {
    return this[Symbol.iterator]().next();
  }
}
