/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.current = 0;
    this.char0 = {
      name: 'Демон', type: 'Demon', health: 50, level: 1, attack: 40, defence: 10,
    };
    this.char1 = {
      name: 'Лучник', type: 'Bowman', health: 50, level: 2, attack: 40, defence: 10,
    };
  }

  * [Symbol.iterator]() {
    const last = 2;
    while (this.current < last) yield this[`char${this.current++}`];
  }

  next() {
    return this[Symbol.iterator]().next();
  }
}
