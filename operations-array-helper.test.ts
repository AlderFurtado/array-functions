const { add } = require('./operations-array-helper');

test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });