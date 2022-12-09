import Team from '../team';

test('should iterize the characters', () => {
  const received = [];
  const team = new Team();
  received.push(team.next());
  received.push(team.next());
  received.push(team.next());
  const expected = [{
    value: {
      name: 'Демон', type: 'Demon', health: 50, level: 1, attack: 40, defence: 10,
    },
    done: false,
  }, {
    value: {
      name: 'Лучник', type: 'Bowman', health: 50, level: 2, attack: 40, defence: 10,
    },
    done: false,
  }, { value: undefined, done: true }];
  expect(received).toEqual(expected);
});
