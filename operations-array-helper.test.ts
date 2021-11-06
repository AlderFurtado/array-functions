const { addEnd, addStart } = require('./operations-array-helper');

const mockArr = [1, 2, 3]

test('add in end of array', () => {
  expect(addEnd(mockArr, 4)).toStrictEqual([1, 2, 3, 4]);
});

test('add in start of array', () => {
  expect(addStart(mockArr, 4)).toStrictEqual([4, 1, 2, 3]);
});